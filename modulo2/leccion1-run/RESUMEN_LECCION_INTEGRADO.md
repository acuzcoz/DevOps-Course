# 📝 LECCIÓN 1: Instrucción RUN - Versión Integrada

**Fecha:** 2025-09-08 (actualizado 2025-09-14)  
**Estado:** ✅ Completada  
**Módulo:** 2 - Dockerfile Intermedio

---

## **🎯 OBJETIVO**
Aprender a usar la instrucción `RUN` para ejecutar comandos durante la construcción de imágenes Docker, con enfoque en optimización y mejores prácticas.

---

## **📚 CONCEPTOS APRENDIDOS**

### **¿Qué hace RUN?**
- Ejecuta comandos **durante el build** de la imagen
- Cada `RUN` crea una **nueva capa** en la imagen
- Los cambios se **persisten** en la imagen final
- Se ejecuta en el **build context**, no en runtime

### **Sintaxis**
```dockerfile
RUN comando                           # Shell form
RUN ["ejecutable", "param1", "param2"] # Exec form (recomendada)
```

---

## **🔧 EJERCICIOS COMPLETADOS**

### **Ejercicio 1: RUN Básico** ✅
```dockerfile
FROM ubuntu:22.04
RUN apt-get update
RUN apt-get install -y curl
RUN apt-get install -y git
```

**Problema:** Crea 3 capas separadas (ineficiente)

### **Ejercicio 2: RUN Optimizado** ✅
```dockerfile
FROM ubuntu:22.04
RUN apt-get update && \
    apt-get install -y curl git && \
    apt-get clean && \
    rm -rf /var/lib/apt/lists/*
```

**Ventaja:** Una sola capa + limpieza de cache

### **Ejercicio 3: Alpine Linux** ✅
```dockerfile
FROM node:18-alpine
RUN apk add --no-cache \
    curl \
    git \
    python3 \
    make \
    g++
```

**Aprendizaje:** Diferentes distribuciones = diferentes gestores de paquetes

---

## **🔍 DIFERENCIAS ENTRE DISTRIBUCIONES**

### **Ubuntu/Debian**
```dockerfile
RUN apt-get update && \
    apt-get install -y paquete && \
    apt-get clean && \
    rm -rf /var/lib/apt/lists/*
```

### **Alpine Linux**
```dockerfile
RUN apk add --no-cache paquete
```

### **CentOS/RHEL**
```dockerfile
RUN yum update -y && \
    yum install -y paquete && \
    yum clean all
```

---

## **💡 MEJORES PRÁCTICAS APRENDIDAS**

### **✅ Optimización de Capas**
```dockerfile
# ❌ Múltiples capas
RUN apt-get update
RUN apt-get install -y curl
RUN apt-get install -y git

# ✅ Una sola capa
RUN apt-get update && \
    apt-get install -y curl git && \
    apt-get clean
```

### **✅ Limpieza de Cache**
```dockerfile
# Ubuntu/Debian
RUN apt-get update && \
    apt-get install -y paquetes && \
    apt-get clean && \
    rm -rf /var/lib/apt/lists/*

# Alpine (automático)
RUN apk add --no-cache paquetes
```

### **✅ Orden de Comandos**
```dockerfile
# Comandos que cambian poco al principio
RUN apt-get update && apt-get install -y base-packages

# Comandos específicos de la app después
COPY package.json .
RUN npm install
```

---

## **🧪 EJERCICIO INTEGRADO COMPLETADO**

### **App Node.js con Dependencias** ✅

#### **Parte 1: Docker Local** ✅
**Dockerfile:**
```dockerfile
FROM node:18-alpine

# Instalar dependencias del sistema
RUN apk add --no-cache \
    curl \
    git \
    python3 \
    make \
    g++

# Crear directorio de trabajo
WORKDIR /app

# Copiar y instalar dependencias Node
COPY package*.json ./
RUN npm install

# Copiar código fuente
COPY . .

# Exponer puerto
EXPOSE 3000

# Comando por defecto
CMD ["npm", "start"]
```

