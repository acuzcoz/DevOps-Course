# 📝 LECCIÓN 3: WORKDIR - Directorio de Trabajo Integrado

**Fecha:** 2025-09-14  
**Estado:** 🔄 En progreso  
**Módulo:** 2 - Dockerfile Intermedio

---

## **🎯 OBJETIVO INTEGRADO**
Aprender `WORKDIR` para organizar archivos en contenedores + implementar workflow completo DevOps:
- **Docker local**: Concepto WORKDIR + estructura organizada
- **GitHub**: Subir proyecto con CLI + documentación
- **EC2**: Deploy en servidor + navegación Linux
- **Linux**: Gestión de archivos, permisos, estructura de directorios

---

## **📚 CONCEPTO: ¿QUÉ ES WORKDIR?**

`WORKDIR` establece el **directorio de trabajo** donde se ejecutarán los siguientes comandos:
- `RUN`, `CMD`, `ENTRYPOINT`
- `COPY`, `ADD`

### **🔍 PROBLEMA SIN WORKDIR:**
```dockerfile
FROM ubuntu
RUN cd /app && echo "Hola" > archivo.txt
RUN cd /app && ls -la  # ❌ ERROR: No está en /app!
```
**¿Por qué falla?** Cada `RUN` es una **nueva capa**, vuelve al directorio raíz.

### **✅ SOLUCIÓN CON WORKDIR:**
```dockerfile
FROM ubuntu
WORKDIR /app
RUN echo "Hola" > archivo.txt
RUN ls -la  # ✅ Funciona: estamos en /app
```

---

## **🧪 EJERCICIO INTEGRADO: Microservicio Organizado**

### **PARTE 1: DOCKER LOCAL** 🔄

#### **Paso 1: Crear estructura de proyecto**
```bash
cd /Users/ancuzcoz/Library/CloudStorage/OneDrive-NEWWORLDEDUCATIONSAUS.A/DevOps-Course/modulo2/leccion3-workdir

# Crear estructura organizada
mkdir -p {src,tests,docs,scripts,config}
```

#### **Paso 2: Crear aplicación Node.js**
**package.json:**
```json
{
  "name": "microservicio-organizado",
  "version": "1.0.0",
  "description": "Microservicio con estructura organizada usando WORKDIR",
  "main": "src/app.js",
  "scripts": {
    "start": "node src/app.js",
    "test": "echo \"Tests ejecutándose desde: $(pwd)\"",
    "dev": "node src/app.js"
  },
  "dependencies": {
    "express": "^4.18.0"
  }
}
```

**src/app.js:**
```javascript
const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware para servir archivos estáticos
app.use(express.static('public'));

// Ruta principal
app.get('/', (req, res) => {
    const info = {
        app: 'Microservicio Organizado',
        version: '1.0.0',
        workdir: process.cwd(),
        estructura: {
            src: fs.existsSync('./src') ? '✅' : '❌',
            tests: fs.existsSync('./tests') ? '✅' : '❌',
            docs: fs.existsSync('./docs') ? '✅' : '❌',
            scripts: fs.existsSync('./scripts') ? '✅' : '❌',
            config: fs.existsSync('./config') ? '✅' : '❌'
        },
        archivos_src: fs.readdirSync('./src'),
        timestamp: new Date().toISOString()
    };
    
    res.json(info);
});

// Ruta de health check
app.get('/health', (req, res) => {
    res.json({ 
        status: 'OK', 
        workdir: process.cwd(),
        uptime: process.uptime() 
    });
});

app.listen(PORT, () => {
    console.log(`🚀 Microservicio iniciado en puerto ${PORT}`);
    console.log(`📁 Directorio de trabajo: ${process.cwd()}`);
    console.log(`🔗 Health check: http://localhost:${PORT}/health`);
});
```

#### **Paso 3: Crear Dockerfile con WORKDIR**
```dockerfile
FROM node:18-alpine

# Información del mantenedor
LABEL maintainer="acuzcoz"
LABEL description="Microservicio con estructura organizada usando WORKDIR"

# Instalar dependencias del sistema
RUN apk add --no-cache curl

