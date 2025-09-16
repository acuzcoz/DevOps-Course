# 🚀 EJERCICIO 1 DETALLADO: MI PRIMER DOCKERFILE
## Servidor Web Nginx con Página HTML Personalizada

**Fecha:** 2025-09-16  
**Módulo:** 2 - Dockerfile desde Cero  
**Lección:** 4 - Anatomía de Dockerfile  
**Estado:** ✅ **COMPLETADO**

---

## **🎯 OBJETIVO DEL EJERCICIO**

Crear el primer Dockerfile funcional desde cero, aplicando las instrucciones básicas y dominando la anatomía de comandos Docker.

### **Resultado esperado:**
- ✅ Dockerfile con 3 instrucciones básicas
- ✅ Página HTML personalizada servida por Nginx
- ✅ Contenedor funcionando en puerto 8080
- ✅ Anatomía de comandos Docker dominada

---

## **📋 COMANDOS EJECUTADOS CON ANATOMÍA COMPLETA**

### **1. Creación de estructura del proyecto**

```bash
cd ~/Library/CloudStorage/OneDrive-NEWWORLDEDUCATIONSAUS.A/DevOps-Course/modulo2/leccion4
│  │
│  └── Argumento: directorio de la lección
└── Comando: cambiar directorio (change directory)
```

```bash
mkdir mi-primer-dockerfile
│     │
│     └── Argumento: nombre del directorio a crear
└── Comando: crear directorio (make directory)
```

```bash
cd mi-primer-dockerfile
│  │
│  └── Argumento: directorio al que cambiar
└── Comando: cambiar directorio (change directory)
```

### **2. Creación de archivo HTML**

```bash
touch index.html
│     │
│     └── Argumento: nombre del archivo a crear
└── Comando: crear archivo vacío o actualizar timestamp
```

```bash
echo '<!DOCTYPE html>
<html>
<head>
    <title>Mi Primer Dockerfile</title>
</head>
<body>
    <h1>¡Hola desde Docker!</h1>
    <p>Este servidor web funciona con mi Dockerfile</p>
</body>
</html>' > index.html
│    │                                                │ │
│    │                                                │ └── Archivo: destino donde escribir
│    │                                                └── Operador: redirección de salida
│    └── Argumento: contenido HTML completo (multilínea)
└── Comando: imprimir texto
```

### **3. Verificación del contenido**

```bash
cat index.html
│   │
│   └── Argumento: archivo a mostrar
└── Comando: mostrar contenido de archivo (concatenate)
```

**Resultado obtenido:**
```html
<!DOCTYPE html>
<html>
<head>
    <title>Mi Primer Dockerfile</title>
</head>
<body>
    <h1>¡Hola desde Docker!</h1>
    <p>Este servidor web funciona con mi Dockerfile</p>
</body>
</html>
```

### **4. Creación del Dockerfile**

```bash
touch Dockerfile
│     │
│     └── Argumento: nombre del archivo (sin extensión)
└── Comando: crear archivo vacío
```

```bash
echo 'FROM nginx:alpine
COPY index.html /usr/share/nginx/html/
EXPOSE 80' > Dockerfile
│    │                                      │ │
│    │                                      │ └── Archivo: destino donde escribir
│    │                                      └── Operador: redirección de salida
│    └── Argumento: instrucciones Dockerfile (multilínea)
└── Comando: imprimir texto
```

### **5. Anatomía del Dockerfile creado**

```dockerfile
FROM nginx:alpine
│    │     │
│    │     └── Tag: versión ligera basada en Alpine Linux
│    └── Imagen: servidor web Nginx oficial
└── Instrucción: definir imagen base

COPY index.html /usr/share/nginx/html/
│    │          │
│    │          └── Destino: directorio web de Nginx
│    └── Origen: nuestro archivo HTML
└── Instrucción: copiar archivo del host al contenedor

EXPOSE 80
│      │
│      └── Puerto: puerto HTTP estándar
└── Instrucción: documentar puerto que expone
```

### **6. Construcción de la imagen Docker**

```bash
docker build -t mi-primer-imagen .
│      │     │  │                │
│      │     │  │                └── Contexto: directorio actual (donde está Dockerfile)
│      │     │  └── Nombre: etiqueta para identificar la imagen
│      │     └── Flag: especificar tag/nombre
│      └── Subcomando: construir imagen desde Dockerfile
└── Comando: Docker CLI
```

