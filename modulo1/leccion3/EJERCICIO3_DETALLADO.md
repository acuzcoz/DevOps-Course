# 🎯 EJERCICIO 3 DETALLADO: Registry y Distribución

**Lección:** 3 - Imágenes vs Contenedores  
**Fecha:** 2025-09-15  
**Duración:** ~30 minutos  
**Estado:** ✅ **COMPLETADO**

---

## **🎯 OBJETIVO**
Explorar Docker Hub como registry, comprender la arquitectura de layers y aprender optimización práctica de imágenes Docker.

---

## **📋 COMANDOS PASO A PASO**

### **🎯 EJERCICIO 3A: Explorar Docker Hub** ✅

#### **PASO 1: Buscar imágenes en Docker Hub**

#### **Comando ejecutado:**
```bash
docker search nginx
│      │      │
│      │      └── Término de búsqueda: nginx (servidor web popular)
│      └── Subcomando: buscar imágenes en Docker Hub registry
└── Comando: Docker CLI
```

#### **Resultado obtenido:**
```
NAME                                     DESCRIPTION                                     STARS     OFFICIAL
nginx                                    Official build of Nginx.                        20977     [OK]
nginx/nginx-ingress                      NGINX and  NGINX Plus Ingress Controllers fo…   110       
nginx/nginx-prometheus-exporter          NGINX Prometheus Exporter for NGINX and NGIN…   50        
nginx/unit                               This repository is retired, use the Docker o…   66        
nginx/nginx-ingress-operator             NGINX Ingress Operator for NGINX and NGINX P…   2         
nginx/docker-extension                                                                   0         
nginx/nginx-quic-qns                     NGINX QUIC interop                              1         
nginx/nginxaas-loadbalancer-kubernetes                                                   1         
nginx/unit-preview                       Unit preview features                           0         
bitnami/nginx                            Bitnami container image for NGINX               200       
ubuntu/nginx                             Nginx, a high-performance reverse proxy & we…   133       
bitnamicharts/nginx                      Bitnami Helm chart for NGINX Open Source        1         
kasmweb/nginx                            An Nginx image based off nginx:alpine and in…   8         
rancher/nginx                                                                            2         
linuxserver/nginx                        An Nginx container, brought to you by LinuxS…   231       
dtagdevsec/nginx                         T-Pot Nginx                                     0         
paketobuildpacks/nginx                                                                   0         
vmware/nginx                                                                             3         
chainguard/nginx                         Build, ship and run secure software with Cha…   4         
gluufederation/nginx                      A customized NGINX image containing a consu…   1         
intel/nginx                                                                              0         
antrea/nginx                             Nginx server used for Antrea e2e testing        0         
circleci/nginx                           This image is for internal use                  2         
docksal/nginx                            Nginx service image for Docksal                 1         
corpusops/nginx                          https://github.com/corpusops/docker-images/     1  
```

#### **Análisis de Docker Hub:**
- ✅ **25 imágenes** encontradas con término "nginx"
- ✅ **Imagen oficial:** `nginx` (primera en la lista)
- ✅ **20,977 estrellas** - Extremadamente popular
- ✅ **OFFICIAL [OK]** - Verificada y mantenida por Docker
- ✅ **Variedad:** Organizaciones (nginx/, bitnami/, ubuntu/) y usuarios individuales

#### **Conceptos de Docker Hub aprendidos:**
- **Registry público:** Repositorio centralizado de imágenes
- **Imágenes oficiales:** Verificadas y mantenidas por Docker Inc.
- **Organizaciones:** Prefijos como nginx/, bitnami/ indican organizaciones
- **Popularidad:** Stars indican adopción y confianza de la comunidad
- **Descripción:** Información sobre propósito y características

---

### **🎯 EJERCICIO 3B: Analizar Layers de Imagen** ✅

#### **PASO 2: Descargar imagen nginx:alpine**

#### **Descargar imagen:**
```bash
docker pull nginx:alpine
│      │    │      │
│      │    │      └── Tag específico: alpine (versión ligera basada en Alpine Linux)
│      │    └── Imagen: nginx oficial
│      └── Subcomando: descargar imagen desde Docker Hub
└── Comando: Docker CLI
```

