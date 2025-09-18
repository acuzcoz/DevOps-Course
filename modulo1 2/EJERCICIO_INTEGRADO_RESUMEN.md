# 🎯 EJERCICIO INTEGRADO: "Mi Primer DevOps Setup"

**Fecha:** 2025-09-14  
**Estado:** ✅ **COMPLETADO**  
**Módulo:** 1 - Setup de Tecnologías Fundamentales

---

## **🎯 OBJETIVO ALCANZADO**
Crear un proyecto que use las 4 tecnologías fundamentales juntas por primera vez, demostrando que el setup completo funciona correctamente.

---

## **🔧 TECNOLOGÍAS INTEGRADAS**

### **🐧 LINUX - Gestión de archivos y estructura**
**Comandos utilizados con anatomía:**
```bash
mkdir -p mi-primer-devops/{src,docs}
│     │  │                │
│     │  │                └── Estructura: crear múltiples directorios
│     │  └── Flag: crear directorios padre si no existen
│     └── Comando: crear directorio (make directory)
└── Comando: Linux

cd mi-primer-devops
│  │
│  └── Directorio destino
└── Comando: cambiar directorio (change directory)

ls -la
│  │ │
│  │ └── Flag: mostrar archivos ocultos (all)
│  └── Flag: formato largo (permisos, propietario, tamaño)
└── Comando: listar archivos (list)

touch Dockerfile
│     │
│     └── Archivo a crear (vacío)
└── Comando: crear archivo o actualizar timestamp
```

**Resultado:** ✅ Estructura organizada creada correctamente

### **🐳 DOCKER - Containerización de aplicación web**
**Archivos creados:**

**src/index.html:**
```html
<h1>¡Mi primer proyecto DevOps!</h1>
<p>Docker + GitHub + AWS CLI + Linux funcionando juntos</p>
<p>Usuario: acuzcoz</p>
<p>Fecha: 2025-09-14</p>
```

**Dockerfile con anatomía:**
```dockerfile
FROM nginx:alpine
│    │     │
│    │     └── Tag: versión específica (alpine = ligera)
│    └── Imagen base: servidor web nginx
└── Instrucción: "empezar desde esta imagen"

COPY src/index.html /usr/share/nginx/html/
│    │              │
│    │              └── Destino: donde nginx busca archivos web por defecto
│    └── Origen: nuestro archivo HTML
└── Instrucción: "copiar archivo desde contexto al contenedor"

EXPOSE 80
│      │
│      └── Puerto: donde nginx sirve páginas web
└── Instrucción: "documentar qué puerto usa la app"
```

**Comandos Docker utilizados:**
```bash
docker build -t mi-devops-app .
│      │     │  │             │
│      │     │  │             └── Contexto: directorio actual (donde está Dockerfile)
│      │     │  └── Nombre: etiqueta para identificar la imagen
│      │     └── Flag: asignar tag/nombre a la imagen
│      └── Subcomando: construir imagen desde Dockerfile
└── Comando: Docker CLI

docker run -d -p 3000:80 --name mi-app mi-devops-app
│      │   │  │  │         │      │     │
│      │   │  │  │         │      │     └── Imagen a usar
│      │   │  │  │         │      └── Nombre del contenedor
│      │   │  │  │         └── Flag: asignar nombre
│      │   │  │  └── Mapeo: puerto 3000 (host) → puerto 80 (contenedor)
│      │   │  └── Flag: mapear puertos
│      │   └── Flag: ejecutar en background (detached)
│      └── Subcomando: ejecutar contenedor
└── Comando: Docker CLI

docker ps
│      │
│      └── Subcomando: ver contenedores corriendo (process status)
└── Comando: Docker CLI

docker stop micro-test
│      │    │
│      │    └── Nombre del contenedor a detener
│      └── Subcomando: detener contenedor
└── Comando: Docker CLI

docker start mi-app
│      │     │
│      │     └── Nombre del contenedor a iniciar
│      └── Subcomando: iniciar contenedor existente
└── Comando: Docker CLI
```

