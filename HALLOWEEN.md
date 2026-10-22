# Halloween und der Vogel mit Gat · v29

Ein eigenes Elster-Maskottchen mit dunkelblauem Gefieder, hellen Augen und schiefem koreanischem Gat begleitet dich jetzt im Kopfbereich der App und im Garten. Es ist eine eigene Zeichnung, kein übernommenes Film-Bild.

## Was neu ist

- Halloween-Design mit violetten Akzenten und warmen Orangetönen.
- Nächtlicher Garten mit Mond, Laternen, Kürbissen, dezentem Nebel und dem Vogel auf seinem Laternenplatz.
- Kleine Hüpfanimation beim erfolgreichen Ernten.
- Orange-violettes Konfetti bei richtigen Antworten.
- Im **Garten** und unter **Backup** steht der Umschalter **Halloween an / Halloween aus**. Die Einstellung bleibt auf diesem Gerät gespeichert. Das normale Design bleibt verfügbar; das Vogel-Maskottchen begleitet dich auch dort.

Beim ersten Start ist Halloween aktiviert. Das Design endet nicht automatisch am 31. Oktober. Bei aktivierter Systemeinstellung „Bewegung reduzieren“ entfallen Nebelbewegung und Hüpfanimation; Konfetti war bereits entsprechend abgeschaltet.

Der Kopfbereich innerhalb der App bekommt das neue Maskottchen. Das vorhandene Home-Bildschirm-Symbol bleibt gleich.

## Update von v28

1. Zur Sicherheit ein **JSON-Backup** in der bisherigen App speichern.
2. **Hangul-Halloween-v29.zip** entpacken.
3. **Alle acht Dateien** zusammen bei GitHub an derselben Stelle wie die vorhandene index.html hochladen:
   - app.js
   - style.css
   - garden.mjs
   - season.mjs (**neu**)
   - gat-bird.svg (**neu**)
   - halloween-garden.svg (**neu**)
   - sw.js
   - update.html
4. **Commit changes** klicken und auf die erfolgreiche GitHub-Pages-Bereitstellung warten.
5. In der installierten App **Backup → App aktualisieren** drücken. Anschließend muss oben **Offline bereit · v29** stehen.

Die weiteren Dateien aus v28 bleiben erforderlich, insbesondere hard.mjs. Wenn deine App noch eine ältere Version hat, verwende stattdessen den gesamten Ordner hangul aus **Hangul-iPhone-PWA.zip**.

Alle Zeichnungen werden zusammen mit der App offline gespeichert. Es gibt keine zusätzlichen Downloads von fremden Diensten. Pflanzen, Wachstum, Ernten, Münzen, gekaufte Bauten, Vokabeln, Schwer-Markierungen, Wiederholungsplan, Statistik und Reisebuch werden durch dieses reine Design-Update nicht zurückgesetzt. Die Datenbankversion bleibt 6. Die Designwahl liegt separat lokal und gehört nicht zum Lernstand-Backup.

## Prüfung

Im echten mobilen Browser und mit Tablet-Breite kontrolliert: Designwechsel im Garten und unter Backup, gespeicherte Auswahl nach Neustart, unveränderte Daten beim Umschalten, vorhandene Bauten und Münzen, Ernten, Lernkarte und Schwer-Schaltfläche. Zeichnungen, Design und Daten sind nach einem Offline-Neustart verfügbar. Breiten von 320, 390 und 1024 Pixeln kontrolliert. Service Worker verwirft unvollständige Updates und prüft die neuen Zeichnungen und Module vor Aktivierung. Kein Test auf einem physischen iPhone oder iPad.
