# 🎯 EJERCICIO 4 DETALLADO: Información del Sistema y Limpieza

**Lección:** 2 - Comandos Docker Básicos  
**Fecha:** 2025-09-14  
**Duración:** ~10 minutos  
**Estado:** ✅ **COMPLETADO**

---

## **🎯 OBJETIVO**
Aprender a monitorear el uso de espacio Docker y realizar limpieza automática de recursos no utilizados de forma segura.

---

## **📋 COMANDOS PASO A PASO**

### **PASO 1: Análisis del uso de espacio** ✅

#### **Comando ejecutado:**
```bash
docker system df
│      │      │
│      │      └── Subcomando: disk free (uso de espacio)
│      └── Recurso: sistema Docker
└── Comando: Docker CLI
```

#### **Resultado obtenido:**
```
TYPE            TOTAL     ACTIVE    SIZE      RECLAIMABLE
Images          5         3         269.6MB   156.1MB (57%)
Containers      3         1         1.15kB    55B (4%)
Local Volumes   0         0         0B        0B
Build Cache     25        0         4.109kB   4.109kB
```

#### **Análisis detallado por categoría:**

##### **IMAGES (Imágenes):**
- **Total:** 5 imágenes ocupando 269.6MB
- **Active:** 3 imágenes en uso por contenedores
- **Reclaimable:** 156.1MB (57%) - Imágenes no utilizadas
- **Interpretación:** Más de la mitad del espacio de imágenes se puede liberar

##### **CONTAINERS (Contenedores):**
- **Total:** 3 contenedores ocupando 1.15kB
- **Active:** 1 contenedor corriendo
- **Reclaimable:** 55B (4%) - Contenedores detenidos
- **Interpretación:** 2 contenedores detenidos ocupan espacio mínimo

##### **LOCAL VOLUMES (Volúmenes):**
- **Total:** 0 volúmenes
- **Estado:** Sin volúmenes creados
- **Interpretación:** No hay datos persistentes almacenados

##### **BUILD CACHE (Cache de construcción):**
- **Total:** 25 entradas ocupando 4.109kB
- **Active:** 0 entradas en uso
- **Reclaimable:** 4.109kB (100%) - Todo el cache se puede limpiar
- **Interpretación:** Cache de builds anteriores no utilizado

#### **Resumen del estado inicial:**
- **Espacio total usado:** ~270MB
- **Espacio reclaimable:** ~156MB (58% del total)
- **Oportunidad de limpieza:** Significativa

---

### **PASO 2: Limpieza automática** ✅

#### **Comando ejecutado:**
```bash
docker system prune
│      │      │
│      │      └── Subcomando: limpiar recursos no utilizados
│      └── Recurso: sistema Docker
└── Comando: Docker CLI
```

#### **Proceso interactivo observado:**
```
WARNING! This will remove:
  - all stopped containers
  - all networks not used by at least one container
  - all dangling images
  - unused build cache

Are you sure you want to continue? [y/N] y
```

#### **Análisis del warning:**
- **Stopped containers:** Contenedores detenidos (seguros de eliminar)
- **Unused networks:** Redes sin contenedores (seguros de eliminar)
- **Dangling images:** Imágenes sin tag (seguros de eliminar)
- **Unused build cache:** Cache no utilizado (seguro de eliminar)
- **Confirmación:** Requiere confirmación manual (y/N)

#### **Resultado de la limpieza:**
```
Deleted Containers:
c09274485b5c4ee1bf4e523d94782674cd9c8977d38ab8ab613a1da2100041a3
c933793d600ccd41a3313d4a58ef28e9e1127d35a1f88d980cbb2079ca9d2400

Deleted build cache objects:
ujck858va6vx255m5jf8bhg81
l52gjsy7sjc7fehib9z3xk8f1
jvx6cokoapfd0kahs72p4243l
eimp4s2r74mio96f8tagcpfel
zpcer9igf845sp4zbzt8e5han
271fdk3oxrur9hdusih128a2r
mvz3zlht6naus8wgln4lmh52k
zaxbyebi8mmsn13fg0wmj0cnd

Total reclaimed space: 4.164kB
```

