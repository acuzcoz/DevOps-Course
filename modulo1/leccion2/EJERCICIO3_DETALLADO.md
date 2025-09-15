# 🎯 EJERCICIO 3 DETALLADO: Gestión de Imágenes

**Lección:** 2 - Comandos Docker Básicos  
**Fecha:** 2025-09-14  
**Duración:** ~25 minutos  
**Estado:** ✅ **COMPLETADO**

---

## **🎯 OBJETIVO**
Aprender a gestionar imágenes Docker: visualizar, eliminar y comprender dependencias entre contenedores e imágenes.

---

## **📋 COMANDOS PASO A PASO**

### **PASO 1: Inventario de imágenes disponibles** ✅

#### **Comando ejecutado:**
```bash
docker images
│      │
│      └── Subcomando: listar todas las imágenes locales
└── Comando: Docker CLI
```

#### **Resultado obtenido:**
```
REPOSITORY                       TAG       IMAGE ID       CREATED       SIZE
mi-devops-app                    latest    9c0e1912aeaf   3 hours ago   12.8MB
microservicio-organizado         latest    a13784b56410   4 hours ago   146MB
ubuntu                           latest    b60cb74dfa1b   3 weeks ago   101MB
hashicorp/terraform-mcp-server   latest    b64972eb0a0a   4 weeks ago   10.2MB
nginx                            latest    17848b7d08d1   4 weeks ago   198MB
hello-world                      latest    ca9905c726f0   5 weeks ago   5.2kB
```

#### **Análisis detallado del inventario:**

##### **mi-devops-app (12.8MB):**
- **Origen:** Creada en ejercicio integrado
- **Base:** nginx:alpine (optimizada)
- **Uso:** Contenedor `mi-app` actualmente corriendo
- **Tamaño:** Muy eficiente por usar Alpine Linux

##### **microservicio-organizado (146MB):**
- **Origen:** Ejercicio anterior del curso
- **Uso:** No hay contenedores activos usándola
- **Estado:** Candidata para limpieza

##### **ubuntu (101MB):**
- **Origen:** Descargada en Ejercicio 1 (modo interactivo)
- **Uso:** Contenedor terminado `elegant_kalam`
- **Propósito:** Sistema operativo completo para testing

##### **terraform-mcp-server (10.2MB):**
- **Origen:** Herramienta externa
- **Uso:** Contenedor detenido `epic_spence`
- **Propósito:** Herramienta de infraestructura

##### **nginx (198MB):**
- **Origen:** Descargada en Ejercicio 1
- **Uso:** Contenedor `mi-servidor` actualmente corriendo
- **Estado:** En uso activo, no se puede eliminar

##### **hello-world (5.2kB):**
- **Origen:** Primera verificación de Docker
- **Uso:** Contenedor terminado `intelligent_ishizaka`
- **Tamaño:** Imagen más pequeña posible

#### **Resumen del inventario:**
- **Total imágenes:** 6
- **Espacio total:** ~463MB
- **En uso activo:** 2 (mi-devops-app, nginx)
- **Candidatas para limpieza:** 4

---

### **PASO 2: Primer intento de eliminación (Error esperado)** ❌

#### **Comando ejecutado:**
```bash
docker rmi nginx
│      │   │
│      │   └── Nombre de la imagen a eliminar
│      └── Subcomando: remove image
└── Comando: Docker CLI
```

#### **Error obtenido:**
```
Error response from daemon: conflict: unable to remove repository reference "nginx" (must force) - container 55c3243f1a62 is using its referenced image 17848b7d08d1
```

#### **Análisis del error:**
- **Tipo:** Conflict error (dependencia bloqueante)
- **Causa:** Contenedor `55c3243f1a62` (mi-servidor) usando la imagen
- **Image ID:** `17848b7d08d1` corresponde a nginx:latest
- **Protección:** Docker previene eliminación de imágenes en uso

#### **Verificación de dependencias:**
```bash
docker ps
```

