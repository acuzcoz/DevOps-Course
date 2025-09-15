# 📚 MÓDULO 1: SETUP COMPLETO DE TECNOLOGÍAS
## Docker + GitHub + AWS CLI + Linux

**Objetivo:** Configurar desde cero las 4 tecnologías fundamentales  
**Nivel:** Principiante absoluto  
**Estado:** ✅ **COMPLETADO**

---

## **🎯 OVERVIEW DEL MÓDULO**

Este módulo te lleva desde **cero absoluto** hasta tener un **setup completo** de las 4 tecnologías que usaremos en todo el curso.

### **🔧 Tecnologías configuradas:**
1. **🐳 Docker** - Containerización y desarrollo ✅
2. **🐙 GitHub** - Versionado y colaboración ✅
3. **☁️ AWS CLI** - Gestión cloud desde terminal ✅
4. **🐧 Linux** - Comandos y administración ✅

---

## **📁 ARCHIVOS DE CONFIGURACIÓN**

### **🐳 [SETUP_DOCKER.md](./SETUP_DOCKER.md)**
**Configuración completa de Docker desde cero:**
- ¿Qué es Docker y qué problema resuelve?
- Instalación paso a paso de Docker Desktop
- Primer contenedor `hello-world`
- Comandos básicos con anatomía completa
- Conceptos: imagen vs contenedor
- Verificación y troubleshooting

### **🐙 [SETUP_GITHUB.md](./SETUP_GITHUB.md)**
**Configuración completa de Git + GitHub + GitHub CLI:**
- ¿Qué es GitHub y qué problema resuelve?
- Crear cuenta GitHub
- Configurar Git con identidad
- Instalar y configurar GitHub CLI
- Comandos básicos con anatomía completa
- Workflow: local → staging → commit → push
- Verificación y troubleshooting

### **☁️ [SETUP_AWS_CLI.md](./SETUP_AWS_CLI.md)**
**Configuración completa de AWS CLI desde cero:**
- ¿Qué es AWS CLI y qué problema resuelve?
- Crear cuenta AWS (Free Tier)
- Crear usuario IAM y Access Keys
- Instalar y configurar AWS CLI
- Comandos básicos con anatomía completa
- Conceptos: regiones, servicios, IAM
- Verificación y troubleshooting

### **🐧 [SETUP_LINUX.md](./SETUP_LINUX.md)**
**Comandos Linux esenciales desde cero:**
- ¿Por qué Linux en terminal?
- Navegación de directorios
- Gestión de archivos y permisos
- Comandos básicos con anatomía completa
- Conceptos: rutas, permisos, procesos
- Ejercicios prácticos paso a paso

---

## **🎯 LECCIÓN 1: ¿Qué es Docker? + Verificación Setup Completo** ✅

### **Conceptos aprendidos:**
- **Problema tradicional:** "En mi máquina funciona" ❌
- **Solución Docker:** Contenedores que funcionan igual en todas partes ✅
- **Diferencia:** Máquina Virtual (pesada) vs Contenedor (ligero)

### **Comandos verificados con anatomía:**

#### **Docker:**
```bash
docker --version
│      │
│      └── Flag: mostrar versión instalada
└── Comando: Docker CLI
# Resultado: Docker version 28.4.0, build d8eb465f86 ✅

docker run hello-world
│      │   │
│      │   └── Imagen: contenedor de prueba oficial
│      └── Subcomando: ejecutar contenedor
└── Comando: Docker CLI
# Resultado: "Hello from Docker!" ✅
```

#### **GitHub:**
```bash
git config --global user.name
│   │      │        │    │
│   │      │        │    └── Propiedad: nombre del usuario
│   │      │        └── Scope: configuración para todos los repositorios
│   │      └── Flag: especificar alcance global
│   └── Subcomando: gestionar configuración
└── Comando: Git CLI
# Resultado: acuzcoz ✅

gh auth status
│  │    │
│  │    └── Subcomando: mostrar estado de autenticación
│  └── Recurso: autenticación
└── Comando: GitHub CLI
# Resultado: ✓ Logged in to github.com account acuzcoz ✅
```

