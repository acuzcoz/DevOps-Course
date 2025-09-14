# 📝 LECCIÓN 2: Instrucción ENV

**Fecha:** 2025-09-11  
**Estado:** ✅ Completada  
**Módulo:** 2 - Dockerfile Intermedio

---

## **🎯 OBJETIVO**
Aprender a usar la instrucción `ENV` para definir variables de entorno en contenedores Docker.

---

## **📚 CONCEPTOS APRENDIDOS**

### **¿Qué hace ENV?**
- Define variables de entorno **dentro del contenedor**
- Las variables están disponibles durante BUILD y RUNTIME
- Se usan para configurar aplicaciones sin hardcodear valores

### **Sintaxis**
```dockerfile
ENV VARIABLE=valor                    # Forma recomendada
ENV VARIABLE valor                    # Forma alternativa
ENV VAR1=valor1 VAR2=valor2          # Múltiples variables
```

---

## **🔧 EJERCICIOS REALIZADOS**

### **Ejercicio 1: Variables ENV básicas**
```dockerfile
FROM python:3.11-slim
ENV APP_NAME=MiApp
ENV VERSION=1.0.0
ENV DEBUG=true
ENV PORT=5000
```

**Verificación:**
```bash
docker build -t python-env-test .
docker run -it python-env-test bash
env | grep -E "(APP_NAME|VERSION|DEBUG|PORT)"
```

**Resultado:** ✅ Variables disponibles en el contenedor

### **Ejercicio 2: Aplicación que usa ENV**
**Archivo `app.py`:**
```python
import os

# Leer variables de entorno
app_name = os.getenv('APP_NAME', 'App Sin Nombre')
version = os.getenv('VERSION', '0.0.0')
debug = os.getenv('DEBUG', 'false').lower() == 'true'
port = int(os.getenv('PORT', '8000'))

print(f"🚀 Iniciando {app_name} v{version}")
print(f"🐛 Debug mode: {debug}")
print(f"🌐 Puerto: {port}")

if debug:
    print("⚠️  MODO DEBUG ACTIVADO - No usar en producción")
else:
    print("✅ Modo producción")
```

**Dockerfile actualizado:**
```dockerfile
FROM python:3.11-slim
ENV APP_NAME=MiApp
ENV VERSION=1.0.0
ENV DEBUG=true
ENV PORT=5000

COPY app.py /app/
WORKDIR /app
CMD ["python", "app.py"]
```

---

## **🔍 PRUEBAS REALIZADAS**

### **Prueba 1: Variables del Dockerfile**
```bash
docker run python-env-app
```
**Output:**
```
🚀 Iniciando MiApp v1.0.0
🐛 Debug mode: True
🌐 Puerto: 5000
⚠️  MODO DEBUG ACTIVADO - No usar en producción
```

### **Prueba 2: Sobrescribir variables con -e**
```bash
docker run -e DEBUG=false -e VERSION=2.0.0 python-env-app
```
**Output:**
```
🚀 Iniciando MiApp v2.0.0
🐛 Debug mode: False
🌐 Puerto: 5000
✅ Modo producción
```

---

## **🔑 CONCEPTOS CLAVE APRENDIDOS**

### **Prioridad de Variables**
1. **`-e` al ejecutar** (mayor prioridad)
2. **`ENV` en Dockerfile** (prioridad media)
3. **Valores por defecto en código** (menor prioridad)

### **Diferencias ENV vs ARG**
- **ENV:** Disponible en BUILD y RUNTIME
- **ARG:** Solo disponible en BUILD (próxima lección)

### **Casos de Uso Reales**
```bash
# Desarrollo
docker run -e DEBUG=true -e VERSION=dev python-env-app

# Testing
docker run -e DEBUG=false -e VERSION=test python-env-app

# Producción
docker run -e DEBUG=false -e VERSION=1.2.3 -e PORT=80 python-env-app
```

---

## **💡 VENTAJAS DE ENV**

1. **Configuración flexible:**
   - Misma imagen, diferentes configuraciones
   - No necesitas reconstruir para cambiar config

2. **Separación de código y configuración:**
   - Código no tiene valores hardcodeados
   - Configuración por entorno (dev/test/prod)

3. **Fácil debugging:**
   - Variables visibles con `env` command
   - Fácil identificar configuración actual

---

## **🚀 PRÓXIMO PASO**
**LECCIÓN 3: WORKDIR** - Directorio de trabajo en Dockerfile

---

## **📋 ARCHIVOS CREADOS**
- `Dockerfile` - Con variables ENV y aplicación
- `app.py` - Aplicación Python que lee variables ENV
- `RESUMEN_LECCION.md` - Este resumen

---

## **🎯 PUNTOS CLAVE RECORDAR**
- ENV define variables para BUILD y RUNTIME
- `-e` al ejecutar sobrescribe ENV del Dockerfile
- Aplicaciones leen variables con `os.getenv()`, `process.env`, etc.
- Perfecto para configuración por entorno
- No crea capas pesadas, solo metadatos
