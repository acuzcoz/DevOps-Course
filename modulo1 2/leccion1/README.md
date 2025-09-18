# 📚 LECCIÓN 1: ¿Qué es Docker? + Setup Completo

**Fecha:** 2025-09-14  
**Estado:** ✅ **COMPLETADA**  
**Módulo:** 1 - Setup de Tecnologías Fundamentales  
**Duración:** ~2 horas

---

## **🎯 OBJETIVO ALCANZADO**
Entender qué es Docker, qué problema resuelve y completar el setup de las 4 tecnologías fundamentales del curso con verificación práctica.

---

## **📚 CONCEPTOS FUNDAMENTALES APRENDIDOS**

### **¿Qué problema resuelve Docker?**
- **Problema tradicional:** "En mi máquina funciona" 🤷‍♂️ → "Aquí no funciona" ❌
- **Causas:** Diferentes versiones, sistemas operativos, dependencias, configuraciones
- **Solución Docker:** Empaqueta aplicación + dependencias en "contenedor" ✅
- **Resultado:** "Funciona igual en todas partes" 🎯

### **Diferencia: Máquina Virtual vs Contenedor**

**❌ Máquina Virtual (Pesada):**
```
┌─────────────────────────┐
│     Aplicación 1        │
├─────────────────────────┤
│   Sistema Operativo     │  ← Completo (pesado)
├─────────────────────────┤
│      Hypervisor         │
├─────────────────────────┤
│   Sistema Host          │
└─────────────────────────┘
```

**✅ Contenedor Docker (Ligero):**
```
┌─────────────────────────┐
│     Aplicación 1        │
├─────────────────────────┤
│   Docker Engine         │  ← Compartido (ligero)
├─────────────────────────┤
│   Sistema Host          │
└─────────────────────────┘
```

---

## **🔧 COMANDOS APRENDIDOS CON ANATOMÍA**

### **Docker - Verificación básica:**
```bash
docker --version
│      │
│      └── Flag: mostrar versión instalada
└── Comando: Docker CLI
```
**Resultado:** `Docker version 28.4.0, build d8eb465f86` ✅

```bash
docker run hello-world
│      │   │
│      │   └── Imagen: contenedor de prueba oficial de Docker
│      └── Subcomando: ejecutar contenedor
└── Comando: Docker CLI
```
**Proceso interno:** Docker client → daemon → Docker Hub → descarga → crea contenedor → ejecuta → muestra output

### **GitHub - Configuración:**
```bash
git config --global user.name
│   │      │        │    │
│   │      │        │    └── Propiedad: nombre del usuario para commits
│   │      │        └── Scope: configuración para todos los repositorios
│   │      └── Flag: especificar alcance global
│   └── Subcomando: gestionar configuración de Git
└── Comando: Git CLI
```

```bash
gh auth status
│  │    │
│  │    └── Subcomando: mostrar estado de autenticación con GitHub
│  └── Recurso: autenticación
└── Comando: GitHub CLI
```

### **AWS CLI - Configuración SSO:**
```bash
aws --version
│   │
│   └── Flag: mostrar versión instalada de AWS CLI
└── Comando: AWS CLI
```

```bash
aws configure sso
│   │         │
│   │         └── Subcomando: configurar nuevo perfil SSO interactivamente
│   └── Subcomando: gestionar configuración
└── Comando: AWS CLI
```

```bash
aws sts get-caller-identity --profile admin-mined-ext
│   │   │                   │         │
│   │   │                   │         └── Perfil SSO configurado
│   │   │                   └── Flag: especificar perfil específico
│   │   └── Subcomando: obtener información del usuario actual
│   └── Servicio: Security Token Service (autenticación)
└── Comando: AWS CLI
```

---

## **🎯 EJERCICIO INTEGRADO: "Mi Primer DevOps Setup"**

### **Objetivo:**
Crear un proyecto que use las 4 tecnologías juntas por primera vez.

### **Tecnologías integradas:**

#### **🐧 Linux - Gestión de archivos:**
```bash
mkdir -p mi-primer-devops/{src,docs}
│     │  │                │
│     │  │                └── Estructura: crear múltiples directorios
│     │  └── Flag: crear directorios padre si no existen
│     └── Comando: crear directorio (make directory)
└── Comando: Linux
```

