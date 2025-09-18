# 📚 LECCIÓN 2: Comandos Docker Básicos

**Fecha:** 2025-09-14  
**Estado:** ✅ **COMPLETADA**  
**Módulo:** 1 - Setup de Tecnologías Fundamentales  
**Duración:** ~1.5 horas (estimado)

---

## **🎯 OBJETIVO**
Dominar los comandos esenciales de Docker para gestión avanzada de contenedores e imágenes con anatomía completa de cada comando.

---

## **📚 CONCEPTOS APRENDIDOS**

### **Gestión avanzada de contenedores:**
- **Modos de ejecución:** Interactivo vs Background (detached)
- **Port mapping:** Conexión entre host y contenedor
- **Naming:** Asignación de nombres personalizados
- **Ciclo de vida:** run → stop → start → restart → remove

### **Gestión de imágenes:**
- **Descarga automática:** Docker Hub como repositorio
- **Eliminación:** Dependencias entre imágenes y contenedores
- **Limpieza:** Liberación de espacio en disco

---

## **🔧 COMANDOS APRENDIDOS CON ANATOMÍA**

### **Visualización de contenedores:**
```bash
docker ps
│      │
│      └── Subcomando: mostrar contenedores corriendo (process status)
└── Comando: Docker CLI
```
**Propósito:** Ver contenedores activos con información básica

```bash
docker ps -a
│      │  │
│      │  └── Flag: mostrar todos los contenedores (all - incluso detenidos)
│      └── Subcomando: process status
└── Comando: Docker CLI
```
**Propósito:** Ver historial completo de contenedores

### **Ejecución avanzada de contenedores:**
```bash
docker run -it ubuntu bash
│      │   │  │      │
│      │   │  │      └── Comando a ejecutar dentro del contenedor
│      │   │  └── Imagen: sistema operativo Ubuntu
│      │   └── Flag: interactive + tty (terminal interactivo)
│      └── Subcomando: ejecutar contenedor
└── Comando: Docker CLI
```
**Propósito:** Ejecutar contenedor con terminal interactivo

```bash
docker run --name mi-servidor -d -p 8080:80 nginx
│      │   │      │          │  │  │         │
│      │   │      │          │  │  │         └── Imagen: servidor web nginx
│      │   │      │          │  │  └── Mapeo: puerto 8080 (host) → 80 (contenedor)
│      │   │      │          │  └── Flag: mapear puertos
│      │   │      │          └── Flag: ejecutar en background (detached)
│      │   │      └── Nombre personalizado del contenedor
│      │   └── Flag: asignar nombre específico
│      └── Subcomando: ejecutar contenedor
└── Comando: Docker CLI
```
**Propósito:** Ejecutar servidor web con configuración completa

### **Control del ciclo de vida:**
```bash
docker stop web-server
│      │    │
│      │    └── Nombre del contenedor a detener
│      └── Subcomando: detener contenedor gracefully
└── Comando: Docker CLI
```
**Propósito:** Detener contenedor de forma controlada

```bash
docker start web-server
│      │     │
│      │     └── Nombre del contenedor a iniciar
│      └── Subcomando: iniciar contenedor existente
└── Comando: Docker CLI
```
**Propósito:** Reiniciar contenedor previamente creado

```bash
docker restart web-server
│      │       │
│      │       └── Nombre del contenedor a reiniciar
│      └── Subcomando: detener y volver a iniciar
└── Comando: Docker CLI
```
**Propósito:** Reiniciar contenedor (stop + start)

```bash
docker rm web-server
│      │  │
│      │  └── Nombre del contenedor a eliminar
│      └── Subcomando: remover contenedor (debe estar detenido)
└── Comando: Docker CLI
```
**Propósito:** Eliminar contenedor permanentemente

### **Gestión de imágenes:**
```bash
docker images
│      │
│      └── Subcomando: listar todas las imágenes locales
└── Comando: Docker CLI
```
**Propósito:** Ver imágenes descargadas con tamaños

```bash
docker rmi nginx
│      │   │
│      │   └── Nombre de la imagen a eliminar
│      └── Subcomando: remove image
└── Comando: Docker CLI
```
**Propósito:** Eliminar imagen (requiere que no haya contenedores usándola)

### **Información del sistema:**
```bash
docker system df
│      │      │
│      │      └── Subcomando: disk free (uso de espacio)
│      └── Recurso: sistema Docker
└── Comando: Docker CLI
```
**Propósito:** Ver uso de espacio en disco por Docker

```bash
docker system prune
│      │      │
│      │      └── Subcomando: limpiar recursos no utilizados
│      └── Recurso: sistema Docker
└── Comando: Docker CLI
```
**Propósito:** Liberar espacio eliminando recursos no utilizados

---

## **🎯 EJERCICIOS PRÁCTICOS REALIZADOS**

### **Ejercicio 1: Gestión básica de contenedores**
**Comandos ejecutados:**
1. `docker ps` - Ver contenedores actuales
2. `docker run --name web-server -d -p 8080:80 nginx` - Crear servidor web
3. `docker ps` - Verificar nuevo contenedor
4. Verificación en navegador: http://localhost:8080

**Resultados:**
- ✅ Contenedor `mi-app` ya corriendo desde ejercicio anterior
- ✅ Nuevo contenedor `web-server` creado exitosamente
- ✅ Nginx funcionando en puerto 8080
- ✅ Página "Welcome to nginx!" visible

