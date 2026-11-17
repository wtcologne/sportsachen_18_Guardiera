# SPORTSACHEN – Folge 17 | GitHub-Pages-Webseite

Eine statische Podcastseite mit Abspielmöglichkeit, mitlaufendem Sprecherwechsel-Transkript, Kapiteln, Suche und Datenblatt (HTML + Original-PDF).

## Veröffentlichung auf GitHub Pages

1. Auf github.com ein neues **öffentliches** Repository anlegen, z. B. `sportsachen-folge17`.
2. **Alle Dateien und den Ordner `assets` aus diesem ZIP** im Stammverzeichnis des Repositories ablegen. Die ZIP-Datei nicht als ZIP hochladen. Mit `Add file → Upload files` geht das im Browser; die optimierte MP3 bleibt unter der GitHub-Browser-Uploadgrenze von 25 MiB.
3. Unter `Settings → Pages → Build and deployment` bei **Source** „Deploy from a branch“ auswählen.
4. `main` und `/ (root)` einstellen, speichern. Die Adresse lautet anschließend typischerweise `https://DEIN-NAME.github.io/sportsachen-folge17/`.

**Wichtig:** Das Repository bzw. die veröffentlichte Seite ist öffentlich erreichbar. Vor dem Veröffentlichen bitte Nutzungsrechte für die Audioaufnahme und das Dokument klären.

## Lokaler Test

`index.html` im Browser öffnen. Ein lokaler Webserver ist optional (`python -m http.server 8000`). Keine Installation und kein Build-Schritt erforderlich.

## Aufbau

- `index.html`: Inhalt der Website einschließlich des vollständigen redigierten Transkripts.
- `style.css`: Gestaltung, mobiloptimiert.
- `script.js`: Abspielsteuerung, Zeitmarken, Kapitel und Suche.
- `assets/sportsachen-folge17.mp3`: auf 80 kbit/s Mono optimierte Web-Version der gelieferten MP3 (keine Änderung am Schnitt).
- `assets/datenblatt.pdf` und `assets/datenblatt.docx`: das Original-Datenblatt für Ansicht und Download.
- `assets/transkript.txt`, `assets/transkript.docx`, `assets/transkript.json`: bearbeitete Transkript-Fassungen.
- `assets/dshs-logo.png`: Logo aus dem gelieferten Datenblatt.

## Redaktionelle Hinweise

Das Transkript ist redigiert und nicht wortgetreu, die synchronisierte Markierung erfolgt pro Sprecherbeitrag (nicht pro Wort). Die Stelle bei 29:31 ist in den bereitgestellten Transkripten als unklar bezeichnet. Vor einer öffentlichen Veröffentlichung bitte den separat gelieferten LF-Prüfbericht beachten. Die herunterladbaren Transkriptfassungen enthalten nur das Gespräch (keine internen redaktionellen Anmerkungen).