#### **Análisis de elementos eliminados:**

##### **Contenedores eliminados:**
- **c09274485b5c...** - Contenedor Ubuntu del Ejercicio 1 (modo interactivo)
- **c933793d600c...** - Contenedor hello-world de verificación inicial

##### **Build cache eliminado:**
- **8 objetos** de cache de construcción
- **IDs únicos** de cache no reutilizable
- **Espacio liberado:** Mínimo pero efectivo

#### **Espacio total liberado:** 4.164kB
- **Pequeño pero efectivo:** Limpieza de recursos no críticos
- **Seguridad:** No afectó contenedores activos ni imágenes en uso

---

### **PASO 3: Verificación post-limpieza** ✅

#### **Comando ejecutado:**
```bash
docker system df
```

#### **Resultado después de limpieza:**
```
TYPE            TOTAL     ACTIVE    SIZE      RECLAIMABLE
Images          5         1         269.6MB   256.8MB (95%)
Containers      1         1         1.095kB   0B (0%)
Local Volumes   0         0         0B        0B
Build Cache     17        0         0B        0B
```

#### **Comparación ANTES vs DESPUÉS:**

##### **IMAGES:**
- **Antes:** 5 total, 3 activas, 156.1MB reclaimable (57%)
- **Después:** 5 total, 1 activa, 256.8MB reclaimable (95%)
- **Cambio:** Más imágenes quedaron sin usar al eliminar contenedores

##### **CONTAINERS:**
- **Antes:** 3 total, 1 activo, 55B reclaimable (4%)
- **Después:** 1 total, 1 activo, 0B reclaimable (0%)
- **Cambio:** ✅ Limpieza perfecta - Solo contenedor activo

##### **BUILD CACHE:**
- **Antes:** 25 entradas, 4.109kB reclaimable
- **Después:** 17 entradas, 0B reclaimable
- **Cambio:** ✅ Cache limpiado completamente

---

## **🔧 CONCEPTOS TÉCNICOS APRENDIDOS**

### **docker system df - Análisis de espacio:**
- **Categorización:** Separa por tipo de recurso
- **Estado:** Distingue entre activo y total
- **Reclaimable:** Calcula espacio recuperable
- **Porcentajes:** Muestra eficiencia de uso

### **docker system prune - Limpieza segura:**
- **Selectivo:** Solo elimina recursos no utilizados
- **Interactivo:** Requiere confirmación del usuario
- **Conservador:** No toca recursos activos
- **Detallado:** Muestra qué se eliminó exactamente

### **Tipos de recursos Docker:**
- **Images:** Plantillas para contenedores
- **Containers:** Instancias ejecutables
- **Volumes:** Almacenamiento persistente
- **Build Cache:** Cache de construcción de imágenes
- **Networks:** Redes para comunicación entre contenedores

### **Estados de recursos:**
- **Active:** En uso actualmente
- **Stopped:** Detenido pero no eliminado
- **Dangling:** Sin referencia (imágenes sin tag)
- **Unused:** No referenciado por recursos activos

---

## **💡 CONCEPTOS AVANZADOS IDENTIFICADOS**

### **Paradoja del espacio reclaimable:**
- **Observación:** Reclaimable aumentó después de limpieza
- **Causa:** Al eliminar contenedores, sus imágenes quedaron sin usar
- **Implicación:** Limpieza puede revelar más oportunidades de optimización

### **Estrategias de limpieza:**
- **Automática:** `docker system prune` (conservadora)
- **Agresiva:** `docker system prune -a` (incluye imágenes no utilizadas)
- **Selectiva:** Eliminar recursos específicos manualmente
- **Programada:** Scripts de limpieza regular

