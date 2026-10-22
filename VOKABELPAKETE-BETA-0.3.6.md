# Vokabelpakete direkt hinzufügen · Beta 0.3.6

Unter **Backup → Vokabelpakete** auf **Chapter 4-6 hinzufügen** oder **Chapter 7-10 hinzufügen** tippen. Die Karten werden direkt lokal gespeichert und sind unter **Lernen** in der gleichnamigen Kategorie verfügbar. Kein Dateidownload und kein zusätzlicher Import nötig.

- Chapter 4-6 enthält 88 Karten; Chapter 7-10 enthält 96 Karten.
- Vorhandene Karten mit gleicher ID oder identischem Wort/Übersetzungen/Kategorie werden übersprungen. Eigene Änderungen, Lernstände und Schwer-Markierungen bleiben erhalten.
- Erneutes Hinzufügen erzeugt keine Duplikate. Andere Kategorien bleiben unabhängig.
- Sobald oben „Offline bereit“ steht, können die Pakete auch ohne Internet hinzugefügt werden.
- Ein Fehler zeigt eine Meldung und lässt einen erneuten Versuch zu.

Diese Anleitung ersetzt für die Paketnutzung die Anleitung zu Beta 0.3.5. Der normale Dateiimport und Backup-Export bleiben verfügbar.

## Update bereitstellen

1. **Hangul-Beta-0.3.6-Komplett.zip** entpacken und **hangul** öffnen.
2. Den gesamten Inhalt inklusive **packs** an die bisherige Stelle der index.html bei GitHub hochladen und vorhandene Dateien ersetzen. Keinen zusätzlichen übergeordneten hangul-Ordner anlegen.
3. **Commit changes** und die erfolgreiche Pages-Bereitstellung abwarten.
4. In der installierten App **Backup → App aktualisieren** wählen. Danach muss **Offline bereit · Beta 0.3.6** stehen.

Keine App oder Website-Daten löschen. Ein regelmäßiges JSON-Backup bleibt sinnvoll. Die Datenbankversion bleibt 7.

## Geprüft

Direktes Hinzufügen beider Pakete, Offline-Neustart und Offline-Hinzufügen, Bereitstellung im Unterverzeichnis, keine Downloads oder Bestätigungsdialoge bei Paketbuttons, keine Duplikate bei erneutem Tippen, bereits manuell importierte identische Karten, Erhalt eigener Übersetzungen/Eselsbrücken/SRS/Schwer-Markierungen und anderer gespeicherter Daten, Lernrundenstart und Bewertung, Fehlerbehandlung und erfolgreicher erneuter Versuch. Mobile Browserprüfung; kein Test auf einem physischen iPhone.
