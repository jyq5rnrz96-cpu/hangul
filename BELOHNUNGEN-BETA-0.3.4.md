# Belohnungen · Beta 0.3.4

## Jetzt tatsächlich eingebaut

### Kleine Erfolge während des Lernens

- **5, 10, 15 … richtige Antworten in Folge:** Erfolgsbanner und ein hüpfender Vogel. Die Serie gilt innerhalb der aktuellen Lernrunde. Eine falsche Antwort setzt den Serien-Zähler auf null; deine übrigen Fortschritte bleiben bestehen.
- **5-Karten-Etappen:** Nach jeweils fünf beantworteten Karten erscheint ein kleiner Erfolgsmoment – unabhängig davon, wie viele richtig waren. Oberhalb der Karte steht, wie viele Karten bis zur nächsten Etappe oder zum Rundenende fehlen.
- **Comeback:** Wenn die letzte vorherige Bewertung desselben Worts in derselben Abfragerichtung falsch war, erscheint bei einer richtigen Antwort **„Diesmal geschafft!“**. Das funktioniert beim Tippen und beim Aufdecken. Im Aufdecken-Modus zählt weiterhin deine Selbsteinschätzung.
- **Geist vertreiben:** Nach **Spuk beenden** fliegt ein kleiner Geist aus der Karte. Im normalen Design erscheint ein Glitzereffekt. Das Freigeben bewertet das Wort nicht automatisch und vergibt keine Lernschritte oder Münzen.

Die Effekte blockieren keine Knöpfe und bleiben beim Wechsel zur nächsten Karte kurz sichtbar. Die Rücknahme einer Antwort entfernt den aktuellen Erfolgseffekt und stellt den vorherigen Serien-/Etappenstand wieder her. Home beendet die aktuelle Runde und damit deren Serie. Bei „Bewegung reduzieren“ bleiben die Hinweise sichtbar, die Bewegungen sind ausgeschaltet.

## Deine Belohnungssammlung

Auf der Lernstartseite und im Garten gibt es **🎁 Deine Belohnungen**. Du sammelst dort **Lernschritte**: Jedes unterschiedliche koreanische Wort zählt einmal pro Gerätetag, über Kategorien und Abfragerichtungen hinweg. Auch falsche Antworten zählen. Mehrfaches Wiederholen desselben Worts am selben Tag erzeugt keine zusätzlichen Schritte.

| Belohnung | Ziel | Sichtbar im Dorf |
|---|---:|---|
| Lotuslaterne | 25 Lernschritte | Eine zusätzliche Lotuslaterne |
| Jadedächer | 75 Lernschritte | Jadefarbene Dächer vorhandener Gebäude |
| Goldener Gat | 150 Lernschritte | Goldener Hut des Vogels auf der Karte |
| Teehäuschen | 5 Lerntage | Zusätzliches kleines Teehäuschen |

Erreichte Belohnungen werden mit **Freischalten** einmalig abgeholt und sofort im Dorf angezeigt. Danach lassen sie sich mit **ausblenden / im Dorf anzeigen** umschalten. Sie kosten keine Gartenmünzen. Freigeschaltete Stücke bleiben dir erhalten, auch bei Pausen.

Die Belohnungssammlung beginnt beim ersten Start dieses Updates. Alte Lernhistorie wird nicht rückwirkend angerechnet. Deine bisherigen Gartenwerte und Lernstände werden übernommen.

## Wochenprojekt ohne Zeitdruck

Für das Teehäuschen übst du an **fünf verschiedenen Tagen** jeweils mindestens **fünf verschiedene koreanische Wörter**. Bei einer anfangs kleineren Sammlung wird die Tagesanzahl an Wörtern entsprechend kleiner gewählt. Die Anzeige erklärt dein konkretes Ziel.

Das Projekt orientiert sich an einer Lernwoche, hat aber kein Ablaufdatum: Eine Pause setzt keine gefüllten Tagesfelder zurück. Du kannst dafür länger als eine Woche brauchen.

## Sicher installieren – auch wenn dir Zwischenupdates fehlen

1. In der bisherigen installierten App ein **JSON-Backup** exportieren.
2. **Hangul-Beta-0.3.4-Komplett.zip** vollständig entpacken.
3. Den Ordner **hangul** öffnen und **alle Dateien daraus** an die bisherige Stelle deiner index.html bei GitHub hochladen. Keinen zusätzlichen Unterordner anlegen.
4. **Commit changes** klicken und die erfolgreiche Pages-Bereitstellung abwarten.
5. In der installierten App **Backup → App aktualisieren** drücken. Oben muss danach **Offline bereit · Beta 0.3.4** stehen.

Keine App löschen und keine Website-Daten leeren. Der neue Stand kann die bisherige Datenbank übernehmen. Das vollständige Paket enthält auch die vorherigen Beta-Updates.

Wenn du sicher bereits Beta 0.3.3 vollständig installiert hast, genügt **Hangul-Beta-0.3.4-Belohnungen.zip** mit diesen acht Dateien: app.js, style.css, courtyard.mjs, farm-view.mjs, rewards.mjs (neu), reward-view.mjs (neu), sw.js und update.html. Alle acht zusammen hochladen.

## Daten und Backup

Die neue Sammlung, Freischaltungen und die Auswahl der Deko werden lokal gespeichert und sind Bestandteil des **JSON-Backups**. CSV enthält weiterhin nur Vokabeln. Ein JSON-Backup mit Belohnungssammlung ersetzt beim Import deren Stand; Vokabelpakete und ältere Backups ohne diesen Bereich behalten die vorhandene Sammlung.

Die Datenbank wird von Version 6 auf 7 erweitert. Wörter, SRS, Statistik, Gartenmünzen, Ernten, gekaufte Bauten und Reisebuch bleiben erhalten. Eine beliebige alte App-Version kann die erweiterte Datenbank möglicherweise nicht mehr öffnen; zum Wiederherstellen das aktuelle vollständige Paket und dein JSON-Backup verwenden. Keine automatische Synchronisation zwischen Geräten.

## Prüfung

Mit echten Browserdaten geprüft: Migration eines vorhandenen v6-Lernstands inklusive Garten, fünf richtige Antworten mit sichtbarem Effekt, Etappenzähler, falsche Antwort unterbricht die Serie, Rücknahme, Comeback beim Tippen, Ghost-Effekt nach Freigeben ohne zusätzliche Bewertung, reduzierte Bewegung, 150 Lernschritte und fünf Lerntage aus einem Testbackup, einmalige Freischaltungen, Darstellung und Umschalten der Deko auf der Karte, unveränderte Münzen, Export und Wiederherstellung auf einer frischen Installation, ältere Vokabelpakete und Offline-Neustart. Home-Navigation und abgesicherte Offline-Aktualisierung bestanden. Mobile Vorschauen visuell geprüft. Kein Test auf einem physischen iPhone/iPad.
