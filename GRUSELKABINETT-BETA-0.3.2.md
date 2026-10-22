# Gruselkabinett · Beta 0.3.2

Bei eingeschaltetem Halloween-Design bekommt deine Sammlung Schwer neue Namen:

- Kategorie **👻 Gruselkabinett**
- Nach dem Aufdecken **👻 Ins Gruselkabinett**
- Bereits vorgemerktes Wort **✨ Spuk beenden**

Das gilt für die Lernstartseite, Kategorieauswahl, Vokabelmarkierungen, Auswertung und Hinweise. Schaltest du Halloween unter Garten oder Backup aus, stehen dort wieder Schwer, Für Schwer vormerken und Aus Schwer freigeben.

Es ist weiterhin dieselbe Sammlung. Wörter und Lernstände werden weder kopiert noch verschoben. Die ursprüngliche Kategorie, Schwer-Markierung, Backups und bisherigen Lernfunktionen bleiben erhalten. Spuk beenden entfernt nur die Markierung; die Karte wird dadurch nicht automatisch als gewusst bewertet.

## Update von Beta 0.3.1

1. **Hangul-Beta-0.3.2-Gruselkabinett.zip** entpacken.
2. **Alle fünf Dateien** bei GitHub an derselben Stelle wie die vorhandene index.html hochladen:
   - app.js
   - hard.mjs
   - season.mjs
   - sw.js
   - update.html
3. **Commit changes** klicken und die erfolgreiche Pages-Bereitstellung abwarten.
4. In der installierten App **Backup → App aktualisieren** drücken. Danach steht oben **Offline bereit · Beta 0.3.2**.

Alle übrigen Dateien aus Beta 0.3.1 bleiben erforderlich. Keine Neuinstallation oder Datenlöschung nötig. Ein vollständiges Projektpaket gibt es weiterhin als **Hangul-iPhone-PWA.zip**.

## Prüfung

Im mobilen Browser geprüft: Vormerken/Freigeben mit neuen Texten, ursprüngliche Kategorie und SRS bleiben erhalten, Rücknahme, Karteikarten und Tippen, gleiche Wörter im normalen Schwer-Design, unveränderte lokale Daten beim Themenwechsel, Vokabelmarkierungen, JSON/CSV und Offline-Neustart. Offline-Updater prüft beide geänderten Module vor Aktivierung. Kein physischer iPhone-Test.