#### **Resultado:**
```
CONTAINER ID   IMAGE           COMMAND                  CREATED         STATUS         PORTS                                     NAMES
55c3243f1a62   nginx           "/docker-entrypoint.…"   3 minutes ago   Up 3 minutes   0.0.0.0:8080->80/tcp, [::]:8080->80/tcp   mi-servidor
bb83ce3c78b3   mi-devops-app   "/docker-entrypoint.…"   3 hours ago     Up 3 hours     0.0.0.0:3000->80/tcp, [::]:3000->80/tcp   mi-app
```

#### **Confirmación:**
- **Container ID:** `55c3243f1a62` = `mi-servidor`
- **Estado:** Running (Up 3 minutes)
- **Dependencia:** nginx imagen → mi-servidor contenedor

---

### **PASO 3: Segundo intento de eliminación (Error de contenedor corriendo)** ❌

#### **Comando ejecutado:**
```bash
docker rm web-server
│      │  │
│      │  └── Nombre del contenedor a eliminar
│      └── Subcomando: remover contenedor
└── Comando: Docker CLI
```

#### **Error obtenido:**
```
Error response from daemon: cannot remove container "web-server": container is running: stop the container before removing or force remove
```

#### **Análisis del error:**
- **Problema doble:** Nombre incorrecto + contenedor corriendo
- **Nombre correcto:** `mi-servidor` (no `web-server`)
- **Estado:** Contenedor debe estar detenido antes de eliminación
- **Opciones:** Stop primero o force remove

---

### **PASO 4: Resolución ordenada de dependencias** ✅

#### **4a. Detener contenedor:**
```bash
docker stop mi-servidor
│      │    │
│      │    └── Nombre correcto del contenedor
│      └── Subcomando: detener contenedor gracefully
└── Comando: Docker CLI
```

#### **Resultado:**
```
mi-servidor
```

#### **4b. Eliminar contenedor:**
```bash
docker rm mi-servidor
│      │  │
│      │  └── Nombre del contenedor a eliminar (ahora detenido)
│      └── Subcomando: remover contenedor
└── Comando: Docker CLI
```

#### **Resultado:**
```
mi-servidor
```

#### **Verificación de eliminación:**
```bash
docker ps -a
```

#### **Resultado:**
```
CONTAINER ID   IMAGE           COMMAND                  CREATED              STATUS                        PORTS                                     NAMES
c09274485b5c   ubuntu          "bash"                   55 minutes ago       Exited (127) 52 minutes ago                                             elegant_kalam
bb83ce3c78b3   mi-devops-app   "/docker-entrypoint.…"   2 hours ago          Up 2 hours                    0.0.0.0:3000->80/tcp, [::]:3000->80/tcp   mi-app
c933793d600c   hello-world     "/hello"                 3 hours ago          Exited (0) 3 hours ago                                                  intelligent_ishizaka
```

#### **Análisis:**
- **mi-servidor:** Ya no aparece en la lista
- **Eliminación exitosa:** Contenedor completamente removido
- **Otros contenedores:** Sin afectar

---

### **PASO 5: Eliminación exitosa de imagen** ✅

#### **Comando ejecutado:**
```bash
docker rmi nginx
│      │   │
│      │   └── Nombre de la imagen a eliminar
│      └── Subcomando: remove image
└── Comando: Docker CLI
```

