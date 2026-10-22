# Ernten und deinen Hanok ausbauen · v26

## Ein echter Neustart für den Garten

Beim ersten Start von v26 beginnt der Garten einmalig neu: kein Wachstum, keine Ernten, keine Münzen und keine gekauften Dekorationen. **Vokabeln, Kategorien, Lernstände und Lernstatistik bleiben vollständig erhalten.** Die Illustration des Hanok-Innenhofs bleibt als Kulisse sichtbar; eigene Gebäude und Dekorationen verdienst du dir künftig neu.

Frühere Lernversuche werden nicht mehr rückwirkend angerechnet. Beim nächsten Öffnen oder einem späteren Update wird dein neuer Garten nicht erneut zurückgesetzt.

## Wachstum, Ernte und Münzen

- Ein koreanisches Wort gibt höchstens einmal pro Kalendertag Wachstum, unabhängig von Abfragerichtung und Kategorie. Richtig und falsch zählen gleichermaßen. Reines Aufdecken zählt nicht.
- Pro Tag sind maximal **40 Wachstumspunkte** möglich. Du kannst danach beliebig weiterlernen; dein Wiederholungsplan und deine Statistik werden normal gespeichert.
- Eine Pflanze braucht **200 Wachstum**, also mindestens **fünf Lerntage**. Warten allein bringt kein Wachstum. Bei Pausen verwelkt nichts.
- Reife Pflanzen erntest du selbst über **Ernten · +25 Münzen**. Erst die Ernte zahlt Münzen aus.
- Danach beginnt die nächste Pflanze. Überschüssiges Wachstum bleibt für sie erhalten; du verlierst nichts, wenn du vor dem Ernten weiterlernst.
- Geerntete Pflanzen kommen dauerhaft in deine Sammlung. Das Tageslimit wird durch Ernten nicht zurückgesetzt.

## Dein Bauplan

| Projekt | Münzen |
|---|---:|
| Steinlaterne | 20 |
| Blumentöpfe | 30 |
| Kleiner Teich | 40 |
| Kleiner Tiger | 60 |
| Eigenes Hanok | 80 |
| Gästehaus | 150 |
| Gartenpavillon | 240 |

Du wählst selbst, wofür du sparst. Gebautes erscheint in deinem Garten. Jedes Projekt ist einmal kaufbar. Münzen sind reine Spielbelohnungen; es gibt keine Echtgeldkäufe.

„Zurück“ nimmt auch unverdientes Wachstum zurück. Falls dieselbe Antwort in einem anderen offenen Fenster bereits für eine Ernte verwendet wurde, wird die Rücknahme abgelehnt, statt Münzen doppelt zu vergeben.

## Installation

1. Optional vorher **Backup → JSON exportieren** für eine zusätzliche Sicherung.
2. **Hangul-Ernten-und-Bauen-v26.zip** vollständig entpacken.
3. Diese **sieben Dateien** auf GitHub am bisherigen Ort hochladen:
   - `app.js`
   - `style.css`
   - `garden.mjs`
   - `farm.mjs` (**neu**)
   - `farm-view.mjs` (**neu**)
   - `sw.js`
   - `update.html`
4. **Commit changes** klicken und die erfolgreiche Pages-Bereitstellung abwarten.
5. In der installierten App **Backup → App aktualisieren** drücken. Im Browser: https://jyq5rnrz96-cpu.github.io/hangul/update.html?repair=v26-harvest1
6. Danach wird **v26** angezeigt. Der erste Garten-Neustart geschieht automatisch.

Die vorhandenen Dateien aus v25, insbesondere `index.html` und `hanok-garden.png`, bleiben nötig. Die neue Mechanik funktioniert vollständig offline.

## Backups

Das neue JSON-Backup enthält Wachstum, Ernten, Münzen und Käufe. Beim Import eines solchen Backups wird **der Gartenstand durch den gespeicherten Stand ersetzt**, damit Münzen nicht versehentlich doppelt entstehen. Vokabeln und Lernstatistik werden weiter zusammengeführt. Die Bestätigung weist auf den Austausch des Gartens hin.

Alte Backups und Vokabellisten bleiben importierbar. Der Gartenfortschritt aus v25 wird dabei ignoriert: Er bringt keine alten Punkte in den neu gestarteten Garten zurück. CSV sichert weiterhin nur Vokabeln.

## Zur alten Gartenversion zurück

Falls du doch die alte Mechanik zurückhaben möchtest, verwende **Hangul-v25-zurueck-vor-Ernte.zip**. Dieses Paket ist an die neue lokale Datenbank angepasst. Lade seine Dateien vollständig hoch und aktualisiere nach der Bereitstellung. Vorher kannst du ein JSON-Backup aus v26 speichern. Die frühere Gartenversion zählt den bisherigen Lernverlauf wieder an, besitzt aber keine Ernte-/Münzmechanik. Nicht einfach ein beliebiges älteres ZIP verwenden und keine Website-Daten löschen.

## Prüfung

Getestet mit echten lokalen Daten in mobiler Browseransicht: einmaliger Garten-Neustart bei Übernahme aus v25, unveränderte Vokabeln und Statistik, Tageslimit von 40 bei 45 Antworten, Wachstum bei falschen Antworten, Rücknahme, manuelle Ernte bei 200 Wachstum, Auszahlung nur einmal, Käufe und Guthaben, sichtbarer Hanok-Bau, JSON-Wiederherstellung auf frischem Gerät, wiederholter Import ohne zusätzliche Münzen, Ignorieren alter Gartenpunkte und Offline-Neustart. Bestehende Abfragen, Zufallsrichtung, SRS und farbiger Balken funktionieren weiter. Mobile Vorschauen visuell geprüft. Ein direkter Test auf einem echten iPhone steht noch aus.