#### **AWS CLI:**
```bash
aws --version
│   │
│   └── Flag: mostrar versión instalada
└── Comando: AWS CLI
# Resultado: aws-cli/2.30.1 Python/3.13.7 Darwin/24.6.0 ✅

aws configure sso
│   │         │
│   │         └── Subcomando: configurar perfil SSO interactivamente
│   └── Subcomando: gestionar configuración
└── Comando: AWS CLI
# Configuración: Profile "admin-mined-ext" creado ✅

aws sts get-caller-identity --profile admin-mined-ext
│   │   │                   │         │
│   │   │                   │         └── Perfil SSO configurado
│   │   │                   └── Flag: especificar perfil
│   │   └── Subcomando: obtener información del usuario actual
│   └── Servicio: Security Token Service
└── Comando: AWS CLI
# Resultado: Usuario "ancuzcoz", Cuenta "021891597458", Rol "Administrators-AWS" ✅
```

---

## **📁 ESTRUCTURA DE LECCIONES**

### **📚 [Lección 1: ¿Qué es Docker? + Setup Completo](./leccion1/)**
**Estado:** ✅ **COMPLETADA**
- **Conceptos:** Docker fundamentals, diferencias con VMs
- **Setup:** 4 tecnologías configuradas y verificadas
- **Ejercicio integrado:** "Mi Primer DevOps Setup"
- **Comandos:** 20 comandos con anatomía completa
- **Archivos:** README.md, COMANDOS_APRENDIDOS.md

### **📚 [Lección 2: Comandos Docker Básicos](./leccion2/)**
**Estado:** 🔄 **EN PROGRESO** (3/4 ejercicios completados)
- **Conceptos:** Gestión avanzada de contenedores e imágenes
- **Ejercicios:** 4 ejercicios prácticos con troubleshooting real
- **Comandos:** 10+ comandos con anatomía completa
- **Archivos:** README.md, EJERCICIOS_PRACTICOS.md
- **Pendiente:** Ejercicio 4 (system commands)

### **📚 Lección 3: Imágenes vs Contenedores**
**Estado:** ⏳ **PENDIENTE**
- **Conceptos:** Diferencias profundas, ciclo de vida
- **Ejercicios:** Gestión avanzada de recursos
- **Comandos:** Registry, tags, layers

---

## **🎯 EJERCICIO INTEGRADO COMPLETADO** ✅

### **"Mi Primer DevOps Setup"**
**Proyecto que integra las 4 tecnologías fundamentales:**

#### **🐧 Linux - Gestión de archivos:**
- ✅ Estructura creada: `mkdir -p mi-primer-devops/{src,docs}`
- ✅ Navegación: `cd`, `ls -la`
- ✅ Creación de archivos: `touch Dockerfile`

#### **🐳 Docker - Containerización:**
- ✅ Dockerfile creado (FROM nginx:alpine, COPY, EXPOSE)
- ✅ Imagen construida: `docker build -t mi-devops-app .`
- ✅ Contenedor funcionando: http://localhost:3000
- ✅ Troubleshooting: Puertos ocupados, nombres de contenedores

#### **🐙 GitHub - Versionado:**
- ✅ Repositorio inicializado: `git init`
- ✅ Branch moderno: `git branch -m main`
- ✅ Código subido: `git add .`, `git commit`, `git push`
- ✅ .gitignore configurado

#### **☁️ AWS CLI - Exploración cloud:**
- ✅ Regiones EC2 listadas: 20+ regiones disponibles
- ✅ Identidad confirmada: Usuario `ancuzcoz`, Cuenta `021891597458`
- ✅ Perfil SSO funcionando correctamente

**Ubicación:** `modulo1/mi-primer-devops/`  
**Documentación:** [EJERCICIO_INTEGRADO_RESUMEN.md](./EJERCICIO_INTEGRADO_RESUMEN.md)

---

## **📊 PROGRESO DEL MÓDULO**

### **✅ Tecnologías completamente configuradas y probadas:**
- **🐳 Docker:** Instalado, verificado y usado en proyecto real
- **🐙 GitHub:** Configurado, autenticado y código subido
- **☁️ AWS CLI:** Configurado con SSO, servicios explorados
- **🐧 Linux:** Comandos básicos practicados en proyecto real

