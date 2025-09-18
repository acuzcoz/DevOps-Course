# 🐙 SETUP GITHUB - DESDE CERO ABSOLUTO

**Tecnología:** Git + GitHub + GitHub CLI  
**Objetivo:** Configurar versionado y colaboración desde cero  
**Nivel:** Principiante absoluto

---

## **🎯 ¿QUÉ ES GITHUB?**

**Problema que resuelve:**
- Perder código por accidente ❌
- No poder colaborar en equipo
- No tener historial de cambios
- No poder hacer backup automático

**Solución GitHub:**
- **Git:** Control de versiones local
- **GitHub:** Repositorios en la nube + colaboración
- **GitHub CLI:** Gestión desde terminal

---

## **📥 SETUP PASO A PASO**

### **PASO 1: Crear cuenta GitHub**
1. Ve a: https://github.com
2. Clic en "Sign up"
3. Elige username (ejemplo: `acuzcoz`)
4. Proporciona email y contraseña
5. Verifica tu email

### **PASO 2: Verificar Git (ya instalado en macOS)**
```bash
git --version
│   │
│   └── Flag: mostrar versión instalada
└── Comando: Git CLI
```

**Resultado esperado:**
```
git version 2.39.0 (o superior)
```

### **PASO 3: Configurar Git con tu identidad**
```bash
git config --global user.name "Tu Nombre"
│   │      │        │    │    │
│   │      │        │    │    └── Valor: tu nombre real
│   │      │        │    └── Propiedad: nombre del usuario
│   │      │        └── Scope: configuración para todos los repositorios
│   │      └── Flag: especificar alcance global
│   └── Subcomando: gestionar configuración
└── Comando: Git CLI
```

```bash
git config --global user.email "tu@email.com"
│   │      │        │    │     │
│   │      │        │    │     └── Valor: tu email de GitHub
│   │      │        │    └── Propiedad: email del usuario
│   │      │        └── Scope: configuración global
│   │      └── Flag: alcance global
│   └── Subcomando: configuración
└── Comando: Git CLI
```

**¿Para qué sirve?** Git necesita saber quién hace cada cambio para el historial.

### **PASO 4: Instalar GitHub CLI**
```bash
brew install gh
│     │       │
│     │       └── Paquete: GitHub CLI
│     └── Subcomando: instalar paquete
└── Comando: Homebrew (gestor de paquetes macOS)
```

### **PASO 5: Autenticar GitHub CLI**
```bash
gh auth login
│  │    │
│  │    └── Subcomando: iniciar sesión
│  └── Recurso: autenticación
└── Comando: GitHub CLI
```

**Proceso interactivo:**
1. Selecciona: `GitHub.com`
2. Selecciona: `HTTPS`
3. Selecciona: `Login with a web browser`
4. Copia el código que aparece
5. Presiona Enter (abre navegador)
6. Pega el código en GitHub
7. Autoriza GitHub CLI

---

## **🔧 VERIFICACIÓN DE CONFIGURACIÓN**

### **Verificar configuración Git:**
```bash
git config --global user.name
│   │      │        │    │
│   │      │        │    └── Propiedad: obtener nombre configurado
│   │      │        └── Scope: configuración global
│   │      └── Flag: alcance global
│   └── Subcomando: ver configuración
└── Comando: Git CLI
```

```bash
git config --global user.email
│   │      │        │    │
│   │      │        │    └── Propiedad: obtener email configurado
│   │      │        └── Scope: configuración global
│   │      └── Flag: alcance global
│   └── Subcomando: ver configuración
└── Comando: Git CLI
```

### **Verificar autenticación GitHub:**
```bash
gh auth status
│  │    │
│  │    └── Subcomando: mostrar estado de autenticación
│  └── Recurso: autenticación
└── Comando: GitHub CLI
```

**Resultado esperado:**
```
✓ Logged in to github.com account tu-usuario
- Active account: true
- Git operations protocol: https
- Token: ghp_************************************
```

