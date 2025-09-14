# 📚 TEMARIO DOCKER INTEGRADO - BÁSICO A EXPERTO
## Docker + Linux + GitHub + AWS EC2

**Estudiante:** acuzcoz  
**Fecha inicio:** 2025-09-08  
**Progreso actual:** Módulo 2, Lección 3 WORKDIR (en progreso)

---

## **🎯 METODOLOGÍA INTEGRADA**
**Cada lección mantiene su estructura Docker + expande con integración real**

---

## **MÓDULO 1: FUNDAMENTOS BÁSICOS** ✅
- ✅ ¿Qué es Docker? Instalación y verificación
- ✅ Primer contenedor (hello-world)
- ✅ Comandos básicos: run, ps, images, stop, start, restart
- ✅ Diferencia entre imagen y contenedor
- ✅ Contenedores efímeros vs persistentes

### **🎯 EJERCICIO 1 INTEGRADO:** Landing Page DevOps ✅
**Completado - Ahora se expandiría así:**
- ✅ **Docker local**: Nginx + HTML (ya hecho)
- **+ GitHub**: Subir proyecto a repositorio
- **+ EC2**: SSH al servidor, clonar repo, deploy manual
- **+ Linux**: Navegación, permisos, gestión de procesos

---

## **MÓDULO 2: DOCKERFILE INTERMEDIO** 🔄

### **LECCIÓN 1: RUN** ✅
**Concepto:** Ejecutar comandos durante build
- ✅ RUN básico y optimización de capas
- ✅ Diferencias entre distribuciones (apt vs apk)
- ✅ Limpieza de cache y mejores prácticas

#### **🎯 EJERCICIO 2 INTEGRADO:** App Node.js con Dependencias ✅
**Completado - Expansión integrada:**
- ✅ **Docker local**: Alpine + Node.js + herramientas (ya hecho)
- **+ GitHub**: Repo con package.json + README
- **+ EC2**: Deploy en servidor, gestión de procesos Node
- **+ Linux**: Instalación de dependencias del sistema

### **LECCIÓN 2: ENV** ✅
**Concepto:** Variables de entorno en contenedores
- ✅ ENV vs argumentos de ejecución
- ✅ Prioridad de variables (-e > ENV > defaults)
- ✅ Aplicaciones configurables por entorno

#### **🎯 EJERCICIO 3 INTEGRADO:** App Multi-Entorno ✅
**Completado - Expansión integrada:**
- ✅ **Docker local**: Python app con ENV (ya hecho)
- **+ GitHub**: Diferentes branches (dev/staging/prod)
- **+ EC2**: Deploy en múltiples servidores por entorno
- **+ Linux**: Variables de entorno del sistema, systemd

### **LECCIÓN 3: WORKDIR** 🔄 (ACTUAL)
**Concepto:** Directorio de trabajo en contenedores
- 🔄 WORKDIR vs RUN cd
- ⏳ Organización de archivos en contenedores
- ⏳ Rutas absolutas vs relativas

#### **🎯 EJERCICIO 4 INTEGRADO:** Microservicio Organizado
**En progreso - Integración completa:**
- 🔄 **Docker local**: Dockerfile con WORKDIR + estructura
- **+ GitHub**: Monorepo con múltiples servicios
- **+ EC2**: Deploy organizado, estructura de directorios
- **+ Linux**: Gestión de archivos, permisos, symbolic links

### **LECCIÓN 4: ARG** ⏳
**Concepto:** Argumentos de build personalizables
- ⏳ ARG vs ENV diferencias
- ⏳ Build-time vs runtime variables
- ⏳ Builds parametrizables

#### **🎯 EJERCICIO 5 INTEGRADO:** Build Personalizable
- **Docker local**: Dockerfile con ARG para diferentes versiones
- **+ GitHub**: Actions con matrix builds (dev/prod)
- **+ EC2**: Scripts de deploy con parámetros
- **+ Linux**: Detección de arquitectura, conditional builds

### **LECCIÓN 5: USER** ⏳
**Concepto:** Usuario no-root para seguridad
- ⏳ Creación de usuarios en contenedores
- ⏳ Permisos y ownership
- ⏳ Seguridad de contenedores

#### **🎯 EJERCICIO 6 INTEGRADO:** Aplicación Segura
- **Docker local**: Usuario no-root + permisos correctos
- **+ GitHub**: Security scanning + dependabot
- **+ EC2**: Hardening del servidor, usuarios del sistema
- **+ Linux**: sudo, grupos, políticas de seguridad

### **🎯 EJERCICIO 7:** Dockerfile Python Flask desde cero ⏳
### **🎯 EJERCICIO 8:** Optimizar imagen reduciendo layers ⏳
### **🎯 EJERCICIO 9:** App configurable con ENV y ARG ⏳

---

## **MÓDULO 3: DOCKERFILE AVANZADO**

### **LECCIÓN 6: Multi-stage Builds** ⏳
#### **🎯 EJERCICIO 10 INTEGRADO:** Aplicación Java Optimizada
- **Docker local**: Build stage + Runtime stage
- **+ GitHub**: Automated builds + caching
- **+ EC2**: Production deployment optimizado
- **+ Linux**: Resource monitoring, performance tuning

