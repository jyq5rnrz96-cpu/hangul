# Animiertes Kürbislogo · v31

Im Halloween-Design sitzt der Vogel mit Gat jetzt auf einem geschnitzten, leuchtenden Kürbis. Der Vogel blinzelt und wippt gelegentlich leicht; das Kerzenlicht pulsiert sanft. Bei der Systemeinstellung „Bewegung reduzieren“ sind diese Bewegungen ausgeschaltet.

Über **Garten → Halloween an/aus** oder den Umschalter unter **Backup** kannst du weiterhin wechseln. Im normalen Design erscheint der Vogel ohne Kürbis, ebenfalls mit dezentem Blinzeln und Wippen. Die Auswahl bleibt auf diesem Gerät gespeichert. Die Zeichnungen und Animationen funktionieren vollständig offline.

Das Update betrifft das Logo innerhalb der App. Das Home-Bildschirm-Symbol bleibt unverändert; die App muss nicht entfernt oder neu installiert werden. Der Garten, Vokabeln, Lernstände, Münzen und das Reisebuch bleiben erhalten.

## Update von v30

1. Zur Sicherheit ein **JSON-Backup** exportieren.
2. **Hangul-Kuerbislogo-v31.zip** entpacken.
3. **Alle sieben Dateien** zusammen bei GitHub an der bisherigen Stelle hochladen:
   - app.js
   - style.css
   - season.mjs
   - gat-bird.svg
   - gat-pumpkin.svg (**neu**)
   - sw.js
   - update.html
4. **Commit changes** klicken und die erfolgreiche Pages-Bereitstellung abwarten.
5. In der installierten App **Backup → App aktualisieren** drücken. Oben muss anschließend **Offline bereit · v31** stehen.

Die übrigen Dateien aus v30 bleiben erforderlich. Das vollständige Projekt ist weiterhin als **Hangul-iPhone-PWA.zip** verfügbar.

## Prüfung

Kleine mobile Logo-Anzeige und größere Zeichnung visuell kontrolliert. Tatsächlich gerenderte Animationsphasen für das Blinzeln geprüft, ebenso Wippen und das Abschalten bei reduzierter Bewegung. Umschalten zwischen Kürbislogo und normalem Vogel, gespeicherte Auswahl, Offline-Neustart und Breiten von 320/390/1024 Pixeln bestanden. Der Offline-Updater prüft die geänderten Logo-Dateien vor Aktivierung und behält bei unvollständigen Uploads die vorherige Version. Kein Test auf einem physischen iPhone/iPad.
