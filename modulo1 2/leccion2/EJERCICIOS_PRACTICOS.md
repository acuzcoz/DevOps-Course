# 🎯 EJERCICIOS PRÁCTICOS - LECCIÓN 2

**Lección:** Comandos Docker Básicos  
**Fecha:** 2025-09-14  
**Estado:** ✅ 4/4 ejercicios completados

---

## **🎯 EJERCICIO 1: Gestión Básica de Contenedores** ✅

### **Objetivo:**
Aprender a ejecutar contenedores con diferentes configuraciones y verificar su funcionamiento.

### **Comandos a ejecutar:**
```bash
# 1. Ver contenedores actuales
docker ps

# 2. Ejecutar servidor web con configuración completa
docker run --name web-server -d -p 8080:80 nginx

# 3. Verificar nuevo contenedor
docker ps

# 4. Probar en navegador: http://localhost:8080
```

### **Resultados obtenidos:**

#### **Paso 1 - Estado inicial:**
```
CONTAINER ID   IMAGE           COMMAND                  CREATED       STATUS       PORTS                                     NAMES
bb83ce3c78b3   mi-devops-app   "/docker-entrypoint.…"   2 hours ago   Up 2 hours   0.0.0.0:3000->80/tcp, [::]:3000->80/tcp   mi-app
```
**Análisis:** Contenedor `mi-app` del ejercicio integrado corriendo correctamente.

#### **Paso 2 - Ejecución de nginx:**
```bash
docker run --name mi-servidor -d -p 8080:80 nginx
```
**Proceso observado:**
- Descarga automática: `Unable to find image 'nginx:latest' locally`
- Pull exitoso: `Status: Downloaded newer image for nginx:latest`
- Container ID: `05cc04c58f19e69aaf3d0c2e753bdbb68f174a09250f8b78299af967342fc2ca`

#### **Paso 3 - Verificación:**
```
CONTAINER ID   IMAGE           COMMAND                  CREATED          STATUS          PORTS                                     NAMES
05cc04c58f19   nginx           "/docker-entrypoint.…"   48 minutes ago   Up 48 minutes   0.0.0.0:8080->80/tcp, [::]:8080->80/tcp   mi-servidor
bb83ce3c78b3   mi-devops-app   "/docker-entrypoint.…"   2 hours ago      Up 2 hours      0.0.0.0:3000->80/tcp, [::]:3000->80/tcp   mi-app
```

#### **Paso 4 - Navegador:**
**URL:** http://localhost:8080  
**Resultado:** "Welcome to nginx!" - Página funcionando correctamente

### **Conceptos aprendidos:**
- **Descarga automática:** Docker descarga imágenes no disponibles localmente
- **Port mapping:** `-p 8080:80` mapea puerto 8080 del host al 80 del contenedor
- **Naming:** `--name` asigna nombre personalizado para fácil referencia
- **Detached mode:** `-d` ejecuta en background sin bloquear terminal

### **✅ Ejercicio 1 completado exitosamente**

---

## **🎯 EJERCICIO 2: Ciclo de Vida de Contenedores** ✅

### **Objetivo:**
Dominar el control del ciclo de vida: detener, iniciar y reiniciar contenedores.

### **Comandos a ejecutar:**
```bash
# 1. Detener servidor web
docker stop web-server

# 2. Verificar que http://localhost:8080 no funciona

# 3. Reiniciar servidor web
docker start web-server

# 4. Verificar que http://localhost:8080 funciona nuevamente
```

### **Resultados obtenidos:**

#### **Problema inicial - Nombre incorrecto:**
```bash
docker stop web-server
# Error: No such container: web-server
```
**Causa:** El contenedor se creó con nombre `mi-servidor`, no `web-server`

#### **Solución aplicada:**
```bash
docker stop mi-servidor
# Resultado: mi-servidor
```

#### **Verificación de detención:**
**URL:** http://localhost:8080  
**Resultado:** Conexión rechazada - Servidor detenido correctamente

#### **Reinicio del contenedor:**
```bash
docker start mi-servidor
# Resultado: mi-servidor
```

#### **Verificación de reinicio:**
**URL:** http://localhost:8080  
**Resultado:** "Welcome to nginx!" - Servidor funcionando nuevamente

### **Troubleshooting aplicado:**
- **Error de nombres:** Verificar nombres reales con `docker ps`
- **Estados de contenedor:** Comprender diferencia entre stop/start vs remove
- **Persistencia:** Configuración se mantiene después de restart

### **Conceptos aprendidos:**
- **docker stop:** Detención graceful del contenedor
- **docker start:** Reinicio de contenedor existente
- **Persistencia:** Port mapping y configuración se mantienen
- **Estados:** Running → Exited → Running

### **✅ Ejercicio 2 completado exitosamente**

---

## **🎯 EJERCICIO 3: Gestión de Imágenes** ✅

### **Objetivo:**
Aprender a gestionar imágenes: visualizar, eliminar y comprender dependencias.

### **Comandos ejecutados:**
```bash
# 1. Ver imágenes disponibles
docker images

# 2. Intentar eliminar imagen nginx
docker rmi nginx

# 3. Resolver dependencias y eliminar correctamente
docker stop mi-servidor
docker rm mi-servidor
docker rmi nginx
```

### **Resultados obtenidos:**

#### **Paso 1 - Inventario de imágenes:**
```
REPOSITORY                       TAG       IMAGE ID       CREATED       SIZE
mi-devops-app                    latest    9c0e1912aeaf   3 hours ago   12.8MB
microservicio-organizado         latest    a13784b56410   4 hours ago   146MB
ubuntu                           latest    b60cb74dfa1b   3 weeks ago   101MB
hashicorp/terraform-mcp-server   latest    b64972eb0a0a   4 weeks ago   10.2MB
nginx                            latest    17848b7d08d1   4 weeks ago   198MB
hello-world                      latest    ca9905c726f0   5 weeks ago   5.2kB
```

