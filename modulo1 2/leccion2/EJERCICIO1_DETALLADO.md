# 🎯 EJERCICIO 1 DETALLADO: Gestión Básica de Contenedores

**Lección:** 2 - Comandos Docker Básicos  
**Fecha:** 2025-09-14  
**Duración:** ~20 minutos  
**Estado:** ✅ **COMPLETADO**

---

## **🎯 OBJETIVO**
Aprender a ejecutar contenedores con diferentes configuraciones, comprender port mapping, naming y verificar funcionamiento en navegador.

---

## **📋 COMANDOS PASO A PASO**

### **PASO 1: Ver contenedores actuales** ✅

#### **Comando ejecutado:**
```bash
docker ps
│      │
│      └── Subcomando: mostrar contenedores corriendo (process status)
└── Comando: Docker CLI
```

#### **Resultado obtenido:**
```
CONTAINER ID   IMAGE           COMMAND                  CREATED       STATUS       PORTS                                     NAMES
bb83ce3c78b3   mi-devops-app   "/docker-entrypoint.…"   2 hours ago   Up 2 hours   0.0.0.0:3000->80/tcp, [::]:3000->80/tcp   mi-app
```

#### **Análisis del resultado:**
- **CONTAINER ID:** `bb83ce3c78b3` - Identificador único corto
- **IMAGE:** `mi-devops-app` - Imagen del ejercicio integrado anterior
- **COMMAND:** `/docker-entrypoint.…` - Comando de inicio de nginx
- **CREATED:** `2 hours ago` - Tiempo desde creación
- **STATUS:** `Up 2 hours` - Contenedor corriendo por 2 horas
- **PORTS:** `0.0.0.0:3000->80/tcp` - Puerto 3000 del host → puerto 80 del contenedor
- **NAMES:** `mi-app` - Nombre asignado al contenedor

#### **Conceptos aprendidos:**
- **Estado inicial:** Ya hay un contenedor corriendo del ejercicio anterior
- **Port mapping:** Formato `host_port->container_port/protocol`
- **Naming:** Nombres facilitan referencia vs IDs largos

---

### **PASO 2: Ejecutar contenedor Ubuntu interactivo** ✅

#### **Comando ejecutado:**
```bash
docker run -it ubuntu bash
│      │   │  │      │
│      │   │  │      └── Comando a ejecutar dentro del contenedor
│      │   │  └── Imagen: sistema operativo Ubuntu
│      │   └── Flag: interactive + tty (terminal interactivo)
│      └── Subcomando: ejecutar contenedor
└── Comando: Docker CLI
```

#### **Proceso observado:**
```
Unable to find image 'ubuntu:latest' locally
latest: Pulling from library/ubuntu
cc43ec4c1381: Pull complete 
Digest: sha256:9cbed754112939e914291337b5e554b07ad7c392491dba6daf25eef1332a22e8
Status: Downloaded newer image for ubuntu:latest
root@c09274485b5c:/#
```

#### **Análisis del proceso:**
1. **Imagen no local:** Docker busca en Docker Hub automáticamente
2. **Descarga:** Pull de la imagen ubuntu:latest (101MB)
3. **Creación:** Nuevo contenedor con ID `c09274485b5c`
4. **Ejecución:** Terminal interactivo como root
5. **Prompt:** `root@c09274485b5c:/#` indica que estamos dentro del contenedor

#### **Experimento dentro del contenedor:**
```bash
# Dentro del contenedor Ubuntu
root@c09274485b5c:/# docker run --name mi-servidor -d -p 8080:80 nginx
bash: docker: command not found
```

#### **Error esperado y aprendizaje:**
- **Causa:** Docker no está instalado dentro del contenedor Ubuntu
- **Concepto:** Contenedores son aislados, no tienen acceso al Docker host
- **Solución:** Salir del contenedor para ejecutar comandos Docker

#### **Salida del contenedor:**
```bash
root@c09274485b5c:/# exit
exit
➜  DevOps-Course git:(main)
```

---

### **PASO 3: Ejecutar servidor web nginx** ✅

#### **Comando ejecutado:**
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

#### **Proceso observado:**
```
Unable to find image 'nginx:latest' locally
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
05cc04c58f19e69aaf3d0c2e753bdbb68f174a09250f8b78299af967342fc2ca
```

#### **Análisis del proceso:**
1. **Descarga automática:** nginx:latest (198MB) descargado en 7 capas
2. **Container ID:** `05cc04c58f19...` - Nuevo contenedor creado
3. **Modo detached:** Contenedor corriendo en background
4. **Sin output:** Normal para modo detached

---

### **PASO 4: Verificar nuevo contenedor** ✅

#### **Comando ejecutado:**
```bash
docker ps
```

#### **Resultado obtenido:**
```
CONTAINER ID   IMAGE           COMMAND                  CREATED          STATUS          PORTS                                     NAMES
05cc04c58f19   nginx           "/docker-entrypoint.…"   48 minutes ago   Up 48 minutes   0.0.0.0:8080->80/tcp, [::]:8080->80/tcp   mi-servidor
bb83ce3c78b3   mi-devops-app   "/docker-entrypoint.…"   2 hours ago      Up 2 hours      0.0.0.0:3000->80/tcp, [::]:3000->80/tcp   mi-app
```