**Resultado obtenido:**
```
[+] Building 0.1s (7/7) FINISHED                                                                                                                                                                                                                                                              docker:desktop-linux
 => [internal] load build definition from Dockerfile                                                                                                                                                                                                                                                          0.0s
 => => transferring dockerfile: 103B                                                                                                                                                                                                                                                                          0.0s
 => [internal] load metadata for docker.io/library/nginx:alpine                                                                                                                                                                                                                                               0.0s
 => [internal] load .dockerignore                                                                                                                                                                                                                                                                             0.0s
 => => transferring context: 2B                                                                                                                                                                                                                                                                               0.0s
 => [internal] load build context                                                                                                                                                                                                                                                                             0.0s
 => => transferring context: 230B                                                                                                                                                                                                                                                                             0.0s
 => CACHED [1/2] FROM docker.io/library/nginx:alpine                                                                                                                                                                                                                                                          0.0s
 => [2/2] COPY index.html /usr/share/nginx/html/                                                                                                                                                                                                                                                              0.0s
 => exporting to image                                                                                                                                                                                                                                                                                        0.0s
 => => exporting layers                                                                                                                                                                                                                                                                                       0.0s
 => => writing image sha256:a882b0d44a6215548d76064b445bcdf1a83a4edd17439a0c9693a9b31913ea01                                                                                                                                                                                                                  0.0s
 => => naming to docker.io/library/mi-primer-imagen                                                                                                                                                                                                                                                           0.0s
```

### **7. Ejecución del contenedor**

```bash
docker run -d -p 8080:80 --name mi-contenedor mi-primer-imagen
│      │   │  │  │       │      │             │
│      │   │  │  │       │      │             └── Imagen: la que acabamos de crear
│      │   │  │  │       │      └── Nombre: identificador del contenedor
│      │   │  │  │       └── Flag: asignar nombre al contenedor
│      │   │  │  └── Mapeo: puerto host:contenedor (8080→80)
│      │   │  └── Flag: mapear puertos
│      │   └── Flag: ejecutar en background (detached)
│      └── Subcomando: ejecutar contenedor
└── Comando: Docker CLI
```

---

## **🔧 TROUBLESHOOTING APLICADO**

### **Problema 1: Puerto ocupado**
**Error encontrado:**
```
docker: Error response from daemon: failed to set up container networking: driver failed programming external connectivity on endpoint mi-contenedor (747a14eece0ecc4d9143dff6ef65538b9ea06b210a4ada65a080d1d95fd4f70f): Bind for 0.0.0.0:8080 failed: port is already allocated
```

**Diagnóstico:**
```bash
docker ps
│      │
│      └── Subcomando: listar contenedores activos
└── Comando: Docker CLI
```

**Resultado:**
```
CONTAINER ID   IMAGE             COMMAND                  CREATED          STATUS          PORTS                                     NAMES
2c872bc600e9   mi-nginx-basico   "/docker-entrypoint.…"   25 minutes ago   Up 25 minutes   0.0.0.0:8080->80/tcp, [::]:8080->80/tcp   nginx-ejercicio1
```

**Solución aplicada:**
```bash
docker rm -f nginx-ejercicio1
│      │  │  │
│      │  │  └── Nombre: contenedor a eliminar
│      │  └── Flag: forzar eliminación (force)
│      └── Subcomando: eliminar contenedor
└── Comando: Docker CLI
```

### **Problema 2: Nombre de contenedor en uso**
**Error encontrado:**
```
docker: Error response from daemon: Conflict. The container name "/mi-contenedor" is already in use by container "0a459be88f81917ddb29fabda6e5187ba06152c281fc3ebd9847ca60bb608de1". You have to remove (or rename) that container to be able to reuse that name.
```

**Diagnóstico:**
```bash
docker ps -a
│      │  │
│      │  └── Flag: mostrar todos los contenedores (incluso parados)
│      └── Subcomando: listar contenedores
└── Comando: Docker CLI
```

**Solución aplicada:**
```bash
docker rm mi-contenedor
│      │  │
│      │  └── Nombre: contenedor a eliminar
│      └── Subcomando: eliminar contenedor
└── Comando: Docker CLI
```

---

## **✅ VERIFICACIÓN FINAL**

### **Contenedor funcionando:**
```bash
docker run -d -p 8080:80 --name mi-contenedor mi-primer-imagen
```
**Resultado:** `e3b2ddd11bea7d25a3f1c0385af0098e0978b91e361e438c1a3aaf76237f7ad5`

### **Prueba de funcionamiento:**
```bash
curl http://localhost:8080
│    │
│    └── URL: dirección local puerto 8080
└── Comando: hacer petición HTTP
```

**Resultado obtenido:**
```html
<!DOCTYPE html>
<html>
<head>
    <title>Mi Primer Dockerfile</title>
</head>
<body>
    <h1>¡Hola desde Docker!</h1>
    <p>Este servidor web funciona con mi Dockerfile</p>
</body>
</html>
```

---

## **📊 ANÁLISIS DE RESULTADOS**

### **✅ Objetivos cumplidos:**
- **Dockerfile funcional:** 3 instrucciones básicas aplicadas correctamente
- **Imagen construida:** `mi-primer-imagen` creada exitosamente
- **Contenedor activo:** Corriendo en puerto 8080 sin conflictos
- **Página web:** HTML personalizada servida correctamente
- **Troubleshooting:** 2 problemas reales resueltos

### **🎯 Skills desarrollados:**
- **FROM:** Selección de imagen base apropiada (nginx:alpine)
- **COPY:** Transferencia de archivos del host al contenedor
- **EXPOSE:** Documentación de puertos expuestos
- **docker build:** Construcción de imágenes personalizadas
- **docker run:** Ejecución con mapeo de puertos y nombres
- **Resolución de conflictos:** Gestión de puertos y nombres ocupados

