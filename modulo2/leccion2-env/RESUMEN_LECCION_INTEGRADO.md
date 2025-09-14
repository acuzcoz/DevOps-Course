# 📝 LECCIÓN 2: Instrucción ENV - Versión Integrada

**Fecha:** 2025-09-11 (actualizado 2025-09-14)  
**Estado:** ✅ Completada  
**Módulo:** 2 - Dockerfile Intermedio

---

## **🎯 OBJETIVO**
Aprender a usar la instrucción `ENV` para definir variables de entorno en contenedores Docker, enfocándose en configuración flexible y separación de código/configuración.

---

## **📚 CONCEPTOS APRENDIDOS**

### **¿Qué hace ENV?**
- Define variables de entorno **dentro del contenedor**
- Las variables están disponibles durante **BUILD y RUNTIME**
- Se usan para configurar aplicaciones sin hardcodear valores
- Permiten la misma imagen para diferentes entornos

### **Sintaxis**
```dockerfile
ENV VARIABLE=valor                    # Forma recomendada
ENV VARIABLE valor                    # Forma alternativa
ENV VAR1=valor1 VAR2=valor2          # Múltiples variables
```

---

## **🔧 EJERCICIOS COMPLETADOS**

### **Ejercicio 1: Variables ENV básicas** ✅
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

### **Ejercicio 2: Aplicación que usa ENV** ✅
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

### **Prueba 1: Variables del Dockerfile** ✅
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

### **Prueba 2: Sobrescribir variables con -e** ✅
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

### **Prueba 3: Múltiples variables** ✅
```bash
docker run -e APP_NAME="SuperApp" -e PORT=3000 -e DEBUG=false python-env-app
```
**Output:**
```
🚀 Iniciando SuperApp v1.0.0
🐛 Debug mode: False
🌐 Puerto: 3000
✅ Modo producción
```

---

## **🔑 CONCEPTOS CLAVE APRENDIDOS**

### **Prioridad de Variables**
1. **`-e` al ejecutar** (mayor prioridad) 🥇
2. **`ENV` en Dockerfile** (prioridad media) 🥈
3. **Valores por defecto en código** (menor prioridad) 🥉

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

### **1. Configuración Flexible**
- Misma imagen, diferentes configuraciones
- No necesitas reconstruir para cambiar config
- Fácil cambio entre entornos

### **2. Separación de Código y Configuración**
- Código no tiene valores hardcodeados
- Configuración por entorno (dev/test/prod)
- Secretos pueden inyectarse externamente

### **3. Fácil Debugging**
- Variables visibles con `env` command
- Fácil identificar configuración actual
- Troubleshooting simplificado

---

## **🧪 EJERCICIO INTEGRADO COMPLETADO**

### **App Multi-Entorno** ✅

#### **Parte 1: Docker Local** ✅
**Aplicación Python configurable:**
- ✅ Lee 4 variables de entorno
- ✅ Valores por defecto sensatos
- ✅ Comportamiento diferente según DEBUG
- ✅ Puerto configurable

**Dockerfile optimizado:**
```dockerfile
FROM python:3.11-slim

# Variables de entorno con valores por defecto
ENV APP_NAME=MiApp
ENV VERSION=1.0.0
ENV DEBUG=true
ENV PORT=5000

# Copiar aplicación
COPY app.py /app/
WORKDIR /app

# Comando por defecto
CMD ["python", "app.py"]
```

#### **Expansión Integrada Disponible:**
- **+ GitHub**: Diferentes branches (dev/staging/prod) con variables específicas
- **+ EC2**: Deploy en múltiples servidores por entorno
- **+ Linux**: Variables de entorno del sistema, systemd environment files

---

## **🔧 PROBLEMAS RESUELTOS**

### **Error 1: Variable no reconocida**
- **Problema**: `os.getenv('DEBUG')` siempre retorna string
- **Solución**: Convertir a boolean con `.lower() == 'true'`
- **Aprendizaje**: Variables de entorno siempre son strings

### **Error 2: Puerto como string**
- **Problema**: `PORT` se lee como string, no como número
- **Solución**: Convertir con `int(os.getenv('PORT', '8000'))`
- **Aprendizaje**: Siempre validar y convertir tipos

### **Error 3: Variable vacía**
- **Problema**: Variable definida pero vacía causa errores
- **Solución**: Usar valores por defecto en `os.getenv()`
- **Aprendizaje**: Siempre proveer fallbacks sensatos

---

## **🔗 INTEGRACIÓN DEVOPS**

### **Preparación para GitHub**
- Variables de entorno documentadas
- Diferentes configuraciones por branch
- Secrets para valores sensibles

### **Preparación para EC2**
- Configuración por entorno sin rebuild
- Variables del sistema Linux
- Gestión de secretos en producción

### **Preparación para Linux**
- Environment files (`/etc/environment`)
- Systemd environment variables
- Shell environment management

---

## **📊 PATRONES DE CONFIGURACIÓN**

### **Desarrollo Local**
```bash
docker run \
  -e DEBUG=true \
  -e VERSION=dev \
  -e PORT=3000 \
  python-env-app
```

### **Testing/Staging**
```bash
docker run \
  -e DEBUG=false \
  -e VERSION=staging \
  -e PORT=8080 \
  python-env-app
```

### **Producción**
```bash
docker run \
  -e DEBUG=false \
  -e VERSION=1.2.3 \
  -e PORT=80 \
  -e APP_NAME="ProductionApp" \
  python-env-app
```

---

## **🎯 SKILLS DESARROLLADOS**

### **Docker Skills** ✅
- Definición de variables de entorno en Dockerfile
- Sobrescritura de variables en runtime
- Configuración flexible de aplicaciones
- Separación de código y configuración

### **Python Skills** ✅
- Lectura de variables de entorno con `os.getenv()`
- Conversión de tipos desde strings
- Valores por defecto y fallbacks
- Configuración condicional

### **DevOps Skills** ✅
- Configuración por entornos
- Separación de secretos y configuración
- Aplicaciones cloud-native
- Twelve-factor app principles

---

## **🚀 PRÓXIMO PASO**

### **Lección 3: WORKDIR - Directorio de Trabajo** 🔄
- Organización de archivos en contenedores
- Rutas absolutas vs relativas
- Estructura de proyecto limpia

### **Integración Gradual**
- GitHub: Environment-specific configurations
- EC2: Production environment variables
- Linux: System-level environment management

---

## **💡 REFLEXIONES**

### **Conceptos Clave**
- **ENV es runtime**: Variables disponibles cuando el contenedor corre
- **Prioridad clara**: -e > ENV > defaults
- **Strings siempre**: Variables de entorno son siempre texto
- **Separación crítica**: Código vs configuración vs secretos

### **Aplicación Real**
- Base para aplicaciones cloud-native
- Fundamento para microservicios configurables
- Patrón estándar en Kubernetes
- Principio de twelve-factor apps

### **Próximos Conceptos**
- **ARG**: Variables solo para build-time
- **Secrets**: Gestión segura de credenciales
- **ConfigMaps**: Configuración en Kubernetes
- **Environment files**: Gestión masiva de variables

---

**🎯 LECCIÓN 2 COMPLETADA EXITOSAMENTE** ✅  
**Preparada para integración DevOps completa** 🚀
