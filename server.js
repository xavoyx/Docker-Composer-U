const express = require('express');
const Docker = require('dockerode');
const path = require('path');

const app = express();
const isWindows = process.platform === "win32";
const docker = new Docker(isWindows ? { socketPath: '//./pipe/docker_engine' } : { socketPath: '/var/run/docker.sock' });

app.use(express.static(__dirname));

app.get('/api/containers', async (req, res) => {
    try {
        const containers = await docker.listContainers({ all: true });
        res.json(containers.map(c => ({
            id: c.Id.substring(0, 12),
            name: c.Names[0].replace('/', ''),
            status: c.State,
            image: c.Image
        })));
    } catch (e) { res.status(500).json({ error: "Docker Connection Error" }); }
});

app.get('/api/logs/:id', async (req, res) => {
    try {
        const container = docker.getContainer(req.params.id);
        const logs = await container.logs({ stdout: true, stderr: true, tail: 40 });
        res.send(logs.toString('utf8').replace(/[^\x20-\x7E\n]/g, ""));
    } catch (e) { res.status(500).send("No logs available."); }
});

app.post('/api/action/:type/:id', async (req, res) => {
    try {
        const container = docker.getContainer(req.params.id);
        if (req.params.type === 'start') await container.start();
        if (req.params.type === 'stop') await container.stop();
        res.json({ success: true });
    } catch (e) { res.status(500).json({ error: e.message }); }
});

app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'index.html')));
app.listen(3000, () => console.log('🚀 Dashboard: http://localhost:3000'));