# 📝 LECCIÓN 1: ¿Qué es Docker? + Setup Completo

**Fecha:** 2025-09-14  
**Estado:** ✅ **COMPLETADA**  
**Módulo:** 1 - Setup de Tecnologías Fundamentales

---

## **🎯 OBJETIVO ALCANZADO**
Entender qué es Docker, qué problema resuelve y completar el setup de las 4 tecnologías fundamentales del curso.

---

## **📚 CONCEPTOS APRENDIDOS**

### **¿Qué problema resuelve Docker?**
- **Problema tradicional:** "En mi máquina funciona" 🤷‍♂️ → "Aquí no funciona" ❌
- **Causas:** Diferentes versiones, sistemas operativos, dependencias, configuraciones
- **Solución Docker:** Empaqueta aplicación + dependencias en "contenedor" ✅
- **Resultado:** "Funciona igual en todas partes" 🎯

### **Diferencia: Máquina Virtual vs Contenedor**

**❌ Máquina Virtual (Pesada):**
```
┌─────────────────────────┐
│     Aplicación 1        │
├─────────────────────────┤
│   Sistema Operativo     │  ← Completo (pesado)
├─────────────────────────┤
│      Hypervisor         │
├─────────────────────────┤
│   Sistema Host          │
└─────────────────────────┘
```

**✅ Contenedor Docker (Ligero):**
```
┌─────────────────────────┐
│     Aplicación 1        │
├─────────────────────────┤
│   Docker Engine         │  ← Compartido (ligero)
├─────────────────────────┤
│   Sistema Host          │
└─────────────────────────┘
```

---

## **🔧 COMANDOS APRENDIDOS CON ANATOMÍA**

### **Docker - Verificación y primer contenedor:**
```bash
docker --version
│      │
│      └── Flag: mostrar versión instalada
└── Comando: Docker CLI
```
**Resultado obtenido:** `Docker version 28.4.0, build d8eb465f86` ✅

```bash
docker run hello-world
│      │   │
│      │   └── Imagen: contenedor de prueba oficial de Docker
│      └── Subcomando: ejecutar contenedor
└── Comando: Docker CLI
```

**Proceso interno automático:**
1. Docker client → Docker daemon
2. Docker daemon → Docker Hub (descarga imagen)
3. Docker daemon → Crea contenedor desde imagen
4. Contenedor → Ejecuta programa → Muestra mensaje
5. Docker daemon → Envía output → Terminal

**Resultado:** "Hello from Docker!" ✅

### **GitHub - Verificación de configuración:**
```bash
git config --global user.name
│   │      │        │    │
│   │      │        │    └── Propiedad: nombre del usuario para commits
│   │      │        └── Scope: configuración para todos los repositorios
│   │      └── Flag: especificar alcance global
│   └── Subcomando: gestionar configuración de Git
└── Comando: Git CLI
```
**Resultado:** `acuzcoz` ✅

```bash
git config --global user.email
│   │      │        │    │
│   │      │        │    └── Propiedad: email del usuario para commits
│   │      │        └── Scope: configuración global
│   │      └── Flag: alcance global
│   └── Subcomando: ver configuración
└── Comando: Git CLI
```
**Resultado:** `acuzco@cuevatech.com` ✅

```bash
gh auth status
│  │    │
│  │    └── Subcomando: mostrar estado de autenticación con GitHub
│  └── Recurso: autenticación
└── Comando: GitHub CLI
```
**Resultado:** `✓ Logged in to github.com account acuzcoz` ✅

### **AWS CLI - Configuración SSO:**
```bash
aws --version
│   │
│   └── Flag: mostrar versión instalada de AWS CLI
└── Comando: AWS CLI
```
**Resultado:** `aws-cli/2.30.1 Python/3.13.7 Darwin/24.6.0` ✅

```bash
aws sso login
│   │   │
│   │   └── Subcomando: iniciar sesión SSO (renovar token expirado)
│   └── Servicio: Single Sign-On
└── Comando: AWS CLI
```
**Proceso:** Abre navegador → Autenticación → Token renovado ✅

```bash
aws configure sso
│   │         │
│   │         └── Subcomando: configurar nuevo perfil SSO interactivamente
│   └── Subcomando: gestionar configuración
└── Comando: AWS CLI
```

**Configuración completada:**
- **SSO session:** Admin-mined-aws
- **Account ID:** 021891597458
- **Role:** Administrators-AWS
- **Region:** us-east-1
- **Output:** json
- **Profile:** admin-mined-ext

```bash
aws sts get-caller-identity --profile admin-mined-ext
│   │   │                   │         │
│   │   │                   │         └── Perfil SSO recién configurado
│   │   │                   └── Flag: especificar perfil específico
│   │   └── Subcomando: obtener información del usuario actual
│   └── Servicio: Security Token Service (autenticación)
└── Comando: AWS CLI
```

