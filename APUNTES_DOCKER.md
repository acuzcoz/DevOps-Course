# 📝 APUNTES DOCKER INTEGRADO - CONCEPTOS Y COMANDOS
## Docker + Linux + GitHub + AWS EC2

**Estudiante:** acuzcoz  
**Fecha:** 2025-09-08 (actualizado 2025-09-14)

---

## **🎯 METODOLOGÍA INTEGRADA**
**Cada concepto Docker se practica en 4 niveles:**
1. **Local**: Desarrollo y testing en macOS
2. **GitHub**: Versionado y colaboración
3. **EC2**: Deploy real en servidor Linux
4. **Integración**: Workflow completo DevOps

---

## **🔧 COMANDOS BÁSICOS APRENDIDOS**

### **Información y Estado**
```bash
docker --version                    # Ver versión de Docker
docker info                        # Información del sistema Docker
docker ps                          # Contenedores corriendo
docker ps -a                       # Todos los contenedores (incluso detenidos)
docker images                      # Listar todas las imágenes
docker system df                   # Uso de espacio en disco
docker system prune                # Limpiar recursos no utilizados
```

### **Gestión de Contenedores**
```bash
docker run hello-world             # Ejecutar contenedor simple
docker run -d -p 8080:80 nginx     # Ejecutar en background con mapeo de puerto
docker run -it ubuntu bash         # Ejecutar interactivo con terminal
docker run --name mi-app nginx     # Ejecutar con nombre específico
docker stop <nombre/id>             # Detener contenedor
docker start <nombre/id>            # Iniciar contenedor detenido
docker restart <nombre/id>          # Reiniciar contenedor
docker rm <nombre/id>               # Eliminar contenedor
docker rm -f <nombre/id>            # Forzar eliminación de contenedor corriendo
```

### **Construcción de Imágenes**
```bash
docker build -t mi-imagen .        # Construir imagen desde Dockerfile
docker build -t mi-imagen:v1.0 .   # Construir con tag específico
docker build --no-cache -t imagen . # Construir sin usar cache
docker tag imagen:latest imagen:v1  # Crear tag adicional
```

### **Debugging y Logs**
```bash
docker logs <nombre/id>             # Ver logs del contenedor
docker logs -f <nombre/id>          # Seguir logs en tiempo real
docker exec -it <nombre/id> sh      # Entrar al contenedor (shell)
docker exec -it <nombre/id> bash    # Entrar al contenedor (bash)
docker inspect <nombre/id>          # Información detallada del contenedor
docker stats                        # Estadísticas de uso de recursos
```

### **Gestión de Imágenes**
```bash
docker pull nginx:alpine           # Descargar imagen específica
docker push mi-imagen:v1.0         # Subir imagen a registry
docker rmi <imagen>                 # Eliminar imagen
docker image prune                 # Eliminar imágenes no utilizadas
```

---

## **📋 DOCKERFILE - INSTRUCCIONES APRENDIDAS**

### **Instrucciones Básicas**
```dockerfile
FROM nginx:alpine                   # Imagen base
WORKDIR /app                        # Directorio de trabajo
COPY . .                           # Copiar archivos del contexto
COPY src/ /app/src/                # Copiar directorio específico
EXPOSE 80                          # Puerto que expone el contenedor
CMD ["nginx", "-g", "daemon off;"] # Comando por defecto
```

### **Instrucciones Intermedias (Aprendidas)**

#### **RUN - Ejecutar comandos durante build** ✅
```dockerfile
# ❌ Múltiples capas (ineficiente)
RUN apt-get update
RUN apt-get install -y curl
RUN apt-get install -y git

# ✅ Una sola capa (optimizado)
RUN apt-get update && \
    apt-get install -y curl git && \
    apt-get clean && \
    rm -rf /var/lib/apt/lists/*

# Alpine Linux (diferente gestor de paquetes)
RUN apk add --no-cache curl git python3 make
```

#### **ENV - Variables de entorno** ✅
```dockerfile
# Definir variables
ENV APP_NAME=MiApp
ENV VERSION=1.0.0
ENV DEBUG=true
ENV PORT=5000

# Múltiples variables en una línea
ENV APP_NAME=MiApp VERSION=1.0.0 DEBUG=true

# Usar variables en otros comandos
ENV PATH="/app/bin:${PATH}"
```

#### **WORKDIR - Directorio de trabajo** 🔄
```dockerfile
# Establecer directorio de trabajo
WORKDIR /app

# Todos los comandos siguientes se ejecutan en /app
RUN echo "Hola" > archivo.txt       # Se crea en /app/archivo.txt
COPY . .                           # Copia archivos a /app/
CMD ["python", "app.py"]           # Ejecuta desde /app/

# Cambiar a otro directorio
WORKDIR /datos
RUN echo "Datos" > info.txt        # Se crea en /datos/info.txt

# Volver a directorio anterior
WORKDIR /app
```