### **Gestión de espacio:**
- **Monitoreo regular:** `docker system df` como herramienta de diagnóstico
- **Limpieza preventiva:** Evitar acumulación de recursos
- **Balance:** Mantener imágenes útiles vs liberar espacio
- **Automatización:** Integrar limpieza en workflows

---

## **📊 MÉTRICAS DEL EJERCICIO**

### **Comandos ejecutados:**
- **docker system df:** 2 veces (antes y después)
- **docker system prune:** 1 vez (con confirmación)

### **Recursos eliminados:**
- **Contenedores:** 2 (Ubuntu + hello-world)
- **Build cache:** 8 objetos
- **Espacio liberado:** 4.164kB

### **Tiempo de operaciones:**
- **Análisis:** Instantáneo
- **Limpieza:** ~5 segundos
- **Verificación:** Instantáneo

### **Estado final optimizado:**
- **Contenedores:** Solo 1 activo (0% reclaimable)
- **Build cache:** Completamente limpio
- **Oportunidad:** 256.8MB en imágenes no utilizadas

---

## **🔧 TROUBLESHOOTING Y MEJORES PRÁCTICAS**

### **Confirmación interactiva:**
- **Propósito:** Prevenir eliminación accidental
- **Opciones:** y (yes), N (no, default)
- **Recomendación:** Siempre revisar el warning antes de confirmar

### **Limpieza agresiva (no usada en este ejercicio):**
```bash
docker system prune -a  # Incluye imágenes no utilizadas
docker system prune -f  # Force (sin confirmación)
```

### **Limpieza selectiva:**
```bash
docker container prune  # Solo contenedores
docker image prune      # Solo imágenes
docker volume prune     # Solo volúmenes
docker network prune    # Solo redes
```

### **Monitoreo continuo:**
- **Frecuencia:** Ejecutar `docker system df` regularmente
- **Alertas:** Monitorear cuando reclaimable > 50%
- **Automatización:** Scripts de limpieza programada

---

## **🎯 OBJETIVOS ALCANZADOS**

### **✅ Monitoreo de recursos:**
- Análisis completo del uso de espacio Docker
- Comprensión de categorías de recursos
- Identificación de oportunidades de optimización

### **✅ Limpieza automática:**
- Eliminación segura de recursos no utilizados
- Comprensión del proceso interactivo
- Verificación de resultados post-limpieza

### **✅ Gestión de espacio:**
- Estrategias de optimización de espacio
- Balance entre funcionalidad y eficiencia
- Herramientas para mantenimiento regular

### **✅ Mejores prácticas:**
- Limpieza conservadora vs agresiva
- Monitoreo preventivo
- Automatización de mantenimiento

---

## **🚀 PREPARACIÓN PARA LECCIÓN 3**

### **Estado actual optimizado:**
- **Contenedores:** 1 activo (mi-app)
- **Imágenes:** 5 disponibles (4 no utilizadas)
- **Build cache:** Limpio
- **Experiencia:** Gestión completa de recursos Docker

### **Próxima lección:**
**Lección 3: Imágenes vs Contenedores** - Conceptos avanzados y gestión profunda

### **Conceptos preparados:**
- Diferencias fundamentales entre imágenes y contenedores
- Ciclo de vida completo de recursos
- Optimización avanzada de espacio
- Gestión de registry y distribución

---

## **📋 RESUMEN EJECUTIVO**

**✅ Ejercicio 4 completado exitosamente:**
- **Herramientas:** `docker system df` y `docker system prune` dominadas
- **Limpieza:** 2 contenedores + 8 objetos cache eliminados
- **Optimización:** Sistema Docker limpio y eficiente
- **Skills:** Monitoreo y mantenimiento de recursos Docker
- **Preparado para:** Gestión avanzada de imágenes y contenedores

---

*Ejercicio 4 completado: 2025-09-14 | Gestión de recursos dominada | Sistema Docker optimizado*
