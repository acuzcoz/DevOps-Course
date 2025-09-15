# 🎯 EJERCICIO 2 DETALLADO: Gestión de Tags

**Lección:** 3 - Imágenes vs Contenedores  
**Fecha:** 2025-09-14  
**Duración:** ~20 minutos  
**Estado:** ✅ **COMPLETADO**

---

## **🎯 OBJETIVO**
Aprender a crear y gestionar diferentes versiones de imágenes usando tags, demostrando cómo versionar aplicaciones con Docker.

---

## **📋 COMANDOS PASO A PASO**

### **PASO 1: Navegar al proyecto con Dockerfile** ✅

#### **Comando ejecutado:**
```bash
cd modulo1/leccion1/mi-primer-devops
│  │       │       │
│  │       │       └── Proyecto con Dockerfile existente del ejercicio integrado
│  │       └── Lección 1 (donde está el proyecto)
│  └── Módulo 1
└── Comando: cambiar directorio
```

#### **Verificación del contenido:**
```bash
ls -la
│  │ │
│  │ └── Flag: mostrar archivos ocultos (incluyendo .git, .gitignore)
│  └── Flag: formato largo (permisos, propietario, tamaño, fecha)
└── Comando: listar archivos y directorios
```

#### **Resultado obtenido:**
```
total 16
drwxr-xr-x@  7 ancuzcoz  staff  224 14 sep 19:43 .
drwxr-xr-x@  6 ancuzcoz  staff  192 14 sep 22:21 ..
drwxr-xr-x@ 13 ancuzcoz  staff  416 14 sep 23:14 .git
-rw-r--r--@  1 ancuzcoz  staff   30 14 sep 19:43 .gitignore
-rw-r--r--@  1 ancuzcoz  staff   75 14 sep 19:18 Dockerfile
drwxr-xr-x@  2 ancuzcoz  staff   64 14 sep 19:09 docs
drwxr-xr-x@  3 ancuzcoz  staff   96 14 sep 19:12 src
```

