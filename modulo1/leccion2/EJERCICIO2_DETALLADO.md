# 🎯 EJERCICIO 2 DETALLADO: Ciclo de Vida de Contenedores

**Lección:** 2 - Comandos Docker Básicos  
**Fecha:** 2025-09-14  
**Duración:** ~15 minutos  
**Estado:** ✅ **COMPLETADO**

---

## **🎯 OBJETIVO**
Dominar el control del ciclo de vida de contenedores: detener, iniciar y reiniciar contenedores, comprendiendo la persistencia de configuración.

---

## **📋 COMANDOS PASO A PASO**

### **PASO 1: Intentar detener contenedor (Error inicial)** ❌

#### **Comando ejecutado:**
```bash
docker stop web-server
│      │    │
│      │    └── Nombre del contenedor a detener
│      └── Subcomando: detener contenedor gracefully
└── Comando: Docker CLI
```

#### **Error obtenido:**
```
Error response from daemon: No such container: web-server
```

#### **Análisis del error:**
- **Causa:** El contenedor se creó con nombre `mi-servidor`, no `web-server`
- **Problema:** Confusión entre nombre esperado vs nombre real
- **Aprendizaje:** Verificar nombres reales antes de ejecutar comandos

#### **Verificación de nombres reales:**
```bash
docker ps
```

#### **Resultado:**
```
CONTAINER ID   IMAGE           COMMAND                  CREATED          STATUS          PORTS                                     NAMES
05cc04c58f19   nginx           "/docker-entrypoint.…"   50 minutes ago   Up 50 minutes   0.0.0.0:8080->80/tcp, [::]:8080->80/tcp   mi-servidor
bb83ce3c78b3   mi-devops-app   "/docker-entrypoint.…"   2 hours ago      Up 2 hours      0.0.0.0:3000->80/tcp, [::]:3000->80/tcp   mi-app
```

#### **Corrección identificada:**
- **Nombre correcto:** `mi-servidor` (no `web-server`)
- **Container ID alternativo:** `05cc04c58f19` (también válido)

---

### **PASO 2: Detener contenedor correctamente** ✅

#### **Comando ejecutado:**
```bash
docker stop mi-servidor
│      │    │
│      │    └── Nombre correcto del contenedor
│      └── Subcomando: detener contenedor gracefully
└── Comando: Docker CLI
```

#### **Resultado obtenido:**
```
mi-servidor
```

#### **Análisis del resultado:**
- **Output:** Nombre del contenedor confirmando detención exitosa
- **Proceso:** Docker envía SIGTERM al proceso principal del contenedor
- **Graceful shutdown:** Nginx tiene tiempo para cerrar conexiones activas
- **Tiempo:** Detención inmediata (nginx responde rápido a SIGTERM)

#### **Verificación del estado:**
```bash
docker ps
```

#### **Resultado:**
```
CONTAINER ID   IMAGE           COMMAND                  CREATED       STATUS       PORTS                                     NAMES
bb83ce3c78b3   mi-devops-app   "/docker-entrypoint.…"   2 hours ago   Up 2 hours   0.0.0.0:3000->80/tcp, [::]:3000->80/tcp   mi-app
```

#### **Análisis:**
- **mi-servidor:** Ya no aparece en `docker ps` (solo muestra contenedores corriendo)
- **mi-app:** Sigue corriendo normalmente
- **Estado:** mi-servidor detenido pero no eliminado

---

### **PASO 3: Verificar que el servicio no funciona** ✅

#### **Verificación en navegador:**
**URL probada:** http://localhost:8080

#### **Resultado obtenido:**
```
This site can't be reached
localhost refused to connect.
ERR_CONNECTION_REFUSED
```

#### **Análisis del resultado:**
- ✅ **Comportamiento esperado:** Puerto 8080 no responde
- ✅ **Confirmación:** Contenedor efectivamente detenido
- ✅ **Port mapping:** Desactivado cuando contenedor está detenido
- ✅ **Aislamiento:** mi-app (puerto 3000) sigue funcionando

---

### **PASO 4: Reiniciar contenedor** ✅

#### **Comando ejecutado:**
```bash
docker start mi-servidor
│      │     │
│      │     └── Nombre del contenedor a iniciar
│      └── Subcomando: iniciar contenedor existente
└── Comando: Docker CLI
```

#### **Resultado obtenido:**
```
mi-servidor
```

#### **Análisis del proceso:**
- **Reutilización:** Mismo contenedor, misma configuración
- **Persistencia:** Port mapping, nombre, imagen se mantienen
- **Rapidez:** Inicio más rápido que creación inicial (no descarga imagen)
- **Estado:** De "Exited" a "Up"

#### **Verificación del estado:**
```bash
docker ps
```

#### **Resultado:**
```
CONTAINER ID   IMAGE           COMMAND                  CREATED         STATUS         PORTS                                     NAMES
05cc04c58f19   nginx           "/docker-entrypoint.…"   3 minutes ago   Up 3 minutes   0.0.0.0:8080->80/tcp, [::]:8080->80/tcp   mi-servidor
bb83ce3c78b3   mi-devops-app   "/docker-entrypoint.…"   2 hours ago     Up 2 hours     0.0.0.0:3000->80/tcp, [::]:3000->80/tcp   mi-app
```

#### **Análisis:**
- **mi-servidor:** Nuevamente visible en `docker ps`
- **STATUS:** "Up 3 minutes" - Tiempo desde el restart
- **PORTS:** Port mapping restaurado automáticamente
- **Configuración:** Idéntica a la configuración original

---

### **PASO 5: Verificar que el servicio funciona nuevamente** ✅

#### **Verificación en navegador:**
**URL probada:** http://localhost:8080