### **Ejercicio 2: Ciclo de vida de contenedores**
**Comandos ejecutados:**
1. `docker stop web-server` - Detener servidor
2. Verificación: http://localhost:8080 no funciona
3. `docker start web-server` - Reiniciar servidor
4. Verificación: http://localhost:8080 funciona nuevamente

**Resultados:**
- ✅ Stop/start funcionando correctamente
- ✅ Persistencia de configuración
- ✅ Port mapping mantenido después de restart

### **Ejercicio 3: Gestión de imágenes**
**Comandos ejecutados:**
1. `docker images` - Ver imágenes disponibles
2. `docker rmi nginx` - Intentar eliminar imagen (falló)
3. `docker stop web-server` - Detener contenedor
4. `docker rm web-server` - Eliminar contenedor
5. `docker rmi nginx` - Eliminar imagen (exitoso)

**Resultados:**
- ✅ 6 imágenes identificadas (mi-devops-app, ubuntu, nginx, etc.)
- ✅ Comprensión de dependencias imagen-contenedor
- ✅ Eliminación exitosa de nginx (7 capas borradas)
- ✅ Liberación de ~198MB de espacio

---

## **🔧 PROBLEMAS RESUELTOS**

### **Error de nombres de contenedores:**
- **Situación:** Confusión entre `web-server` y `mi-servidor`
- **Error:** `No such container: web-server`
- **Causa:** Contenedor se creó con nombre `mi-servidor`
- **Solución:** Usar nombre correcto o ID del contenedor
- **Aprendizaje:** Verificar nombres con `docker ps`

### **Puerto ocupado:**
- **Error:** `Bind for 0.0.0.0:8080 failed: port is already allocated`
- **Causa:** Contenedor anterior usando mismo puerto
- **Solución:** Detener contenedor anterior primero
- **Comando:** `docker stop mi-servidor`

### **Contenedor en uso:**
- **Error:** `cannot remove container: container is running`
- **Causa:** Intentar eliminar contenedor activo
- **Solución:** Detener antes de eliminar
- **Workflow:** `docker stop` → `docker rm`

### **Imagen en uso:**
- **Error:** `unable to remove repository reference "nginx"`
- **Causa:** Contenedores usando la imagen
- **Solución:** Eliminar contenedores primero
- **Workflow:** `docker stop` → `docker rm` → `docker rmi`

### **Contenedor duplicado:**
- **Error:** `The container name "/web-server" is already in use`
- **Causa:** Nombre ya asignado a contenedor existente
- **Solución:** Eliminar contenedor anterior o usar nombre diferente
- **Comando:** `docker rm web-server`

---

## **💡 CONCEPTOS TÉCNICOS APRENDIDOS**

### **Estados de contenedores:**
- **Created:** Contenedor creado pero no iniciado
- **Up:** Contenedor corriendo activamente
- **Exited:** Contenedor terminado (con código de salida)
- **Paused:** Contenedor pausado temporalmente

### **Port mapping:**
- **Sintaxis:** `-p host_port:container_port`
- **Ejemplo:** `-p 8080:80` (puerto 8080 del host → puerto 80 del contenedor)
- **Múltiples puertos:** `-p 8080:80 -p 8443:443`

### **Flags importantes:**
- **-d:** Detached (background)
- **-it:** Interactive + TTY (terminal)
- **--name:** Asignar nombre personalizado
- **-p:** Port mapping
- **-a:** All (mostrar todos)

### **Dependencias:**
- **Imagen → Contenedor:** Un contenedor depende de su imagen
- **No se puede eliminar imagen** si hay contenedores usándola
- **Workflow de eliminación:** Contenedores primero, luego imágenes

---

## **📊 ESTADO ACTUAL**

### **Contenedores activos:**
- **mi-app:** Aplicación del ejercicio integrado (puerto 3000)
- **web-server:** Eliminado durante ejercicios

### **Imágenes disponibles:**
- **mi-devops-app:** 12.8MB (proyecto personal)
- **microservicio-organizado:** 146MB (ejercicio anterior)
- **ubuntu:** 101MB (sistema operativo)
- **terraform-mcp-server:** 10.2MB (herramienta externa)
- **hello-world:** 5.2kB (imagen de prueba)
- **nginx:** Eliminada durante ejercicios

### **Próximo ejercicio:**
**✅ Ejercicio 4 COMPLETADO:** Información del sistema y limpieza (`docker system df`, `docker system prune`)

---

## **🚀 PREPARACIÓN PARA LECCIÓN 3**

### **Skills desarrollados:**
- ✅ Gestión completa del ciclo de vida de contenedores
- ✅ Comprensión de dependencias imagen-contenedor
- ✅ Troubleshooting de problemas comunes
- ✅ Port mapping y networking básico
- ✅ Limpieza y optimización de recursos

### **Próximo tema:**
**Lección 3: Imágenes vs Contenedores** - Conceptos avanzados y gestión de recursos

---

## **📋 RESUMEN EJECUTIVO**

**🔄 Lección 2 en progreso:**
- **Comandos aprendidos:** 10+ comandos con anatomía completa
- **Ejercicios completados:** 3/4 ejercicios prácticos
- **Problemas resueltos:** 5 situaciones de troubleshooting real
- **Skills:** Gestión avanzada de contenedores e imágenes
- **Pendiente:** Ejercicio 4 (system commands)

---

*Lección en progreso: 2025-09-14 | Metodología práctica aplicada | Troubleshooting real*