### **Mejores Prácticas Aprendidas**
```dockerfile
# ✅ Usar imágenes oficiales y específicas
FROM node:18-alpine

# ✅ Crear usuario no-root (próxima lección)
# USER node

# ✅ Optimizar capas - comandos relacionados juntos
RUN apk add --no-cache \
    curl \
    git \
    python3 \
    make

# ✅ Copiar package.json primero (mejor cache)
COPY package*.json ./
RUN npm install
COPY . .

# ✅ Usar .dockerignore para excluir archivos
# node_modules, .git, README.md, etc.
```

---

## **🐧 COMANDOS LINUX BÁSICOS (Para EC2)**

### **Navegación y Archivos**
```bash
pwd                                # Directorio actual
ls -la                            # Listar archivos detallado
cd /var/www                       # Cambiar directorio
mkdir -p proyecto/src             # Crear directorios recursivo
cp archivo.txt backup.txt         # Copiar archivo
mv archivo.txt nuevo.txt          # Mover/renombrar archivo
rm archivo.txt                    # Eliminar archivo
rm -rf directorio/                # Eliminar directorio recursivo
```

### **Permisos y Usuarios**
```bash
chmod +x script.sh               # Dar permisos de ejecución
chmod 755 archivo.txt            # Permisos específicos
chown user:group archivo.txt     # Cambiar propietario
sudo comando                     # Ejecutar como administrador
whoami                          # Usuario actual
```

### **Procesos y Servicios**
```bash
ps aux                          # Listar procesos
ps aux | grep docker           # Buscar procesos específicos
kill <PID>                     # Terminar proceso
killall node                   # Terminar todos los procesos node
systemctl status docker        # Estado del servicio Docker
systemctl start docker         # Iniciar servicio
systemctl enable docker        # Habilitar al inicio
```

### **Red y Conectividad**
```bash
netstat -tulpn                 # Puertos abiertos
ss -tulpn                      # Alternativa moderna a netstat
curl http://localhost:3000     # Probar endpoint HTTP
wget https://ejemplo.com/file  # Descargar archivo
ping google.com                # Probar conectividad
```

---

## **🐙 COMANDOS GIT/GITHUB BÁSICOS**

### **Configuración Inicial**
```bash
git config --global user.name "Tu Nombre"
git config --global user.email "tu@email.com"
gh auth login                  # Autenticar GitHub CLI
```

### **Workflow Básico**
```bash
git init                       # Inicializar repositorio
git add .                      # Agregar todos los archivos
git add archivo.txt            # Agregar archivo específico
git commit -m "Mensaje"        # Confirmar cambios
git status                     # Ver estado del repositorio
git log --oneline              # Ver historial resumido
```

### **GitHub Integration**
```bash
gh repo create mi-proyecto     # Crear repo en GitHub
git remote add origin <url>    # Conectar repo local con GitHub
git push origin main           # Subir cambios a GitHub
git pull origin main           # Descargar cambios de GitHub
git clone <url>                # Clonar repositorio
```

### **Branches**
```bash
git branch                     # Ver branches locales
git branch nueva-feature       # Crear nuevo branch
git checkout nueva-feature     # Cambiar a branch
git checkout -b dev            # Crear y cambiar a branch
git merge dev                  # Fusionar branch
```

---

## **☁️ COMANDOS AWS EC2 BÁSICOS**

### **Conexión SSH**
```bash
ssh -i clave.pem ubuntu@ip-publica    # Conectar a EC2
ssh -i ~/.ssh/mi-clave.pem ec2-user@ip # Conectar con clave específica
```

### **Gestión de Archivos en EC2**
```bash
scp -i clave.pem archivo.txt ubuntu@ip:/home/ubuntu/  # Copiar archivo a EC2
scp -i clave.pem -r carpeta/ ubuntu@ip:/var/www/      # Copiar directorio
```

### **Instalación de Docker en EC2**
```bash
# Ubuntu/Debian
sudo apt update
sudo apt install -y docker.io
sudo systemctl start docker
sudo systemctl enable docker
sudo usermod -aG docker $USER

# Amazon Linux
sudo yum update -y
sudo yum install -y docker
sudo service docker start
sudo usermod -aG docker ec2-user
```

---

## **🔗 WORKFLOW INTEGRADO APRENDIDO**

### **Desarrollo Local → GitHub → EC2**

#### **1. Desarrollo Local**
```bash
# Crear proyecto
mkdir mi-proyecto && cd mi-proyecto
echo "FROM nginx:alpine" > Dockerfile
echo "<h1>Mi App</h1>" > index.html

# Probar localmente
docker build -t mi-app .
docker run -p 3000:80 mi-app
# Verificar en http://localhost:3000
```