### **LECCIÓN 7: Health Checks** ⏳
#### **🎯 EJERCICIO 11 INTEGRADO:** Aplicación con Monitoreo
- **Docker local**: HEALTHCHECK + custom endpoints
- **+ GitHub**: Health check testing en CI
- **+ EC2**: Load balancer health checks
- **+ Linux**: System monitoring (htop, netstat, logs)

### **LECCIÓN 8: Seguridad Avanzada** ⏳
#### **🎯 EJERCICIO 12 INTEGRADO:** Container Security
- **Docker local**: Distroless images + scanning
- **+ GitHub**: SAST/DAST + vulnerability alerts
- **+ EC2**: Server hardening + firewall
- **+ Linux**: SELinux, AppArmor, security auditing

---

## **MÓDULO 4: GESTIÓN DE CONTENEDORES**

### **LECCIÓN 9: Límites de Recursos** ⏳
#### **🎯 EJERCICIO 13 INTEGRADO:** Resource Management
- **Docker local**: Memory/CPU limits + monitoring
- **+ GitHub**: Performance testing en CI
- **+ EC2**: Server resource allocation
- **+ Linux**: cgroups, systemd limits, monitoring tools

### **LECCIÓN 10: Logs y Debugging** ⏳
#### **🎯 EJERCICIO 14 INTEGRADO:** Logging Centralizado
- **Docker local**: Structured logging + log drivers
- **+ GitHub**: Log analysis en workflows
- **+ EC2**: Centralized logging setup
- **+ Linux**: rsyslog, logrotate, log analysis

### **LECCIÓN 11: Restart Policies** ⏳
#### **🎯 EJERCICIO 15 INTEGRADO:** High Availability
- **Docker local**: Restart policies + failure scenarios
- **+ GitHub**: Automated recovery testing
- **+ EC2**: Service management + auto-restart
- **+ Linux**: systemd services, process supervision

---

## **MÓDULO 5: VOLÚMENES Y PERSISTENCIA**

### **LECCIÓN 12: Named Volumes** ⏳
#### **🎯 EJERCICIO 16 INTEGRADO:** Base de Datos Persistente
- **Docker local**: PostgreSQL + named volumes
- **+ GitHub**: Database migrations + versioning
- **+ EC2**: Production database setup
- **+ Linux**: Disk management, backup strategies

### **LECCIÓN 13: Bind Mounts Avanzados** ⏳
#### **🎯 EJERCICIO 17 INTEGRADO:** Desarrollo en Tiempo Real
- **Docker local**: Hot reload + development workflow
- **+ GitHub**: Development branches + collaboration
- **+ EC2**: Staging environment setup
- **+ Linux**: File watchers, inotify, development tools

---

## **MÓDULO 6: NETWORKING**

### **LECCIÓN 14: Custom Networks** ⏳
#### **🎯 EJERCICIO 18 INTEGRADO:** Microservicios Comunicándose
- **Docker local**: Custom networks + service discovery
- **+ GitHub**: Integration testing entre servicios
- **+ EC2**: Multi-server networking
- **+ Linux**: iptables, network troubleshooting

### **LECCIÓN 15: Load Balancing** ⏳
#### **🎯 EJERCICIO 19 INTEGRADO:** Aplicación Escalable
- **Docker local**: Nginx load balancer + backends
- **+ GitHub**: Load testing + scaling triggers
- **+ EC2**: Multiple servers + load balancer
- **+ Linux**: HAProxy, network optimization

---

## **MÓDULO 7: DOCKER COMPOSE**

### **LECCIÓN 16: Multi-Container Apps** ⏳
#### **🎯 EJERCICIO 20 INTEGRADO:** Stack E-commerce Completo
- **Docker local**: Frontend + Backend + DB + Cache
- **+ GitHub**: Environment-specific compose files
- **+ EC2**: Production stack deployment
- **+ Linux**: Service orchestration, process management

### **LECCIÓN 17: Scaling y Production** ⏳
#### **🎯 EJERCICIO 21 INTEGRADO:** Deploy Production-Ready
- **Docker local**: Production compose + secrets
- **+ GitHub**: Blue-green deployment workflow
- **+ EC2**: Zero-downtime deployment
- **+ Linux**: Production hardening, monitoring

---

## **MÓDULO 8: CI/CD Y AUTOMATIZACIÓN**

### **LECCIÓN 18: GitHub Actions Básico** ⏳
#### **🎯 EJERCICIO 22 INTEGRADO:** Pipeline Automatizado
- **Docker local**: Automated builds + testing
- **+ GitHub**: CI/CD workflow completo
- **+ EC2**: Automated deployment
- **+ Linux**: Deployment scripts, automation

### **LECCIÓN 19: Deploy Continuo** ⏳
#### **🎯 EJERCICIO 23 INTEGRADO:** GitOps Workflow
- **Docker local**: Container registry integration
- **+ GitHub**: Automated releases + tagging
- **+ EC2**: Webhook-based deployment
- **+ Linux**: Service management, rollback strategies

---

## **MÓDULO 9: MONITORING Y OBSERVABILITY**