**Resultado:**
```json
{
    "UserId": "AROAQKGGXISJFLUJHPTYK:ancuzcoz",
    "Account": "021891597458",
    "Arn": "arn:aws:sts::021891597458:assumed-role/AWSReservedSSO_Administrators-AWS_3a4a0bb554a7e684/ancuzcoz"
}
```
✅ **Identidad confirmada:** Usuario `ancuzcoz` con rol `Administrators-AWS`

---

## **🔍 CONCEPTOS TÉCNICOS APRENDIDOS**

### **Docker:**
- **Imagen:** Plantilla inmutable (como clase en programación)
- **Contenedor:** Instancia ejecutable (como objeto)
- **Docker Hub:** Repositorio público de imágenes (como GitHub para código)
- **Build context:** Directorio enviado al Docker daemon

### **GitHub:**
- **Git:** Control de versiones local
- **GitHub:** Servicio en la nube para repositorios
- **GitHub CLI:** Gestión de GitHub desde terminal
- **SSO vs Token:** Métodos de autenticación

### **AWS CLI:**
- **SSO (Single Sign-On):** Método profesional y seguro
- **Perfiles:** Múltiples configuraciones de AWS
- **STS:** Security Token Service para autenticación
- **IAM Roles:** Permisos temporales y seguros

---

## **✅ VERIFICACIONES EXITOSAS**

### **Estado final de tecnologías:**
1. **🐳 Docker:** Versión 28.4.0, contenedor hello-world exitoso
2. **🐙 GitHub:** Usuario acuzcoz configurado, CLI autenticado
3. **☁️ AWS CLI:** Versión 2.30.1, SSO configurado, perfil admin-mined-ext
4. **🐧 Linux:** Comandos disponibles en terminal macOS

### **Capacidades confirmadas:**
- ✅ Ejecutar contenedores Docker
- ✅ Crear repositorios en GitHub
- ✅ Gestionar recursos AWS desde terminal
- ✅ Navegar y administrar archivos con Linux

---

## **🔧 PROBLEMAS RESUELTOS**

### **AWS CLI - Token expirado:**
- **Error:** "Token has expired and refresh failed"
- **Causa:** Token SSO caducado
- **Solución:** `aws sso login` para renovar
- **Aprendizaje:** Los tokens SSO tienen tiempo de vida limitado

### **Múltiples cuentas AWS:**
- **Situación:** Comando mostraba lista de cuentas
- **Causa:** Múltiples perfiles configurados
- **Solución:** Crear perfil específico con `aws configure sso`
- **Comando:** `--profile admin-mined-ext` para especificar

---

## **💡 METODOLOGÍA APLICADA**

### **Anatomía de comandos:**
**Cada comando explicado símbolo por símbolo:**
- **Comando principal:** ¿Qué herramienta?
- **Subcomando:** ¿Qué acción?
- **Flags:** ¿Qué opciones?
- **Argumentos:** ¿Qué valores?

### **Progresión natural:**
1. **Problema** → ¿Qué resuelve la tecnología?
2. **Concepto** → ¿Cómo funciona?
3. **Verificación** → ¿Está instalado y configurado?
4. **Comandos** → ¿Cómo se usa?
5. **Troubleshooting** → ¿Cómo resolver problemas?

---

## **🚀 PRÓXIMO PASO**

### **Ejercicio Integrado:**
**Crear proyecto que use las 4 tecnologías juntas:**
1. **Linux:** Estructura de proyecto
2. **Docker:** Dockerfile y build
3. **GitHub:** Repositorio y versionado
4. **AWS CLI:** Exploración de servicios

### **Preparación para Módulo 2:**
- **Dockerfile desde cero:** Crear imágenes personalizadas
- **Integración real:** Cada ejercicio usará las 4 tecnologías
- **Portfolio:** Proyectos demostrables

---

## **📊 SKILLS DESARROLLADOS**

### **Técnicos:**
- Verificación de instalaciones
- Configuración de herramientas CLI
- Troubleshooting básico
- Comprensión de anatomía de comandos

### **DevOps Mindset:**
- Integración de múltiples tecnologías
- Configuración profesional (SSO)
- Documentación detallada
- Resolución sistemática de problemas

---

**🎯 Lección 1 completada exitosamente - Setup sólido para el resto del curso** ✅

**Duración:** ~2 horas  
**Comandos aprendidos:** 8 comandos con anatomía completa  
**Problemas resueltos:** 2 (token AWS, múltiples perfiles)  
**Preparado para:** Ejercicio integrado + Módulo 2