#### **Resultado obtenido:**
```html
Welcome to nginx!

If you see this page, the nginx web server is successfully installed and working. Further configuration is required.

For online documentation and support please refer to nginx.org.
Commercial support is available at nginx.com.

Thank you for using nginx.
```

#### **Análisis del resultado:**
- ✅ **Servicio restaurado:** Nginx funcionando completamente
- ✅ **Persistencia:** Misma página, misma configuración
- ✅ **Port mapping:** 8080:80 operativo nuevamente
- ✅ **Estado saludable:** Servidor respondiendo normalmente

---

## **🔧 CONCEPTOS TÉCNICOS APRENDIDOS**

### **Estados de contenedores:**
- **Running (Up):** Contenedor ejecutándose activamente
- **Exited:** Contenedor detenido pero no eliminado
- **Created:** Contenedor creado pero nunca iniciado
- **Paused:** Contenedor pausado temporalmente (no usado en este ejercicio)

### **Ciclo de vida básico:**
```
docker run → Running → docker stop → Exited → docker start → Running
     ↓                                                            ↑
   Created                                                    Restart
```

### **Persistencia de configuración:**
- **Port mapping:** Se mantiene entre stop/start
- **Nombre:** Permanece asignado al contenedor
- **Imagen:** Referencia se mantiene
- **Volúmenes:** Se mantienen (si los hubiera)
- **Variables de entorno:** Se preservan

### **Graceful shutdown:**
- **docker stop:** Envía SIGTERM primero
- **Tiempo de gracia:** 10 segundos por defecto
- **SIGKILL:** Si no responde a SIGTERM
- **Aplicaciones:** Pueden limpiar recursos antes de terminar

### **Diferencia stop vs kill:**
- **docker stop:** Shutdown graceful (recomendado)
- **docker kill:** Terminación forzada inmediata
- **Uso:** stop para operaciones normales, kill para emergencias

---

## **🔧 TROUBLESHOOTING APLICADO**

### **Error de nombres:**
- **Problema:** `No such container: web-server`
- **Causa:** Usar nombre incorrecto
- **Diagnóstico:** `docker ps` para verificar nombres reales
- **Solución:** Usar nombre correcto `mi-servidor`
- **Prevención:** Verificar nombres antes de ejecutar comandos

### **Verificación de estados:**
- **Método:** Combinación de `docker ps` y prueba en navegador
- **docker ps:** Muestra estado técnico del contenedor
- **Navegador:** Confirma funcionalidad real del servicio
- **Ambos necesarios:** Estado técnico ≠ funcionalidad garantizada

---

## **📊 MÉTRICAS DEL EJERCICIO**

### **Comandos ejecutados:**
- **docker stop:** 1 vez (exitoso después de corrección)
- **docker start:** 1 vez (exitoso)
- **docker ps:** 3 veces (verificación de estados)
- **Verificación navegador:** 2 veces (antes y después de start)

### **Tiempo de operaciones:**
- **Stop:** ~1 segundo (nginx responde rápido a SIGTERM)
- **Start:** ~2 segundos (inicio de nginx)
- **Verificación:** Inmediata (nginx listo para servir)

### **Estados observados:**
- **Inicial:** Running (Up 50 minutes)
- **Después de stop:** Exited (no visible en `docker ps`)
- **Después de start:** Running (Up 3 minutes)

---

## **💡 CONCEPTOS AVANZADOS IDENTIFICADOS**

### **Persistencia vs Ephemeral:**
- **Configuración:** Persiste (port mapping, nombre, imagen)
- **Datos en memoria:** Se pierden (estado de aplicación)
- **Archivos en contenedor:** Se mantienen (a menos que sean volúmenes temporales)
- **Conexiones de red:** Se restablecen

### **Gestión de recursos:**
- **Memoria:** Liberada durante stop, reasignada durante start
- **CPU:** No consumo durante stop
- **Red:** Puertos liberados/reasignados automáticamente
- **Disco:** Imagen y capas se mantienen

### **Diferencia con restart:**
- **stop + start:** Dos operaciones separadas
- **restart:** Una operación atómica (equivalente a stop + start)
- **Uso:** restart para reinicio rápido, stop/start para control granular

---

## **🎯 OBJETIVOS ALCANZADOS**

### **✅ Control del ciclo de vida:**
- Detener contenedores de forma controlada
- Reiniciar contenedores existentes
- Verificar estados antes y después de operaciones

### **✅ Comprensión de persistencia:**
- Configuración se mantiene entre stop/start
- Port mapping persiste automáticamente
- Contenedores detenidos no se eliminan automáticamente

### **✅ Troubleshooting básico:**
- Identificar y corregir errores de nombres
- Verificar estados con múltiples métodos
- Diagnosticar problemas de conectividad

### **✅ Verificación práctica:**
- Confirmar detención con navegador
- Confirmar reinicio con navegador
- Monitorear estados con docker ps

---

## **🚀 PREPARACIÓN PARA EJERCICIO 3**

### **Estado actual:**
- **mi-servidor:** Running (puerto 8080) - Reiniciado exitosamente
- **mi-app:** Running (puerto 3000) - Sin interrupciones
- **Experiencia:** Control básico del ciclo de vida dominado

### **Próximo ejercicio:**
**Ejercicio 3: Gestión de Imágenes** - Aprender a eliminar contenedores e imágenes

### **Conceptos preparados:**
- Diferencia entre detener y eliminar
- Dependencias entre contenedores e imágenes
- Workflow de limpieza ordenada

---

*Ejercicio 2 completado: 2025-09-14 | Ciclo de vida dominado | Troubleshooting aplicado exitosamente*
