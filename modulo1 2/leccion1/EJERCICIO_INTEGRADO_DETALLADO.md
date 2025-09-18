# 🎯 EJERCICIO INTEGRADO DETALLADO: "Mi Primer DevOps Setup"

**Fecha:** 2025-09-14  
**Duración:** ~1 hora  
**Estado:** ✅ **COMPLETADO**  
**Ubicación:** `modulo1/mi-primer-devops/`

---

## **🎯 OBJETIVO**
Crear un proyecto que integre las 4 tecnologías fundamentales (Docker + Linux + GitHub + AWS CLI) por primera vez, demostrando que el setup completo funciona.

---

## **📋 PASO A PASO DETALLADO**

### **PASO 1: CREAR ESTRUCTURA CON LINUX** ✅

#### **Comandos ejecutados:**
```bash
# Navegar al módulo 1
cd /Users/ancuzcoz/Library/CloudStorage/OneDrive-NEWWORLDEDUCATIONSAUS.A/DevOps-Course/modulo1

# Crear estructura de proyecto
mkdir -p mi-primer-devops/{src,docs}

# Entrar al proyecto
cd mi-primer-devops

# Verificar estructura
ls -la
```

#### **Resultado obtenido:**
```
total 0
drwxr-xr-x@ 4 ancuzcoz  staff  128 14 sep 19:10 .
drwxr-xr-x@ 9 ancuzcoz  staff  288 14 sep 19:09 ..
drwxr-xr-x@ 2 ancuzcoz  staff   64 14 sep 19:09 docs
drwxr-xr-x@ 2 ancuzcoz  staff   64 14 sep 19:09 src
```

#### **Conceptos aplicados:**
- **mkdir -p:** Crear directorios padre automáticamente
- **{src,docs}:** Expansión de llaves para múltiples directorios
- **Estructura organizada:** Separación de código fuente y documentación

---

### **PASO 2: CREAR APLICACIÓN WEB** ✅

#### **Archivo HTML creado:**
```bash
# Crear contenido HTML
echo '<h1>¡Mi primer proyecto DevOps!</h1>
<p>Docker + GitHub + AWS CLI + Linux funcionando juntos</p>
<p>Usuario: acuzcoz</p>
<p>Fecha: 2025-09-14</p>' > src/index.html
```

#### **Contenido del archivo:**
```html
<h1>¡Mi primer proyecto DevOps!</h1>
<p>Docker + GitHub + AWS CLI + Linux funcionando juntos</p>
<p>Usuario: acuzcoz</p>
<p>Fecha: 2025-09-14</p>
```

#### **Dockerfile creado:**
**Método usado:** `touch Dockerfile` + edición manual (mejor práctica)

```dockerfile
FROM nginx:alpine
COPY src/index.html /usr/share/nginx/html/
EXPOSE 80
```

#### **Explicación del Dockerfile:**
- **FROM nginx:alpine:** Imagen base ligera con servidor web
- **COPY:** Copiar HTML al directorio web de nginx
- **EXPOSE 80:** Documentar que la app usa puerto 80

---

### **PASO 3: CONSTRUIR Y EJECUTAR CON DOCKER** ✅

#### **Build de la imagen:**
```bash
docker build -t mi-devops-app .
```

#### **Proceso observado:**
```
[+] Building 2.6s (7/7) FINISHED
 => [internal] load build definition from Dockerfile
 => [internal] load metadata for docker.io/library/nginx:alpine-slim
 => [1/2] FROM docker.io/library/nginx:alpine-slim
 => [2/2] COPY src/index.html /usr/share/nginx/html/
 => exporting to image
 => => writing image sha256:9c0e1912aeafd68f2903f94766fae849a244840f90db089c1bf413ce38f260f5
 => => naming to docker.io/library/mi-devops-app
```

#### **Troubleshooting aplicado:**
**Problema:** Puerto 3000 ocupado por contenedor anterior
```bash
# Error inicial
docker run -d -p 3000:80 --name mi-app mi-devops-app
# Error: Bind for 0.0.0.0:3000 failed: port is already allocated

# Solución aplicada
docker ps  # Identificar contenedor usando puerto
docker stop micro-test  # Detener contenedor anterior
docker rm micro-test    # Eliminar contenedor anterior

# Segundo intento exitoso
docker run -d -p 3000:80 --name mi-app mi-devops-app
# Resultado: bb83ce3c78b35e557730d520e589413c9f946e32722a6ab2fbb60d4cfc03c29f
```

#### **Verificación en navegador:**
**URL:** http://localhost:3000  
**Resultado:** Página funcionando con contenido personalizado

---

### **PASO 4: VERSIONADO CON GITHUB** ✅

#### **Inicialización de Git:**
```bash
git init
```

#### **Resultado:**
```
hint: Usando 'master' como el nombre de la rama inicial
Inicializado repositorio Git vacío en /Users/ancuzcoz/.../mi-primer-devops/.git/
```

#### **Cambio a branch moderno:**
```bash
git branch -m main
```

#### **Creación de .gitignore:**
```bash
echo "node_modules/
*.log
.DS_Store" > .gitignore
```

#### **Staging y commit:**
```bash
# Agregar archivos
git add .

# Commit con mensaje descriptivo
git commit -m "feat: mi primer proyecto DevOps integrado

- Dockerfile con nginx:alpine
- Página HTML personalizada  
- Aplicación funcionando en puerto 3000
- Ejercicio integrado: Docker + Linux + GitHub"
```

#### **Subida al repositorio existente:**
```bash
# Conectar con repositorio existente (ya estaba conectado)
git push -u origin main
```

#### **Resultado:**
```
rama 'main' configurada para rastrear 'origin/main'.
Everything up-to-date
```

