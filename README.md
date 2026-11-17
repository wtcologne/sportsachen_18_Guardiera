# Sportsachen – Folge 18

**Leistung bewerten im Sport** – Gespräch mit Petra Guardiera, Moderation: Lars Fischer.

Eine vollständig statische Podcast-Webseite für **GitHub Pages** mit lokal gehosteter Audiodatei (42:20 Minuten), durchsuchbarem Transkript, Kapitelübersicht und Datenblatt.

## So veröffentlichst du sie auf GitHub Pages

1. Neues Repository auf github.com anlegen, zum Beispiel `sportsachen-folge18` (öffentlich).
2. **Alle Dateien und den kompletten `assets`-Ordner aus diesem ZIP in das Stammverzeichnis** des Repositorys hochladen (nicht nur den ZIP-Ordner hochladen).
3. Repository öffnen → **Settings → Pages**.
4. Unter **Build and deployment** die Option **Deploy from a branch** auswählen. `main`, Verzeichnis `/ (root)` auswählen und speichern.
5. Nach der Bereitstellung lautet die typische Adresse `https://DEIN-GITHUB-NAME.github.io/sportsachen-folge18/`.

Es ist kein Build-Schritt, Framework, Backend, Nutzerkonto oder externe JavaScript-Bibliothek nötig. Die `.nojekyll`-Datei liegt bereits bei.

## Funktionen

- **Desktop:** Kapitelübersicht als feststehende Seitenleiste links; innerhalb der Seitenleiste scrollbar; das Transkript läuft unabhängig rechts weiter.
- **Handy:** schmale, beim Scrollen sichtbare Kapitel-Leiste; der Button **Kapitel** öffnet ein von unten einblendendes, scrollbareres Menü. Ein Kapitel auswählen springt **sofort** zum entsprechenden Sprecherbeitrag.
- **Player:** bleibt unten sichtbar; Abspielen/Pausieren, 15 Sekunden vor/zurück, Fortschrittsleiste, Wiedergabegeschwindigkeit. Auf dem Desktop zusätzlich MP3-Download.
- **Transkript:** Markierung des aktuellen Sprecherbeitrags während des Hörens; „Automatisch folgen“ lässt sich abschalten; Suche, Zeitmarken, zum aktuellen Beitrag springen.
- **Datenblatt:** Lesefassung direkt auf der Webseite, PDF in Originalgestaltung, Word-Download.
- **Transkript zum Mitnehmen:** Word und TXT.

**Wichtig zur Synchronisierung:** Die Zeitmarken stammen aus dem redigierten Transkript und kennzeichnen Sprecherwechsel bzw. Kapitelbeginne. Die Markierung ist **sprecherbeitragsgenau**, nicht wortgenau. Bei langen Antworten bleibt deshalb derselbe Beitrag markiert, während die Aufnahme weiterläuft. Die im Originaltranskript markierte unklare Stelle ist erhalten geblieben.

## Dateien

```text
index.html                      Webseite
style.css                       Desktop-/Mobil-Layout
script.js                       Player, Kapitelnavigation, Suchfunktion, Mitlesen
.nojekyll                       Für GitHub Pages
assets/
  sportsachen-folge18.mp3       Web-Audio (~24 MB)
  transkript.json               Zeitmarken / redigierte Inhalte
  transkript.txt                Transkript als Text, Folge 18
  transkript.docx               Transkript als Word, Folge 18
  datenblatt-vorschau.webp      Mobilfreundliche Bildvorschau des Originaldatenblatts
  datenblatt.pdf                Originalgestaltung, jetzt mit Folge 18
  datenblatt.docx               Word-Fassung, jetzt mit Folge 18
  dshs-logo.png                 Logo
```

## Änderungen

- Folgennummer in Seitentitel, sichtbaren Labels, Player, Dateinamen, Meta-Tags sowie Datenblatt und Transkript auf **18** gesetzt.
- Ursprüngliche Formulierungen und Zeitstempel der redaktionell bearbeiteten Transkripte beibehalten.
- Audiodatei wurde für die Website nur komprimiert (Web-MP3), der zuvor fertige Podcastschnitt nicht geändert.

## Rechte und Veröffentlichung

Stelle vor einer öffentlichen Veröffentlichung sicher, dass Podcast-Audio, Namen, Gestaltung des Datenblatts, Literatur-Links und Logos mit den nötigen Freigaben veröffentlicht werden dürfen. Die Webseite selbst nutzt keine Tracker und lädt keine externen Skripte nach.
