# Weihnachten · Beta 0.3.8

Die App startet nach dem Update im Weihnachtsdesign. Auch eine gespeicherte Halloween-Einstellung wird ersetzt. Im Backup- und Gartenbereich lässt sich zwischen Weihnachten und dem klassischen Design wechseln; die Auswahl wird lokal gespeichert.

- Dunkles Tannengrün, warme Goldtöne und rote Akzente in Navigation, Startseite, Formularen, Lernkarten, Statistik, Backup und Belohnungen.
- In-App-Logo: die Elster behält ihren koreanischen Gat und bekommt einen roten Schal, eine festliche Hutbinde und einen kleinen weißen Bommel.
- Hanok-Dorf mit Schnee, einem geschmückten Weihnachtsbaum, Geschenken, Schneekappen auf Bäumen und Dächern sowie sanft glimmenden Lichtern.
- Dezenter Schneefall ohne Klickflächen zu verdecken. Bei „Bewegung reduzieren“ wird er statisch angezeigt; Lichtanimationen werden ebenfalls ausgeschaltet.
- Keine Kürbisse oder Halloween-Auswahl in der Oberfläche. Die vorgemerkten schwierigen Wörter heißen wieder „Schwer“ und behalten ihre Markierung.

Das Homescreen-Icon wird durch dieses Update nicht ersetzt. Das neue Logo erscheint innerhalb der App. Es werden keine neuen Dienste, externe Bildquellen oder Online-Abhängigkeiten benötigt.

## Installation

1. **Hangul-Beta-0.3.8-Weihnachten-Komplett.zip** vollständig entpacken und den Ordner **hangul** öffnen.
2. Alle Dateien und den Unterordner **packs** aus diesem Ordner an die bisherige Stelle der index.html im GitHub-Repository hochladen und bestehende Dateien ersetzen. Wichtig sind auch die neuen Dateien **christmas.css** und **winter-bird.svg**. Keinen zusätzlichen übergeordneten hangul-Ordner erzeugen.
3. **Commit changes** anklicken und die erfolgreiche GitHub-Pages-Bereitstellung abwarten.
4. In der installierten App **Backup → App aktualisieren** drücken. Danach steht oben **Offline bereit · Beta 0.3.8**.

App und Website-Daten nicht löschen. Die bisherige Datenbank bleibt erhalten. Ein regelmäßiges JSON-Backup ist weiterhin sinnvoll. Das vollständige Update enthält auch das komplette Paket Chapter 4-6 mit 125 Karten und Chapter 7-10 mit 96 Karten.

## Prüfung

Ein echter Browser-Updateablauf von Beta 0.3.7 auf 0.3.8 mit Service Worker wurde geprüft. Ein bestehendes Testbackup inklusive Vokabeln, Statistik, SRS, Garten, Käufen und Belohnungen blieb über alle Datenspeicher unverändert. Außerdem geprüft: alte Halloween-Voreinstellung, Design auf allen Hauptseiten, klassische Darstellung und gespeicherte Auswahl, Offline-Neustart und Offline-Bewertung einer Lernkarte, reduzierte Bewegung, mobile Ansicht mit 390 Pixeln und Tabletansicht mit 1024 Pixeln ohne horizontales Scrollen. Vorschauen visuell kontrolliert. Keine Browser-Laufzeitfehler. Kein Test auf einem physischen iPhone/iPad.