# Establecer directorio de trabajo
WORKDIR /app

# Crear estructura de directorios
RUN mkdir -p src tests docs scripts config public logs

# Copiar package.json primero (mejor cache)
COPY package*.json ./

# Instalar dependencias Node
RUN npm install --only=production

# Copiar código fuente
COPY src/ ./src/
COPY scripts/ ./scripts/
COPY config/ ./config/

# Crear archivos de ejemplo en diferentes directorios
RUN echo "# Documentación del Microservicio" > docs/README.md && \
    echo "#!/bin/sh\necho 'Script ejecutándose desde: $(pwd)'" > scripts/deploy.sh && \
    chmod +x scripts/deploy.sh && \
    echo '{"env": "production", "debug": false}' > config/app.json

# Exponer puerto
EXPOSE 3000

# Health check
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
    CMD curl -f http://localhost:3000/health || exit 1

# Usuario no-root para seguridad
RUN addgroup -g 1001 -S nodejs && \
    adduser -S nodejs -u 1001 && \
    chown -R nodejs:nodejs /app
USER nodejs

# Comando por defecto
CMD ["npm", "start"]
```

#### **Paso 4: Crear archivos adicionales**
**scripts/setup.sh:**
```bash
#!/bin/bash
echo "🔧 Setup del microservicio"
echo "📁 Directorio actual: $(pwd)"
echo "📋 Contenido del directorio:"
ls -la
echo "✅ Setup completado"
```

**docs/ARCHITECTURE.md:**
```markdown
# Arquitectura del Microservicio

## Estructura de Directorios
- `src/`: Código fuente de la aplicación
- `tests/`: Tests unitarios e integración
- `docs/`: Documentación del proyecto
- `scripts/`: Scripts de deployment y utilidades
- `config/`: Archivos de configuración
- `public/`: Archivos estáticos (si los hay)
- `logs/`: Logs de la aplicación (runtime)

## WORKDIR Benefits
- Organización clara de archivos
- Comandos más simples y legibles
- Evita errores de rutas
- Directorio consistente para la aplicación
```

#### **Paso 5: Testing local**
```bash
# Build de la imagen
docker build -t microservicio-organizado .

# Ejecutar contenedor
docker run -d -p 3000:3000 --name micro-test microservicio-organizado

# Verificar funcionamiento
curl http://localhost:3000
curl http://localhost:3000/health

# Explorar estructura dentro del contenedor
docker exec -it micro-test sh
# Dentro del contenedor:
pwd
ls -la
ls -la src/
ls -la scripts/
cat docs/README.md
```

---

## **PARTE 2: GITHUB INTEGRATION** ⏳

### **Paso 6: Preparar para GitHub**
```bash
# Crear .gitignore
echo "node_modules/
*.log
.env
.DS_Store
dist/
coverage/" > .gitignore

# Crear README del proyecto
echo "# Microservicio Organizado con WORKDIR

Proyecto de ejemplo que demuestra el uso de WORKDIR en Docker para organizar la estructura de archivos.

## Estructura
- \`src/\`: Código fuente
- \`tests/\`: Tests
- \`docs/\`: Documentación
- \`scripts/\`: Scripts de deployment
- \`config/\`: Configuración

## Uso
\`\`\`bash
docker build -t microservicio-organizado .
docker run -p 3000:3000 microservicio-organizado
\`\`\`

## Endpoints
- \`GET /\`: Información del microservicio
- \`GET /health\`: Health check
" > README.md
```

### **Paso 7: Subir a GitHub**
```bash
# Inicializar Git
git init
git add .
git commit -m "feat: microservicio organizado con WORKDIR

- Dockerfile con WORKDIR optimizado
- Estructura de directorios profesional
- Aplicación Node.js con health check
- Scripts de deployment y configuración"

# Crear repositorio en GitHub
gh repo create microservicio-workdir --public --description "Microservicio organizado usando WORKDIR de Docker"

# Subir código
git branch -M main
git remote add origin https://github.com/acuzcoz/microservicio-workdir.git
git push -u origin main
```

---

## **PARTE 3: EC2 DEPLOYMENT** ⏳

