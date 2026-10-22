# Dein Hanok-Dorf · Beta 0.3.1

Die App verwendet ab dieser Ausgabe Beta-Versionsnummern. Die nächste reguläre Ausgabe kann 0.3.2 heißen; 1.0 folgt erst nach deiner Freigabe.

## Der Garten als kleiner Spielbereich

- Dorfkarte mit kräftigeren Farben, lebendigen Bäumen, einer kleinen Gärtnerfigur und Spielanzeige für deine tatsächlichen Münzen.
- **Beet antippen:** Eine reife Pflanze wird direkt geerntet. Solange sie wächst, öffnet sich der Wachstumsstand mit einem Knopf zum Weiterlernen.
- **Bauen:** Zeigt antippbare Plus-Schilder für die noch freien Bauprojekte. Nach Auswahl siehst du Preis und Münzstand. Erst mit **Bauen** wird bezahlt. Ohne genügend Münzen bleibt dieser Knopf deaktiviert.
- **Vorhandenes Gebäude antippen:** Zeigt, was bereits zu deinem Dorf gehört.
- **Plus/Minus rechts unten:** Vergrößert die Kartenmitte bzw. zeigt wieder die ganze Karte. Der Knopf verschiebt keine Gebäude.
- Nach Ernte und Bau erscheint eine kurze Belohnungsanzeige direkt in der Karte.

Die bisherigen Wachstums-, Ernte- und Bauregeln bleiben erhalten: 40 verschiedene koreanische Wörter pro Tag, 200 Wachstum pro Pflanze, 25 Münzen pro Ernte. Schnelles mehrfaches Antippen zahlt eine Ernte nicht mehrfach aus. Gekaufte Gebäude, bisherige Ernten und Münzen werden übernommen. Es gibt keinen Neustart und keine neuen künstlichen Erfahrungspunkte.

Die bisherigen Ernteknöpfe und der Bauplan unter der Karte bleiben als Alternative verfügbar. Der Halloween-Umschalter steht weiter unten im Garten und wie bisher unter Backup. Das Kürbislogo bleibt im Halloween-Design aktiv. Bei reduzierter Bewegung werden die neuen Umgebungsanimationen abgeschaltet.

## Update von v31

1. Zur Sicherheit ein **JSON-Backup** speichern.
2. **Hangul-Beta-0.3.1-Spielgarten.zip** entpacken.
3. **Alle sieben Dateien** zusammen bei GitHub an der bisherigen Stelle hochladen:
   - app.js
   - style.css
   - courtyard.mjs
   - farm-view.mjs
   - village.mjs (**neu, unbedingt mit hochladen**)
   - sw.js
   - update.html
4. **Commit changes** klicken und die erfolgreiche GitHub-Pages-Bereitstellung abwarten.
5. In der installierten App **Backup → App aktualisieren** drücken. Oben muss anschließend **Offline bereit · Beta 0.3.1** stehen.

Alle übrigen Dateien aus v31 bleiben erforderlich. Das gesamte Projekt mit Anleitung befindet sich weiterhin in **Hangul-iPhone-PWA.zip**. Die App nicht löschen; keine Datenbankmigration und kein Zurücksetzen des Lernstands erforderlich.

## Prüfung

Mit echten IndexedDB-Daten geprüft: Pflanzeninformationen, Weiterlernen, vorhandene Gebäude, Bauplätze, deaktivierter Kauf bei fehlenden Münzen, bestätigter Kauf, sofort aktualisierter Münzstand und Gebäude, direkte Ernte auf der Karte, Doppeltipp zahlt nur einmal, unveränderte Lernhistorie und Wachstum durch reine Kartenaktionen, Vergrößern/Verkleinern und Offline-Neustart. Leerer, teilweise und vollständig ausgebauter Garten; Handy-/Tablet-Breiten und Bauplatz-Abstände kontrolliert. Bestehende Lernkarte, Schwer, Themenauswahl und Offline-Aktualisierung bestanden. Kein Test auf einem physischen iPhone/iPad.
