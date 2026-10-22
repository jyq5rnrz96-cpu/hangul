# Home-Navigation · Beta 0.3.3

**Lernen** in der unteren Navigation führt jetzt immer zur Lernstartseite – auch aus einer laufenden Runde oder dem Rundenergebnis. Ebenso kannst du oben auf das Logo drücken.

Die aktuelle Runde wird verlassen. Bereits gespeicherte Antworten, Wiederholungsstände, Statistik, Wachstum und abgeschlossene Rundenergebnisse bleiben erhalten. Eine noch nicht bewertete Karte wird nicht automatisch bewertet. Nicht abgesendete Texteingaben werden verworfen. Eine vorzeitig verlassene Runde zählt nicht als vollständig abgeschlossene Runde. Die bisherigen Einstellungen für Kategorie, Richtung und Abfrageart bleiben für die nächste Runde erhalten.

Während gerade gespeichert oder eine Wischbewertung abgeschlossen wird, wartet die Navigation wie bisher auf diesen Vorgang. Danach kannst du Home erneut drücken.

## Update von Beta 0.3.2

1. **Hangul-Beta-0.3.3-Home.zip** entpacken.
2. Diese **drei Dateien** bei GitHub an der bisherigen Stelle hochladen: **app.js**, **sw.js**, **update.html**.
3. **Commit changes** klicken und die erfolgreiche Pages-Bereitstellung abwarten.
4. In der installierten App **Backup → App aktualisieren** drücken. Danach steht oben **Offline bereit · Beta 0.3.3**.

Alle anderen Dateien aus Beta 0.3.2 bleiben erforderlich. Keine Neuinstallation oder Datenlöschung nötig. Das vollständige Projekt bleibt als **Hangul-iPhone-PWA.zip** verfügbar.

## Prüfung

Mit echten Browserdaten geprüft: Home aus unbeantworteter/aufgedeckter Karte, nach bereits gespeicherter Bewertung, aus einer nicht abgesendeten Texteingabe, aus einem vollständigen Ergebnis und nach Wechsel zu einem anderen Tab. Logo als Home-Link, Startseite am Seitenanfang, unveränderte gespeicherte Lern-/Gartendaten, keine erfundenen Bewertungen oder Runden und Offline-Neustart bestanden. Offline-Updater mit alter und unvollständiger Bereitstellung geprüft. Kein physischer iPhone-Test.

Die vorgeschlagenen zusätzlichen Belohnungsanimationen sind Ideen für ein späteres Update.