#### **Proceso de descarga observado:**
```
alpine: Pulling from library/nginx
6e174226ea69: Already exists 
49f3b06c840f: Already exists 
04ba7957f9d2: Already exists 
6156ecb6dfff: Already exists 
0bc2f07fbf03: Already exists 
6c2c01fdb094: Already exists 
66ce170f7dd8: Already exists 
021cb5923c0e: Pull complete 
Digest: sha256:42a516af16b852e33b7682d5ef8acbd5d13fe08fecadc7ed98605ba5e3b26ab8
Status: Downloaded newer image for nginx:alpine
```

#### **Análisis del pull:**
- ✅ **7 layers ya existían** ("Already exists") - Optimización de Docker
- ✅ **1 layer nueva** descargada ("Pull complete")
- ✅ **Digest:** Identificador único de la imagen
- ✅ **Eficiencia:** Docker reutilizó layers compartidas con otras imágenes

#### **Analizar layers de la imagen:**
```bash
docker image history nginx:alpine
│      │     │       │      │
│      │     │       │      └── Tag específico: alpine
│      │     │       └── Imagen a analizar
│      │     └── Subcomando: mostrar historial de construcción (layers)
│      └── Recurso: imagen
└── Comando: Docker CLI
```

#### **Resultado del análisis de layers:**
```
IMAGE          CREATED        CREATED BY                                      SIZE      COMMENT
35f3cbee4fb7   4 weeks ago    RUN /bin/sh -c set -x     && apkArch="$(cat …   40.2MB    buildkit.dockerfile.v0
<missing>      4 weeks ago    ENV NJS_RELEASE=1                               0B        buildkit.dockerfile.v0
<missing>      4 weeks ago    ENV NJS_VERSION=0.9.1                           0B        buildkit.dockerfile.v0
<missing>      4 weeks ago    CMD ["nginx" "-g" "daemon off;"]                0B        buildkit.dockerfile.v0
<missing>      4 weeks ago    STOPSIGNAL SIGQUIT                              0B        buildkit.dockerfile.v0
<missing>      4 weeks ago    EXPOSE map[80/tcp:{}]                           0B        buildkit.dockerfile.v0
<missing>      4 weeks ago    ENTRYPOINT ["/docker-entrypoint.sh"]            0B        buildkit.dockerfile.v0
<missing>      4 weeks ago    COPY 30-tune-worker-processes.sh /docker-ent…   4.62kB    buildkit.dockerfile.v0
<missing>      4 weeks ago    COPY 20-envsubst-on-templates.sh /docker-ent…   3.02kB    buildkit.dockerfile.v0
<missing>      4 weeks ago    COPY 15-local-resolvers.envsh /docker-entryp…   389B      buildkit.dockerfile.v0
<missing>      4 weeks ago    COPY 10-listen-on-ipv6-by-default.sh /docker…   2.12kB    buildkit.dockerfile.v0
<missing>      4 weeks ago    COPY docker-entrypoint.sh / # buildkit          1.62kB    buildkit.dockerfile.v0
<missing>      4 weeks ago    RUN /bin/sh -c set -x     && addgroup -g 101…   4.25MB    buildkit.dockerfile.v0
<missing>      4 weeks ago    ENV DYNPKG_RELEASE=1                            0B        buildkit.dockerfile.v0
<missing>      4 weeks ago    ENV PKG_RELEASE=1                               0B        buildkit.dockerfile.v0
<missing>      4 weeks ago    ENV NGINX_VERSION=1.29.1                        0B        buildkit.dockerfile.v0
<missing>      4 weeks ago    LABEL maintainer=NGINX Docker Maintainers <d…   0B        buildkit.dockerfile.v0
<missing>      2 months ago   CMD ["/bin/sh"]                                 0B        buildkit.dockerfile.v0
<missing>      2 months ago   ADD alpine-minirootfs-3.22.1-aarch64.tar.gz …   8.51MB    buildkit.dockerfile.v0
```

#### **Análisis detallado de layers:**

##### **Layers con contenido (SIZE > 0):**
1. **40.2MB:** Instalación principal de nginx + configuración
2. **4.25MB:** Creación de usuario nginx y configuración de permisos
3. **8.51MB:** Alpine Linux base (minirootfs)
4. **Scripts:** 4.62kB + 3.02kB + 2.12kB + 1.62kB + 389B (configuración)

##### **Layers de metadata (SIZE = 0B):**
- **Variables de entorno:** ENV commands (NGINX_VERSION, NJS_VERSION, etc.)
- **Configuración:** CMD, ENTRYPOINT, EXPOSE, STOPSIGNAL
- **Documentación:** LABEL con información del maintainer

##### **Total:** 18 layers, ~53MB de tamaño final

