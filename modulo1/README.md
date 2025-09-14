# 📚 MÓDULO 1: FUNDAMENTOS BÁSICOS
## Docker + Linux + GitHub + AWS EC2

**Estado:** ✅ **COMPLETADO**  
**Progreso:** 100%

---

## **🎯 OBJETIVOS COMPLETADOS**

### **Docker Fundamentos** ✅
- ✅ Instalación y verificación de Docker
- ✅ Primer contenedor (hello-world)
- ✅ Comandos básicos: run, ps, images, stop, start, restart
- ✅ Diferencia entre imagen y contenedor
- ✅ Contenedores efímeros vs persistentes
- ✅ Port mapping y acceso a aplicaciones

### **Conceptos Clave Aprendidos** ✅
- **Imagen**: Plantilla inmutable para crear contenedores
- **Contenedor**: Instancia ejecutable de una imagen
- **Port mapping**: `-p host:container` para acceso externo
- **Dockerfile**: Archivo de instrucciones para crear imágenes
- **Build context**: Directorio enviado al Docker daemon

---

## **🎯 EJERCICIO 1 INTEGRADO COMPLETADO** ✅

### **Landing Page DevOps**
**Objetivo:** Dockerizar una página HTML estática con nginx

#### **Parte 1: Docker Local** ✅
- ✅ Dockerfile creado con nginx:alpine
- ✅ Página HTML personalizada
- ✅ Build exitoso: `docker build -t landing-page .`
- ✅ Ejecución exitosa: `docker run -p 3000:80 landing-page`
- ✅ Verificación en http://localhost:3000

#### **Expansión Integrada Disponible:**
- **+ GitHub**: Subir proyecto a repositorio público
- **+ EC2**: SSH al servidor, clonar repo, deploy manual
- **+ Linux**: Navegación, permisos, gestión de procesos

---

## **📁 ARCHIVOS CREADOS**

### **Estructura del Proyecto**
```
modulo1/
├── ejercicio1-landing-page/
│   ├── Dockerfile              # ✅ nginx:alpine + COPY
│   ├── index.html              # ✅ Página HTML personalizada
│   └── RESUMEN_EJERCICIO.md    # ✅ Documentación completa
└── README.md                   # ✅ Este archivo
```

### **Dockerfile Final**
```dockerfile
FROM nginx:alpine
COPY index.html /usr/share/nginx/html/
EXPOSE 80
```

### **Comandos Utilizados**
```bash
# Build
docker build -t landing-page .

# Run
docker run -p 3000:80 landing-page

# Verificación
docker ps
curl http://localhost:3000
```

---

## **🔧 PROBLEMAS RESUELTOS**

### **Error 1: Imagen no encontrada**
- **Problema**: `docker: Error response from daemon: pull access denied`
- **Solución**: Usar imagen oficial `nginx:alpine`
- **Aprendizaje**: Verificar nombres de imágenes en Docker Hub

### **Error 2: Puerto no accesible**
- **Problema**: Aplicación no accesible desde navegador
- **Solución**: Mapear puerto correctamente `-p 3000:80`
- **Aprendizaje**: Diferencia entre EXPOSE y port mapping

### **Error 3: Archivo no encontrado**
- **Problema**: `index.html` no se copia al contenedor
- **Solución**: Verificar ruta de destino nginx `/usr/share/nginx/html/`
- **Aprendizaje**: Cada imagen tiene su estructura de directorios

---

## **📚 CONCEPTOS APRENDIDOS**

### **Docker**
- **FROM**: Especifica imagen base
- **COPY**: Copia archivos del contexto al contenedor
- **EXPOSE**: Documenta puerto que usa la aplicación
- **Build context**: Todo el directorio se envía al daemon
- **Port mapping**: `-p host:container` para acceso externo

### **Nginx**
- **Directorio web**: `/usr/share/nginx/html/`
- **Puerto por defecto**: 80
- **Configuración**: Automática para archivos estáticos
- **Alpine**: Versión ligera de Linux

### **Workflow**
- **Desarrollo iterativo**: Build → Test → Fix → Repeat
- **Debugging**: Usar `docker logs` y `docker exec`
- **Limpieza**: `docker system prune` para liberar espacio

---

## **🎯 SKILLS DESARROLLADOS**

### **Docker Skills** ✅
- Creación de Dockerfile básico
- Build de imágenes personalizadas
- Ejecución de contenedores con port mapping
- Debugging básico de contenedores
- Gestión de imágenes y contenedores

### **Preparación para Integración**
- **Git**: Proyecto listo para versionado
- **Linux**: Comandos básicos para deploy
- **AWS**: Estructura preparada para EC2
- **DevOps**: Mindset de automatización

---

## **🚀 PRÓXIMO PASO**

### **Módulo 2: Dockerfile Intermedio**
- **Lección 1**: RUN - Ejecutar comandos durante build ✅
- **Lección 2**: ENV - Variables de entorno ✅
- **Lección 3**: WORKDIR - Directorio de trabajo 🔄
- **Lección 4**: ARG - Argumentos de build ⏳
- **Lección 5**: USER - Usuario no-root ⏳

### **Integración Gradual**
A partir del Módulo 2, cada ejercicio incluirá:
- Docker local (base)
- GitHub integration
- EC2 deployment
- Linux administration

---

## **💡 REFLEXIONES**

### **Lo que funcionó bien**
- Dockerfile simple y efectivo
- Nginx como servidor web confiable
- Iteración rápida para resolver errores
- Documentación detallada del proceso

### **Áreas de mejora**
- Optimización de imagen (multi-stage builds)
- Seguridad (usuario no-root)
- Automatización (scripts de build)
- Monitoreo (health checks)

### **Aplicación en el mundo real**
- Base para aplicaciones web estáticas
- Fundamento para microservicios
- Patrón para contenedores de frontend
- Preparación para orquestación

---

**🎯 MÓDULO 1 COMPLETADO EXITOSAMENTE** ✅  
**Preparado para integración DevOps completa** 🚀
