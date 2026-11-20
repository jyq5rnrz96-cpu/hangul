# Chapter 4-6 vollständig · Beta 0.3.7

Das Paket enthält jetzt die gesamte Liste, Nummern 1 bis 126. Die identischen Einträge 46 und 63 (점심) bleiben eine gemeinsame Karte: insgesamt **125 Karten**. Alle 37 neuen Karten enthalten Englisch/Deutsch, Umschrift, Aussprachehinweise und eigene Eselsbrücken. Bei 쓰다 ist in diesem Paket „schreiben“ gemeint, im Paket Chapter 7-10 hingegen „bitter sein“.

## Update und Ergänzen

1. **Hangul-Beta-0.3.7-Komplett.zip** entpacken und **hangul** öffnen.
2. Den gesamten Inhalt inklusive Unterordner **packs** an die bisherige Stelle der index.html im GitHub-Repository hochladen und vorhandene Dateien ersetzen. Keinen zusätzlichen übergeordneten hangul-Ordner anlegen.
3. **Commit changes** und die erfolgreiche Pages-Bereitstellung abwarten.
4. In der installierten App **Backup → App aktualisieren** wählen. Oben steht danach **Offline bereit · Beta 0.3.7**.
5. Unter **Backup → Vokabelpakete** erneut **Chapter 4-6 hinzufügen** drücken. Bei bisher 88 Karten werden die 37 fehlenden ergänzt. Anschließend unter Lernen die Kategorie Chapter 4-6 auswählen.

Vorhandene Karten, eigene Änderungen, Schwer-Markierungen und Lernstände werden beim direkten Hinzufügen nicht überschrieben. Andere Kategorien bleiben eigenständig. Nach der Offline-Einrichtung funktioniert das Hinzufügen auch ohne Internet. Website-Daten und App nicht löschen; regelmäßige JSON-Backups bleiben sinnvoll.

Alternativ kann die aktualisierte Datei **Chapter-4-6.json** ohne App-Update über den vorhandenen Dateiimport eingelesen werden. Bei unveränderten Karten bleiben durch die stabilen IDs die Lernstände erhalten. Wer eigene Übersetzungen geändert hat, sollte das direkte Hinzufügen verwenden: Es überspringt bestehende IDs vollständig.

## Prüfung

125 gültige Karten und vollständiger Quellnummernbereich außer dem zusammengefassten Duplikat geprüft. Alle ursprünglichen 88 Karten behalten exakt ihre Inhalte und IDs. Im mobilen Testbrowser mit einem bestehenden 88-Karten-Paket samt eigenem Merkbild, Schwer-Markierung und SRS geprüft: genau 37 Karten ergänzt, bestehende Karten und alle anderen Datenspeicher unverändert, wiederholtes Hinzufügen ohne Duplikate, Offline-Neustart und Offline-Hinzufügen, Aktualisierungsseite, komplette 125-Karten-Lernrunde, Aufdecken und Bewerten sowie frische Installation mit allen 125 Karten. Kein Test auf einem physischen iPhone.
