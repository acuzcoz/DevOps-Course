# 🔧 COMANDOS APRENDIDOS - LECCIÓN 1

**Lección:** ¿Qué es Docker? + Setup Completo  
**Fecha:** 2025-09-14  
**Total comandos:** 12 comandos con anatomía completa

---

## **🐳 DOCKER COMMANDS**

### **Verificación básica:**
```bash
docker --version
│      │
│      └── Flag: mostrar versión instalada
└── Comando: Docker CLI
```
**Propósito:** Verificar que Docker está instalado correctamente  
**Resultado obtenido:** `Docker version 28.4.0, build d8eb465f86`

### **Primer contenedor:**
```bash
docker run hello-world
│      │   │
│      │   └── Imagen: contenedor de prueba oficial de Docker
│      └── Subcomando: ejecutar contenedor
└── Comando: Docker CLI
```
**Propósito:** Verificar que Docker puede ejecutar contenedores  
**Proceso interno:**
1. Docker client contacta Docker daemon
2. Docker daemon descarga imagen de Docker Hub
3. Docker daemon crea contenedor desde imagen
4. Contenedor ejecuta programa y muestra output
5. Contenedor se detiene automáticamente

### **Gestión de contenedores (Ejercicio integrado):**
```bash
docker build -t mi-devops-app .
│      │     │  │             │
│      │     │  │             └── Contexto: directorio actual (donde está Dockerfile)
│      │     │  └── Nombre: etiqueta para identificar la imagen
│      │     └── Flag: asignar tag/nombre a la imagen
│      └── Subcomando: construir imagen desde Dockerfile
└── Comando: Docker CLI
```
**Propósito:** Crear imagen personalizada desde Dockerfile

```bash
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
```
**Propósito:** Ejecutar aplicación web en contenedor

```bash
docker ps
│      │
│      └── Subcomando: mostrar contenedores corriendo (process status)
└── Comando: Docker CLI
```
**Propósito:** Ver contenedores activos

```bash
docker stop micro-test
│      │    │
│      │    └── Nombre del contenedor a detener
│      └── Subcomando: detener contenedor gracefully
└── Comando: Docker CLI
```
**Propósito:** Detener contenedor para liberar puerto

```bash
docker start mi-app
│      │     │
│      │     └── Nombre del contenedor a iniciar
│      └── Subcomando: iniciar contenedor existente
└── Comando: Docker CLI
```
**Propósito:** Iniciar contenedor previamente creado

---

## **🐙 GIT/GITHUB COMMANDS**

### **Configuración:**
```bash
git config --global user.name
│   │      │        │    │
│   │      │        │    └── Propiedad: nombre del usuario para commits
│   │      │        └── Scope: configuración para todos los repositorios
│   │      └── Flag: especificar alcance global
│   └── Subcomando: gestionar configuración de Git
└── Comando: Git CLI
```
**Propósito:** Verificar nombre configurado para commits  
**Resultado:** `acuzcoz`

```bash
git config --global user.email
│   │      │        │    │
│   │      │        │    └── Propiedad: email del usuario para commits
│   │      │        └── Scope: configuración global
│   │      └── Flag: alcance global
│   └── Subcomando: ver configuración
└── Comando: Git CLI
```
**Propósito:** Verificar email configurado para commits  
**Resultado:** `acuzco@cuevatech.com`

```bash
gh auth status
│  │    │
│  │    └── Subcomando: mostrar estado de autenticación con GitHub
│  └── Recurso: autenticación
└── Comando: GitHub CLI
```
**Propósito:** Verificar autenticación con GitHub  
**Resultado:** `✓ Logged in to github.com account acuzcoz`

### **Workflow básico (Ejercicio integrado):**
```bash
git init
│   │
│   └── Subcomando: inicializar repositorio Git en directorio actual
└── Comando: Git CLI
```
**Propósito:** Convertir directorio en repositorio Git

```bash
git branch -m main
│   │      │  │
│   │      │  └── Nuevo nombre: main (estándar GitHub moderno)
│   │      └── Flag: mover/renombrar branch
│   └── Subcomando: gestionar branches
└── Comando: Git CLI
```
**Propósito:** Cambiar de `master` a `main` (estándar moderno)

```bash
git add .
│   │   │
│   │   └── Argumento: todos los archivos del directorio actual
│   └── Subcomando: preparar archivos para commit (staging area)
└── Comando: Git CLI
```
**Propósito:** Preparar archivos para commit

```bash
git commit -m "feat: mi primer proyecto DevOps integrado"
│   │      │  │
│   │      │  └── Mensaje: descripción de cambios
│   │      └── Flag: message (especificar mensaje del commit)
│   └── Subcomando: confirmar cambios en repositorio local
└── Comando: Git CLI
```
**Propósito:** Guardar cambios con mensaje descriptivo

```bash
git push -u origin main
│   │    │  │      │
│   │    │  │      └── Branch: main (rama principal)
│   │    │  └── Repositorio: origin (repositorio remoto)
│   │    └── Flag: upstream (establecer tracking para futuros push)
│   └── Subcomando: subir cambios al repositorio remoto
└── Comando: Git CLI
```
**Propósito:** Subir código al repositorio GitHub

---

## **☁️ AWS CLI COMMANDS**