### **📈 Comandos dominados:**
- **Linux:** `mkdir`, `cd`, `touch`, `echo`, `cat`
- **Docker:** `build`, `run`, `ps`, `rm`
- **Troubleshooting:** `docker ps -a`, `docker rm -f`

---

## **🔗 ARCHIVOS CREADOS**

### **Estructura del proyecto:**
```
mi-primer-dockerfile/
├── Dockerfile          # Instrucciones para construir la imagen
└── index.html          # Página web personalizada
```

### **Contenido del Dockerfile:**
```dockerfile
FROM nginx:alpine
COPY index.html /usr/share/nginx/html/
EXPOSE 80
```

### **Contenido del index.html:**
```html
<!DOCTYPE html>
<html>
<head>
    <title>Mi Primer Dockerfile</title>
</head>
<body>
    <h1>¡Hola desde Docker!</h1>
    <p>Este servidor web funciona con mi Dockerfile</p>
</body>
</html>
```

---

## **🚀 GIT WORKFLOW APLICADO**

### **Comandos Git ejecutados:**
```bash
git add .
│   │   │
│   │   └── Archivos: todos los archivos del directorio
│   └── Subcomando: agregar al staging area
└── Comando: Git CLI
```

```bash
git commit -m "Módulo 2 Lección 4: Mi primer Dockerfile completado

- Dockerfile creado con FROM, COPY, EXPOSE
- Página HTML personalizada funcionando
- Imagen mi-primer-imagen construida exitosamente
- Contenedor corriendo en puerto 8080
- Troubleshooting de puertos ocupados resuelto
- Anatomía de comandos docker build y docker run dominada"
│   │      │  │
│   │      │  └── Mensaje: descripción detallada del progreso
│   │      └── Flag: especificar mensaje
│   └── Subcomando: crear commit
└── Comando: Git CLI
```

**Resultado del commit:**
```
[main 071fa20] Módulo 2 Lección 4: Mi primer Dockerfile completado
 2 files changed, 13 insertions(+)
 create mode 100644 modulo2/leccion4/mi-primer-dockerfile/Dockerfile
 create mode 100644 modulo2/leccion4/mi-primer-dockerfile/index.html
```

```bash
git push origin main
│   │    │      │
│   │    │      └── Branch: rama principal
│   │    └── Remote: repositorio remoto
│   └── Subcomando: subir cambios
└── Comando: Git CLI
```

**Resultado del push:**
```
Enumerating objects: 8, done.
Counting objects: 100% (8/8), done.
Delta compression using up to 8 threads
Compressing objects: 100% (5/5), done.
Writing objects: 100% (7/7), 875 bytes | 875.00 KiB/s, done.
Total 7 (delta 1), reused 0 (delta 0), pack-reused 0 (from 0)
remote: Resolving deltas: 100% (1/1), completed with 1 local object.
To https://github.com/acuzcoz/DevOps-Course.git
   2088e57..071fa20  main -> main
```

---

## **🎉 LOGROS DESBLOQUEADOS**

### **🏆 "Dockerfile Creator"**
**Has completado tu primer Dockerfile funcional desde cero**

### **📈 Progreso actualizado:**
- **Módulo 2:** 33% completado (1/3 ejercicios de Lección 4)
- **Curso total:** 32% completado
- **Skills Docker:** +25% (Dockerfile básico dominado)

### **🎯 Preparado para:**
- **Ejercicio 2:** Dockerfile intermedio con RUN y WORKDIR
- **Conceptos avanzados:** Gestión de dependencias y variables
- **Optimización:** Cache layers y mejores prácticas

---

## **💡 CONCEPTOS CLAVE APRENDIDOS**

### **Dockerfile como receta:**
- **FROM:** Define el punto de partida (imagen base)
- **COPY:** Transfiere archivos de tu máquina al contenedor
- **EXPOSE:** Documenta qué puerto usa la aplicación

### **Flujo Docker completo:**
```
Dockerfile → docker build → Imagen → docker run → Contenedor
```

### **Troubleshooting sistemático:**
1. **Identificar error:** Leer mensaje completo
2. **Diagnosticar causa:** Usar comandos de inspección
3. **Aplicar solución:** Comandos específicos de limpieza
4. **Verificar resultado:** Confirmar funcionamiento

---

## **🔄 PRÓXIMO PASO**

### **Ejercicio 2: Dockerfile Intermedio**
- **Tecnología:** Node.js + Express
- **Nuevas instrucciones:** RUN, WORKDIR, ENV
- **Conceptos:** Gestión de dependencias, variables de entorno
- **Objetivo:** API REST funcionando en contenedor

---

**🎯 Ejercicio 1 completado exitosamente - Dockerfile básico dominado** ✅

**Fecha de finalización:** 2025-09-16  
**Próximo:** Ejercicio 2 - Dockerfile intermedio con Node.js
