# Hangul – dein Offline-Vokabeltrainer

## Kompakte Swipe-Karteikarten · Version 17

Im Karteikartenmodus deckt Antippen der Karte die Lösung direkt an Stelle der Frage auf. Rechts wischen bedeutet Gewusst, links wischen Nicht gewusst; die Karte wird mit zunehmendem Wischweg grüner beziehungsweise roter. Erst ein deutlicher horizontaler Wisch nach dem Aufdecken zählt. Kleine Bewegungen springen zurück, senkrechtes Scrollen wird nicht bewertet. Buttons und Tastaturbedienung bleiben als Alternativen. Der obere Bereich ist kompakter, Merkhilfen stehen unter der Karte. Alle bisherigen Modi, Noten, Tagesstatistiken und Imports bleiben erhalten.

## Eigene Kategorien vollständig importieren · Version 16

Identische Vokabeln werden beim Import nur innerhalb derselben Kategorie übersprungen. Ein Wort aus quiz#1 kann dadurch zusätzlich in midterm angelegt werden. Bestehende IDs behalten die bisherige Backup-/Aktualisierungssemantik. Die midterm-Datei verwendet eigene stabile IDs; quiz#1 bleibt erhalten. Wiederholter Paketimport erhält bei unveränderten Wörtern die eigenen midterm-Lernstände. Alle bisherigen Lernmodi und die Tagesstatistik bleiben erhalten.

## Klar gegliederte Frageseite · Version 15

Auf der übersetzten Frageseite steht Englisch groß und Deutsch kleiner darunter. Kleine Sprachlabels und eine Trennlinie ersetzen die große zusammenhängende EN/DE-Zeile. Zunächst erscheint die erste Bedeutung jeder Sprache; weitere Alternativen bleiben nach der Antwort unter Details sichtbar. Rein deutsche Karten verwenden Deutsch als Hauptsprache. Die Richtungsanzeige ist verkürzt. Alle Antwortprüfungen und Lernstände bleiben erhalten.

## Erreichbare Bewertung und Tagesstatistik · Version 14

Beim Aufdecken bleiben die Bewertungsbuttons fest über der Navigation: Nicht gewusst links, Gewusst rechts. Auch die Aufdecken-Schaltfläche ist ohne Scrollen erreichbar. Unter Fortschritt gibt es jetzt Tagesstatistiken mit Datumswahl, Vor-/Zurück-/Heute, Antworten, richtigen/falschen Bewertungen, Trefferquote, verschiedenen Vokabeln, Richtungen und Kategorien sowie einer Liste aller Lerntage. Die vorhandene Lernhistorie wird verwendet; kein erneuter Import nötig. Tagesgrenzen folgen der lokalen Gerätezeitzone. Alle Daten bleiben offline und sind Bestandteil des JSON-Backups.

## Zufällige Richtung und Karteikarten · Version 13

Unter Lernen → Richtung gibt es nun **🎲 Zufällige Richtung · beide gemischt**. Pro Karte wird eine konkrete Richtung gewählt und bis zur Bewertung beibehalten. In Spaced Repetition werden nur fällige Richtungen gewählt. Statistik und Wiederholungsplan werden für die tatsächlich abgefragte Richtung gespeichert.

Unter Lernen → Abfrageart gibt es **Karteikarten · aufdecken und bewerten** zusätzlich zum Tippen. Lösung aufdecken zeigt Antwort, Umschrift und optionale Merkhilfe, ohne bereits zu werten. Gewusst / Nicht gewusst zählt deine Selbsteinschätzung und führt direkt zur nächsten Karte. Die Tastatur bleibt geschlossen. Karteikarten lassen sich mit Zufallsrichtung und Paukmodus kombinieren. Das Rundenresultat zeigt Prozent und Trainingsnote und kennzeichnet die Selbsteinschätzung. Fehlerwiederholungen und komplette neue Paukrunden behalten die gewählten Einstellungen.

## Pauken ohne Wartezeit · Version 12