---

### **🎯 EJERCICIO 3C: Comparar con imagen nginx completa** ✅

#### **PASO 3: Descargar nginx:latest**

#### **Descargar nginx:latest:**
```bash
docker pull nginx:latest
│      │    │      │
│      │    │      └── Tag: latest (versión por defecto, basada en Debian)
│      │    └── Imagen: nginx oficial
│      └── Subcomando: descargar imagen
└── Comando: Docker CLI
```

#### **Proceso de descarga:**
```
latest: Pulling from library/nginx
0878ecc8b0af: Pull complete 
d482c1064d09: Pull complete 
8f42b11f40a7: Pull complete 
75e874aacbee: Pull complete 
68e4d7b9f947: Pull complete 
605513a168b0: Pull complete 
fdf316665463: Pull complete 
Digest: sha256:d5f28ef21aabddd098f3dbc21fe5b7a7d7a184720bc07da0b6c9b9820e97f25e
Status: Downloaded newer image for nginx:latest
```

#### **Comparar tamaños:**
```bash
docker images nginx
│      │      │
│      │      └── Filtro: mostrar solo imágenes nginx
│      └── Subcomando: listar imágenes locales
└── Comando: Docker CLI
```

#### **Resultado de comparación:**
```
REPOSITORY   TAG       IMAGE ID       CREATED       SIZE
nginx        latest    17848b7d08d1   4 weeks ago   198MB
nginx        alpine    35f3cbee4fb7   4 weeks ago   52.9MB
```

#### **Análisis de optimización:**

##### **nginx:latest (Debian-based):**
- **Tamaño:** 198MB
- **Base:** Debian Linux completo
- **Ventajas:** Más herramientas incluidas, mayor compatibilidad
- **Desventajas:** Mayor tamaño, más superficie de ataque

##### **nginx:alpine (Alpine-based):**
- **Tamaño:** 52.9MB
- **Base:** Alpine Linux minimalista
- **Ventajas:** 3.7x más pequeña, más segura, arranque más rápido
- **Desventajas:** Menos herramientas incluidas

##### **Diferencia:** 145.1MB (73% de reducción con Alpine)

---

### **🎯 EJERCICIO 3D: Crear imagen optimizada personalizada** ✅

#### **PASO 4: Preparar estructura de trabajo**

#### **Preparar estructura de trabajo:**
```bash
mkdir EJERCICIO-3D
│     │
│     └── Directorio: crear carpeta para ejercicio de optimización
└── Comando: make directory
```

```bash
cd EJERCICIO-3D
│  │
│  └── Directorio destino: entrar al directorio del ejercicio
└── Comando: change directory
```

#### **Copiar proyecto base:**
```bash
cp -r ../../leccion1/mi-primer-devops ./
│  │  │                              │
│  │  │                              └── Destino: directorio actual
│  │  └── Origen: proyecto del ejercicio integrado
│  └── Flag: -r (recursive) para copiar directorios completos
└── Comando: copy
```

#### **Crear Dockerfile optimizado:**
```bash
echo 'FROM nginx:alpine
COPY src/index.html /usr/share/nginx/html/
RUN echo "Optimized build: $(date)" > /usr/share/nginx/html/build-info.txt' > Dockerfile.optimized
│    │                                                                                                │
│    │                                                                                                └── Archivo: Dockerfile alternativo
│    └── Contenido: Dockerfile con base Alpine + archivo adicional
└── Comando: crear archivo con contenido
```

#### **Mover Dockerfile al proyecto:**
```bash
mv Dockerfile.optimized mi-primer-devops/
│  │                   │
│  │                   └── Destino: dentro del proyecto copiado
│  └── Archivo: Dockerfile optimizado
└── Comando: move (mover archivo)
```

#### **Navegar al proyecto:**
```bash
cd mi-primer-devops
│  │
│  └── Directorio: entrar al proyecto con Dockerfile
└── Comando: change directory
```

---

### **PASO 5: Construir imagen optimizada** ✅

#### **Comando de build:**
```bash
docker build -f Dockerfile.optimized -t mi-devops-app:optimized .
│      │     │  │                   │  │                    │
│      │     │  │                   │  │                    └── 6. CONTEXTO: directorio actual (donde busca archivos)
│      │     │  │                   │  └── 5. TAG: etiqueta "optimized"
│      │     │  │                   └── 4. NOMBRE: "mi-devops-app"
│      │     │  └── 3. DOCKERFILE: archivo específico "Dockerfile.optimized"
│      │     └── 2. FLAG: -f (file) especifica qué Dockerfile usar
│      └── 1. SUBCOMANDO: build (construir imagen)
└── COMANDO: Docker CLI
```