### **Paso 8: Conectar a EC2**
```bash
# Conectar al servidor (reemplazar con tu IP)
ssh -i ~/.ssh/tu-clave.pem ubuntu@tu-ip-ec2
```

### **Paso 9: Setup en servidor Linux**
```bash
# Actualizar sistema
sudo apt update && sudo apt upgrade -y

# Instalar Docker si no está instalado
sudo apt install -y docker.io
sudo systemctl start docker
sudo systemctl enable docker
sudo usermod -aG docker $USER

# Instalar Git
sudo apt install -y git

# Crear directorio de proyectos
sudo mkdir -p /var/www/microservicios
sudo chown $USER:$USER /var/www/microservicios
cd /var/www/microservicios
```

### **Paso 10: Deploy desde GitHub**
```bash
# Clonar repositorio
git clone https://github.com/acuzcoz/microservicio-workdir.git
cd microservicio-workdir

# Verificar estructura
ls -la
tree . # Si está instalado

# Build en servidor
docker build -t microservicio-prod .

# Ejecutar en producción
docker run -d \
  --name microservicio-prod \
  --restart unless-stopped \
  -p 80:3000 \
  microservicio-prod

# Verificar funcionamiento
curl http://localhost
curl http://localhost/health
```

---

## **PARTE 4: LINUX ADMINISTRATION** ⏳

### **Paso 11: Gestión de archivos Linux**
```bash
# Explorar estructura del proyecto
pwd
ls -la
find . -type f -name "*.js" # Encontrar archivos JavaScript
find . -type d # Encontrar directorios

# Permisos de archivos
ls -la scripts/
chmod +x scripts/setup.sh
./scripts/setup.sh

# Gestión de logs
sudo mkdir -p /var/log/microservicio
sudo chown $USER:$USER /var/log/microservicio

# Monitoreo del contenedor
docker logs microservicio-prod
docker stats microservicio-prod
```

### **Paso 12: Automatización con systemd**
```bash
# Crear servicio systemd
sudo tee /etc/systemd/system/microservicio.service > /dev/null <<EOF
[Unit]
Description=Microservicio Organizado
After=docker.service
Requires=docker.service

[Service]
Type=oneshot
RemainAfterExit=yes
ExecStart=/usr/bin/docker start microservicio-prod
ExecStop=/usr/bin/docker stop microservicio-prod
TimeoutStartSec=0

[Install]
WantedBy=multi-user.target
EOF

# Habilitar servicio
sudo systemctl daemon-reload
sudo systemctl enable microservicio.service
sudo systemctl start microservicio.service
sudo systemctl status microservicio.service
```

---

## **🎯 VERIFICACIÓN COMPLETA**

### **Local ✅**
- [ ] Dockerfile con WORKDIR funciona
- [ ] Estructura de directorios creada
- [ ] Aplicación responde en http://localhost:3000
- [ ] Health check funciona

### **GitHub ⏳**
- [ ] Repositorio creado y público
- [ ] Código subido con commit descriptivo
- [ ] README.md documentado
- [ ] .gitignore configurado

### **EC2 ⏳**
- [ ] Servidor configurado con Docker
- [ ] Repositorio clonado
- [ ] Aplicación desplegada en puerto 80
- [ ] Servicio systemd configurado

### **Linux ⏳**
- [ ] Navegación por directorios
- [ ] Gestión de permisos
- [ ] Monitoreo de contenedores
- [ ] Automatización con systemd

---

## **💡 CONCEPTOS CLAVE APRENDIDOS**

### **WORKDIR Benefits**
- **Organización**: Estructura clara de archivos
- **Simplicidad**: Comandos más legibles
- **Consistencia**: Directorio predecible
- **Seguridad**: Evita errores de rutas

### **DevOps Integration**
- **Local → GitHub**: Versionado profesional
- **GitHub → EC2**: Deploy automatizable
- **Linux**: Administración real de servicios
- **Monitoring**: Health checks y logs

---

**🎯 LECCIÓN 3 EN PROGRESO**  
**Siguiente: Completar testing local y subir a GitHub** 🚀
