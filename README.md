# 🐳 Docker-Composer-U

Ein minimalistisches, webbasiertes Dashboard zur Verwaltung von Docker-Containern. Entwickelt für maximale Übersichtlichkeit und eine intuitive Bedienung.

---

## ✨ Features

- **Echtzeit-Monitoring**: Automatische Aktualisierung der Container-Liste alle 5 Sekunden.
- **Schnellzugriff**: Starten und Stoppen von Instanzen direkt über das UI.
- **Log-Einsicht**: Integrierter Log-Viewer für schnelle Fehlerdiagnose (die letzten 20 Zeilen).
- **Clean UI**: Schlichtes, professionelles Industrie-Design in Slate-Grau und Emerald.
- **Cross-Platform**: Intelligente Erkennung von Windows (Named Pipes) und Linux (Unix Sockets).

---

## 🚀 Schnellstart

### 1. Installation
Stelle sicher, dass **Node.js** (v18+) und **Docker Desktop** (oder Docker Engine) installiert sind.

```bash
# Projektordner betreten
cd Docker-Composer-U

# Abhängigkeiten installieren
npm install
```

---

### 2. Anwendung starten
Wichtig für Windows-Nutzer: Starte dein Terminal (PowerShell/CMD) unbedingt als Administrator, damit der Zugriff auf die Docker-Pipe erlaubt wird.

```bash
node server.js
```

### 3. Dashboard öffnen
Dashboard öffnen
Öffne deinen Browser unter: http://localhost:3000


---

# 🛠 Fehlerbehebung (Troubleshooting)
"Docker nicht gefunden" auf Windows
Sollte die Verbindung trotz Administrator-Rechten fehlschlagen:

1. Öffne Docker Desktop.

2. Gehe zu Settings > General.

3. Aktiviere "Expose daemon on tcp://localhost:2375 without TLS".

4. Falls du diese Option nutzt, ändere in der server.js die Verbindung auf:
const docker = new Docker({ host: '127.0.0.1', port: 2375 });

#### Keine Container sichtbar?
Stelle sicher, dass Docker-Container existieren. Du kannst zum Testen einen Nginx-Container starten:

```bash
docker run -d --name test-nginx nginx
```

---

## 📂 Projektstruktur

```server.js```: Express-Server, der die Dockerode-Bibliothek nutzt, um mit der Docker-Engine zu kommunizieren.

```index.html```: Das Frontend, basierend auf Tailwind CSS, das via Fetch-API mit dem Backend kommuniziert.

```package.json```: Definition der Abhängigkeiten (```express```, ```dockerode```).

---

## 📡 API Endpunkte
## API Endpoints

| Methode | Pfad | Beschreibung |
|--------|------|-------------|
| GET | `/api/containers` | Gibt eine Liste aller Container als JSON zurück. |
| GET | `/api/logs/:id` | Liefert die letzten 20 Log-Einträge eines Containers. |
| POST | `/api/action/:type/:id` | Führt `start` oder `stop` für die angegebene ID aus. |

---
## 📄 Lizenz
Dieses Projekt ist Open Source unter der MIT-Lizenz.