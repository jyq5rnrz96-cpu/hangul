# Der neue Hanok-Innenhof · v30

Der Garten ist jetzt eine zusammenhängende isometrische Zeichnung: Gebäude, Mauern, Wege, Beete und Dekorationen verwenden dieselbe Perspektive, Größe und Lichtführung. Die zuvor einzeln über ein Hintergrundbild gelegten Pflanzen und Gebäudebilder werden in der Gartenszene nicht mehr verwendet.

Deine aktuelle Pflanze wächst in einem Beet. Daneben erinnert ein bepflanztes Beet an die letzte Ernte. Deine gesamte Erntesammlung bleibt wie bisher darunter sichtbar. Gekaufte Gebäude und Dekorationen erscheinen auf festen Plätzen im Innenhof. Nicht gekaufte Bauten werden nicht angezeigt. Der kleine Vogel mit Gat sitzt auf seiner Stange; Halloween-Kürbisse erscheinen nur bei eingeschaltetem Halloween-Design.

Der Design-Umschalter im Garten und unter Backup bleibt bestehen. Beide Ansichten verwenden die neue zusammenhängende Zeichnung. Münzen, Baukosten, Wachstum, Ernten und alle Lernfunktionen bleiben gleich. Die Datenbank bleibt Version 6; es findet kein Neustart des Gartens statt.

## Update von v29

1. Zur Sicherheit in deiner App ein **JSON-Backup** speichern.
2. **Hangul-Garten-v30.zip** entpacken.
3. **Alle sechs Dateien** zusammen an derselben Stelle wie die vorhandene index.html bei GitHub hochladen:
   - app.js
   - style.css
   - garden.mjs
   - courtyard.mjs (**neue Datei, unbedingt mit hochladen**)
   - sw.js
   - update.html
4. **Commit changes** klicken und die erfolgreiche Pages-Bereitstellung abwarten.
5. In der installierten App **Backup → App aktualisieren** drücken. Anschließend muss oben **Offline bereit · v30** stehen.

Die übrigen Dateien aus v29 bleiben erforderlich. Für eine vollständige Neuinstallation gibt es weiterhin **Hangul-iPhone-PWA.zip**. Keine lokalen App-Daten löschen.

## Prüfung

Mobile und Tablet-Darstellung mit leerem, teilweise und vollständig ausgebautem Garten kontrolliert. Vorhandene Käufe bleiben sichtbar, Wachstum und Ernten bleiben gespeichert. Designwechsel, Münzen, Ernte, Offline-Neustart, Lernkarte und Schwer-Schaltfläche geprüft. Die Gartenszene besteht aus einer einzigen skalierbaren Zeichnung ohne darüber positionierte Bilder. Neue Dateien werden beim Offline-Update auf Vollständigkeit geprüft. Kein Test auf einem physischen iPhone oder iPad.
