# 🐧 SETUP LINUX - DESDE CERO ABSOLUTO

**Tecnología:** Linux Commands + Terminal  
**Objetivo:** Dominar comandos esenciales para administración  
**Nivel:** Principiante absoluto

---

## **🎯 ¿QUÉ ES LINUX?**

**Problema que resuelve:**
- Interfaces gráficas lentas para administración ❌
- No poder automatizar tareas repetitivas
- Falta de control granular del sistema
- No poder gestionar servidores remotos

**Solución Linux Terminal:**
- **Velocidad:** Comandos más rápidos que clicks
- **Automatización:** Scripts para tareas repetitivas
- **Control total:** Acceso a todo el sistema
- **Administración remota:** SSH a servidores

---

## **📥 SETUP EN MACOS**

### **¿Por qué macOS para aprender Linux?**
- macOS está basado en Unix (similar a Linux)
- Terminal nativo con comandos compatibles
- Mismos conceptos: archivos, permisos, procesos
- Preparación para servidores Linux reales

### **PASO 1: Abrir Terminal**
1. **Método 1:** `Cmd + Espacio` → escribir "Terminal" → Enter
2. **Método 2:** Applications → Utilities → Terminal
3. **Método 3:** `Cmd + Espacio` → escribir "iTerm2" (si instalado)

### **PASO 2: Verificar shell actual**
```bash
echo $SHELL
│    │
│    └── Variable: shell actual del sistema
└── Comando: mostrar texto/variables
```

**Resultado esperado:**
```
/bin/zsh  (Zsh - shell moderno)
/bin/bash (Bash - shell tradicional)
```

### **PASO 3: Verificar sistema**
```bash
uname -a
│     │
│     └── Flag: mostrar toda la información del sistema
└── Comando: información del sistema Unix
```

**¿Para qué sirve?** Ver qué sistema operativo y arquitectura tienes.

---

## **📚 COMANDOS BÁSICOS ESENCIALES**

### **Navegación de directorios:**
```bash
pwd
│
└── Comando: mostrar directorio actual (print working directory)
```

```bash
ls
│
└── Comando: listar archivos y directorios (list)

ls -l
│  │
│  └── Flag: formato largo (permisos, propietario, tamaño, fecha)
└── Comando: listar

ls -la
│  │ │
│  │ └── Flag: mostrar archivos ocultos (all)
│  └── Flag: formato largo
└── Comando: listar
```

```bash
cd /Users/tu-usuario
│  │
│  └── Argumento: directorio destino (ruta absoluta)
└── Comando: cambiar directorio (change directory)

cd ..
│  │
│  └── Argumento: directorio padre (subir un nivel)
└── Comando: cambiar directorio

cd ~
│  │
│  └── Argumento: directorio home del usuario
└── Comando: cambiar directorio
```

### **Gestión de archivos:**
```bash
mkdir mi-proyecto
│     │
│     └── Argumento: nombre del directorio a crear
└── Comando: crear directorio (make directory)

mkdir -p proyecto/src/components
│     │  │
│     │  └── Estructura de directorios anidados
│     └── Flag: crear directorios padre si no existen
└── Comando: crear directorio
```

```bash
touch archivo.txt
│     │
│     └── Argumento: nombre del archivo a crear
└── Comando: crear archivo vacío o actualizar timestamp

echo "Hola mundo" > archivo.txt
│    │             │ │
│    │             │ └── Archivo destino
│    │             └── Operador: redirección (sobrescribir)
│    └── Texto a escribir
└── Comando: mostrar texto
```

```bash
cp archivo.txt backup.txt
│  │          │
│  │          └── Destino: nuevo archivo
│  └── Origen: archivo a copiar
└── Comando: copiar archivos (copy)

cp -r directorio/ backup/
│  │  │           │
│  │  │           └── Destino: directorio backup
│  │  └── Origen: directorio a copiar
│  └── Flag: recursivo (para directorios)
└── Comando: copiar
```

```bash
mv archivo.txt nuevo-nombre.txt
│  │          │
│  │          └── Nuevo nombre o ubicación
│  └── Archivo a mover/renombrar
└── Comando: mover/renombrar (move)

rm archivo.txt
│  │
│  └── Archivo a eliminar
└── Comando: eliminar archivos (remove)

rm -rf directorio/
│  │ │ │
│  │ │ └── Directorio a eliminar
│  │ └── Flag: forzar (no preguntar)
│  └── Flag: recursivo (directorios y contenido)
└── Comando: eliminar
```

### **Ver contenido de archivos:**
```bash
cat archivo.txt
│   │
│   └── Archivo a mostrar
└── Comando: mostrar contenido completo (concatenate)

head archivo.txt
│    │
│    └── Archivo a mostrar
└── Comando: mostrar primeras 10 líneas

tail archivo.txt
│    │
│    └── Archivo a mostrar
└── Comando: mostrar últimas 10 líneas

less archivo.txt
│    │
│    └── Archivo a mostrar
└── Comando: mostrar contenido paginado (navegable)
```

---

## **🔍 CONCEPTOS FUNDAMENTALES**