#### **2. Subir a GitHub**
```bash
# Inicializar Git
git init
echo "node_modules" > .gitignore
git add .
git commit -m "Initial commit"

# Crear repo y subir
gh repo create mi-proyecto --public
git push origin main
```

#### **3. Deploy en EC2**
```bash
# Conectar a servidor
ssh -i clave.pem ubuntu@ip-servidor

# Clonar proyecto
cd /var/www
sudo git clone https://github.com/usuario/mi-proyecto.git
cd mi-proyecto

# Build y ejecutar
sudo docker build -t mi-app .
sudo docker run -d -p 80:80 --name mi-app-prod mi-app

# Verificar
curl http://localhost
```

---

## **📚 CONCEPTOS CLAVE APRENDIDOS**

### **Docker**
- **Imagen vs Contenedor**: Imagen es plantilla, contenedor es instancia
- **Capas**: Cada instrucción Dockerfile crea una capa
- **Cache**: Docker reutiliza capas no modificadas
- **Port mapping**: -p host:container para acceso externo
- **Variables ENV**: Configuración flexible sin rebuild

### **Integración**
- **Local first**: Siempre probar localmente antes de deploy
- **Version control**: Todo código debe estar en Git
- **Reproducibilidad**: Mismo Dockerfile = mismo resultado
- **Separación**: Código, configuración y datos separados

### **DevOps Mindset**
- **Automatización**: Scripts para tareas repetitivas
- **Monitoreo**: Logs y métricas para troubleshooting
- **Seguridad**: Principio de menor privilegio
- **Documentación**: README y comentarios claros

---

## **🎯 PRÓXIMOS CONCEPTOS**

### **Docker (Pendientes)**
- **ARG**: Argumentos de build
- **USER**: Usuario no-root
- **Multi-stage builds**: Optimización avanzada
- **Docker Compose**: Multi-container apps

### **Linux (Por aprender)**
- **Systemd**: Gestión de servicios
- **Nginx**: Reverse proxy y load balancer
- **Cron**: Tareas programadas
- **Monitoring**: htop, iotop, logs

### **GitHub (Por aprender)**
- **Actions**: CI/CD automatizado
- **Secrets**: Gestión segura de credenciales
- **Environments**: Deploy por entornos
- **Webhooks**: Automatización de deploy

### **AWS (Por aprender)**
- **Security Groups**: Firewall de EC2
- **Load Balancers**: Distribución de tráfico
- **Auto Scaling**: Escalado automático
- **CloudWatch**: Monitoreo y alertas

---

## **🔧 TROUBLESHOOTING COMÚN**

### **Docker**
```bash
# Contenedor se cierra inmediatamente
docker logs <container-id>         # Ver logs de error
docker run -it imagen sh          # Ejecutar interactivo para debug

# Puerto no accesible
docker ps                         # Verificar port mapping
netstat -tulpn | grep 3000       # Verificar puerto en uso

# Imagen muy grande
docker history imagen            # Ver capas y tamaños
docker image prune               # Limpiar imágenes no usadas
```

### **Git/GitHub**
```bash
# Conflictos de merge
git status                       # Ver archivos en conflicto
git diff                        # Ver diferencias
git add .                       # Después de resolver conflictos
git commit -m "Resolve conflicts"

# Credenciales
gh auth status                  # Verificar autenticación
gh auth refresh                 # Renovar token
```

### **Linux/EC2**
```bash
# Permisos denegados
ls -la archivo.txt              # Ver permisos actuales
chmod +x script.sh              # Dar permisos de ejecución
sudo chown user:user archivo    # Cambiar propietario

# Servicio no inicia
systemctl status docker         # Ver estado del servicio
journalctl -u docker           # Ver logs del servicio
sudo systemctl restart docker   # Reiniciar servicio
```

---

## **📊 PROGRESO ACTUAL**

### **Completado ✅**
- **Docker básico**: Contenedores, imágenes, comandos
- **Dockerfile**: FROM, COPY, EXPOSE, CMD, RUN, ENV
- **Git básico**: add, commit, push, clone
- **Linux básico**: navegación, permisos, procesos

### **En progreso 🔄**
- **WORKDIR**: Directorio de trabajo en Dockerfile
- **Integración**: Workflow completo local → GitHub → EC2

### **Próximo ⏳**
- **ARG**: Argumentos de build
- **USER**: Seguridad con usuario no-root
- **GitHub Actions**: Automatización CI/CD
- **EC2 avanzado**: Load balancing, auto-scaling

---

**🎯 OBJETIVO:** Dominar stack completo DevOps  
**🚀 PROGRESO:** 15% del curso integrado completo
