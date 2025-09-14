# 📝 REPASO: Instrucción RUN

**Fecha:** 2025-09-09  
**Estado:** ✅ Completado  
**Objetivo:** Reforzar conocimientos de RUN con Alpine Linux

---

## **🎯 EJERCICIO REALIZADO**

### **Objetivo**
Crear imagen Node.js con herramientas adicionales usando Alpine Linux

### **Requisitos**
- ✅ Imagen base: `node:18-alpine`
- ✅ Instalar: `git`, `curl`, `python3`, `make`
- ✅ Crear directorios: `/app/src` y `/app/logs`
- ✅ Una sola instrucción RUN optimizada
- ✅ Incluir limpieza de cache

---

## **📋 DOCKERFILE FINAL**

```dockerfile
FROM node:18-alpine
RUN apk update && \
    apk add --no-cache git curl python3 make && \
    mkdir -p /app/src /app/logs
```

---

## **🔧 ERRORES CORREGIDOS**

### **Error 1: Gestor de paquetes incorrecto**
```dockerfile
# ❌ Error inicial
RUN apt get update && \
    apt install -y curl git python make

# ✅ Corrección
RUN apk update && \
    apk add --no-cache git curl python3 make
```

### **Error 2: Sintaxis incorrecta**
```dockerfile
# ❌ Errores de sintaxis
apt get update        # Falta guión: apt-get
apt install          # Falta -get: apt-get
/app/scr             # Typo: scr → src
/var/lib/apt/list/*  # Typo: list → lists
```

### **Error 3: Limpieza innecesaria**
```dockerfile
# ❌ Innecesario en Alpine
RUN apk add paquetes && \
    apk clean && \
    rm -rf /var/lib/apk/lists/*

# ✅ Correcto en Alpine
RUN apk add --no-cache paquetes
```

---

## **📚 CONCEPTOS APRENDIDOS**

### **Distribuciones Linux y Gestores de Paquetes**
- **Ubuntu/Debian:** `apt-get`
- **Alpine:** `apk`
- **CentOS/RHEL:** `yum`/`dnf`
- **Arch:** `pacman`

### **Identificar Distribución por Imagen**
```dockerfile
FROM ubuntu:20.04      # → apt-get
FROM node:18-alpine    # → apk (Alpine)
FROM python:3.11-slim  # → apt-get (Debian)
FROM centos:8          # → yum
```

### **Ventajas de Alpine**
- ✅ Imágenes muy pequeñas (5MB vs 100MB)
- ✅ Más seguro
- ✅ Más rápido
- ✅ `--no-cache` evita limpieza manual

---

## **✅ VERIFICACIÓN EXITOSA**

### **Build Exitoso**
```bash
docker build -t node-tools .
# ✅ Tiempo: 5.7 segundos
# ✅ Una sola capa optimizada
```

### **Herramientas Verificadas**
```bash
node --version     # ✅ v18.20.8
npm --version      # ✅ 10.8.2
git --version      # ✅ 2.47.3
curl --version     # ✅ 8.12.1
python3 --version  # ✅ 3.12.11
make --version     # ✅ 4.4.1
```

### **Directorios Creados**
```bash
ls -la /app/
# ✅ /app/src
# ✅ /app/logs
```

---

## **🔑 PUNTOS CLAVE RECORDAR**

1. **Alpine Linux es diferente:**
   - Usa `apk` no `apt-get`
   - `--no-cache` evita limpieza manual
   - Imágenes más pequeñas y rápidas

2. **Identificar distribución:**
   - Por nombre de imagen: `*-alpine` = Alpine
   - Sin `-alpine` = probablemente Debian/Ubuntu

3. **Optimización sigue igual:**
   - Una instrucción RUN = una capa
   - Concatenar con `&&`
   - Usar `\` para legibilidad

---

## **🚀 PRÓXIMO PASO**
**LECCIÓN 2: ENV** - Variables de entorno en Dockerfile

---

## **💡 LECCIÓN PRINCIPAL**
**Diferentes distribuciones Linux = diferentes gestores de paquetes**  
**Siempre verificar qué distribución usa la imagen base**