#### **Análisis del contenido:**
- ✅ **Dockerfile** (75 bytes) - Archivo principal para crear imágenes
- ✅ **src/** - Directorio con index.html de la aplicación
- ✅ **docs/** - Directorio de documentación
- ✅ **.git/** - Repositorio Git local para versionado
- ✅ **.gitignore** - Archivos a ignorar en Git

---

### **PASO 2: Crear imágenes con diferentes tags** ✅

#### **Imagen versión 1.0:**
```bash
docker build -t mi-devops-app:v1.0 .
│      │     │  │             │    │
│      │     │  │             │    └── Contexto: directorio actual (donde está Dockerfile)
│      │     │  │             └── Tag: versión específica 1.0
│      │     │  └── Nombre: mi-devops-app (mismo nombre base)
│      │     └── Flag: asignar tag específico a la imagen
│      └── Subcomando: construir imagen desde Dockerfile
└── Comando: Docker CLI
```

#### **Proceso de build v1.0:**
```
[+] Building 1.8s (7/7) FINISHED
 => [internal] load build definition from Dockerfile
 => [internal] load metadata for docker.io/library/nginx:alpine-slim
 => [internal] load .dockerignore
 => [internal] load build context
 => [1/2] FROM docker.io/library/nginx:alpine-slim@sha256:94f1c83ea210e0568f87884517b4fe9a39c74b7677e0ad3de72700cfa3da7268
 => CACHED [2/2] COPY src/index.html /usr/share/nginx/html/
 => exporting to image
 => => writing image sha256:023f675bbaa0324aa2f6ee6bdc7802bbac50797cd682766a776d42864c7e80a3
 => => naming to docker.io/library/mi-devops-app:v1.0
```

#### **Análisis del build v1.0:**
- ✅ **Build exitoso:** 7/7 pasos completados en 1.8s
- ✅ **Image ID:** `sha256:023f675bbaa0324aa2f6ee6bdc7802bbac50797cd682766a776d42864c7e80a3`
- ✅ **Tag asignado:** `mi-devops-app:v1.0`
- ✅ **Optimización:** CACHED layer reutilizada

#### **Imagen versión development:**
```bash
docker build -t mi-devops-app:development .
│      │     │  │             │           │
│      │     │  │             │           └── Contexto: mismo directorio
│      │     │  │             └── Tag: development (para entorno de desarrollo)
│      │     │  └── Nombre: mismo nombre base que v1.0
│      │     └── Flag: asignar tag descriptivo
│      └── Subcomando: construir imagen desde mismo Dockerfile
└── Comando: Docker CLI
```

#### **Proceso de build development:**
```
[+] Building 0.3s (7/7) FINISHED
 => [internal] load build definition from Dockerfile
 => [internal] load metadata for docker.io/library/nginx:alpine-slim
 => [internal] load .dockerignore
 => [internal] load build context
 => [1/2] FROM docker.io/library/nginx:alpine-slim@sha256:94f1c83ea210e0568f87884517b4fe9a39c74b7677e0ad3de72700cfa3da7268
 => CACHED [2/2] COPY src/index.html /usr/share/nginx/html/
 => exporting to image
 => => writing image sha256:738d9e171a3a88674d6a66ad9932bdd1a1c00da58e1edee01a87fef5a4cc0387
 => => naming to docker.io/library/mi-devops-app:development
```

#### **Análisis del build development:**
- ✅ **Build más rápido:** 0.3s (cache utilizado extensivamente)
- ✅ **Image ID:** `sha256:738d9e171a3a88674d6a66ad9932bdd1a1c00da58e1edee01a87fef5a4cc0387`
- ✅ **Tag asignado:** `mi-devops-app:development`
- ✅ **Optimización:** Todas las capas CACHED (máxima eficiencia)

---

### **PASO 3: Verificar imágenes con tags** ✅

#### **Comando ejecutado:**
```bash
docker images mi-devops-app
│      │      │
│      │      └── Filtro: mostrar solo imágenes que coincidan con "mi-devops-app"
│      └── Subcomando: listar imágenes locales
└── Comando: Docker CLI
```

#### **Resultado obtenido:**
```
REPOSITORY      TAG           IMAGE ID       CREATED       SIZE
mi-devops-app   v1.0          023f675bbaa0   4 hours ago   12.8MB
mi-devops-app   development   738d9e171a3a   4 hours ago   12.8MB
mi-devops-app   latest        9c0e1912aeaf   4 hours ago   12.8MB
```

#### **Análisis detallado de las versiones:**

##### **mi-devops-app:latest**
- **Image ID:** `9c0e1912aeaf`
- **Origen:** Imagen original del ejercicio integrado
- **Tag:** `latest` (por defecto cuando no se especifica)
- **Tamaño:** 12.8MB

##### **mi-devops-app:v1.0**
- **Image ID:** `023f675bbaa0`
- **Origen:** Creada en este ejercicio
- **Tag:** `v1.0` (versionado específico)
- **Tamaño:** 12.8MB (mismo contenido)

##### **mi-devops-app:development**
- **Image ID:** `738d9e171a3a`
- **Origen:** Creada en este ejercicio
- **Tag:** `development` (entorno de desarrollo)
- **Tamaño:** 12.8MB (mismo contenido)

#### **Conceptos demostrados:**
- **Mismo nombre base:** `mi-devops-app`
- **Diferentes tags:** `latest`, `v1.0`, `development`
- **Diferentes Image IDs:** Cada tag es una imagen independiente
- **Mismo tamaño:** Mismo contenido, diferentes etiquetas

---

### **PASO 4: Ejecutar contenedores con tags específicos** ✅

#### **Contenedor con versión development:**
```bash
docker run -d -p 8081:80 --name app-dev mi-devops-app:development
│      │   │  │         │      │     │             │
│      │   │  │         │      │     │             └── Tag específico: development
│      │   │  │         │      │     └── Imagen con tag específico
│      │   │  │         │      └── Nombre descriptivo del contenedor
│      │   │  │         └── Puerto: 8081 del host → 80 del contenedor
│      │   │  └── Flag: mapear puertos host:container
│      │   └── Flag: ejecutar en background (detached)
│      └── Subcomando: ejecutar contenedor desde imagen específica
└── Comando: Docker CLI
```

**Container ID obtenido:** `a0c384eaccf80d31d803f616a92a252ac75a0a299c1d7ba99e02e4785d0ec39a`

#### **Contenedor con versión v1.0:**
```bash
docker run -d -p 8002:80 --name app-v1 mi-devops-app:v1.0
│      │   │  │         │      │     │             │
│      │   │  │         │      │     │             └── Tag específico: v1.0
│      │   │  │         │      │     └── Imagen con versión específica
│      │   │  │         │      └── Nombre descriptivo del contenedor
│      │   │  │         └── Puerto: 8002 del host → 80 del contenedor
│      │   │  └── Flag: mapear puertos (diferente puerto que development)
│      │   └── Flag: detached mode
│      └── Subcomando: ejecutar contenedor
└── Comando: Docker CLI
```

**Container ID obtenido:** `105e084a329c6f095c65d51ac2a0759fbd6d81cd92beeba050bcb575540ba37e`

---

### **PASO 5: Verificar contenedores corriendo simultáneamente** ✅

#### **Comando ejecutado:**
```bash
docker ps
│      │
│      └── Subcomando: mostrar contenedores corriendo (process status)
└── Comando: Docker CLI
```

#### **Resultado obtenido:**
```
CONTAINER ID   IMAGE                       COMMAND                  CREATED              STATUS              PORTS                                     NAMES
105e084a329c   mi-devops-app:v1.0          "/docker-entrypoint.…"   58 seconds ago       Up 58 seconds       0.0.0.0:8002->80/tcp, [::]:8002->80/tcp   app-v1
a0c384eaccf8   mi-devops-app:development   "/docker-entrypoint.…"   About a minute ago   Up About a minute   0.0.0.0:8081->80/tcp, [::]:8081->80/tcp   app-dev
bb83ce3c78b3   mi-devops-app               "/docker-entrypoint.…"   4 hours ago          Up 4 hours          0.0.0.0:3000->80/tcp, [::]:3000->80/tcp   mi-app
```

#### **Análisis de contenedores activos:**

##### **app-v1 (Versión 1.0):**
- **Container ID:** `105e084a329c`
- **Imagen:** `mi-devops-app:v1.0`
- **Puerto:** 8002:80
- **Estado:** Up 58 seconds
- **Comando:** nginx entrypoint

##### **app-dev (Versión Development):**
- **Container ID:** `a0c384eaccf8`
- **Imagen:** `mi-devops-app:development`
- **Puerto:** 8081:80
- **Estado:** Up About a minute
- **Comando:** nginx entrypoint

##### **mi-app (Versión Latest - Original):**
- **Container ID:** `bb83ce3c78b3`
- **Imagen:** `mi-devops-app` (latest implícito)
- **Puerto:** 3000:80
- **Estado:** Up 4 hours (del ejercicio integrado anterior)
- **Comando:** nginx entrypoint

#### **Concepto clave demostrado:**
```
mi-devops-app ──┐
                ├── :latest → Puerto 3000 ✅ (original)
                ├── :v1.0 → Puerto 8002 ✅ (nueva versión)
                └── :development → Puerto 8081 ✅ (entorno desarrollo)
```

---

### **PASO 6: Verificar funcionamiento en navegador** ✅

#### **URLs probadas:**
- **Original (latest):** http://localhost:3000
- **Versión 1.0:** http://localhost:8002
- **Development:** http://localhost:8081

#### **Resultado de verificación:**
✅ **Las 3 URLs muestran la misma página web:**
```html
¡Mi primer proyecto DevOps!
Docker + GitHub + AWS CLI + Linux funcionando juntos
Usuario: acuzcoz
Fecha: 2025-09-14
```

#### **Análisis del resultado:**
- ✅ **Consistencia:** Todas las versiones funcionan correctamente
- ✅ **Simultaneidad:** 3 versiones corriendo al mismo tiempo
- ✅ **Aislamiento:** Cada versión en su propio puerto
- ✅ **Mismo contenido:** Todas basadas en el mismo Dockerfile

---

### **PASO 7: Limpieza de contenedores de prueba** ✅

#### **Detener contenedores:**
```bash
docker stop app-v1 app-dev
│      │    │      │
│      │    │      └── Contenedor development (puerto 8081)
│      │    └── Contenedor v1.0 (puerto 8002)
│      └── Subcomando: detener múltiples contenedores simultáneamente
└── Comando: Docker CLI
```

#### **Resultado del stop:**
```
app-v1
app-dev
```

#### **Eliminar contenedores:**
```bash
docker rm app-v1 app-dev
│      │  │      │
│      │  │      └── Contenedor development
│      │  └── Contenedor v1.0
│      └── Subcomando: eliminar contenedores (deben estar detenidos)
└── Comando: Docker CLI
```

#### **Resultado del remove:**
```
app-v1
app-dev
```

#### **Análisis de la limpieza:**
- ✅ **app-v1:** Detenido y eliminado exitosamente
- ✅ **app-dev:** Detenido y eliminado exitosamente
- ✅ **mi-app:** Mantenido corriendo (contenedor original del ejercicio integrado)
- ✅ **Imágenes:** Conservadas para futuros usos

---

## **💡 CONCEPTOS TÉCNICOS APRENDIDOS**

### **Tags en Docker:**
- **Definición:** Etiquetas para identificar diferentes versiones de la misma imagen
- **Sintaxis:** `nombre:tag` (ej: `mi-devops-app:v1.0`)
- **Tag por defecto:** `latest` cuando no se especifica tag
- **Flexibilidad:** Múltiples tags para la misma imagen base

### **Versionado de aplicaciones:**
- **Semántico:** `v1.0`, `v2.0`, `v1.2.3`
- **Descriptivo:** `development`, `staging`, `production`
- **Temporal:** `2025-09-14`, `latest`
- **Funcional:** `stable`, `beta`, `experimental`

### **Gestión simultánea:**
- **Múltiples versiones:** Diferentes tags corriendo simultáneamente
- **Aislamiento:** Cada contenedor independiente con su puerto
- **Recursos:** Misma imagen base, diferentes instancias
- **Flexibilidad:** Cambio entre versiones sin afectar otras

### **Optimización de Docker:**
- **Cache de layers:** Docker reutiliza capas existentes
- **Build incremental:** Builds posteriores más rápidos
- **Compartición:** Layers compartidas entre imágenes similares
- **Eficiencia:** Mismo contenido, diferentes etiquetas

---

## **🔧 COMANDOS CLAVE APRENDIDOS**

### **Build con tags:**
```bash
docker build -t nombre:tag .
```
**Propósito:** Crear imagen con tag específico

### **Filtrar imágenes:**
```bash
docker images nombre
```
**Propósito:** Ver todas las versiones de una imagen específica

### **Run con tag específico:**
```bash
docker run -d -p puerto:80 --name contenedor imagen:tag
```
**Propósito:** Ejecutar contenedor desde versión específica

### **Gestión múltiple:**
```bash
docker stop contenedor1 contenedor2
docker rm contenedor1 contenedor2
```
**Propósito:** Gestionar múltiples contenedores simultáneamente

---

## **📊 MÉTRICAS DEL EJERCICIO**

### **Recursos creados:**
- **Imágenes:** 2 nuevas (v1.0, development) + 1 existente (latest)
- **Contenedores:** 2 nuevos (app-v1, app-dev) + 1 existente (mi-app)
- **Puertos utilizados:** 3000, 8002, 8081
- **Tags gestionados:** latest, v1.0, development

### **Comandos ejecutados:**
- **docker build:** 2 veces (v1.0, development)
- **docker images:** 1 vez (verificación)
- **docker run:** 2 veces (app-v1, app-dev)
- **docker ps:** 1 vez (verificación)
- **docker stop:** 1 vez (múltiple)
- **docker rm:** 1 vez (múltiple)

### **Tiempo de operaciones:**
- **Build v1.0:** 1.8s
- **Build development:** 0.3s (optimizado por cache)
- **Verificación navegador:** Inmediata
- **Limpieza:** ~10 segundos

### **Optimizaciones observadas:**
- **Cache utilizado:** Layers reutilizadas entre builds
- **Build incremental:** Segundo build 6x más rápido
- **Gestión eficiente:** Comandos múltiples para operaciones batch

---

## **🔧 TROUBLESHOOTING APLICADO**

### **Corrección de puertos:**
- **Situación:** Error inicial en asignación de puertos
- **Corrección:** Uso de puertos diferentes (8081, 8002)
- **Aprendizaje:** Cada contenedor necesita puerto único

### **Gestión de versiones:**
- **Verificación:** Confirmación de que todas las versiones funcionan
- **Método:** Prueba en navegador de las 3 URLs
- **Resultado:** Consistencia confirmada entre versiones

---

## **🎯 OBJETIVOS ALCANZADOS**

### **✅ Comprensión de tags:**
- Concepto de versionado con Docker tags
- Diferencia entre nombre base y tag específico
- Gestión de múltiples versiones simultáneas

### **✅ Gestión práctica:**
- Creación de imágenes con tags específicos
- Ejecución de contenedores desde versiones específicas
- Verificación de funcionamiento simultáneo

### **✅ Optimización:**
- Comprensión del cache de Docker
- Builds incrementales eficientes
- Gestión de recursos optimizada

### **✅ Workflow profesional:**
- Versionado sistemático de aplicaciones
- Gestión de entornos (development, production)
- Limpieza ordenada de recursos

---

## **🚀 PREPARACIÓN PARA EJERCICIO 3**

### **Estado actual:**
- **Imágenes:** 3 versiones de mi-devops-app disponibles
- **Contenedores:** 1 activo (mi-app original)
- **Concepto:** Tags y versionado completamente comprendidos

### **Próximo ejercicio:**
**Ejercicio 3: Registry y Distribución** - Explorar Docker Hub y gestión de imágenes

### **Conceptos preparados:**
- Diferencia entre repositorio local y remoto
- Distribución de imágenes
- Gestión de layers y optimización

---

## **📋 RESUMEN EJECUTIVO**

**✅ Ejercicio 2 completado exitosamente:**
- **Concepto:** Gestión de tags para versionado de aplicaciones
- **Práctica:** 3 versiones simultáneas funcionando correctamente
- **Skills:** Versionado, gestión múltiple, optimización de builds
- **Workflow:** Creación → Verificación → Prueba → Limpieza
- **Preparado para:** Gestión avanzada de registries y distribución

---

*Ejercicio 2 completado: 2025-09-14 | Tags y versionado dominados | Gestión simultánea de versiones*