#### **Proceso de build observado:**
```
[+] Building 0.2s (8/8) FINISHED
 => [internal] load build definition from Dockerfile.optimized
 => [internal] load metadata for docker.io/library/nginx:alpine
 => [internal] load .dockerignore
 => [internal] load build context
 => CACHED [1/3] FROM docker.io/library/nginx:alpine
 => [2/3] COPY src/index.html /usr/share/nginx/html/
 => [3/3] RUN echo "Optimized build: $(date)" > /usr/share/nginx/html/build-info.txt
 => exporting to image
 => => writing image sha256:96315632d4034bf0138418088e2731843ed080b237a1ffe35011a1f554d4a0ac
 => => naming to docker.io/library/mi-devops-app:optimized
```

#### **Análisis del build:**
- ✅ **Build exitoso:** 8/8 pasos completados en 0.2s
- ✅ **Optimización:** CACHED [1/3] - Base nginx:alpine reutilizada
- ✅ **Nuevos layers:** COPY del HTML + RUN del build-info
- ✅ **Image ID:** `sha256:96315632d4034bf0138418088e2731843ed080b237a1ffe35011a1f554d4a0ac`
- ✅ **Eficiencia:** Build muy rápido por reutilización de cache

---

### **PASO 6: Comparar todas las versiones** ✅

#### **Comando de comparación:**
```bash
docker images mi-devops-app
│      │      │
│      │      └── Filtro: mostrar solo imágenes mi-devops-app
│      └── Subcomando: listar imágenes locales
└── Comando: Docker CLI
```

#### **Resultado de comparación:**
```
REPOSITORY      TAG           IMAGE ID       CREATED          SIZE
mi-devops-app   optimized     96315632d403   58 seconds ago   52.9MB
mi-devops-app   development   738d9e171a3a   5 hours ago      12.8MB
mi-devops-app   latest        9c0e1912aeaf   5 hours ago      12.8MB
mi-devops-app   v1.0          023f675bbaa0   5 hours ago      12.8MB
```

#### **Análisis de tamaños:**

##### **Versiones 12.8MB (latest, v1.0, development):**
- **Base:** `nginx:alpine-slim` (ultra minimalista)
- **Contenido:** Solo HTML básico
- **Optimización:** Máxima reducción de tamaño

##### **Versión optimized 52.9MB:**
- **Base:** `nginx:alpine` (completa pero ligera)
- **Contenido:** HTML + archivo build-info.txt + herramientas adicionales
- **Trade-off:** Más funcionalidad vs mayor tamaño

##### **Lección aprendida:**
- **alpine-slim:** Ultra minimalista (12.8MB base)
- **alpine:** Completa pero ligera (52.9MB base)
- **latest (debian):** Completa pesada (198MB base)

---

### **PASO 7: Probar imagen optimizada** ✅

#### **Ejecutar contenedor:**
```bash
docker run -d -p 8090:80 --name app-optimized mi-devops-app:optimized
│      │   │  │         │      │            │                │
│      │   │  │         │      │            │                └── 7. IMAGEN: versión optimizada específica
│      │   │  │         │      │            └── 6. NOMBRE: identificador del contenedor
│      │   │  │         │      └── 5. FLAG: asignar nombre personalizado
│      │   │  │         └── 4. PUERTO: 8090 del host → 80 del contenedor
│      │   │  └── 3. FLAG: mapear puertos host:container
│      │   └── 2. FLAG: ejecutar en background (detached)
│      └── 1. SUBCOMANDO: ejecutar contenedor
└── COMANDO: Docker CLI
```

**Container ID obtenido:** `7521297f12c16f64230b94896730ff07e4581b6c3ddceb0020e080da41fe1fb5`

#### **Verificar funcionalidad adicional:**
```bash
curl http://localhost:8090/build-info.txt
│    │                        │
│    │                        └── 3. ARCHIVO: archivo creado durante build
│    └── 2. URL: localhost puerto 8090 (contenedor optimizado)
└── 1. COMANDO: client URL (descargar contenido web)
```

#### **Resultado obtenido:**
```
Optimized build: Mon Sep 15 05:23:36 UTC 2025
```