**Resultado:** ✅ Aplicación web funcionando en http://localhost:3000

### **🐙 GITHUB - Versionado y colaboración**
**Comandos Git utilizados:**
```bash
git init
│   │
│   └── Subcomando: inicializar repositorio Git en directorio actual
└── Comando: Git CLI

git branch -m main
│   │      │  │
│   │      │  └── Nuevo nombre: main (estándar GitHub moderno)
│   │      └── Flag: mover/renombrar branch
│   └── Subcomando: gestionar branches
└── Comando: Git CLI

git add .
│   │   │
│   │   └── Argumento: todos los archivos del directorio actual
│   └── Subcomando: preparar archivos para commit (staging area)
└── Comando: Git CLI

git commit -m "feat: mi primer proyecto DevOps integrado"
│   │      │  │
│   │      │  └── Mensaje: descripción de cambios
│   │      └── Flag: message (especificar mensaje del commit)
│   └── Subcomando: confirmar cambios en repositorio local
└── Comando: Git CLI

git push -u origin main
│   │    │  │      │
│   │    │  │      └── Branch: main (rama principal)
│   │    │  └── Repositorio: origin (repositorio remoto)
│   │    └── Flag: upstream (establecer tracking para futuros push)
│   └── Subcomando: subir cambios al repositorio remoto
└── Comando: Git CLI
```

**Archivos de configuración:**
**.gitignore:**
```
node_modules/
*.log
.DS_Store
```

**Resultado:** ✅ Código subido exitosamente al repositorio DevOps-Course

### **☁️ AWS CLI - Exploración de servicios cloud**
**Comandos AWS utilizados:**
```bash
aws ec2 describe-regions --profile admin-mined-ext
│   │   │                │         │
│   │   │                │         └── Perfil SSO configurado
│   │   │                └── Flag: especificar perfil
│   │   └── Subcomando: listar regiones EC2 disponibles
│   └── Servicio: Elastic Compute Cloud
└── Comando: AWS CLI

aws sts get-caller-identity --profile admin-mined-ext
│   │   │                   │         │
│   │   │                   │         └── Perfil SSO
│   │   │                   └── Flag: especificar perfil
│   │   └── Subcomando: obtener información del usuario actual
│   └── Servicio: Security Token Service (autenticación)
└── Comando: AWS CLI
```

**Resultados obtenidos:**
- **Regiones EC2:** 20+ regiones disponibles globalmente
- **Identidad confirmada:** Usuario `ancuzcoz`, Cuenta `021891597458`, Rol `Administrators-AWS`

---

## **🔧 PROBLEMAS RESUELTOS**

### **Docker - Puerto ocupado:**
- **Error:** `Bind for 0.0.0.0:3000 failed: port is already allocated`
- **Causa:** Contenedor anterior usando puerto 3000
- **Solución aplicada:** `docker stop micro-test` → `docker rm micro-test`
- **Comando aprendido:** `docker ps` para ver contenedores activos

### **Docker - Nombre de contenedor en uso:**
- **Error:** `The container name "/mi-app" is already in use`
- **Causa:** Contenedor con mismo nombre ya existe
- **Solución aplicada:** `docker start mi-app` (reutilizar contenedor existente)
- **Aprendizaje:** Docker reutiliza contenedores por nombre

### **Git - Branch por defecto:**
- **Situación:** Git usa `master` por defecto, GitHub usa `main`
- **Solución aplicada:** `git branch -m main`
- **Aprendizaje:** Estándar moderno es `main` en lugar de `master`

### **Git - Repositorio remoto existente:**
- **Error:** `error: remoto origin ya existe`
- **Causa:** Repositorio ya conectado previamente
- **Resultado:** No es problema, `git push` funcionó correctamente
- **Aprendizaje:** Error normal cuando repo ya está configurado

---

## **📊 SKILLS DESARROLLADOS**

