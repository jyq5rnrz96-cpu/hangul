# Sammlung „Schwer“ · v28

## Benutzung

1. Eine Karte aufdecken. Unter der Lösung steht **★ Für Schwer vormerken**.
2. Auf der Lernstartseite die neue Kachel **Schwer** wählen. Sie startet eine durchgemischte Paukrunde mit allen vorgemerkten Wörtern, unabhängig vom Fälligkeitsdatum. Richtung und Abfrageart lassen sich weiterhin einstellen.
3. Nach dem Aufdecken **✓ Aus Schwer freigeben** drücken, wenn das Wort wieder sitzt. Anschließend wie gewohnt Gewusst/Nicht gewusst wählen oder wischen.

Vormerken und Freigeben verändern weder die ursprüngliche Kategorie noch den Lernstand und zählen nicht als Antwort. Ein Wort aus midterm bleibt also auch in midterm. Im Tippmodus steht die Schaltfläche nach der Auswertung ebenfalls zur Verfügung. Unter Vokabeln gibt es einen Schwer-Filter und eine zusätzliche Markierung.

Eine laufende Runde behält ihre bereits ausgewählte Kartenmenge. Änderungen an Schwer gelten für die nächste Runde; Freigeben bewertet die aktuelle Karte nicht automatisch. Die manuelle Sammlung ist unabhängig von der Tagesmission für zuletzt falsch beantwortete Wörter.

## Update installieren

1. Zur Sicherheit in der bisherigen App ein **JSON-Backup** exportieren.
2. **Hangul-Schwer-v28.zip** vollständig entpacken.
3. Die folgenden **sechs Dateien zusammen** auf GitHub an denselben Ort wie die vorhandene index.html hochladen und **Commit changes** drücken:
   - app.js
   - core.mjs
   - hard.mjs (**neue Datei, unbedingt mit hochladen**)
   - style.css
   - sw.js
   - update.html
4. Warten, bis GitHub Pages die Bereitstellung erfolgreich abgeschlossen hat.
5. In der installierten App **Backup → App aktualisieren** wählen. Danach muss oben **Offline bereit · v28** stehen.

Die übrigen Dateien aus v27 bleiben erforderlich. Keine App-Daten löschen und die App nicht neu installieren. Bei einer unvollständigen Bereitstellung bleibt die bisherige Offline-Version erhalten; nach erfolgreicher Bereitstellung erneut aktualisieren.

## Speicherung und Backup

Die Markierungen werden lokal mit den Vokabeln gespeichert, auch offline. JSON-Backups und neue CSV-Exporte enthalten das Feld hard (true/false). CSV sichert nur die Vokabelfelder; für Lernstand, Garten und Reisebuch weiterhin JSON verwenden. Alte Vokabellisten ohne hard bleiben importierbar. Vokabelpakete mit preserveLearning behalten vorhandene Schwer-Markierungen bei Aktualisierungen anhand derselben ID.

Es gibt keine automatische Synchronisation zwischen iPhone, iPad und PC. Daten regelmäßig sichern. Der Garten, das Reisebuch und bisherige Kategorien werden durch dieses Update nicht zurückgesetzt.

## Prüfung

Mit echten lokalen Browserdaten geprüft: Markieren/Freigeben, ursprüngliche Kategorie, keine zusätzlichen Antworten oder Belohnungen, SRS und Rücknahme, Tippen und Aufdecken, Umdrehen ohne versehentliche Bewertung, jederzeit spielbare Schwer-Runden, JSON/CSV-Felder und Offline-Neustart. Bestehende Lernmodi sowie der Schutz gegen unvollständige Offline-Updates bestanden. Mobile Ansicht visuell geprüft; kein Test auf einem physischen iPhone.