Unter Lernen → Modus → Pauken kannst du eine ausgewählte Kategorie jederzeit vollständig abfragen. Die Karten werden für jede Runde neu gemischt und zählen jeweils einmal. Am Ende erscheinen Trefferquote und eine deutsche Trainingsnote von 1 bis 6 mit offen sichtbarem Notenschlüssel. Sofort möglich: ganze Kategorie erneut oder nur die falschen Wörter der letzten Runde. Vorzeitig beendete Runden zeigen einen klar gekennzeichneten Zwischenstand. Paukrunden werden in der Statistik gezählt, lassen den bestehenden Wiederholungsplan jedoch unverändert. Der Modus Spaced Repetition fragt weiterhin nur fällige Karten ab und plant neue Wiederholungen. Version 12 umfasst auch die Aussprache-/Eselsbrücken-Erweiterung aus Version 11.

## Importierte Merkhilfen und Aussprache · Version 11

Karten können eigene Eselsbrücken (`mnemonic`) und Aussprachehinweise (`pronunciation`) enthalten. Beide Felder sind im Vokabeleditor bearbeitbar und bleiben bei JSON-/CSV-Export erhalten. Eine importierte Merkhilfe wird nach Fehlern eingeklappt angezeigt; bekannte Alltagswörter haben weiterhin ihre eingebauten Merkhilfen. Die Umschrift steht nach jeder Antwort direkt unter der richtigen Lösung. Ergänzende Aussprachehinweise stehen unter Details. Vor der Antwort wird die Umschrift nicht eingeblendet, damit sie die Rückrichtung nicht verrät.

Das aktualisierte quiz#1-Paket enthält dieselben 115 Karten-IDs und Bedeutungen wie die erste Datei. Es ergänzt Umschriften und Eselsbrücken. Als Vokabelpaket gekennzeichnete JSON-Dateien mit `preserveLearning:true` behalten bei gleichen IDs, koreanischen Wörtern und Übersetzungen den vorhandenen Lernstand und das ursprüngliche Erstellungsdatum. Normale JSON-Backups stellen weiterhin ihre mitgelieferten Lernstände wieder her. Erst auf v11 aktualisieren, dann das neue Paket importieren; ältere Versionen können die zusätzlichen Felder nicht speichern.

## 100 Eselsbrücken · Version 10

Nach einer falschen Antwort lässt sich „💡 Eselsbrücke anzeigen“ unterhalb der großen richtigen Lösung aufklappen. Die 100 Wörter der Alltagsliste haben jeweils eine handgeschriebene Merkhilfe, teilweise mit echten Wortbausteinen. Die Klangbilder sind Näherungen und ersetzen keine Aussprachevorlage. Sie sind fest in der App enthalten, funktionieren offline und erscheinen auch bei bereits importierten Karten. Ein erneuter Import ist nicht nötig. Bei unbekannten Wörtern oder einer anderen Bedeutung desselben Wortes wird keine unpassende Merkhilfe angezeigt. Bei richtigen Antworten bleiben Emoji und Konfetti. Im Offline-Status steht v10.

## Übersichtliche Auswertung

Die richtige Antwort wird groß und getrennt für Englisch und Deutsch angezeigt. Weitere Alternativen, Umschrift, Beispielsatz und Wiederholungszeit liegen unter Details. Die Diss-Sprüche sind entfernt. Konfetti und Emojis bei richtigen Antworten bleiben erhalten.

## Emojis nach richtigen Antworten

Die 100 Alltagswörter haben eine lokale Emoji-Zuordnung, z. B. 집 → 🏠 und 물 → 💧. Das Emoji erscheint erst nach einer richtigen Antwort mit kurzem Aufpoppen. Bei aktivierter Einstellung „Bewegung reduzieren“ entfällt die Animation. Bestehende Karten benötigen keinen erneuten Import. Eigene Emojis lassen sich unter Vokabeln → Bearbeiten im optionalen Emoji-Feld eintragen; ein leeres Feld verwendet die automatische Zuordnung, sofern vorhanden. Änderungen nur am Emoji erhalten die Lernstände. JSON und CSV sichern eigene Emojis; alte Backups ohne Emoji-Feld bleiben lesbar. Die CSV unterstützt zusätzlich die optionale Spalte emoji. Alles funktioniert offline und ohne Bilddownloads.

## Englisch und Deutsch gelten beide

Wenn das koreanische Wort erscheint, wird deine Antwort gegen alle hinterlegten englischen und deutschen Bedeutungen geprüft. Beispiel: 친구 akzeptiert friend, Freund und Freundin. Du musst nur eine der Bedeutungen eingeben. Es gibt zwei Richtungen: Koreanisch → Englisch / Deutsch und Englisch / Deutsch → Koreanisch. In der Rückrichtung werden die hinterlegten Bedeutungen angezeigt und das koreanische Wort erwartet.