### **Rutas absolutas vs relativas:**
```bash
# Ruta absoluta (desde raíz del sistema)
/Users/tu-usuario/Documents/proyecto

# Ruta relativa (desde directorio actual)
./proyecto          # Directorio actual
../Documents        # Directorio padre
~/Documents         # Directorio home
```

### **Permisos de archivos:**
```bash
ls -l archivo.txt
-rw-r--r--  1 usuario  staff  1024 Nov 14 10:30 archivo.txt
│││││││││
│││││││└└── Otros: lectura
│││││└└──── Grupo: lectura
│││└└────── Propietario: lectura + escritura
││└──────── Número de enlaces
│└───────── Tipo: - (archivo), d (directorio)
└────────── Permisos
```

### **Variables de entorno:**
```bash
echo $HOME          # Directorio home del usuario
echo $PATH          # Directorios donde buscar comandos
echo $USER          # Nombre del usuario actual
```

---

## **🔧 COMANDOS DE SISTEMA**

### **Información del sistema:**
```bash
whoami
│
└── Comando: mostrar usuario actual (who am i)

date
│
└── Comando: mostrar fecha y hora actual

uptime
│
└── Comando: mostrar tiempo encendido del sistema

df -h
│  │
│  └── Flag: formato legible (human readable)
└── Comando: mostrar espacio en disco (disk free)
```

### **Procesos:**
```bash
ps aux
│  │││
│  ││└── Flag: mostrar información extendida
│  │└─── Flag: mostrar formato de usuario
│  └──── Flag: mostrar todos los procesos
└── Comando: mostrar procesos (process status)

top
│
└── Comando: mostrar procesos en tiempo real (interactivo)

kill 1234
│    │
│    └── PID: ID del proceso a terminar
└── Comando: terminar proceso
```

---

## **✅ EJERCICIOS PRÁCTICOS**

### **Ejercicio 1: Navegación básica**
```bash
# 1. Ver dónde estás
pwd

# 2. Ver contenido del directorio
ls -la

# 3. Ir al directorio home
cd ~

# 4. Crear estructura de proyecto
mkdir -p DevOps-Practice/modulo1

# 5. Navegar al proyecto
cd DevOps-Practice/modulo1

# 6. Verificar ubicación
pwd
```

### **Ejercicio 2: Gestión de archivos**
```bash
# 1. Crear archivo con contenido
echo "Mi primer archivo Linux" > README.md

# 2. Ver contenido
cat README.md

# 3. Copiar archivo
cp README.md backup-README.md

# 4. Listar archivos
ls -l

# 5. Crear directorio
mkdir docs

# 6. Mover archivo
mv backup-README.md docs/

# 7. Ver estructura
ls -la docs/
```

### **Ejercicio 3: Permisos**
```bash
# 1. Crear script
echo '#!/bin/bash
echo "Hola desde script"' > mi-script.sh

# 2. Ver permisos actuales
ls -l mi-script.sh

# 3. Dar permisos de ejecución
chmod +x mi-script.sh

# 4. Ver permisos modificados
ls -l mi-script.sh

# 5. Ejecutar script
./mi-script.sh
```

---

## **🚀 COMANDOS AVANZADOS (Para más adelante)**

### **Búsqueda:**
```bash
find . -name "*.txt"        # Buscar archivos .txt
grep "texto" archivo.txt    # Buscar texto en archivo
```

### **Networking:**
```bash
ping google.com             # Probar conectividad
curl http://ejemplo.com     # Hacer petición HTTP
```

### **Compresión:**
```bash
tar -czf backup.tar.gz directorio/    # Comprimir
tar -xzf backup.tar.gz               # Descomprimir
```

---

## **✅ VERIFICACIÓN FINAL**

### **Comandos de verificación:**
```bash
# 1. Información del sistema
uname -a
whoami
pwd

# 2. Navegación
ls -la
cd ~ && pwd

# 3. Gestión de archivos
mkdir test-dir
touch test-dir/test-file.txt
echo "test content" > test-dir/test-file.txt
cat test-dir/test-file.txt
rm -rf test-dir

# 4. Permisos
echo "echo 'test'" > test-script.sh
chmod +x test-script.sh
./test-script.sh
rm test-script.sh
```

### **Estado esperado:**
- ✅ Navegación fluida entre directorios
- ✅ Creación y gestión de archivos
- ✅ Comprensión de permisos básicos
- ✅ Ejecución de comandos sin errores

---

## **🚀 PRÓXIMO PASO**

**Una vez dominados estos comandos:**
- Puedes administrar archivos eficientemente
- Preparado para scripts de automatización
- Listo para gestión de servidores remotos
- Base sólida para Docker y AWS

**Siguiente:** Integración con Docker (comandos Linux dentro de contenedores)

---

## **🔧 TROUBLESHOOTING COMÚN**

### **Problema: "Permission denied"**
- **Causa:** Sin permisos para ejecutar/acceder
- **Solución:** `chmod +x archivo` o `sudo comando`

### **Problema: "No such file or directory"**
- **Causa:** Ruta incorrecta o archivo no existe
- **Solución:** Verificar con `ls` y `pwd`

### **Problema: "Command not found"**
- **Causa:** Comando no instalado o no en PATH
- **Solución:** Verificar instalación o ruta completa

---

**🎯 Linux básico dominado - Listo para administración de sistemas** ✅