#### **Análisis comparativo:**
- **Dos contenedores corriendo:** mi-servidor (nuevo) y mi-app (anterior)
- **Puertos diferentes:** 8080 vs 3000 - Sin conflictos
- **Imágenes diferentes:** nginx vs mi-devops-app
- **Estados:** Ambos "Up" y funcionando

---

### **PASO 5: Verificación en navegador** ✅

#### **URL probada:**
http://localhost:8080

#### **Resultado obtenido:**
```html
Welcome to nginx!

If you see this page, the nginx web server is successfully installed and working. Further configuration is required.

For online documentation and support please refer to nginx.org.
Commercial support is available at nginx.com.

Thank you for using nginx.
```

#### **Análisis del resultado:**
- ✅ **Conexión exitosa:** Puerto 8080 mapeado correctamente
- ✅ **Nginx funcionando:** Página por defecto visible
- ✅ **Port mapping:** Host:8080 → Container:80 operativo
- ✅ **Contenedor saludable:** Servidor web respondiendo

---

## **🔧 CONCEPTOS TÉCNICOS APRENDIDOS**

### **Port Mapping:**
- **Sintaxis:** `-p host_port:container_port`
- **Ejemplo:** `-p 8080:80` mapea puerto 8080 del host al 80 del contenedor
- **Protocolo:** TCP por defecto (puede especificarse con `/tcp` o `/udp`)
- **Binding:** `0.0.0.0:8080` significa accesible desde cualquier IP del host

### **Container Naming:**
- **Flag:** `--name nombre_personalizado`
- **Ventaja:** Fácil referencia vs IDs largos
- **Unicidad:** Nombres deben ser únicos en el sistema
- **Convención:** Usar nombres descriptivos (web-server, database, etc.)

### **Detached Mode:**
- **Flag:** `-d` (detached)
- **Comportamiento:** Contenedor corre en background
- **Output:** Solo muestra Container ID
- **Uso:** Ideal para servicios (web servers, databases)

### **Interactive Mode:**
- **Flag:** `-it` (interactive + tty)
- **Comportamiento:** Terminal interactivo dentro del contenedor
- **Uso:** Ideal para exploración, debugging, comandos manuales
- **Salida:** `exit` para volver al host

### **Descarga automática:**
- **Comportamiento:** Docker busca imágenes localmente primero
- **Fallback:** Si no existe local, descarga de Docker Hub
- **Capas:** Imágenes se descargan en múltiples capas
- **Cache:** Capas compartidas se reutilizan entre imágenes

---

## **📊 MÉTRICAS DEL EJERCICIO**

### **Recursos creados:**
- **Contenedores:** 2 nuevos (ubuntu terminado, nginx corriendo)
- **Imágenes descargadas:** 2 (ubuntu:latest 101MB, nginx:latest 198MB)
- **Puertos mapeados:** 8080:80 (nginx)
- **Espacio usado:** ~299MB adicional

### **Comandos ejecutados:**
- **docker ps:** 2 veces (antes y después)
- **docker run:** 2 veces (ubuntu interactivo, nginx detached)
- **exit:** 1 vez (salir de ubuntu)

### **Tiempo total:** ~20 minutos (incluyendo descargas)

---

## **💡 TROUBLESHOOTING APLICADO**

### **Error esperado: Docker dentro de contenedor**
- **Situación:** Intentar ejecutar `docker` dentro del contenedor Ubuntu
- **Error:** `bash: docker: command not found`
- **Causa:** Docker no está instalado en el contenedor Ubuntu
- **Concepto:** Aislamiento de contenedores
- **Solución:** Salir del contenedor con `exit`

### **Verificación de funcionamiento:**
- **Método:** Abrir URL en navegador
- **Expectativa:** Página de nginx visible
- **Resultado:** ✅ "Welcome to nginx!" confirmado
- **Aprendizaje:** Verificación visual es importante

---

## **🎯 OBJETIVOS ALCANZADOS**

### **✅ Gestión básica de contenedores:**
- Ejecutar contenedores en modo interactivo
- Ejecutar contenedores en modo detached
- Asignar nombres personalizados
- Mapear puertos correctamente

### **✅ Comprensión de conceptos:**
- Diferencia entre modo interactivo y detached
- Port mapping y acceso desde host
- Descarga automática de imágenes
- Aislamiento de contenedores

### **✅ Verificación práctica:**
- Contenedores funcionando simultáneamente
- Servicios web accesibles desde navegador
- Estados de contenedores monitoreados

---

## **🚀 PREPARACIÓN PARA EJERCICIO 2**

### **Estado actual:**
- **2 contenedores corriendo:** mi-app (puerto 3000), mi-servidor (puerto 8080)
- **3 imágenes disponibles:** mi-devops-app, ubuntu, nginx
- **Puertos ocupados:** 3000, 8080

### **Próximo ejercicio:**
**Ejercicio 2: Ciclo de Vida de Contenedores** - Aprender stop, start, restart

---

*Ejercicio 1 completado: 2025-09-14 | Conceptos básicos dominados | Preparado para gestión avanzada*
