# 🚀 GIT WORKFLOW - REFERENCIA RÁPIDA

## **WORKFLOW BÁSICO (Memorizar)**

### **1. NUEVO PROYECTO**
```bash
cd /ruta/proyecto
git init
echo "node_modules/
*.log
.env
.DS_Store" > .gitignore
git add .
git commit -m "feat: descripción inicial"
gh repo create nombre-repo --public --description "descripción"
git push -u origin main
```

### **2. CAMBIOS POSTERIORES**
```bash
git add .
git commit -m "feat/fix/docs: descripción del cambio"
git push
```

### **3. VERIFICACIONES**
```bash
git status          # Ver estado actual
git log --oneline   # Ver historial
gh repo view        # Ver repo en GitHub
```

---

## **COMANDOS ESENCIALES**

### **Configuración (Una vez)**
```bash
git config --global user.name "Tu Nombre"
git config --global user.email "tu@email.com"
gh auth login
```

### **Inicialización**
```bash
git init                    # Inicializar repositorio
git add .                   # Agregar todos los archivos
git commit -m "mensaje"     # Confirmar cambios
```

### **GitHub**
```bash
gh repo create nombre --public --description "desc"
git push -u origin main     # Primera subida
git push                    # Subidas posteriores
```

### **Información**
```bash
git status                  # Estado actual
git log --oneline          # Historial resumido
git remote -v              # Ver repositorios remotos
```

---

## **TIPOS DE COMMIT**

### **Prefijos Estándar**
- `feat:` Nueva funcionalidad
- `fix:` Corrección de bug
- `docs:` Documentación
- `style:` Formato, espacios
- `refactor:` Refactorización
- `test:` Tests
- `chore:` Tareas de mantenimiento

### **Ejemplos**
```bash
git commit -m "feat: agregar Dockerfile con WORKDIR"
git commit -m "fix: corregir puerto en aplicación"
git commit -m "docs: actualizar README con instrucciones"
```

---

## **GITIGNORE COMÚN**

### **Node.js**
```
node_modules/
npm-debug.log*
.env
dist/
```

### **General**
```
.DS_Store
*.log
.env
.vscode/
temp/
```

### **Docker**
```
.dockerignore
docker-compose.override.yml
```

---

## **TROUBLESHOOTING**

### **Problemas Comunes**
```bash
# Error: repository already exists
gh repo delete nombre-repo --confirm

# Error: not a git repository
git init

# Error: nothing to commit
git add .

# Ver qué archivos están siendo ignorados
git status --ignored
```

### **Verificaciones**
```bash
# ¿Git configurado?
git config --global user.name
git config --global user.email

# ¿GitHub autenticado?
gh auth status

# ¿Repositorio conectado?
git remote -v
```

---

## **WORKFLOW COMPLETO EJEMPLO**

```bash
# 1. Ir al proyecto
cd /Users/ancuzcoz/Library/CloudStorage/OneDrive-NEWWORLDEDUCATIONSAUS.A/DevOps-Course

# 2. Inicializar
git init

# 3. Ignorar archivos
echo "node_modules/
*.log
.env
.DS_Store" > .gitignore

# 4. Agregar todo
git add .

# 5. Commit inicial
git commit -m "feat: DevOps Course inicial

- Módulo 1 completado
- Módulo 2 en progreso
- Documentación completa"

# 6. Crear repo
gh repo create DevOps-Course --public --description "Curso DevOps integrado"

# 7. Subir
git push -u origin main

# 8. Verificar
gh repo view
```

---

**🎯 GUARDA ESTE ARCHIVO - Úsalo cuando necesites subir proyectos solo**