### **LECCIÓN 20: Application Monitoring** ⏳
#### **🎯 EJERCICIO 24 INTEGRADO:** Observability Stack
- **Docker local**: Prometheus + Grafana stack
- **+ GitHub**: SLI/SLO definitions + alerting
- **+ EC2**: Production monitoring setup
- **+ Linux**: System metrics, log aggregation

---

## **MÓDULO 10: SEGURIDAD Y COMPLIANCE**

### **LECCIÓN 21: Security Scanning** ⏳
#### **🎯 EJERCICIO 25 INTEGRADO:** Security Pipeline
- **Docker local**: Image scanning + vulnerability assessment
- **+ GitHub**: Security automation + compliance
- **+ EC2**: Server security + compliance
- **+ Linux**: Security auditing, compliance frameworks

---

## **MÓDULO 11: PERFORMANCE Y OPTIMIZATION**

### **LECCIÓN 22: Performance Tuning** ⏳
#### **🎯 EJERCICIO 26 INTEGRADO:** High Performance App
- **Docker local**: Resource optimization + profiling
- **+ GitHub**: Performance testing + benchmarking
- **+ EC2**: Server optimization + scaling
- **+ Linux**: Kernel tuning, performance analysis

---

## **MÓDULO 12: TROUBLESHOOTING AVANZADO**

### **LECCIÓN 23: Debugging Complejo** ⏳
#### **🎯 EJERCICIO 27 INTEGRADO:** Problem Resolution
- **Docker local**: Advanced debugging techniques
- **+ GitHub**: Issue tracking + resolution workflow
- **+ EC2**: Production troubleshooting
- **+ Linux**: System debugging, root cause analysis

---

## **MÓDULO 13: PROYECTO FINAL**

### **🎯 EJERCICIO CAPSTONE:** Plataforma DevOps Completa ⏳
**Arquitectura completa:**
- **Frontend**: React app (Docker + Nginx)
- **Backend**: Node.js API (Docker + clustering)
- **Database**: PostgreSQL (Docker + persistence)
- **Cache**: Redis (Docker + optimization)
- **Monitoring**: Prometheus + Grafana
- **CI/CD**: GitHub Actions completo
- **Infrastructure**: Multi-server EC2 setup
- **Operations**: Linux automation + monitoring

---

## **🔧 EJERCICIOS DE DEBUGGING INTEGRADOS**

### **PROBLEMAS DOCKER** 🐳
- **🚨 PROBLEMA 1:** "Mi contenedor se cierra inmediatamente"
- **🚨 PROBLEMA 2:** "No puedo conectar a la base de datos"
- **🚨 PROBLEMA 3:** "La imagen pesa 2GB, optimízala"

### **PROBLEMAS GITHUB** 🐙
- **🚨 PROBLEMA 4:** "El workflow falla en deployment"
- **🚨 PROBLEMA 5:** "Conflicto de merge en producción"
- **🚨 PROBLEMA 6:** "Las Actions consumen muchos minutos"

### **PROBLEMAS EC2/LINUX** ☁️🐧
- **🚨 PROBLEMA 7:** "El servidor se queda sin espacio"
- **🚨 PROBLEMA 8:** "La aplicación no inicia después del deploy"
- **🚨 PROBLEMA 9:** "Performance degradada en producción"

### **PROBLEMAS INTEGRADOS** 🔗
- **🚨 PROBLEMA 10:** "Deploy funciona local pero falla en servidor"
- **🚨 PROBLEMA 11:** "GitHub Actions build exitoso pero app no funciona"
- **🚨 PROBLEMA 12:** "Rollback de emergencia en producción"

---

## **📊 ESTADÍSTICAS DE PROGRESO**

### **PROGRESO ACTUAL**
- **Módulos completados:** 1/13
- **Lecciones completadas:** 2/23
- **Ejercicios integrados completados:** 1/27
- **Problemas resueltos:** 0/12

### **SKILLS DESARROLLADOS**
- **Docker:** 32% (conceptos básicos + RUN + ENV + WORKDIR en progreso)
- **Linux:** 5% (comandos básicos en ejercicios)
- **GitHub:** 5% (git básico en ejercicios)
- **AWS EC2:** 0% (por empezar)

### **PROGRESO TOTAL:** 15% del curso integrado completo

---

## **🎯 PRÓXIMO PASO**
**Continuar con LECCIÓN 3: WORKDIR** - Versión integrada:
1. Completar concepto WORKDIR (Docker local)
2. Subir ejercicio a GitHub
3. Deploy en EC2 con Linux commands
4. Documentar proceso completo

---

## **💡 VENTAJAS DE ESTA ESTRUCTURA**

### **✅ MANTIENE TODO LO ACTUAL**
- Misma progresión Docker
- Mismo orden de conceptos
- Mismos ejercicios base
- Tu progreso intacto

### **➕ AGREGA VALOR REAL**
- Skills de industria
- Portfolio demostrable
- Experiencia práctica
- Preparación laboral

### **🚀 METODOLOGÍA PROBADA**
- Progresión natural
- Integración gradual
- Troubleshooting real
- Certificaciones preparadas
