# Sicherheit (Security Policy)

## Unterstützte Versionen

Aktuell werden Sicherheits-Updates nur für die neueste stabile Version bereitgestellt.

| Version | Unterstützt |
| ------- | ----------- |
| v1.1.0  | ✅ Ja       |
| < v1.1.0| ❌ Nein     |

## Schwachstellen melden

Sicherheit liegt uns am Herzen. Wenn du eine Sicherheitslücke in **Docker-Composer-U** gefunden hast, gehe bitte wie folgt vor:

1. **Nicht öffentlich posten:** Bitte erstelle kein öffentliches GitHub-Issue für Sicherheitslücken.
2. **Direkter Kontakt:** Sende eine E-Mail mit einer detaillierten Beschreibung der Schwachstelle an **heyfinnc@mail.com**.
3. **Reaktionszeit:** Ich werde versuchen, innerhalb von 48 Stunden auf deine Meldung zu reagieren und eine Lösung zu erarbeiten.

## Wichtiger Hinweis zur lokalen Nutzung

Da dieses Tool direkt auf den Docker-Socket bzw. die Named Pipe zugreift, hat es weitreichende Berechtigungen auf deinem System. 

- **Nutze das Dashboard nur in vertrauenswürdigen Netzwerken.**
- **Setze es niemals ungeschützt dem öffentlichen Internet aus**, da keine integrierte Authentifizierung vorhanden ist.
- Führe das Tool immer mit den geringstmöglichen Rechten aus, die für den Docker-Zugriff nötig sind.

---
*Zuletzt aktualisiert am 05. März 2026*