---

## **📚 COMANDOS BÁSICOS APRENDIDOS**

### **Git - Control de versiones local:**
```bash
git init               # Inicializar repositorio en carpeta actual
│   │
│   └── Subcomando: inicializar repositorio Git
└── Comando: Git CLI

git add .              # Agregar todos los archivos al staging area
│   │   │
│   │   └── Argumento: todos los archivos (directorio actual)
│   └── Subcomando: agregar archivos para commit
└── Comando: Git CLI

git commit -m "mensaje"  # Confirmar cambios con mensaje
│   │      │  │
│   │      │  └── Mensaje descriptivo del cambio
│   │      └── Flag: especificar mensaje
│   └── Subcomando: confirmar cambios
└── Comando: Git CLI

git status             # Ver estado actual del repositorio
│   │
│   └── Subcomando: mostrar estado de archivos
└── Comando: Git CLI
```

### **GitHub CLI - Gestión de repositorios:**
```bash
gh repo create nombre --public --description "descripción"
│  │    │      │      │        │             │
│  │    │      │      │        │             └── Descripción del repositorio
│  │    │      │      │        └── Flag: especificar descripción
│  │    │      │      └── Flag: repositorio público
│  │    │      └── Nombre del repositorio
│  │    └── Subcomando: crear repositorio
│  └── Recurso: repositorio
└── Comando: GitHub CLI

gh repo view           # Ver repositorio actual en navegador
│  │    │
│  │    └── Subcomando: abrir repositorio en navegador
│  └── Recurso: repositorio
└── Comando: GitHub CLI
```

---

## **🔍 CONCEPTOS FUNDAMENTALES**

### **Git vs GitHub:**
- **Git:** Control de versiones **local** (en tu computadora)
- **GitHub:** Servicio **en la nube** para repositorios Git

### **Workflow básico:**
```
1. git init          # Inicializar repositorio
2. git add .         # Preparar archivos
3. git commit -m ""  # Guardar cambios localmente
4. gh repo create    # Crear repositorio en GitHub
5. git push          # Subir cambios a GitHub
```

### **Staging Area:**
```
Archivos modificados → git add → Staging Area → git commit → Repositorio
```

---

## **✅ VERIFICACIÓN FINAL**

### **Comandos de verificación:**
```bash
# 1. Git instalado y configurado
git --version
git config --global user.name
git config --global user.email

# 2. GitHub CLI instalado y autenticado
gh --version
gh auth status

# 3. Crear repositorio de prueba
mkdir test-repo
cd test-repo
git init
echo "# Test Repository" > README.md
git add .
git commit -m "Initial commit"
gh repo create test-repo --public
git push -u origin main
```

### **Estado esperado:**
- ✅ Git configurado con tu nombre y email
- ✅ GitHub CLI autenticado con tu cuenta
- ✅ Puedes crear repositorios desde terminal
- ✅ Puedes subir código a GitHub

---

## **🚀 PRÓXIMO PASO**

**Una vez completado este setup:**
- Puedes versionar cualquier proyecto
- Puedes colaborar con otros desarrolladores
- Tienes backup automático en la nube
- Preparado para CI/CD con GitHub Actions

**Siguiente tecnología:** AWS CLI

---

## **🔧 TROUBLESHOOTING COMÚN**

### **Problema: "git command not found"**
- **Causa:** Git no instalado (raro en macOS)
- **Solución:** `xcode-select --install`

### **Problema: "gh command not found"**
- **Causa:** GitHub CLI no instalado
- **Solución:** `brew install gh`

### **Problema: "Authentication failed"**
- **Causa:** Token expirado o mal configurado
- **Solución:** `gh auth logout` → `gh auth login`

### **Problema: "Permission denied (publickey)"**
- **Causa:** SSH keys no configuradas
- **Solución:** Usar HTTPS (ya configurado) o configurar SSH keys

---

**🎯 GitHub configurado exitosamente - Listo para versionado y colaboración** ✅
