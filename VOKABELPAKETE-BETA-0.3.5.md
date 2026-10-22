# Vokabelpakete · Beta 0.3.5

Im Bereich **Backup → Vokabelpakete** sind zwei Pakete herunterladbar:

- **Chapter 4-6:** 88 Karten aus dem gewünschten Abschnitt ab Nr. 38.
- **Chapter 7-10:** 96 Karten aus der gesamten Liste.

Beide enthalten Koreanisch, Englisch/Deutsch, Umschrift, Aussprachehinweise und Eselsbrücken. Nach dem Download die Datei auf dem Gerät speichern und unter **Backup importieren** auswählen. Der Download allein fügt noch keine Wörter hinzu. Die Pakete verwenden die Kategorien „Chapter 4-6“ und „Chapter 7-10“.

Nach der vollständigen Offline-Einrichtung sind die beiden Paketdateien auch ohne Internet verfügbar. Ein erneuter Import desselben Pakets erhält den Lernstand bereits vorhandener, unveränderter Wörter und deren Schwer-Markierung. Die Datenbank bleibt bei Version 7; Statistik, Garten und Belohnungen bleiben erhalten.

## Auf GitHub bereitstellen

1. In der bisherigen installierten App bei Bedarf ein JSON-Backup exportieren.
2. **Hangul-Beta-0.3.5-Komplett.zip** vollständig entpacken und den Ordner **hangul** öffnen.
3. **Alle Dateien und den Unterordner packs aus hangul** an die bisherige Stelle der index.html im GitHub-Repository hochladen und vorhandene Dateien ersetzen. Der Unterordner packs muss neben app.js liegen. Keinen zusätzlichen übergeordneten hangul-Ordner erzeugen.
4. **Commit changes** anklicken und die erfolgreiche GitHub-Pages-Bereitstellung abwarten.
5. In der installierten App **Backup → App aktualisieren** wählen. Danach steht oben **Offline bereit · Beta 0.3.5**.

App und Website-Daten nicht löschen. Das ZIP ist vollständig und enthält auch die bisherigen Funktionen. Mit dieser Bereitstellung werden die beiden Paketdateien wie die App öffentlich über GitHub Pages erreichbar.

## Prüfung

Im mobilen Browser geprüft: Bereitstellung in einem Unterverzeichnis wie bei GitHub Pages, Aktualisierungsseite, vollständige Offline-Einrichtung, Offline-Neustart, beide Downloads bytegleich mit den Originalpaketen, Import aller 184 Karten, Start einer 96-Karten-Lernrunde, Aufdecken und Bewerten, unveränderte Daten beim bloßen Herunterladen und Erhalt sämtlicher Test-Lernstände beim erneuten Import. Fehler beim Download zeigen eine verständliche Meldung und erlauben einen erneuten Versuch. Mobile Darstellung ohne horizontales Scrollen visuell geprüft. Kein Test auf einem physischen iPhone.