Unter Vokabeln → Bearbeiten kannst du Englisch, Deutsch oder beides eintragen. Mehrere Alternativen innerhalb einer Sprache mit Semikolon trennen. Es wird keine beliebige Übersetzung automatisch erkannt; akzeptiert werden die gespeicherten Bedeutungen. Die 12 Starterwörter enthalten beide Sprachen. Bestehende unveränderte Starterwörter werden ergänzt; eigene Bedeutungen bleiben erhalten. JSON Version 3 und CSV mit ko,en,de,roman,example,category sichern beide Sprachen. Ältere deutsche und englische Backups bleiben importierbar.

Für die Windows-Vorschau: ZIP mit „Alle extrahieren“ vollständig entpacken und im Ordner hangul auf Hangul-starten.cmd doppelklicken. Alte Vorschaufenster vorher schließen. Der Browser öffnet zuerst eine Aktualisierungsseite, die die aktuelle Version prüft und den App-Cache erneuert. Gespeicherte Vokabeln in IndexedDB werden nicht gelöscht. Weiterhin dieselbe Adresse 127.0.0.1:4188 nutzen; andere Ports oder localhost können einen eigenen Datenbestand haben. Das schwarze Vorschaufenster offen lassen.

## Direkt ausprobieren

Die App braucht keine Installation von Bibliotheken, kein Konto und keinen Build. Alle Dateien im App-Ordner gehören zusammen. Nicht per Doppelklick als file:// öffnen: Service Worker benötigen HTTPS oder localhost.

Für eine lokale Computervorschau mit installiertem Node.js: im Projektordner `node preview.mjs` starten und http://localhost:4173 öffnen. Diese Adresse funktioniert nur auf diesem Computer und ist keine öffentliche iPhone-Adresse.

## Kostenlos auf GitHub Pages bereitstellen

1. Kostenloses GitHub-Konto anlegen/anmelden.
2. Neues **öffentliches** Repository erstellen, beispielsweise `hangul`. GitHub Free unterstützt Pages für öffentliche Repositories.
3. ZIP entpacken. Den Inhalt des Ordners `hangul` über **Add file → Upload files** direkt ins Repository hochladen. `index.html`, `app.js`, `core.mjs`, `style.css`, `sw.js`, `manifest.webmanifest`, `icon.svg`, `icon-192.png`, `icon-512.png` und `.nojekyll` müssen an der Wurzel liegen. Persönliche Backups gehören NICHT ins öffentliche Repository. Anleitung, Vorschau und Prüfbericht kannst du weglassen.
4. **Settings → Pages → Build and deployment → Source: Deploy from a branch** wählen. Branch **main**, Ordner **/(root)**, **Save**.
5. Auf die erfolgreiche Bereitstellung warten (gegebenenfalls bis zu 10 Minuten). Die tatsächlich veröffentlichte HTTPS-Adresse steht anschließend in **Settings → Pages → Visit site**. Diese Adresse verwenden; es gibt hier keine bereits veröffentlichte Adresse und keinen QR-Code.

Quelle: https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site

## Auf dem iPhone installieren

1. Die tatsächlich bereitgestellte HTTPS-Adresse in **Safari** öffnen, außerhalb des privaten Modus.
2. Auf **Teilen** tippen und **Zum Home-Bildschirm** wählen. Falls die Aktion fehlt: Aktionen bearbeiten. Wenn angeboten, **Als Web-App öffnen** aktivieren. Namen „Hangul“ lassen und **Hinzufügen** tippen.
3. **Hangul über sein neues Home-Bildschirm-Symbol starten**, während Internet verfügbar ist. Warten, bis oben **Offline bereit** erscheint. Diese Anzeige bedeutet, dass alle notwendigen App-Dateien zwischengespeichert sind und der Service Worker die App kontrolliert.
4. **Beispielwörter hinzufügen** wählen oder unter **Vokabeln** eigene Wörter eingeben. Für koreanische Antworten in iOS **Einstellungen → Allgemein → Tastatur → Tastaturen → Tastatur hinzufügen → Koreanisch** hinzufügen.
5. Flugmodus aktivieren, die App schließen und über das Home-Bildschirm-Symbol erneut öffnen. Lernen, Bearbeiten und Backup funktionieren ohne Internet. Erst dieser Test bestätigt den Offline-Betrieb auf deinem iPhone.