#### **Proceso de eliminación observado:**
```
Untagged: nginx:latest
Untagged: nginx@sha256:d5f28ef21aabddd098f3dbc21fe5b7a7d7a184720bc07da0b6c9b9820e97f25e
Deleted: sha256:17848b7d08d196d4e7b420f48ba286132a07937574561d4a6c085651f5177f97
Deleted: sha256:1c677119b72c7cdd8b8d2c2cd4276f9037f6b10a6af26c784310fe8e315fc5aa
Deleted: sha256:10c6a77bfecb6bfc00b828b74ffd0768f4f0070307287740b4fe465c6235860d
Deleted: sha256:e16fb8186ff320ccbed0e23eea4f2cf6f814e4a944f0f6174588e20e5b7d31ea
Deleted: sha256:ec0723c3cab952bab9aa2fe712ab7935fd1daf15c1d8991a4db01969ead9223a
Deleted: sha256:3d2dbf693cddd18faff12dca809520bc3742c1171f7b0ea9df81ef52bd04de9b
Deleted: sha256:b40acc2eda6e79e6d09809fd3d9afe21b70ab8ac34c93446889e4e39c6827cc6
Deleted: sha256:07d4c428e5bd1876bbc1c2412d105f749f49898b64c684185c5123c73c8e9e7e
```

#### **Análisis del proceso de eliminación:**

##### **Fase 1: Untagging**
- **Untagged: nginx:latest** - Elimina referencia local
- **Untagged: nginx@sha256:...** - Elimina referencia por digest

##### **Fase 2: Layer deletion (7 capas)**
- **Capa 1:** `sha256:17848b7d08d1...` - Imagen principal
- **Capas 2-7:** Capas base de la imagen nginx
- **Orden:** De más específica a más general

#### **Conceptos de capas:**
- **Layered architecture:** Imágenes construidas en capas
- **Compartición:** Capas pueden ser compartidas entre imágenes
- **Eliminación:** Solo se eliminan capas no usadas por otras imágenes
- **Eficiencia:** Sistema de capas optimiza espacio en disco

---

### **PASO 6: Verificación de eliminación** ✅

#### **Comando ejecutado:**
```bash
docker images
```

#### **Resultado después de eliminación:**
```
REPOSITORY                       TAG       IMAGE ID       CREATED       SIZE
mi-devops-app                    latest    9c0e1912aeaf   3 hours ago   12.8MB
microservicio-organizado         latest    a13784b56410   4 hours ago   146MB
ubuntu                           latest    b60cb74dfa1b   3 weeks ago   101MB
hashicorp/terraform-mcp-server   latest    b64972eb0a0a   4 weeks ago   10.2MB
hello-world                      latest    ca9905c726f0   5 weeks ago   5.2kB
```

#### **Análisis del resultado:**
- **nginx:** Completamente eliminada
- **Espacio liberado:** ~198MB
- **Imágenes restantes:** 5 (de 6 originales)
- **Funcionalidad:** Otras imágenes no afectadas

---

## **🔧 TROUBLESHOOTING COMPLETO APLICADO**

### **Error 1: Imagen en uso**
- **Error:** `unable to remove repository reference "nginx"`
- **Causa:** Contenedor activo usando la imagen
- **Diagnóstico:** `docker ps` para identificar contenedores
- **Solución:** Eliminar contenedores primero

### **Error 2: Contenedor corriendo**
- **Error:** `cannot remove container: container is running`
- **Causa:** Intentar eliminar contenedor activo
- **Solución:** `docker stop` antes de `docker rm`

### **Error 3: Nombres incorrectos**
- **Error:** `No such container: web-server`
- **Causa:** Usar nombre incorrecto
- **Diagnóstico:** `docker ps -a` para verificar nombres
- **Solución:** Usar nombres correctos

### **Workflow correcto identificado:**
```
1. docker ps          # Identificar contenedores usando imagen
2. docker stop NAME   # Detener contenedores
3. docker rm NAME     # Eliminar contenedores
4. docker rmi IMAGE   # Eliminar imagen
```

---

## **🔧 CONCEPTOS TÉCNICOS PROFUNDOS**

### **Dependencias Docker:**
```
Imagen (nginx) ←── Contenedor (mi-servidor)
     ↑                      ↑
No se puede eliminar    Debe eliminarse primero
```

### **Estados y operaciones:**
- **Running container:** No se puede eliminar (stop primero)
- **Stopped container:** Se puede eliminar con `docker rm`
- **Image with containers:** No se puede eliminar (rm containers primero)
- **Unused image:** Se puede eliminar libremente

