# 📚 LECCIÓN 4: ANATOMÍA DE DOCKERFILE

**Fecha:** 2025-09-16  
**Estado:** ⏳ **EN PROGRESO** (1/3 ejercicios completados)  
**Módulo:** 2 - Dockerfile desde Cero  
**Duración:** ~1 hora (estimado por ejercicio)

---

## **🎯 OBJETIVO**
Dominar la creación de Dockerfiles desde cero, comprendiendo cada instrucción con anatomía completa y aplicando mejores prácticas.

---

## **📚 CONCEPTOS APRENDIDOS**

### **Dockerfile como receta:**
- **Automatización:** Dockerfile define pasos, Docker construye automáticamente
- **Reproducibilidad:** Misma imagen en cualquier máquina
- **Versionado:** Dockerfiles en Git para control de cambios

### **Instrucciones fundamentales:**
- **FROM:** Define imagen base (punto de partida)
- **COPY:** Transfiere archivos del host al contenedor
- **EXPOSE:** Documenta puertos que usa la aplicación
- **CMD:** Comando por defecto al ejecutar contenedor

---

## **🔧 COMANDOS APRENDIDOS CON ANATOMÍA**

### **Construcción de imágenes:**
```bash
docker build -t mi-primer-imagen .
│      │     │  │                │
│      │     │  │                └── Contexto: directorio actual (donde está Dockerfile)
│      │     │  └── Nombre: etiqueta para identificar la imagen
│      │     └── Flag: especificar tag/nombre
│      └── Subcomando: construir imagen desde Dockerfile
└── Comando: Docker CLI
```
**Propósito:** Crear imagen personalizada desde Dockerfile

### **Ejecución con mapeo de puertos:**
```bash
docker run -d -p 8080:80 --name mi-contenedor mi-primer-imagen
│      │   │  │  │       │      │             │
│      │   │  │  │       │      │             └── Imagen: la que acabamos de crear
│      │   │  │  │       │      └── Nombre: identificador del contenedor
│      │   │  │  │       └── Flag: asignar nombre al contenedor
│      │   │  │  └── Mapeo: puerto host:contenedor (8080→80)
│      │   │  └── Flag: mapear puertos
│      │   └── Flag: ejecutar en background (detached)
│      └── Subcomando: ejecutar contenedor
└── Comando: Docker CLI
```
**Propósito:** Ejecutar contenedor con acceso web desde host

---

## **📁 EJERCICIOS COMPLETADOS**

### **✅ [Ejercicio 1: Dockerfile Básico](./EJERCICIO1_DETALLADO.md)**
**Estado:** ✅ **COMPLETADO**
- **Tecnología:** Nginx + HTML estático
- **Instrucciones:** FROM, COPY, EXPOSE
- **Resultado:** Servidor web en http://localhost:8080
- **Skills:** Dockerfile básico, docker build, docker run
- **Troubleshooting:** Puerto ocupado, nombres de contenedores

### **⏳ Ejercicio 2: Dockerfile Intermedio**
**Estado:** ⏳ **PENDIENTE**
- **Tecnología:** Node.js + Express
- **Instrucciones:** RUN, WORKDIR, ENV
- **Objetivo:** API REST funcionando

### **⏳ Ejercicio 3: Dockerfile Avanzado**
**Estado:** ⏳ **PENDIENTE**
- **Tecnología:** Python + Flask
- **Instrucciones:** USER, ARG, optimización
- **Objetivo:** Aplicación con mejores prácticas

---

## **🔧 TROUBLESHOOTING RESUELTO**

### **Puerto ocupado:**
**Error:** `Bind for 0.0.0.0:8080 failed: port is already allocated`
**Solución:** `docker rm -f [contenedor-anterior]`
**Aprendizaje:** Verificar contenedores activos con `docker ps`

### **Nombre de contenedor en uso:**
**Error:** `The container name "/mi-contenedor" is already in use`
**Solución:** `docker rm [nombre-contenedor]`
**Aprendizaje:** Limpiar contenedores parados con `docker ps -a`

---

## **📊 PROGRESO DE LA LECCIÓN**

### **✅ Completado:**
- **Conceptos:** Dockerfile como automatización
- **Instrucciones básicas:** FROM, COPY, EXPOSE dominadas
- **Flujo completo:** Dockerfile → build → run → verificación
- **Troubleshooting:** Gestión de conflictos de puertos y nombres

### **⏳ En desarrollo:**
- **Instrucciones avanzadas:** RUN, WORKDIR, ENV, USER, ARG
- **Optimización:** Cache layers, multi-stage builds
- **Mejores prácticas:** Security, performance, maintainability

### **🎯 Skills desarrollados:**
- **docker build:** Construcción de imágenes personalizadas
- **Dockerfile syntax:** Instrucciones básicas aplicadas
- **Port mapping:** Acceso a aplicaciones containerizadas
- **Container lifecycle:** Creación, ejecución, limpieza

---

## **🚀 GIT WORKFLOW APLICADO**

### **Commits realizados:**
```bash
git commit -m "Módulo 2 Lección 4: Mi primer Dockerfile completado

- Dockerfile creado con FROM, COPY, EXPOSE
- Página HTML personalizada funcionando
- Imagen mi-primer-imagen construida exitosamente
- Contenedor corriendo en puerto 8080
- Troubleshooting de puertos ocupados resuelto
- Anatomía de comandos docker build y docker run dominada"
```

### **Archivos versionados:**
- `mi-primer-dockerfile/Dockerfile`
- `mi-primer-dockerfile/index.html`
- `EJERCICIO1_DETALLADO.md`

---

## **🎯 PRÓXIMO PASO**

### **Ejercicio 2: Dockerfile Intermedio**
- **Nuevas instrucciones:** RUN para instalar dependencias
- **WORKDIR:** Establecer directorio de trabajo
- **Gestión de archivos:** package.json, npm install
- **Aplicación real:** API REST con Node.js + Express

---

**🎯 Lección 4 en progreso - Dockerfile básico dominado, avanzando a nivel intermedio** ⏳

**Progreso:** 33% (1/3 ejercicios completados)  
**Próximo:** Ejercicio 2 - Node.js + Express con RUN y WORKDIR