Apple-Anleitung: https://support.apple.com/en-lamr/guide/iphone/iphea86e5236/ios

## Lernen und Daten

- Beide Richtungen haben eigene Fälligkeiten. Richtige Antworten: nach 1, 3, 6, 12, 24 … maximal 180 Tagen erneut. Falsche Antworten: nach 10 Minuten. Die laufende Runde fragt jedes zum Start fällige Wort einmal ab.
- Mehrere zulässige Übersetzungen mit Semikolon trennen. Groß-/Kleinschreibung, Unicode-Normalisierung, überzählige Leerzeichen und abschließende Satzzeichen werden toleriert. Es gibt keine KI, keine unscharfe Bedeutungsprüfung und keinen externen Dienst. Koreanische Leerzeichen sind relevant.
- Kategorie ändern: Vokabel bearbeiten und neuen Kategorienamen eingeben. Kategorien entstehen aus den vorhandenen Vokabeln. Suche durchsucht auch Umschrift und Beispielsatz.
- Änderungen an Koreanisch/Englisch/Deutsch setzen beide Lernstände der Vokabel zurück. Statistik bleibt als bisherige Übungshistorie erhalten. Löschen entfernt Vokabel und zugehörige Historie.
- JSON sichert die gesamte Sammlung einschließlich Lernständen und Historie. Unter **Backup → JSON exportieren** in „Dateien“ speichern; CSV enthält nur Vokabeltexte. Backups regelmäßig sichern und auf einem anderen Gerät importieren.
- Import ergänzt vorhandene Daten. Gleiche IDs im JSON aktualisieren Vokabeln; identische Wortpaare mit anderen IDs werden übersprungen. Statistik wird nach ID zusammengeführt. Import ist atomar: Fehler lassen vorhandene Daten unverändert. Vor einer Wiederherstellung eigener älterer Lernstände zuerst ein aktuelles Backup exportieren.
- CSV ist UTF-8, Kopfzeile `ko,en,de,roman,example,category`. Komma oder Semikolon als Spaltentrenner, Anführungszeichen für enthaltene Trennzeichen und Zeilenumbrüche. CSV importiert keine Lernstände. JSON akzeptiert auch eine Liste von Objekten mit den Textfeldern.

## Grenzen rein lokaler Daten

IndexedDB speichert Wörter und Lernstatistik auf dem jeweiligen Gerät unter der jeweiligen Webadresse. Es gibt **keine automatische Gerätesynchronisation**, keine Serverkopie und keine Passwortwiederherstellung. Speicherbereinigung, Löschen von Website-Daten, Geräteverlust oder Entfernen der App können Daten verloren gehen lassen. Eine Speicher-Persistenzanfrage wird versucht, ist aber keine Garantie. JSON-Backups sind deshalb wichtig.

Safari und die installierte App können unterschiedliche Speicher verwenden; die dauerhafte Sammlung in der Home-Bildschirm-App führen. Bei einem Wechsel der Adresse oder auf ein anderes Gerät JSON exportieren/importieren. Vokabeldaten werden nicht ans Hosting übertragen. Das Hosting liefert nur die öffentlichen App-Dateien.

Nach erfolgreicher Offline-Vorbereitung wird für die Nutzung kein Server benötigt. Für neue Installationen, Wiederherstellung eines gelöschten App-Caches und App-Updates braucht man die statischen Dateien erneut über HTTPS. Das kostenlose Hosting kann bestehen bleiben, ohne dass du einen eigenen Server betreibst.

## Updates und Projektstruktur

Dateien erneut hochladen. Bei Änderungen an App-Dateien den Cache-Namen in `sw.js` erhöhen (z. B. `hangul-v2`), damit ein neuer kompletter Cache angelegt wird. Danach online öffnen und neu starten. IndexedDB bleibt erhalten. Vor Updates trotzdem JSON sichern. Alle Laufzeitdateien sind lokal; keine CDN-Schriften, Analytik oder externen Pakete.

`app.js`: Oberfläche, IndexedDB und Import/Export. `core.mjs`: Antwortvergleich, Wiederholungen, CSV und Validierung. `sw.js`: Offline-Cache. `style.css`: mobile Gestaltung. `manifest.webmanifest` und Icons: Home-Bildschirm-Installation. `preview.mjs`: optionaler lokaler Vorschau-Server, für Hosting nicht erforderlich.