### **Integración de tecnologías:**
- ✅ Workflow completo: Linux → Docker → GitHub → AWS
- ✅ Troubleshooting real con problemas auténticos
- ✅ Comprensión de anatomía de comandos
- ✅ Gestión de errores y soluciones

### **Docker Skills:**
- ✅ Creación de Dockerfile desde cero
- ✅ Build de imágenes personalizadas
- ✅ Gestión de contenedores (run, stop, start)
- ✅ Port mapping y networking básico
- ✅ Troubleshooting de puertos y nombres

### **Linux Skills:**
- ✅ Navegación de directorios
- ✅ Creación de estructura de archivos
- ✅ Gestión básica de archivos
- ✅ Comprensión de rutas y permisos

### **Git/GitHub Skills:**
- ✅ Inicialización de repositorios
- ✅ Staging, commit y push
- ✅ Gestión de branches
- ✅ Configuración de repositorios remotos
- ✅ Workflow básico de versionado

### **AWS CLI Skills:**
- ✅ Exploración de servicios disponibles
- ✅ Gestión de perfiles SSO
- ✅ Comandos básicos de información
- ✅ Comprensión de regiones y servicios

---

## **💡 CONCEPTOS CLAVE APRENDIDOS**

### **Integración DevOps:**
- **Workflow natural:** Desarrollo local → Versionado → Deploy → Cloud
- **Troubleshooting real:** Problemas auténticos y soluciones prácticas
- **Anatomía de comandos:** Comprensión completa de cada símbolo
- **Metodología sistemática:** Paso a paso con verificación

### **Docker Fundamentals:**
- **Dockerfile:** Receta para crear imágenes
- **Imagen vs Contenedor:** Plantilla vs instancia ejecutable
- **Port mapping:** Conexión entre host y contenedor
- **Nginx paths:** `/usr/share/nginx/html/` como directorio web

### **Git Workflow:**
- **Staging area:** Preparación antes de commit
- **Branches:** `main` como estándar moderno
- **Remote repositories:** Conexión local-remoto
- **Commit messages:** Descripción clara de cambios

### **AWS Basics:**
- **Regiones:** Ubicaciones geográficas de servicios
- **SSO:** Método profesional de autenticación
- **Perfiles:** Múltiples configuraciones de AWS
- **Servicios:** EC2, STS como ejemplos básicos

---

## **🚀 PREPARACIÓN PARA PRÓXIMOS MÓDULOS**

### **Base sólida establecida:**
- ✅ Las 4 tecnologías funcionan correctamente
- ✅ Workflow integrado comprendido
- ✅ Troubleshooting básico dominado
- ✅ Anatomía de comandos clara

### **Próximos pasos:**
- **Módulo 1, Lección 2:** Comandos Docker básicos avanzados
- **Ejercicios más complejos:** Multi-container, networking
- **Automatización:** Scripts y CI/CD
- **Producción:** Deploy real en EC2

---

## **📁 ESTRUCTURA FINAL DEL PROYECTO**

```
mi-primer-devops/
├── Dockerfile                 # Configuración de contenedor
├── .gitignore                # Archivos a ignorar en Git
├── src/
│   └── index.html            # Aplicación web
└── docs/                     # Documentación (vacío por ahora)
```

**Ubicación:** `DevOps-Course/modulo1/mi-primer-devops/`  
**Repositorio:** https://github.com/acuzcoz/DevOps-Course  
**Aplicación:** http://localhost:3000 (cuando contenedor está corriendo)

---

## **🎯 EJERCICIO INTEGRADO COMPLETADO EXITOSAMENTE** ✅

**Duración:** ~1 hora  
**Comandos aprendidos:** 15+ comandos con anatomía completa  
**Problemas resueltos:** 4 (puertos, nombres, branches, remotos)  
**Tecnologías integradas:** 4 (Docker + Linux + GitHub + AWS CLI)  
**Preparado para:** Lección 2 - Comandos Docker Básicos

---

*Ejercicio completado: 2025-09-14 | Metodología integrada aplicada exitosamente*