### **Verificación:**
```bash
aws --version
│   │
│   └── Flag: mostrar versión instalada de AWS CLI
└── Comando: AWS CLI
```
**Propósito:** Verificar instalación de AWS CLI  
**Resultado:** `aws-cli/2.30.1 Python/3.13.7 Darwin/24.6.0`

### **Configuración SSO:**
```bash
aws sso login
│   │   │
│   │   └── Subcomando: iniciar sesión SSO (renovar token expirado)
│   └── Servicio: Single Sign-On
└── Comando: AWS CLI
```
**Propósito:** Renovar token SSO expirado

```bash
aws configure sso
│   │         │
│   │         └── Subcomando: configurar nuevo perfil SSO interactivamente
│   └── Subcomando: gestionar configuración
└── Comando: AWS CLI
```
**Propósito:** Crear perfil SSO interactivamente  
**Configuración creada:**
- SSO session: Admin-mined-aws
- Account: 021891597458
- Role: Administrators-AWS
- Region: us-east-1
- Profile: admin-mined-ext

### **Verificación de identidad:**
```bash
aws sts get-caller-identity --profile admin-mined-ext
│   │   │                   │         │
│   │   │                   │         └── Perfil SSO configurado
│   │   │                   └── Flag: especificar perfil específico
│   │   └── Subcomando: obtener información del usuario actual
│   └── Servicio: Security Token Service (autenticación)
└── Comando: AWS CLI
```
**Propósito:** Confirmar identidad y permisos AWS  
**Resultado:** Usuario `ancuzcoz`, Cuenta `021891597458`, Rol `Administrators-AWS`

### **Exploración de servicios (Ejercicio integrado):**
```bash
aws ec2 describe-regions --profile admin-mined-ext
│   │   │                │         │
│   │   │                │         └── Perfil SSO
│   │   │                └── Flag: especificar perfil
│   │   └── Subcomando: listar regiones EC2 disponibles
│   └── Servicio: Elastic Compute Cloud
└── Comando: AWS CLI
```
**Propósito:** Explorar regiones disponibles  
**Resultado:** 20+ regiones globales disponibles

---

## **🐧 LINUX COMMANDS**

### **Navegación y estructura:**
```bash
mkdir -p mi-primer-devops/{src,docs}
│     │  │                │
│     │  │                └── Estructura: crear múltiples directorios
│     │  └── Flag: crear directorios padre si no existen
│     └── Comando: crear directorio (make directory)
└── Comando: Linux
```
**Propósito:** Crear estructura organizada de proyecto

```bash
cd mi-primer-devops
│  │
│  └── Directorio destino
└── Comando: cambiar directorio (change directory)
```
**Propósito:** Navegar al directorio del proyecto

```bash
ls -la
│  │ │
│  │ └── Flag: mostrar archivos ocultos (all)
│  └── Flag: formato largo (permisos, propietario, tamaño)
└── Comando: listar archivos (list)
```
**Propósito:** Ver contenido detallado del directorio

```bash
touch Dockerfile
│     │
│     └── Archivo a crear (vacío)
└── Comando: crear archivo o actualizar timestamp
```
**Propósito:** Crear archivo Dockerfile vacío

---

## **📊 RESUMEN DE COMANDOS**

### **Por tecnología:**
- **Docker:** 6 comandos (verificación, build, run, ps, stop, start)
- **Git/GitHub:** 6 comandos (config, auth, init, branch, add, commit, push)
- **AWS CLI:** 4 comandos (version, sso login, configure sso, sts, ec2)
- **Linux:** 4 comandos (mkdir, cd, ls, touch)

### **Por categoría:**
- **Verificación:** 4 comandos (docker --version, git config, gh auth, aws --version)
- **Configuración:** 3 comandos (aws configure sso, git branch, git init)
- **Gestión de archivos:** 3 comandos (mkdir, cd, ls, touch)
- **Contenedores:** 4 comandos (docker run, build, ps, stop, start)
- **Versionado:** 3 comandos (git add, commit, push)
- **Cloud:** 2 comandos (aws sts, aws ec2)

### **Troubleshooting aplicado:**
- **AWS token expirado** → `aws sso login`
- **Puerto ocupado** → `docker stop` + `docker rm`
- **Branch incorrecto** → `git branch -m main`
- **Repositorio remoto** → Usar repo existente

---

## **💡 PATRONES APRENDIDOS**

### **Anatomía estándar:**
```bash
comando subcomando --flag argumento
│       │          │     │
│       │          │     └── Valor específico
│       │          └── Opción/modificador
│       └── Acción específica
└── Herramienta principal
```

### **Flags comunes:**
- `--version` / `-v`: Mostrar versión
- `--help` / `-h`: Mostrar ayuda
- `--global`: Configuración global
- `--profile`: Especificar perfil
- `-d`: Detached/background
- `-p`: Port mapping
- `-a`: All/todos
- `-l`: Long format

### **Workflow integrado:**
1. **Desarrollo local** (Linux + Docker)
2. **Versionado** (Git)
3. **Colaboración** (GitHub)
4. **Deploy/Cloud** (AWS CLI)

---

*Comandos documentados: 2025-09-14 | Total: 20 comandos con anatomía completa*