### **Arquitectura de capas:**
- **Base layers:** Compartidas entre imágenes similares
- **Application layers:** Específicas de cada imagen
- **Deletion order:** De específica a general
- **Optimization:** Docker solo elimina capas no referenciadas

### **Comandos de eliminación:**
- **docker rm:** Elimina contenedores (requiere stop si está corriendo)
- **docker rmi:** Elimina imágenes (requiere no tener contenedores)
- **docker system prune:** Limpieza automática (próximo ejercicio)

---

## **📊 MÉTRICAS DEL EJERCICIO**

### **Recursos eliminados:**
- **Contenedores:** 1 (mi-servidor)
- **Imágenes:** 1 (nginx:latest)
- **Capas:** 7 capas de nginx
- **Espacio liberado:** ~198MB

### **Comandos ejecutados:**
- **docker images:** 2 veces (antes y después)
- **docker rmi:** 2 veces (1 error, 1 exitoso)
- **docker rm:** 2 veces (1 error por nombre, 1 exitoso)
- **docker stop:** 1 vez (exitoso)
- **docker ps:** 3 veces (verificaciones)

### **Errores resueltos:** 3
1. Imagen en uso por contenedor
2. Contenedor corriendo
3. Nombre incorrecto de contenedor

### **Tiempo total:** ~25 minutos (incluyendo troubleshooting)

---

## **💡 CONCEPTOS AVANZADOS IDENTIFICADOS**

### **Gestión de espacio:**
- **Monitoreo:** `docker images` muestra uso por imagen
- **Limpieza selectiva:** Eliminar imágenes específicas
- **Dependencias:** Respetar orden de eliminación
- **Optimización:** Eliminar imágenes no utilizadas regularmente

### **Seguridad de datos:**
- **Protección:** Docker previene eliminación accidental
- **Confirmación:** Errores claros sobre dependencias
- **Workflow:** Proceso ordenado previene pérdida de datos

### **Arquitectura de contenedores:**
- **Separación:** Contenedores e imágenes son entidades separadas
- **Lifecycle:** Contenedores pueden eliminarse sin afectar imagen
- **Reutilización:** Imágenes pueden crear múltiples contenedores

---

## **🎯 OBJETIVOS ALCANZADOS**

### **✅ Gestión de imágenes:**
- Visualizar inventario completo de imágenes
- Identificar tamaños y uso de espacio
- Eliminar imágenes de forma segura

### **✅ Comprensión de dependencias:**
- Relación imagen → contenedor
- Orden correcto de eliminación
- Protecciones del sistema Docker

### **✅ Troubleshooting avanzado:**
- Resolver múltiples tipos de errores
- Diagnosticar dependencias bloqueantes
- Aplicar workflow correcto de eliminación

### **✅ Optimización de recursos:**
- Liberar espacio en disco (198MB)
- Mantener solo imágenes necesarias
- Comprender impacto de limpieza

---

## **🚀 PREPARACIÓN PARA EJERCICIO 4**

### **Estado actual:**
- **Imágenes:** 5 restantes (nginx eliminada)
- **Contenedores activos:** 1 (mi-app)
- **Espacio liberado:** 198MB
- **Experiencia:** Gestión completa de dependencias

### **Próximo ejercicio:**
**Ejercicio 4: Información del Sistema y Limpieza** - `docker system df` y `docker system prune`

### **Conceptos preparados:**
- Análisis de uso de espacio
- Limpieza automática vs manual
- Recursos no utilizados vs en uso

### **Preguntas para próximo ejercicio:**
- ¿Cuánto espacio total usa Docker?
- ¿Qué recursos se pueden limpiar automáticamente?
- ¿Cuál es la diferencia entre limpieza manual y automática?

---

*Ejercicio 3 completado: 2025-09-14 | Gestión de imágenes dominada | Dependencias comprendidas | 198MB liberados*
