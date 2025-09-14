const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware para servir archivos estáticos
app.use(express.static('public'));

// Ruta principal
app.get('/', (req, res) => {
    const info = {
        app: 'Microservicio Organizado',
        version: '1.0.0',
        workdir: process.cwd(),
        estructura: {
            src: fs.existsSync('./src') ? '✅' : '❌',
            tests: fs.existsSync('./tests') ? '✅' : '❌',
            docs: fs.existsSync('./docs') ? '✅' : '❌',
            scripts: fs.existsSync('./scripts') ? '✅' : '❌',
            config: fs.existsSync('./config') ? '✅' : '❌'
        },
        archivos_src: fs.readdirSync('./src'),
        timestamp: new Date().toISOString()
    };
    
    res.json(info);
});

// Ruta de health check
app.get('/health', (req, res) => {
    res.json({ 
        status: 'OK', 
        workdir: process.cwd(),
        uptime: process.uptime() 
    });
});

// Ruta para mostrar estructura de directorios
app.get('/estructura', (req, res) => {
    try {
        const estructura = {};
        const directorios = ['src', 'tests', 'docs', 'scripts', 'config'];
        
        directorios.forEach(dir => {
            if (fs.existsSync(`./${dir}`)) {
                estructura[dir] = fs.readdirSync(`./${dir}`);
            } else {
                estructura[dir] = 'No existe';
            }
        });
        
        res.json({
            workdir: process.cwd(),
            estructura: estructura
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.listen(PORT, () => {
    console.log(`🚀 Microservicio iniciado en puerto ${PORT}`);
    console.log(`📁 Directorio de trabajo: ${process.cwd()}`);
    console.log(`🔗 Health check: http://localhost:${PORT}/health`);
    console.log(`📋 Estructura: http://localhost:${PORT}/estructura`);
});
