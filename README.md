# SPORTSACHEN – Folge 18 (Neuschnitt 40:36)

Vollständige, statische Podcast-Webseite mit neuer Audiofassung, korrigiertem Transkript, Kapiteln, Literaturhinweisen, Kopiervorlagen und Datenblatt. Es sind keine Backend-Dienste notwendig.

## Veröffentlichung auf GitHub Pages

1. Dieses ZIP **entpacken** und seinen gesamten Inhalt in das Wurzelverzeichnis deines GitHub-Repositories hochladen. Die Datei `index.html` muss direkt dort liegen.
2. Vorhandene gleichnamige Dateien ersetzen. Bitte die **alte Audiodatei `assets/sportsachen-folge18.mp3` im Repository löschen** – sie ist nicht mehr Teil dieses Pakets und würde unnötig Speicherplatz beanspruchen.
3. Die neue Audio heißt `assets/sportsachen-folge18-neuschnitt.mp3`. In `index.html` wird bereits diese neue Datei geladen.
4. GitHub → **Settings → Pages**: `Deploy from a branch` → `main` / `(root)` einstellen oder die bisherige Konfiguration unverändert lassen.
5. Nach dem Deployment die Webseite hart aktualisieren und insbesondere die Kapitelzeitmarken und Materialdownloads kontrollieren.

## Dateien

- `index.html`, `style.css`, `script.js`: Webseite und Funktionalität
- `assets/sportsachen-folge18-neuschnitt.mp3`: Web-Audio, sprachoptimierte Kopie, 40:36 Min.
- `assets/transkript.txt`: redaktionell bereinigter Volltext mit Zeitmarken
- `assets/transkript.docx`: Word-Version
- `assets/transkript.json`: strukturierte Textabschnitte mit Sekundenpositionen und 15 Kapiteln
- `assets/literatur-und-hinweise.json`: Daten zu 14 zeitbezogenen Hinweisen / Fachquellen
- `assets/datenblatt.pdf`, `.docx`, `-vorschau.webp`: Datenblatt zur Folge 18
- `assets/materialien/`: sechs Kopiervorlagen im Datenblatt-Design (PDF und Word) sowie ein Sammel-PDF

## Hinweise zum Transkript

Das gelieferte Schnitttranskript enthält Zeitcodes im Format `HH:MM:SS:Frames`. Sie wurden mit angenommener Framerate von 30 fps in Sekunden umgerechnet; sie kennzeichnen Abschnitte und sind **nicht wortgenau** synchronisiert. Die neue MP3 ist 40:36 lang.

Bei **27:50** bleibt der Beginn eines Basketballbeispiels unklar. Der unsichere Teil steht deshalb in eckigen Klammern. Im gelieferten Transkript erscheinen außerdem zwei Begrüßungen durch Lars bei ca. **00:20 und 00:35**. Vor öffentlicher Freigabe bitte prüfen, ob beides im endgültigen Schnitt beabsichtigt ist.

Die Literaturhinweise und Kopiervorlagen sind **redaktionelle Ergänzungen** und nicht Teil des wörtlichen Interviews. Die bisherige Gestaltung wurde beibehalten. Trotz sorgfältiger sprachlicher Bereinigung ersetzt das Transkript keine vollständige wortgenaue Endabnahme anhand des Tons.

Die Folgennummer ist durchgängig **18**, auch wenn die neu gelieferte Quelldatei noch `17` im Namen trägt.
