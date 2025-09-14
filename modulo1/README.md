# 📚 MÓDULO 1: SETUP COMPLETO DE TECNOLOGÍAS
## Docker + GitHub + AWS CLI + Linux

**Objetivo:** Configurar desde cero las 4 tecnologías fundamentales  
**Nivel:** Principiante absoluto  
**Estado:** 🔄 En progreso

---

## **🎯 OVERVIEW DEL MÓDULO**

Este módulo te lleva desde **cero absoluto** hasta tener un **setup completo** de las 4 tecnologías que usaremos en todo el curso.

### **🔧 Tecnologías a configurar:**
1. **🐳 Docker** - Containerización y desarrollo
2. **🐙 GitHub** - Versionado y colaboración  
3. **☁️ AWS CLI** - Gestión cloud desde terminal
4. **🐧 Linux** - Comandos y administración

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

## **🎯 LECCIÓN 1: ¿Qué es Docker? + Verificación Setup**

### **Conceptos aprendidos:**
- **Problema tradicional:** "En mi máquina funciona" ❌
- **Solución Docker:** Contenedores que funcionan igual en todas partes ✅
- **Diferencia:** Máquina Virtual (pesada) vs Contenedor (ligero)

### **Comandos con anatomía:**
```bash
docker --version
│      │
│      └── Flag: mostrar versión instalada
└── Comando: Docker CLI

docker run hello-world
│      │   │
│      │   └── Imagen: contenedor de prueba oficial
│      └── Subcomando: ejecutar contenedor
└── Comando: Docker CLI
```

### **Estado actual:**
- ✅ Docker funcionando (versión 28.4.0)
- ✅ Primer contenedor exitoso
- ✅ GitHub configurado (usuario: acuzcoz)
- ✅ GitHub CLI autenticado
- ⏳ AWS CLI por verificar
- ⏳ Linux comandos por practicar

---

## **📊 PROGRESO DEL MÓDULO**

### **Tecnologías configuradas:**
- **🐳 Docker:** ✅ Instalado y verificado
- **🐙 GitHub:** ✅ Configurado y autenticado
- **☁️ AWS CLI:** ⏳ Por verificar configuración
- **🐧 Linux:** ⏳ Por practicar comandos básicos

### **Próximos pasos:**
1. **Verificar AWS CLI** (comandos de verificación)
2. **Practicar Linux** (ejercicios básicos)
3. **Ejercicio integrado** (usar las 4 tecnologías juntas)

---

## **🎯 EJERCICIO INTEGRADO FINAL**

**Una vez completado el setup de las 4 tecnologías:**

### **Proyecto: "Mi Primer DevOps Setup"**
1. **Linux:** Crear estructura de proyecto con comandos
2. **Docker:** Crear Dockerfile simple
3. **GitHub:** Subir proyecto a repositorio
4. **AWS CLI:** Verificar conectividad y explorar servicios

**Objetivo:** Demostrar que las 4 tecnologías funcionan juntas.

---

## **💡 METODOLOGÍA DE APRENDIZAJE**

### **🔍 Anatomía de comandos:**
**Cada comando se explica símbolo por símbolo:**
```bash
comando subcomando --flag argumento
│       │          │     │
│       │          │     └── ¿Qué valor pasamos?
│       │          └── ¿Qué opción modificamos?
│       └── ¿Qué acción específica?
└── ¿Qué herramienta usamos?
```

### **📈 Progresión natural:**
1. **Conceptos** - ¿Qué problema resuelve?
2. **Instalación** - Setup paso a paso
3. **Comandos básicos** - Con anatomía completa
4. **Verificación** - Confirmar que funciona
5. **Troubleshooting** - Resolver problemas comunes

---

## **🔧 TROUBLESHOOTING GENERAL**

### **Problemas comunes del setup:**

**Docker:**
- "Docker command not found" → Reinstalar Docker Desktop
- "Cannot connect to daemon" → Iniciar Docker Desktop

**GitHub:**
- "Authentication failed" → `gh auth logout` → `gh auth login`
- "Permission denied" → Verificar token y permisos

**AWS CLI:**
- "Unable to locate credentials" → `aws configure`
- "Access Denied" → Verificar permisos IAM

**Linux:**
- "Permission denied" → `chmod +x` o `sudo`
- "Command not found" → Verificar instalación

---

## **🚀 PRÓXIMO MÓDULO**

**Una vez completado Módulo 1:**
- **Módulo 2:** Tu primer Dockerfile desde cero
- **Integración real:** Cada ejercicio usará las 4 tecnologías
- **Proyectos reales:** Portfolio demostrable en GitHub

---

**🎯 Objetivo del Módulo 1: Setup sólido de las 4 tecnologías fundamentales** ✅