**Verificación:**
```bash
docker build -t node-app .
docker run -it node-app sh
# Dentro del contenedor:
curl --version
git --version
python3 --version
node --version
npm --version
```

#### **Expansión Integrada Disponible:**
- **+ GitHub**: Repo con package.json + Actions para testing
- **+ EC2**: Deploy con PM2 para gestión de procesos
- **+ Linux**: Instalación de dependencias del sistema

---

## **🔧 PROBLEMAS RESUELTOS**

### **Error 1: Gestor de paquetes incorrecto**
- **Problema**: `apt-get: command not found` en Alpine
- **Solución**: Usar `apk` en lugar de `apt-get`
- **Aprendizaje**: Verificar distribución base antes de instalar

### **Error 2: Cache no limpiado**
- **Problema**: Imagen muy grande por cache de paquetes
- **Solución**: Agregar limpieza en mismo RUN
- **Aprendizaje**: Cada RUN debe limpiar su propio cache

### **Error 3: Dependencias faltantes**
- **Problema**: `npm install` falla por dependencias nativas
- **Solución**: Instalar `python3`, `make`, `g++`
- **Aprendizaje**: Algunas dependencias Node requieren herramientas de build

---

## **📊 COMPARACIÓN DE TAMAÑOS**

### **Antes de Optimización**
```dockerfile
FROM ubuntu:22.04
RUN apt-get update
RUN apt-get install -y curl
RUN apt-get install -y git
```
**Resultado:** ~200MB, 4 capas

### **Después de Optimización**
```dockerfile
FROM node:18-alpine
RUN apk add --no-cache curl git python3 make g++
```
**Resultado:** ~150MB, 1 capa adicional

---

## **🔗 INTEGRACIÓN DEVOPS**

### **Preparación para GitHub**
- Dockerfile optimizado listo para CI/CD
- Dependencias documentadas en package.json
- Build reproducible en cualquier entorno

### **Preparación para EC2**
- Imagen ligera para deploy rápido
- Dependencias del sistema incluidas
- Configuración para producción

### **Preparación para Linux**
- Conocimiento de gestores de paquetes
- Comandos de instalación y limpieza
- Troubleshooting de dependencias

---

## **🎯 SKILLS DESARROLLADOS**

### **Docker Skills** ✅
- Optimización de capas en Dockerfile
- Gestión de cache de build
- Diferencias entre distribuciones Linux
- Instalación de dependencias del sistema

### **Linux Skills** ✅
- Gestores de paquetes (apt, apk, yum)
- Limpieza de cache del sistema
- Instalación de herramientas de desarrollo
- Troubleshooting de dependencias

### **DevOps Skills** ✅
- Optimización de imágenes para CI/CD
- Reproducibilidad de builds
- Documentación de dependencias
- Mejores prácticas de contenedores

---

## **🚀 PRÓXIMO PASO**

### **Lección 2: ENV - Variables de Entorno** ✅
- Configuración flexible de aplicaciones
- Separación de código y configuración
- Diferentes entornos (dev/test/prod)

### **Integración Gradual**
- GitHub: Versionado del Dockerfile optimizado
- EC2: Deploy de imagen optimizada
- Linux: Gestión de servicios en producción

---

## **💡 REFLEXIONES**

### **Conceptos Clave**
- **Una capa por RUN**: Cada instrucción crea una capa
- **Optimización importa**: Menos capas = imagen más pequeña
- **Limpieza obligatoria**: Cache debe limpiarse en mismo RUN
- **Distribución específica**: Cada Linux tiene su gestor de paquetes

### **Aplicación Real**
- Base para cualquier aplicación containerizada
- Fundamento para pipelines CI/CD
- Optimización crítica para producción
- Conocimiento transferible a Kubernetes

---

**🎯 LECCIÓN 1 COMPLETADA EXITOSAMENTE** ✅  
**Preparada para integración DevOps completa** 🚀