**Análisis:**
- **Total:** 6 imágenes ocupando ~463MB
- **Más grande:** nginx (198MB)
- **Más pequeña:** hello-world (5.2kB)
- **Personalizadas:** mi-devops-app, microservicio-organizado

#### **Paso 2 - Error esperado:**
```bash
docker rmi nginx
# Error: conflict: unable to remove repository reference "nginx" (must force) - container 55c3243f1a62 is using its referenced image
```

**Causa:** Contenedor `mi-servidor` usando la imagen nginx

#### **Paso 3 - Resolución de dependencias:**

**3a. Detener contenedor:**
```bash
docker stop mi-servidor
# Resultado: mi-servidor
```

**3b. Eliminar contenedor:**
```bash
docker rm mi-servidor
# Resultado: mi-servidor
```

**3c. Eliminar imagen:**
```bash
docker rmi nginx
```

**Proceso de eliminación observado:**
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

**Análisis del proceso:**
- **7 capas eliminadas:** Imagen nginx construida en capas
- **Espacio liberado:** ~198MB
- **Untag:** Referencias eliminadas del registro local

### **Conceptos aprendidos:**
- **Dependencias:** Imágenes no se pueden eliminar si hay contenedores usándolas
- **Workflow de eliminación:** stop → rm (contenedor) → rmi (imagen)
- **Capas de imagen:** Imágenes construidas en múltiples capas
- **Espacio en disco:** Importancia de limpieza regular

### **Troubleshooting aplicado:**
- **Dependencias bloqueantes:** Identificar contenedores que usan la imagen
- **Orden de eliminación:** Contenedores primero, imágenes después
- **Verificación:** Usar `docker ps -a` para ver todos los contenedores

### **✅ Ejercicio 3 completado exitosamente**

---

## **🎯 EJERCICIO 4: Información del Sistema y Limpieza** ✅

### **Objetivo:**
Aprender a monitorear el uso de espacio y realizar limpieza automática de recursos.

### **Comandos ejecutados:**
```bash
# 1. Ver uso de espacio en disco
docker system df

# 2. Limpiar recursos no utilizados
docker system prune

# 3. Verificar espacio liberado
docker system df
```

### **Resultados obtenidos:**

#### **Estado inicial:**
```
TYPE            TOTAL     ACTIVE    SIZE      RECLAIMABLE
Images          5         3         269.6MB   156.1MB (57%)
Containers      3         1         1.15kB    55B (4%)
Local Volumes   0         0         0B        0B
Build Cache     25        0         4.109kB   4.109kB
```

#### **Limpieza realizada:**
- **Contenedores eliminados:** 2 (Ubuntu + hello-world)
- **Build cache eliminado:** 8 objetos
- **Espacio liberado:** 4.164kB

#### **Estado final:**
```
TYPE            TOTAL     ACTIVE    SIZE      RECLAIMABLE
Images          5         1         269.6MB   256.8MB (95%)
Containers      1         1         1.095kB   0B (0%)
Local Volumes   0         0         0B        0B
Build Cache     17        0         0B        0B
```

### **Conceptos aprendidos:**
- **docker system df:** Análisis de uso de espacio por categorías
- **docker system prune:** Limpieza automática segura
- **Recursos reclaimables:** Identificación de oportunidades de optimización
- **Limpieza selectiva:** Solo elimina recursos no utilizados

### **✅ Ejercicio 4 completado exitosamente**

---

## **📊 RESUMEN DE EJERCICIOS**

### **Ejercicios completados: 4/4** ✅

#### **✅ Ejercicio 1: Gestión Básica**
- **Comandos:** `docker ps`, `docker run`
- **Skills:** Port mapping, naming, detached mode
- **Resultado:** Servidor nginx funcionando en puerto 8080

#### **✅ Ejercicio 2: Ciclo de Vida**
- **Comandos:** `docker stop`, `docker start`
- **Skills:** Control de estados, persistencia
- **Troubleshooting:** Error de nombres resuelto

#### **✅ Ejercicio 3: Gestión de Imágenes**
- **Comandos:** `docker images`, `docker rmi`, `docker rm`
- **Skills:** Dependencias, eliminación en orden correcto
- **Resultado:** 198MB de espacio liberado

#### **⏳ Ejercicio 4: Sistema y Limpieza**
- **Estado:** Pendiente
- **Comandos:** `docker system df`, `docker system prune`

### **Problemas resueltos: 5**
1. **Nombres incorrectos:** web-server vs mi-servidor
2. **Puerto ocupado:** Detener contenedor anterior
3. **Contenedor en uso:** Stop antes de remove
4. **Imagen en uso:** Eliminar contenedores primero
5. **Contenedor duplicado:** Remove contenedor existente

### **Conceptos dominados:**
- ✅ Estados de contenedores (Created, Up, Exited)
- ✅ Port mapping y networking básico
- ✅ Dependencias imagen-contenedor
- ✅ Workflow de eliminación ordenada
- ✅ Troubleshooting sistemático

---

## **🚀 PRÓXIMOS PASOS**

### **Completar Lección 2:**
1. **Ejecutar Ejercicio 4** (system commands)
2. **Documentar resultados** de limpieza
3. **Actualizar progreso** en documentación

### **Preparación para Lección 3:**
- **Conceptos avanzados** de imágenes vs contenedores
- **Dockerfile** desde cero
- **Registry** y distribución de imágenes

---

*Ejercicios documentados: 2025-09-14 | Metodología práctica | Troubleshooting real aplicado*
