# SPORTSACHEN · Folge 18 – Podcast mit Literatur und Praxis-Materialien

**Leistung und Leistungsbewertung im Sportunterricht** · Gespräch mit Petra Guardiera, Moderation: Lars Fischer.

Eine komplette, statische Webseite für GitHub Pages. Ohne Framework, Datenbank, Anmeldung oder externe JavaScript-Bibliotheken.

## Inhalt

- **Podcastplayer:** Audio in Folge 18 (42:20) mit 15-Sekunden-Sprüngen, Geschwindigkeit und Download.
- **Mitlese-Transkript:** 46 Sprecherbeiträge, Zeitmarken, 14 Kapitel, Suche und optionale automatische Hervorhebung. Die Markierung erfolgt **pro Sprecherbeitrag, nicht Wort für Wort**.
- **Literatur und Praxis:** 14 aufklappbare redaktionelle Hinweise unmittelbar unter zugehörigen Sprecherbeiträgen. Darin 10 eindeutig bezeichnete externe Quellen, vertiefende Erläuterungen und Praxisimpulse.
- **Kopiervorlagen:** sechs eigenständig erstellte, jeweils einseitige PDF- und DOCX-Dateien sowie ein sechseitiges Sammel-PDF. Im Transkript verlinkt und separat auf der Seite auffindbar.
- **Datenblatt:** direkt auf der Seite sichtbar sowie als PDF und DOCX zum Download.

## Auf GitHub Pages veröffentlichen

1. ZIP **entpacken**.
2. Bei GitHub ein Repository öffnen oder neu erstellen.
3. Den **gesamten Inhalt** des entpackten Ordners (inklusive `index.html`, `style.css`, `script.js`, `.nojekyll` und `assets/`) in das **Stammverzeichnis** hochladen. Nicht den obersten Ordner als Unterordner hochladen.
4. Unter `Settings → Pages` das Deployment von Branch `main` und `/(root)` konfigurieren.
5. Ältere, nicht mehr verwendete Dateien (insbesondere `assets/sportsachen-folge17.mp3`) bei GitHub separat löschen. Dateien mit gleichem Namen und gleicher Position werden beim Hochladen überschrieben.
6. GitHub-Pages-Adresse auf dem Handy und Desktop prüfen, ggf. Browser-Cache neu laden.

> **Achtung: GitHub Pages ist öffentlich zugänglich**, auch wenn der Quellcode in einem privaten Repository liegt (je nach Tarif). Es gibt in dieser Version keine Passwortsperre. Bei geschütztem Redaktionsbetrieb bitte eine geeignete vorgeschaltete Zugangskontrolle nutzen.

## Verzeichnis

```text
index.html                Startseite, Kapitel, Transkript und redaktionelle Hinweise
style.css                 Layout und Gestaltung
script.js                 Player, Kapitelnavigation, Suche, Link zu Hinweisen
.nojekyll                 Statisches GitHub-Pages-Deployment
assets/
  sportsachen-folge18.mp3 Audio
  datenblatt.pdf/.docx    Datenblatt (Folge 18)
  datenblatt-vorschau.webp
  transkript.json/.txt/.docx
  dshs-logo.png
  literatur-und-hinweise.json   Redaktionsübersicht mit Quellen und Zuordnung
  materialien/
    01-kann-buch.pdf/.docx
    01b-kann-buch-sprachsensibel.pdf/.docx
    02-beobachtungsbogen.pdf/.docx
    03-feedbackgespraech.pdf/.docx
    04-peer-beobachtung.pdf/.docx
    05-bewertungsdimensionen.pdf/.docx
    Alle_Kopiervorlagen_Folge18.pdf
```

## Inhalte redaktionell ändern

- Texte, Literatur und Materiallinks werden **derzeit direkt in `index.html`** angezeigt. Die Datei `assets/literatur-und-hinweise.json` enthält eine zusätzliche redaktionelle Referenzliste zur Nachpflege, wird aber von der Webseite nicht automatisch geladen.
- Neue oder geänderte Quellen müssen in der HTML-Seite selbst angepasst werden. Externe Quellen werden nur **verlinkt**, nicht als urheberrechtlich geschützte Volltexte kopiert.
- Die Hinweise sind **redaktionell vorformuliert und für alle gleich sichtbar**. Besucher können noch **keine eigenen Kommentare speichern**. Für eine interaktive Kommentarfunktion wäre ein zusätzlicher Dienst nötig.
- Zeitmarken sind die Sprecherwechsel im vorhandenen redigierten Transkript. Ein Link `#hinweis-kannbuch` öffnet den passenden Hinweis und setzt die Abspielposition auf den Anfang des Sprecherbeitrags (ohne automatisch abzuspielen).
- Alle Vorlagen sind redaktionelle, flexibel anpassbare Beispiele; sie stellen keine validierten Diagnoseverfahren und keine verbindlichen Notenraster dar. Es werden keine personenbezogenen Schülerdaten auf der Webseite erfasst.

## Rechtliches und redaktionelle Qualitätsprüfung

Vor der Veröffentlichung bitte Freigabe für Podcast, Logos, Datenblatt und Namen klären. Alle Fachartikel sind nur extern verlinkt, teilweise nur mit Abstract oder bibliografischer Angabe öffentlich zugänglich. Prüfe bei redaktionellen Änderungen die Aktualität der NRW-Vorgaben und der Literatur-URLs.

Das Transkript wurde aus der vorherigen Version übernommen: Die bereits gekennzeichnete unklare Passage bei 29:31 und andere redaktionelle Prüfpunkte wurden **nicht** stillschweigend geändert. Der Textabgleich wurde nicht erneut wortgenau mit der MP3 verifiziert.

**Technisch:** Keine externen Tracker, kein eingebetteter Drittanbieter-Kommentardienst. Die Webseite lädt die MP3 direkt aus dem `assets`-Ordner.