### **✅ Verificaciones exitosas:**
- Docker ejecuta contenedores y construye imágenes
- GitHub CLI puede crear repositorios y subir código
- AWS CLI conecta con cuenta real y explora servicios
- Terminal con comandos Linux funcionales para proyectos

### **✅ Problemas resueltos:**
- Docker: Puertos ocupados, nombres de contenedores
- Git: Branch master → main, repositorios remotos
- AWS: Token expirado → SSO login
- Troubleshooting real con soluciones aplicadas

---

## **🎯 CONFIGURACIÓN FINAL DOCUMENTADA**

### **Docker Setup:**
- **Versión:** 28.4.0
- **Estado:** Docker Desktop corriendo
- **Verificación:** `hello-world` container exitoso

### **GitHub Setup:**
- **Usuario Git:** acuzcoz
- **Email:** acuzco@cuevatech.com
- **GitHub CLI:** Autenticado con token completo
- **Permisos:** Acceso total a repositorios

### **AWS CLI Setup:**
- **Versión:** 2.30.1
- **Método:** SSO (Single Sign-On)
- **Perfil activo:** admin-mined-ext
- **Cuenta:** 021891597458
- **Rol:** Administrators-AWS (permisos completos)
- **Región:** us-east-1

### **Linux Setup:**
- **Shell:** Zsh en macOS
- **Comandos:** Disponibles y documentados
- **Compatibilidad:** Unix/Linux commands funcionando

---

## **🎯 PRÓXIMO PASO: EJERCICIO INTEGRADO**

**Con las 4 tecnologías configuradas, ahora crearemos:**

### **Proyecto: "Mi Primer DevOps Setup"**
1. **Linux:** Crear estructura de proyecto con comandos
2. **Docker:** Crear Dockerfile y construir imagen
3. **GitHub:** Subir proyecto a repositorio
4. **AWS CLI:** Verificar servicios disponibles

**Objetivo:** Demostrar que las 4 tecnologías funcionan juntas en un proyecto real.

---

## **💡 METODOLOGÍA APLICADA**

### **🔍 Anatomía de comandos:**
**Cada comando explicado símbolo por símbolo:**
```bash
comando subcomando --flag argumento
│       │          │     │
│       │          │     └── ¿Qué valor pasamos?
│       │          │     └── ¿Qué opción modificamos?
│       └── ¿Qué acción específica?
└── ¿Qué herramienta usamos?
```

### **📈 Progresión completada:**
1. ✅ **Conceptos** - ¿Qué problema resuelve cada tecnología?
2. ✅ **Instalación** - Setup paso a paso documentado
3. ✅ **Comandos básicos** - Con anatomía completa
4. ✅ **Verificación** - Confirmado que todo funciona
5. ✅ **Troubleshooting** - Problemas resueltos (SSO, perfiles)

---

## **🔧 PROBLEMAS RESUELTOS**

### **AWS CLI - Configuración SSO:**
- **Problema inicial:** Token expirado
- **Solución aplicada:** `aws sso login` + `aws configure sso`
- **Resultado:** Perfil SSO profesional configurado
- **Aprendizaje:** SSO es más seguro que credenciales estáticas

### **Múltiples perfiles AWS:**
- **Situación:** Varios perfiles disponibles
- **Solución:** Uso de `--profile admin-mined-ext`
- **Comando aprendido:** `aws configure list-profiles`

---

## **🚀 MÓDULO 1 COMPLETADO EXITOSAMENTE**

### **✅ Logros alcanzados:**
- Setup completo de 4 tecnologías fundamentales
- Comprensión de anatomía de comandos
- Configuración profesional (SSO para AWS)
- Base sólida para desarrollo DevOps

### **📈 Preparado para:**
- **Módulo 2:** Crear Dockerfiles desde cero
- **Integración real:** Proyectos que combinen las 4 tecnologías
- **Automatización:** Scripts y CI/CD pipelines
- **Portfolio:** Proyectos demostrables en GitHub

---

**🎯 Módulo 1 completado - Listo para crear tu primer proyecto DevOps integrado** ✅

**Fecha de finalización:** 2025-09-14  
**Próximo:** Ejercicio integrado + Módulo 2
