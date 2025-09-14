# 🐳 SETUP DOCKER - DESDE CERO ABSOLUTO

**Tecnología:** Docker  
**Objetivo:** Instalar y configurar Docker desde cero  
**Nivel:** Principiante absoluto

---

## **🎯 ¿QUÉ ES DOCKER?**

**Problema que resuelve:**
- "En mi máquina funciona, en el servidor no" ❌
- Diferentes versiones de dependencias
- Configuraciones inconsistentes

**Solución Docker:**
- Empaqueta aplicación + dependencias en "contenedor"
- Funciona igual en todas partes ✅

---

## **📥 INSTALACIÓN PASO A PASO**

### **PASO 1: Descargar Docker Desktop**
1. Ve a: https://www.docker.com/products/docker-desktop/
2. Clic en "Download for Mac"
3. Descarga el archivo `.dmg`

### **PASO 2: Instalar Docker Desktop**
1. Abre el archivo `.dmg` descargado
2. Arrastra Docker a la carpeta Applications
3. Abre Docker desde Applications
4. Acepta los términos y condiciones
5. Proporciona tu contraseña de macOS (para permisos)

### **PASO 3: Verificar instalación**
```bash
docker --version
│      │
│      └── Flag: mostrar versión instalada
└── Comando: Docker CLI
```

**Resultado esperado:**
```
Docker version 28.4.0, build d8eb465f86
```

---

## **🔧 CONFIGURACIÓN INICIAL**

### **PASO 4: Verificar Docker Engine**
```bash
docker info
│      │
│      └── Subcomando: mostrar información del sistema Docker
└── Comando: Docker CLI
```

**¿Para qué sirve?** Ver si Docker Engine está corriendo correctamente.

### **PASO 5: Primer contenedor de prueba**
```bash
docker run hello-world
│      │   │
│      │   └── Imagen: contenedor oficial de prueba
│      └── Subcomando: ejecutar contenedor
└── Comando: Docker CLI
```

**¿Qué hace este comando?**
1. Busca imagen `hello-world` localmente
2. Si no la encuentra, la descarga de Docker Hub
3. Crea un contenedor desde la imagen
4. Ejecuta el contenedor
5. Muestra el mensaje de prueba
6. El contenedor se detiene automáticamente

**Resultado esperado:**
```
Hello from Docker!
This message shows that your installation appears to be working correctly.
```

---

## **📚 COMANDOS BÁSICOS APRENDIDOS**

### **Información del sistema:**
```bash
docker --version        # Ver versión de Docker
docker info            # Información detallada del sistema
```

### **Gestión de imágenes:**
```bash
docker images          # Listar imágenes descargadas
│      │
│      └── Subcomando: mostrar todas las imágenes locales
└── Comando: Docker CLI
```

### **Gestión de contenedores:**
```bash
docker ps              # Contenedores corriendo
│      │
│      └── Subcomando: mostrar contenedores activos (process status)
└── Comando: Docker CLI

docker ps -a           # Todos los contenedores (incluso detenidos)
│      │  │
│      │  └── Flag: mostrar todos (all)
│      └── Subcomando: process status
└── Comando: Docker CLI
```

---

## **🔍 CONCEPTOS FUNDAMENTALES**

### **Imagen vs Contenedor:**
- **Imagen:** Plantilla inmutable (como una clase en programación)
- **Contenedor:** Instancia ejecutable (como un objeto)

```
Imagen nginx ──┐
               ├── Contenedor 1 (puerto 80)
               ├── Contenedor 2 (puerto 81)
               └── Contenedor 3 (puerto 82)
```

### **Docker Hub:**
- Repositorio público de imágenes
- Como GitHub pero para imágenes Docker
- Imágenes oficiales: nginx, ubuntu, python, node, etc.

---

## **✅ VERIFICACIÓN FINAL**

### **Comandos de verificación:**
```bash
# 1. Versión instalada
docker --version

# 2. Sistema funcionando
docker info

# 3. Primer contenedor exitoso
docker run hello-world

# 4. Ver imágenes descargadas
docker images

# 5. Ver contenedores (deberían estar detenidos)
docker ps -a
```

### **Estado esperado:**
- ✅ Docker Desktop corriendo
- ✅ Comando `docker --version` funciona
- ✅ Comando `docker run hello-world` exitoso
- ✅ Imagen `hello-world` descargada
- ✅ Contenedor `hello-world` ejecutado y detenido

---

## **🚀 PRÓXIMO PASO**

**Una vez completado este setup:**
- Docker está listo para desarrollo
- Puedes ejecutar cualquier aplicación containerizada
- Preparado para crear tus propias imágenes

**Siguiente tecnología:** GitHub (Git + GitHub CLI)

---

## **🔧 TROUBLESHOOTING COMÚN**

### **Problema: "Docker command not found"**
- **Causa:** Docker Desktop no está instalado o no está en PATH
- **Solución:** Reinstalar Docker Desktop

### **Problema: "Cannot connect to Docker daemon"**
- **Causa:** Docker Desktop no está corriendo
- **Solución:** Abrir Docker Desktop desde Applications

### **Problema: "Permission denied"**
- **Causa:** Usuario no tiene permisos para Docker
- **Solución:** Reiniciar Docker Desktop, proporcionar contraseña

---

**🎯 Docker configurado exitosamente - Listo para containerizar aplicaciones** ✅
