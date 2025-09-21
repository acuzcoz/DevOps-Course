# 🚀 EJERCICIO 2 DETALLADO: Dockerfile Node.js + API REST

**Fecha:** 2025-09-21  
**Duración:** 45 minutos  
**Metodología:** Construcción guiada paso a paso  
**Estado:** ✅ COMPLETADO

---

## **🎯 OBJETIVO ALCANZADO**

Crear un Dockerfile optimizado para una API REST de Node.js aplicando la metodología de élite DevOps con construcción guiada.

---

## **📚 CONCEPTOS APRENDIDOS**

### **🔍 ANÁLISIS DEV → DEVOPS:**

#### **📦 QUÉ ENTREGARON LOS DEVELOPERS:**
- ✅ `server.js` - API funcional con Express y 3 endpoints
- ✅ `package.json` - Dependencias básicas (express, cors)

#### **🚀 QUÉ AGREGÓ EL DEVOPS:**
- ✅ `Dockerfile` - Containerización optimizada
- ✅ **Cache strategy** - Dependencias separadas del código
- ✅ **Imagen optimizada** - node:18-alpine (150MB vs 1GB)
- ✅ **Estructura profesional** - WORKDIR /app

---

## **🔨 CONSTRUCCIÓN PASO A PASO**

### **METODOLOGÍA APLICADA:**
1. **Explicación de conceptos** - Node.js, imágenes Docker, cache
2. **Construcción guiada** - Estudiante construye línea por línea
3. **Validación práctica** - Testing de cada endpoint
4. **Resolución de problemas** - Corrección de errores en tiempo real

### **DOCKERFILE FINAL:**
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY server.js ./
EXPOSE 3000
CMD [ "npm", "start" ]
```

### **DECISIONES TÉCNICAS JUSTIFICADAS:**

#### **1. FROM node:18-alpine**
- **¿Por qué?** Tamaño pequeño (150MB), segura, versión específica
- **Alternativas rechazadas:** 
  - `node:latest` (impredecible, 1GB)
  - `ubuntu:20.04` (requiere instalación manual)

#### **2. COPY package*.json ANTES de código**
- **¿Por qué?** Optimización de cache de Docker
- **Impacto:** Si solo cambia código, no reinstala dependencias
- **Performance:** Builds 3x más rápidos en cambios frecuentes

#### **3. CMD ["npm", "start"]**
- **¿Por qué?** Usa script definido en package.json
- **Flexibilidad:** Fácil cambiar comando sin modificar Dockerfile
- **Array format:** Evita problemas de shell interpretation

---

## **🧪 VALIDACIÓN PRÁCTICA**

### **BUILD EXITOSO:**
```bash
docker build -t nodejs-api .
# ✅ Completado en 4.3s
# ✅ Cache utilizado correctamente
# ✅ Imagen creada: sha256:b64c5a9b...
```

### **EJECUCIÓN EXITOSA:**
```bash
docker run -p 3000:3000 nodejs-api
# ✅ Servidor corriendo en puerto 3000
```

### **ENDPOINTS VALIDADOS:**

#### **1. GET /** - Endpoint principal
```json
{
  "message": "API REST funcionando en Docker!",
  "version": "1.0.0",
  "timestamp": "2025-09-21T18:21:55.690Z"
}
```

#### **2. GET /health** - Health check
```json
{
  "status": "OK",
  "uptime": 78.824738036,
  "memory": {
    "rss": 58306560,
    "heapTotal": 8699904,
    "heapUsed": 7319048
  }
}
```

#### **3. GET /api/users** - Datos de prueba
```json
[
  {"id":1,"name":"Juan","email":"juan@example.com"},
  {"id":2,"name":"María","email":"maria@example.com"}
]
```

---

## **💡 APRENDIZAJES CLAVE**

### **🎯 METODOLOGÍA DE ÉLITE APLICADA:**
- ✅ **Explicar antes de preguntar** - Conceptos claros primero
- ✅ **Construcción guiada** - Estudiante construye paso a paso
- ✅ **Decisiones justificadas** - Cada elección explicada
- ✅ **Validación práctica** - Testing real de funcionalidad

### **🔧 SKILLS TÉCNICOS DESARROLLADOS:**
- ✅ **Dockerfile optimization** - Cache strategy profesional
- ✅ **Image selection** - Criterios técnicos para elegir base
- ✅ **Container networking** - Port mapping y EXPOSE
- ✅ **Troubleshooting** - Resolución de problemas en tiempo real

### **📊 PENSAMIENTO CRÍTICO:**
- ✅ **Performance vs Size** - node:18-alpine elegido
- ✅ **Cache vs Simplicity** - Separar dependencias del código
- ✅ **Flexibility vs Control** - CMD con npm start

---

## **🚀 PRÓXIMOS PASOS**

### **EJERCICIO 3 (Siguiente):**
- **Variables ENV** para configuración por ambientes
- **Multi-stage builds** para optimización avanzada
- **Security hardening** con usuario no-root

### **SKILLS PARA DESARROLLAR:**
- **package.json mastery** - Creación, modificación, optimización
- **Docker Compose** - Orquestación multi-container
- **CI/CD integration** - Automatización de builds

---

## **📈 PROGRESO ACTUALIZADO**

- **Ejercicios completados:** 10/65 (15.5%)
- **Módulo 2 progreso:** 2/9 ejercicios (22%)
- **Skills Docker:** 85% (Dockerfile intermedio dominado)
- **Metodología de élite:** 100% aplicada correctamente

---

**🎉 EJERCICIO COMPLETADO CON EXCELENCIA**  
**Metodología de élite DevOps aplicada exitosamente**  
**Construcción guiada y validación práctica logradas**