#### **🐳 Docker - Containerización:**
**Dockerfile creado:**
```dockerfile
FROM nginx:alpine
COPY src/index.html /usr/share/nginx/html/
EXPOSE 80
```

**Comandos utilizados:**
```bash
docker build -t mi-devops-app .
docker run -d -p 3000:80 --name mi-app mi-devops-app
```

#### **🐙 GitHub - Versionado:**
```bash
git init
git branch -m main
git add .
git commit -m "feat: mi primer proyecto DevOps integrado"
git push -u origin main
```

#### **☁️ AWS CLI - Exploración:**
```bash
aws ec2 describe-regions --profile admin-mined-ext
aws sts get-caller-identity --profile admin-mined-ext
```

### **Resultados:**
- ✅ Aplicación web funcionando en http://localhost:3000
- ✅ Código subido al repositorio DevOps-Course
- ✅ 20+ regiones AWS exploradas
- ✅ Identidad AWS confirmada

---

## **🔧 PROBLEMAS RESUELTOS**

### **AWS CLI - Token expirado:**
- **Error:** "Token has expired and refresh failed"
- **Solución:** `aws sso login` para renovar token SSO
- **Aprendizaje:** Tokens SSO tienen tiempo de vida limitado

### **Docker - Puerto ocupado:**
- **Error:** `Bind for 0.0.0.0:3000 failed: port is already allocated`
- **Solución:** `docker stop micro-test` → `docker rm micro-test`
- **Aprendizaje:** Verificar puertos antes de ejecutar contenedores

### **Git - Branch por defecto:**
- **Situación:** Git usa `master`, GitHub usa `main`
- **Solución:** `git branch -m main`
- **Aprendizaje:** Estándar moderno es `main`

---

## **📊 VERIFICACIONES EXITOSAS**

### **Setup completo confirmado:**
- **🐳 Docker:** Versión 28.4.0, contenedor hello-world exitoso
- **🐙 GitHub:** Usuario `acuzcoz` configurado, CLI autenticado
- **☁️ AWS CLI:** Versión 2.30.1, SSO configurado (perfil: admin-mined-ext)
- **🐧 Linux:** Comandos básicos practicados en proyecto real

### **Capacidades verificadas:**
- ✅ Ejecutar contenedores Docker
- ✅ Crear y gestionar repositorios GitHub
- ✅ Gestionar recursos AWS desde terminal
- ✅ Navegar y administrar archivos con Linux

---

## **💡 SKILLS DESARROLLADOS**

### **Técnicos:**
- Verificación de instalaciones y configuraciones
- Troubleshooting básico de problemas reales
- Comprensión de anatomía de comandos
- Integración de múltiples tecnologías

### **DevOps Mindset:**
- Workflow natural: desarrollo → versionado → deploy → cloud
- Configuración profesional (SSO para AWS)
- Documentación sistemática
- Resolución metódica de problemas

---

## **📁 ARCHIVOS Y ESTRUCTURA**

### **Proyecto creado:**
```
mi-primer-devops/
├── Dockerfile
├── .gitignore
├── src/
│   └── index.html
└── docs/
```

### **Configuraciones:**
- **Docker:** Imagen personalizada funcionando
- **Git:** Repositorio inicializado y conectado
- **AWS:** Perfil SSO configurado
- **GitHub:** Código versionado y subido

---

## **🚀 PREPARACIÓN PARA LECCIÓN 2**

### **Base establecida:**
- ✅ 4 tecnologías funcionando correctamente
- ✅ Primer proyecto integrado completado
- ✅ Troubleshooting básico dominado
- ✅ Anatomía de comandos comprendida

### **Próximo paso:**
**Lección 2: Comandos Docker Básicos** - Gestión avanzada de contenedores e imágenes

---

## **📋 RESUMEN EJECUTIVO**

**✅ Lección 1 completada exitosamente:**
- **Conceptos:** Docker fundamentals, diferencias con VMs
- **Setup:** 4 tecnologías configuradas y verificadas
- **Proyecto:** Aplicación web containerizada funcionando
- **Skills:** Integración, troubleshooting, anatomía de comandos
- **Preparado para:** Comandos Docker avanzados

---

*Lección completada: 2025-09-14 | Metodología integrada aplicada | Base sólida establecida*
