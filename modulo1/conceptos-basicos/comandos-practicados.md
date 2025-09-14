# 📝 MÓDULO 1: CONCEPTOS BÁSICOS - COMANDOS PRACTICADOS

**Fecha:** 2025-09-08  
**Estado:** ✅ Completado

---

## **🔧 COMANDOS BÁSICOS PRACTICADOS**

### **Verificación de Docker**
```bash
docker --version                    # Verificar versión instalada
docker info                        # Información del sistema Docker
```

### **Primer Contenedor**
```bash
docker run hello-world             # Primer contenedor de prueba
```
**Resultado:** Mensaje de confirmación que Docker funciona correctamente

### **Gestión de Contenedores**
```bash
docker ps                          # Contenedores corriendo
docker ps -a                       # Todos los contenedores
docker stop <nombre/id>             # Detener contenedor
docker start <nombre/id>            # Iniciar contenedor
docker restart <nombre/id>          # Reiniciar contenedor
docker rm <nombre/id>               # Eliminar contenedor
```

### **Gestión de Imágenes**
```bash
docker images                      # Listar imágenes
docker build -t nombre .           # Construir imagen
docker rmi <imagen>                 # Eliminar imagen
```

### **Debugging y Logs**
```bash
docker logs <nombre/id>             # Ver logs del contenedor
docker exec -it <nombre/id> sh      # Entrar al contenedor
docker inspect <nombre/id>          # Información detallada
```

---

## **📋 DOCKERFILE BÁSICO APRENDIDO**

### **Instrucciones Básicas**
```dockerfile
FROM nginx:alpine                   # Imagen base
COPY archivo.txt /destino/          # Copiar archivos
EXPOSE 80                           # Documentar puerto
CMD ["comando"]                     # Comando por defecto
```

### **Ejemplo Práctico - Landing Page**
```dockerfile
FROM nginx:alpine
COPY index.html /usr/share/nginx/html/
COPY styles.css /usr/share/nginx/html/
EXPOSE 80
```

---

## **🔗 CONCEPTOS FUNDAMENTALES**

### **Imagen vs Contenedor**
- **Imagen:** Plantilla inmutable (como una clase)
- **Contenedor:** Instancia ejecutable (como un objeto)
- Una imagen → múltiples contenedores

### **Contenedores Efímeros**
- Los contenedores son temporales
- Cambios se pierden al eliminar contenedor
- Datos persisten en la imagen original

### **Port Mapping**
```bash
-p 3000:80                          # Puerto local:puerto contenedor
```

### **Volúmenes (Bind Mounts)**
```bash
-v /ruta/local:/ruta/contenedor     # Mapeo de carpetas
```
**Ventaja:** Desarrollo en tiempo real

---

## **⚠️ ERRORES COMUNES RESUELTOS**

### **Error: "buildx build requires 1 argument"**
```bash
# ❌ Incorrecto
docker build -t nombre

# ✅ Correcto  
docker build -t nombre .           # El punto es obligatorio
```

### **Error: Puerto no accesible**
```bash
# ❌ Incorrecto
docker run -d -p 3000 imagen

# ✅ Correcto
docker run -d -p 3000:80 imagen    # Mapear puerto correctamente
```

### **Error: Imagen no existe**
```bash
# ❌ Incorrecto
FROM nginx:alpine-slim              # Esta imagen no existe

# ✅ Correcto
FROM nginx:alpine                   # Imagen oficial
```

---

## **🎯 EJERCICIO 1 COMPLETADO**

### **Objetivo**
Dockerizar una landing page HTML estática

### **Archivos Creados**
- `index.html` - Página web con header, hero, footer
- `styles.css` - Estilos CSS responsivos  
- `Dockerfile` - Configuración nginx
- `README.md` - Documentación

### **Comandos Ejecutados**
```bash
docker build -t landing-page .
docker run -d -p 3000:80 --name mi-landing-page landing-page
```

### **Resultado**
✅ Aplicación funcionando en `http://localhost:3000`

---

## **💡 PUNTOS CLAVE RECORDAR**

1. **Docker funciona con imágenes y contenedores**
2. **Los contenedores son efímeros**
3. **Port mapping es esencial para acceso**
4. **Volúmenes permiten desarrollo en tiempo real**
5. **Dockerfile define cómo construir la imagen**
6. **Cada comando debe ser preciso (punto en build)**
7. **Diferentes distribuciones Linux usan diferentes gestores de paquetes:**
   - Ubuntu/Debian: `apt-get`
   - Alpine: `apk`
   - CentOS/RHEL: `yum`/`dnf`

---

## **🚀 PREPARACIÓN PARA MÓDULO 2**

**Dominamos:**
- ✅ Comandos básicos de Docker
- ✅ Dockerfile básico (FROM, COPY, EXPOSE, CMD)
- ✅ Construcción y ejecución de contenedores
- ✅ Port mapping y volúmenes básicos

**Próximo aprendizaje:**
- ⏳ Instrucciones Dockerfile intermedias (RUN, ENV, ARG, WORKDIR, USER)
- ⏳ Optimización de imágenes
- ⏳ Variables de entorno
