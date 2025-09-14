# 📝 LECCIÓN 1: Instrucción RUN

**Fecha:** 2025-09-08  
**Estado:** ✅ Completada  
**Módulo:** 2 - Dockerfile Intermedio

---

## **🎯 OBJETIVO**
Aprender a usar la instrucción `RUN` para ejecutar comandos durante la construcción de imágenes Docker.

---

## **📚 CONCEPTOS APRENDIDOS**

### **¿Qué hace RUN?**
- Ejecuta comandos **durante la construcción** de la imagen
- Cada `RUN` crea una nueva capa (layer)
- Se usa para instalar paquetes, crear directorios, configurar sistema

### **Sintaxis**
```dockerfile
RUN comando                    # Shell form
RUN ["comando", "arg1", "arg2"] # Exec form (recomendado)
```

---

## **🔧 MEJORES PRÁCTICAS**

### **❌ FORMA INCORRECTA (múltiples capas)**
```dockerfile
FROM ubuntu:20.04
RUN apt-get update
RUN apt-get install -y python3
RUN apt-get install -y curl
RUN apt-get clean
```
**Problemas:** 4 capas innecesarias, imagen más pesada

### **✅ FORMA CORRECTA (una sola capa)**
```dockerfile
FROM python:3.11-slim
RUN apt-get update && \
    apt-get install -y curl git && \
    mkdir -p /app/data && \
    apt-get clean && \
    rm -rf /var/lib/apt/lists/*
```
**Ventajas:** 1 capa optimizada, imagen más liviana

---

## **🔑 REGLAS IMPORTANTES**

1. **Concatenar comandos con `&&`**
   ```dockerfile
   RUN comando1 && comando2 && comando3
   ```

2. **Usar `\` para continuar línea**
   ```dockerfile
   RUN comando1 && \
       comando2 && \
       comando3
   ```

3. **Siempre limpiar cache**
   ```dockerfile
   RUN apt-get update && \
       apt-get install -y paquetes && \
       apt-get clean && \
       rm -rf /var/lib/apt/lists/*
   ```

4. **No usar `apt-get upgrade` en Docker**
   - Las imágenes base ya están optimizadas
   - Aumenta tamaño innecesariamente
   - Puede romper compatibilidad

---

## **🎯 EJERCICIO PRÁCTICO REALIZADO**

### **Dockerfile Creado**
```dockerfile
FROM python:3.11-slim
RUN apt-get update && \
    apt-get install -y curl git && \
    mkdir -p /app/data && \
    apt-get clean && \
    rm -rf /var/lib/apt/lists/*
```

### **Comandos Ejecutados**
```bash
docker build -t python-con-tools .
docker run -it python-con-tools bash
curl --version    # ✅ Verificado
git --version     # ✅ Verificado
ls -la /app/      # ✅ Directorio creado
```

### **Resultados**
- ✅ Imagen construida exitosamente (14.6s)
- ✅ curl instalado (versión 8.14.1)
- ✅ git instalado (versión 2.47.3)
- ✅ Directorio `/app/data` creado
- ✅ Una sola capa optimizada

---

## **⚠️ ERRORES COMUNES CORREGIDOS**

1. **Sintaxis incorrecta:**
   ```dockerfile
   # ❌ Error
   RUN apt get intall -y curl
   
   # ✅ Correcto
   RUN apt-get install -y curl
   ```

2. **Falta de backslashes:**
   ```dockerfile
   # ❌ Error
   RUN apt-get update &&
       apt-get install -y curl
   
   # ✅ Correcto
   RUN apt-get update && \
       apt-get install -y curl
   ```

3. **No limpiar cache:**
   ```dockerfile
   # ❌ Error
   RUN apt-get update && apt-get install -y curl
   
   # ✅ Correcto
   RUN apt-get update && \
       apt-get install -y curl && \
       apt-get clean && \
       rm -rf /var/lib/apt/lists/*
   ```

---

## **🚀 PRÓXIMO PASO**
**LECCIÓN 2: ENV** - Variables de entorno en Dockerfile

---

## **💡 PUNTOS CLAVE RECORDAR**
- RUN ejecuta durante BUILD, no durante RUN del contenedor
- Una instrucción RUN = una capa en la imagen
- Optimizar combinando comandos con `&&`
- Siempre limpiar cache para imágenes más pequeñas
- El `\` permite estructurar código legible