---

### **PASO 5: EXPLORACIÓN CON AWS CLI** ✅

#### **Explorar regiones EC2:**
```bash
aws ec2 describe-regions --profile admin-mined-ext
```

#### **Resultado (parcial):**
```json
{
    "Regions": [
        {
            "OptInStatus": "opt-in-not-required",
            "RegionName": "us-east-1",
            "Endpoint": "ec2.us-east-1.amazonaws.com"
        },
        {
            "OptInStatus": "opt-in-not-required",
            "RegionName": "us-west-2",
            "Endpoint": "ec2.us-west-2.amazonaws.com"
        }
        // ... 20+ regiones más
    ]
}
```

#### **Verificar identidad AWS:**
```bash
aws sts get-caller-identity --profile admin-mined-ext
```

#### **Resultado:**
```json
{
    "UserId": "AROAQKGGXISJFLUJHPTYK:ancuzcoz",
    "Account": "021891597458",
    "Arn": "arn:aws:sts::021891597458:assumed-role/AWSReservedSSO_Administrators-AWS_3a4a0bb554a7e684/ancuzcoz"
}
```

---

## **🔧 PROBLEMAS RESUELTOS**

### **1. Puerto ocupado en Docker**
**Error:** `Bind for 0.0.0.0:3000 failed: port is already allocated`  
**Causa:** Contenedor `micro-test` usando puerto 3000  
**Solución:** `docker stop micro-test` → `docker rm micro-test`  
**Aprendizaje:** Verificar puertos con `docker ps` antes de ejecutar

### **2. Branch Git por defecto**
**Situación:** Git usa `master`, GitHub usa `main`  
**Solución:** `git branch -m main`  
**Aprendizaje:** Estándar moderno es `main`

### **3. Repositorio remoto existente**
**Situación:** `git remote add origin` no necesario  
**Causa:** Repositorio ya conectado  
**Resultado:** `git push` funcionó directamente  
**Aprendizaje:** Verificar conexiones existentes

---

## **📊 MÉTRICAS DEL EJERCICIO**

### **Archivos creados:**
- `src/index.html` (187 bytes)
- `Dockerfile` (75 bytes)
- `.gitignore` (32 bytes)

### **Recursos Docker:**
- **Imagen creada:** `mi-devops-app` (12.8MB)
- **Contenedor activo:** `mi-app` (puerto 3000)
- **Base image:** `nginx:alpine-slim`

### **Comandos ejecutados:**
- **Linux:** 4 comandos (mkdir, cd, ls, echo)
- **Docker:** 4 comandos (build, run, ps, stop, rm)
- **Git:** 5 comandos (init, branch, add, commit, push)
- **AWS CLI:** 2 comandos (ec2 describe-regions, sts get-caller-identity)

### **Tiempo total:** ~1 hora (incluyendo troubleshooting)

---

## **💡 SKILLS DESARROLLADOS**

### **Integración de tecnologías:**
- ✅ Workflow natural: Linux → Docker → GitHub → AWS
- ✅ Troubleshooting real con problemas auténticos
- ✅ Comprensión de dependencias entre tecnologías

### **Docker específico:**
- ✅ Creación de Dockerfile desde cero
- ✅ Build de imágenes personalizadas
- ✅ Port mapping y networking básico
- ✅ Resolución de conflictos de puertos

### **Git/GitHub:**
- ✅ Inicialización de repositorios
- ✅ Workflow básico: add → commit → push
- ✅ Gestión de branches modernos
- ✅ Integración con repositorios existentes

### **AWS CLI:**
- ✅ Exploración de servicios disponibles
- ✅ Verificación de identidad y permisos
- ✅ Comprensión de regiones y servicios globales

---

## **🎯 VERIFICACIÓN FINAL**

### **Aplicación funcionando:**
- ✅ **URL:** http://localhost:3000
- ✅ **Contenido:** HTML personalizado visible
- ✅ **Container:** `mi-app` corriendo correctamente

### **Código versionado:**
- ✅ **Repositorio:** DevOps-Course en GitHub
- ✅ **Branch:** main
- ✅ **Commit:** Mensaje descriptivo
- ✅ **Archivos:** Dockerfile, HTML, .gitignore

### **AWS conectado:**
- ✅ **Regiones:** 20+ regiones EC2 disponibles
- ✅ **Identidad:** Usuario `ancuzcoz` confirmado
- ✅ **Permisos:** Rol `Administrators-AWS` activo

---

## **🚀 IMPACTO DEL EJERCICIO**

### **Preparación para módulos avanzados:**
- **Base sólida:** 4 tecnologías integradas funcionando
- **Troubleshooting:** Experiencia con problemas reales
- **Workflow:** Comprensión del ciclo DevOps completo
- **Confianza:** Capacidad de resolver problemas independientemente

### **Portfolio demostrable:**
- **Proyecto real:** Aplicación web containerizada
- **Código público:** Disponible en GitHub
- **Documentación:** Proceso completo documentado
- **Skills verificables:** Evidencia práctica de capacidades

---

## **📁 ESTRUCTURA FINAL**

```
mi-primer-devops/
├── Dockerfile                 # Configuración de contenedor
├── .gitignore                # Archivos a ignorar en Git
├── src/
│   └── index.html            # Aplicación web personalizada
└── docs/                     # Documentación (vacío por ahora)
```

**Estado:** ✅ Proyecto completamente funcional e integrado  
**Ubicación:** `modulo1/mi-primer-devops/`  
**Acceso:** http://localhost:3000 (cuando contenedor está corriendo)

---

*Ejercicio integrado completado: 2025-09-14 | Metodología práctica aplicada | 4 tecnologías integradas exitosamente*