#### **Análisis del resultado:**
- ✅ **Funcionalidad:** Archivo build-info.txt accesible
- ✅ **Timestamp:** Fecha exacta de construcción de la imagen
- ✅ **Personalización:** Contenido adicional agregado durante build
- ✅ **Verificación:** Imagen optimizada funcionando correctamente

---

### **PASO 8: Limpieza** ✅

#### **Detener contenedor:**
```bash
docker stop app-optimized
│      │    │
│      │    └── Nombre del contenedor a detener
│      └── Subcomando: detener contenedor gracefully
└── Comando: Docker CLI
```

**Resultado:** `app-optimized` - Contenedor detenido exitosamente

#### **Volver al directorio de lección:**
```bash
cd ../..
│  │  │
│  │  └── leccion3 (directorio destino)
│  └── EJERCICIO-3D (salir del ejercicio)
└── mi-primer-devops (salir del proyecto)
```

---

## **💡 CONCEPTOS TÉCNICOS APRENDIDOS**

### **Docker Hub como Registry:**
- **Función:** Repositorio centralizado para distribución de imágenes
- **Imágenes oficiales:** Verificadas y mantenidas por Docker Inc.
- **Popularidad:** Stars indican adopción de la comunidad
- **Organizaciones:** Prefijos indican mantenedores (nginx/, bitnami/, ubuntu/)
- **Búsqueda:** `docker search` para explorar imágenes disponibles

### **Arquitectura de Layers:**
- **Concepto:** Imágenes construidas en capas incrementales
- **Eficiencia:** Layers compartidas entre imágenes similares
- **Cache:** Docker reutiliza layers existentes en builds
- **Optimización:** Layers con SIZE = 0B son solo metadata
- **Historial:** `docker image history` muestra construcción completa

### **Estrategias de Optimización:**
- **Base images:** alpine < debian en tamaño
- **Variantes:** alpine-slim < alpine < latest
- **Trade-offs:** Tamaño vs funcionalidad vs compatibilidad
- **Multi-stage builds:** Técnica avanzada para reducir tamaño final

### **Gestión de Versiones:**
- **Tags descriptivos:** latest, alpine, slim, specific versions
- **Versionado semántico:** v1.0, v2.0, etc.
- **Entornos:** development, staging, production
- **Optimización:** Diferentes versiones para diferentes propósitos

---

## **🔧 COMANDOS CLAVE APRENDIDOS**

### **Registry y búsqueda:**
```bash
docker search término
docker pull imagen:tag
```

### **Análisis de imágenes:**
```bash
docker image history imagen:tag
docker image inspect imagen:tag
docker images filtro
```

### **Build avanzado:**
```bash
docker build -f Dockerfile.alternativo -t nombre:tag contexto
```

### **Comparación y optimización:**
```bash
docker images nombre  # Comparar tamaños
curl http://localhost:puerto/archivo  # Verificar funcionalidad
```

---

## **📊 MÉTRICAS DEL EJERCICIO**

### **Imágenes analizadas:**
- **nginx (Docker Hub):** 20,977 stars, imagen oficial
- **nginx:latest:** 198MB (Debian-based)
- **nginx:alpine:** 52.9MB (Alpine-based)
- **mi-devops-app:optimized:** 52.9MB (personalizada)

### **Optimizaciones demostradas:**
- **Debian → Alpine:** 73% reducción de tamaño (198MB → 52.9MB)
- **Alpine-slim:** Hasta 12.8MB (ultra minimalista)
- **Layer reuse:** Build 0.2s por cache de Docker

### **Comandos ejecutados:**
- **docker search:** 1 vez (exploración)
- **docker pull:** 2 veces (alpine, latest)
- **docker image history:** 1 vez (análisis layers)
- **docker images:** 3 veces (comparaciones)
- **docker build:** 1 vez (imagen optimizada)
- **docker run:** 1 vez (prueba funcionalidad)
- **curl:** 1 vez (verificación archivo)

### **Tiempo total:** ~30 minutos (incluyendo análisis y documentación)

---

## **🔧 TROUBLESHOOTING APLICADO**

### **Error de contexto de build:**
- **Problema:** `"/src/index.html": not found`
- **Causa:** Dockerfile en directorio sin estructura src/
- **Solución:** Copiar proyecto completo con `cp -r`
- **Aprendizaje:** Contexto de build debe contener archivos referenciados

### **Gestión de archivos:**
- **Estrategia:** Copiar proyecto completo vs archivos individuales
- **Organización:** Crear directorio específico para ejercicio
- **Estructura:** Mantener organización clara de archivos

