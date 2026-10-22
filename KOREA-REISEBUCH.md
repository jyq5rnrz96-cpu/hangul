# Tagesmissionen, Korea-Reisebuch und persönliche Fortschritte · v27

## Deine Tagesmissionen

Auf der Startseite stehen drei Aufgaben mit einem kleinen Tiger als Begleiter:

1. Bis zu **15 verschiedene koreanische Wörter lernen**. Wenn du weniger Wörter hast, wird das Ziel beim Erstellen der Mission entsprechend kleiner.
2. Bis zu **5 zuletzt schwierige Wörter wiederholen**. Dafür zählen die Wörter, die bei der letzten Bewertung vor Beginn des Tages falsch waren. Gibt es keine solchen Wörter, lautet die Aufgabe stattdessen, bis zu 5 verschiedene Wörter richtig zu beantworten.
3. **Eine vollständige Lernrunde mit mindestens 5 Karten abschließen**, bei einer kleinen Sammlung entsprechend weniger. Tippen und Aufdecken zählen gleichermaßen.

Jedes erledigte Ziel hat einen **Abholen**-Knopf. Damit erhältst du genau einen Reisestempel. Pro Tag sind höchstens drei Stempel möglich; wiederholtes Antippen oder weitere Runden zahlen dieselbe Mission nicht erneut aus. Stempel verändern keine Gartenmünzen.

Die Aufgaben richten sich nach der lokalen Gerätezeit und werden täglich neu erstellt. Wenn du die App am nächsten Tag aus dem Hintergrund öffnest, werden sie aktualisiert. Verpasste Tage kosten keine Stempel. Bereits abgeholte Stempel bleiben dir erhalten.

Die neuen Missionen zählen Lernversuche ab dem ersten Start von v27. Es gibt keine rückwirkenden Stempel für frühere Tage. Der alte Lernverlauf hilft nur dabei, schwierige Wörter für die Wiederholungsmission auszuwählen.

## Dein Reisebuch

Über **Dein Korea-Reisebuch** auf der Startseite oder den Reisebuch-Knopf im Garten öffnest du deine Sammlung illustrierter Postkarten:

| Ort | Reisestempel |
|---|---:|
| Seoul | Startpunkt, sofort sichtbar |
| Jeonju | 5 |
| Busan | 15 |
| Jeju | 30 |

Die Karten sind direkt in der App gezeichnet und auch ohne Internet verfügbar. Sie werden durch die Stempel automatisch freigeschaltet. Du gibst deine Stempel dafür nicht aus. Der Garten-Tab bleibt auch im Reisebuch markiert, sodass keine zusätzliche Navigationsleiste nötig ist.

## Vergleich nach einer Lernrunde

Nach vollständig beantworteten Runden zeigt die App den Vergleich mit der letzten passenden Runde und gegebenenfalls einen neuen persönlichen Rekord. Dabei müssen **Kategorie, Lernmodus, Abfrageart, gewählte Richtung und Kartenmenge identisch** sein. Dadurch werden zum Beispiel 5 leichte Karten nicht mit einer anderen Runde von 100 Karten verglichen. Paukmodus und Spaced Repetition werden getrennt verglichen.

Zusätzlich kann die App anzeigen, wie viele Wörter du diesmal gewusst hast, deren letzte vorherige Bewertung in derselben Abfragerichtung falsch war. Im Aufdecken-Modus basiert das weiterhin auf deiner Selbsteinschätzung.

Die Speicherung vergleichbarer Runden beginnt mit v27. Für alte Lernverläufe fehlen die damaligen Runden-Grenzen; deshalb werden daraus keine erfundenen Vergleichswerte berechnet. Abgebrochene Runden zählen nicht als vollständige Runde. „Zurück“ nach der letzten Antwort entfernt auch den dazugehörigen Rundeneintrag, bis du die Karte erneut beantwortest.

## Installation

1. **Hangul-Korea-Reisebuch-v27.zip** entpacken.
2. Diese **sechs Dateien** auf GitHub am bisherigen Ort hochladen:
   - `app.js`
   - `style.css`
   - `journey.mjs` (**neu**)
   - `journey-view.mjs` (**neu**)
   - `sw.js`
   - `update.html`
3. **Commit changes** klicken und die erfolgreiche Pages-Bereitstellung abwarten.
4. In der installierten App **Backup → App aktualisieren** drücken. Im Browser: https://jyq5rnrz96-cpu.github.io/hangul/update.html?repair=v27-journey1
5. Die Anzeige lautet danach **v27**.

Die anderen vorhandenen Dateien aus v26 bleiben nötig. Dein Garten startet **nicht** erneut von vorne. Wachstum, Ernten, Münzen, Bauten, Vokabeln und Lernstatistik bleiben erhalten.

## Backups und Rückkehr

Reisestempel, Tagesmissionen und gespeicherte Runden sind im neuen **JSON-Backup** enthalten. Beim Import eines solchen Backups wird das Reisebuch durch dessen gespeicherten Stand ersetzt; Rundeneinträge werden anhand ihrer eindeutigen IDs zusammengeführt. Mehrfacher Import vervielfacht keine Stempel. Vokabellisten oder alte Backups ohne Reisebuch löschen deinen Reisestand nicht.

Wenn du zur vorherigen Version zurück möchtest, verwende **Hangul-v26-ohne-Reisebuch-Zurueck.zip**. Dieses Paket kann die erweiterte Datenbank öffnen. Die Reisebuchdaten bleiben lokal bestehen, werden in v26 aber nicht angezeigt oder exportiert. Exportiere bei Bedarf vor der Rückkehr ein JSON-Backup aus v27. Keine App-Daten löschen und kein beliebiges älteres ZIP verwenden.

## Prüfung

Mit echten lokalen IndexedDB-Daten in mobiler Browseransicht geprüft: Migration aus v26 ohne Gartenverlust, adaptive Missionen, keine rückwirkenden Stempel, Rundenspeicherung, Undo der letzten Antwort, einmaliges Abholen, unveränderte Münzen, exakter Rundenvergleich und schwierige Wörter, JSON-Export/Import ohne doppelte Belohnungen, Postkarten, Tageswechsel beim Öffnen aus dem Hintergrund und Offline-Neustart. Bestehende Lernmodi sowie Ernte-/Bauökonomie weiterhin geprüft. Mobile Vorschauen wurden visuell kontrolliert. Das Rückkehr-Paket wurde mit bestehenden Daten getestet. Ein direkter Test auf einem physischen iPhone steht noch aus.