---

## **🎯 OBJETIVOS ALCANZADOS**

### **✅ Exploración de Registry:**
- Docker Hub explorado y comprendido
- Imágenes oficiales vs comunitarias identificadas
- Popularidad y confiabilidad evaluadas

### **✅ Análisis de Layers:**
- Arquitectura de 18 layers comprendida
- Diferencia entre layers con contenido vs metadata
- Optimización por reutilización de cache

### **✅ Optimización práctica:**
- Comparación Debian vs Alpine demostrada
- Imagen personalizada optimizada creada
- Trade-offs de tamaño vs funcionalidad comprendidos

### **✅ Verificación funcional:**
- Imagen optimizada probada exitosamente
- Funcionalidad adicional (build-info.txt) verificada
- Workflow completo de optimización aplicado

---

## **🐙 GIT WORKFLOW PROFESIONAL**

### **PASO 9: Documentación y versionado del ejercicio** ✅

#### **Verificar estado del repositorio:**
```bash
git status
│   │
│   └── Subcomando: mostrar estado actual del repositorio Git
└── Comando: Git CLI
```

**Propósito:** Ver qué archivos han sido modificados, creados o están pendientes de commit

#### **Agregar archivos al staging area:**
```bash
git add .
│   │   │
│   │   └── Argumento: todos los archivos del directorio actual y subdirectorios
│   └── Subcomando: preparar archivos para commit (staging area)
└── Comando: Git CLI
```

**Propósito:** Preparar todos los cambios (documentación nueva) para el commit

#### **Crear commit con mensaje descriptivo:**
```bash
git commit -m "feat(leccion3): ejercicio 3 completado - registry y distribución

- Exploración Docker Hub: nginx oficial con 20,977 stars
- Análisis layers: nginx:alpine con 18 layers (~53MB)
- Comparación optimización: alpine vs debian (52.9MB vs 198MB)
- Imagen personalizada: mi-devops-app:optimized con build-info.txt
- Verificación funcional: contenedor optimizado funcionando
- Documentación: ejercicio detallado con anatomía completa
- Concepto: registry, layers, optimización práctica"
│   │      │  │
│   │      │  └── Mensaje: descripción detallada del ejercicio completado
│   │      └── Flag: message (especificar mensaje del commit)
│   └── Subcomando: confirmar cambios en repositorio local
└── Comando: Git CLI
```

#### **Sincronizar con GitHub:**
```bash
git push origin main
│   │    │      │
│   │    │      └── Branch: main (rama principal del repositorio)
│   │    └── Repositorio remoto: origin (GitHub)
│   └── Subcomando: subir cambios al repositorio remoto
└── Comando: Git CLI
```

### **Convenciones de commits utilizadas:**

#### **Formato del mensaje:**
```
feat(leccion3): descripción breve

- Detalle específico 1
- Detalle específico 2
- Detalle específico 3
- Concepto clave aprendido
```

#### **Beneficios del workflow:**
- **Trazabilidad:** Cada ejercicio documentado y versionado
- **Progreso:** Avance del curso completamente rastreado
- **Colaboración:** Cambios disponibles en repositorio público
- **Backup:** Documentación respaldada en GitHub

---

## **🚀 PREPARACIÓN PARA EJERCICIO 4**

### **Estado actual:**
- **Registry:** Docker Hub explorado y comprendido
- **Layers:** Arquitectura y optimización dominadas
- **Imágenes:** 4 versiones de mi-devops-app disponibles
- **Optimización:** Estrategias prácticas aplicadas

### **Próximo ejercicio:**
**Ejercicio 4: Optimización Avanzada** - Multi-stage builds y técnicas profesionales

### **Conceptos preparados:**
- Reducción drástica de tamaño final
- Separación de build vs runtime
- Técnicas profesionales de optimización

---

## **📋 RESUMEN EJECUTIVO**

**✅ Ejercicio 3 completado exitosamente:**
- **Registry:** Docker Hub explorado (nginx con 20,977 stars)
- **Layers:** Arquitectura de 18 layers analizada
- **Optimización:** Alpine vs Debian (73% reducción)
- **Personalización:** Imagen optimizada con funcionalidad adicional
- **Verificación:** Funcionalidad completa probada
- **Skills:** Registry, layers, optimización práctica dominados
- **Preparado para:** Técnicas avanzadas de optimización

---

*Ejercicio 3 completado: 2025-09-15 | Registry y distribución dominados | Optimización práctica aplicada*
