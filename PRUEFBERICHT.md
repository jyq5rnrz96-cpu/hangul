# Prüfbericht

## Lernfeedback und Belohnungssammlung: Beta 0.3.4

Serien bei 5/10/15 richtigen Antworten, 5-Karten-Etappen, Comeback nach vorheriger Fehlbewertung und Ghost-Freigabe. Dauerhafte Sammlung mit 25/75/150 Wort-Tages-Lernschritten, fünf Lerntagen ohne Ablaufdatum für Teehäuschen, manuelle Freischaltung/Auswahl und tatsächliche Dorf-Dekoration. Datenbank erweitert auf Version 7 (rewards-Store), JSON-Backup mit validiertem optionalem rewardState. Bestehender v6-Lernstand samt SRS, Schwer-Markierung, Garten-Ledger, Ernte und gebauter Laterne nachweislich erhalten. Echte Browserprüfung: sichtbare 5er-Serie, Unterbrechung durch Fehler, Undo, Comeback beim Tippen, Ghost ohne Bewertung, normale/reduzierte Bewegung, Collection-Claims/Equip, reale Dorf-Darstellung, Münzen unverändert, frischer JSON-Restore, ältere Vokabelpakete, Offline-Neustart und Home-Navigation. Reine Prüfungen für Wort-/Tages-Deduplizierung über Richtungen/Kategorien, falsche Antworten, fehlende historische Vergütung, Projektziele und strenge Backup-Validierung. Offline-Update mit fehlenden/veralteten Dateien bestanden. Mobile Vorschauen visuell geprüft. Kein physischer iPhone-/iPad-Test.
## Home-Navigation: Beta 0.3.3

Lernen-Tab und Logo führen zur Startseite und leeren nur die laufende Sitzung. Mit echten IndexedDB-Daten geprüft: unbeantwortete/aufgedeckte Karten, teilweise bewertete Runde, nicht abgeschickte Texteingabe, vollständiges Rundenergebnis, Umweg über anderen Tab, Logo, Scrollposition, gespeicherte Historie/SRS/Gartenpunkte/Runden sowie Offline-Neustart. Keine zusätzliche Wertung oder erfundene vollständige Runde beim Verlassen. Navigation respektiert bestehende Speichersperren. Offline-Updater bestanden. Datenbank weiterhin Version 6; kein physischer iPhone-Test.
## Saisonaler Name der Schwer-Sammlung: Beta 0.3.2

Halloween: Gruselkabinett, Ins Gruselkabinett, Spuk beenden; normale Ansicht weiter Schwer. Echte Browserprüfung für Vormerken/Freigeben, ursprüngliche Kategorie, SRS/Rücknahme, Karteikarten/Tippen, JSON/CSV, Offline-Persistenz und Themenwechsel mit unveränderten Daten. Markierungen in Kategorieauswahl und Vokabelliste folgen dem Theme. Offline-Updater prüft die neuen Hard-/Season-Marker. Keine Datenmigration, Datenbank weiterhin Version 6. Kein physischer iPhone-Test.
## Interaktives Hanok-Dorf: Beta 0.3.1

Neue Spielansicht mit HUD, Münzstand, auf der Karte antippbarem Beet und Bauprojekten, Bestätigungsdialogen für Käufe, Vergrößerung und direkter Ernte. Farbigerer Zeichenstil, kleine Gärtnerfigur und reduzierte Bewegung. Echte Browserprüfung: Pflanzeninfos/Weiterlernen, Gebäudestatus, Bauplatz-Auswahl, Kaufpreis/Münzmangel, einmalige Münzausgabe und Anzeige des gekauften Objekts, direkte Ernte mit Doppeltipp-Schutz, keine Historien-/Wachstumspunkte durch reine Kartenaktionen, Zoom, Offline-Persistenz. Leerer/teilweise/vollständig ausgebauter Garten, Handy-/Tablet-Breiten, Themenwechsel und bestehende Lernkarte/Schwer geprüft; mobile Spiel- und Bauplatz-Ansichten visuell kontrolliert. Abgesicherte Offline-Aktualisierung bestanden. App-Anzeige nun Beta 0.3.1, Datenbank weiterhin 6. Kein physischer iPhone-/iPad-Test.
## Animiertes Kürbislogo: Version 31

Saisonabhängiges Logo innerhalb der App: Vogel mit Gat auf geschnitztem Kürbis bzw. ohne Kürbis. Eigene SVG-Animationen für Blinzeln, Wippen und sanftes Kerzenlicht; reduzierte Bewegung wird berücksichtigt. Visuell geprüft als mobile Kopfzeile und große Zeichnung. Browserprüfung der tatsächlichen Blinzel-Frames, Animationsstile, reduzierten Bewegung, Themenwechsel, gespeicherter Auswahl, Offline-SVG-Anzeige und mobiler/Tablet-Breiten (320/390/1024). Offline-Updater prüft die neuen Logo-/Saisonmarker und erhält den alten Cache bei unvollständigen Updates. Keine Änderung der Lern- oder Gartendaten, Datenbank bleibt Version 6. Kein physischer iPhone-/iPad-Test.
## Zusammenhängender Hanok-Innenhof: Version 30

Eine skalierbare isometrische Szene mit gemeinsamer Bodenebene, maßstäblichen Beeten und Gebäuden sowie einheitlichen Materialien/Schatten ersetzt die Bildüberlagerungen. Bestandene Browserprüfung mit echten IndexedDB-Daten: leerer, teilweise und vollständig ausgebauter Garten; gekaufte Gebäude, Münzen, Ernte, aktuelles Wachstum, erhaltene lokale Daten beim Designwechsel und Offline-Neustart, persistenter Umschalter, weiterhin funktionierende Lernkarte und Schwer. Szene enthält ein SVG und keine positionierten Bilddateien. Mobile-/Tablet-Breiten kontrolliert; teilweise und vollständig ausgebaute Szenen visuell geprüft. Service Worker prüft das neue Modul vor Aktivierung und bewahrt bei unvollständigen Updates die alte Version. Lern-/Belohnungslogik unverändert, Datenbankversion weiterhin 6. Kein physischer iPhone-/iPad-Test.
## Halloween-Design und Gat-Vogel: Version 29

Eigene SVG-Zeichnungen für Maskottchen und nächtlichen Innenhof, gespeicherter Design-Umschalter (Garten/Backup), Ernteanimation und saisonales Konfetti. Mit echten IndexedDB-Daten geprüft: unveränderte Lern- und Gartendaten beim Umschalten, Speicherung nach Neustart, bestehende Bauten und Münzen, Ernte, Lernkarten und Schwer, vollständig offline verfügbare Zeichnungen und Daten. Mobile/Tablet-Darstellung bei 320/390/1024 Pixeln geprüft, 390/1024 visuell kontrolliert. Reduzierte Bewegung berücksichtigt. Neue Offline-Dateien werden vor Aktivierung geprüft; unvollständige Updates bewahren die alte Version. Datenbank bleibt Version 6. Kein physischer iPhone-/iPad-Test.

## Sammlung Schwer: Version 28

Manuell vormerken/freigeben ohne Änderung der ursprünglichen Kategorie; eigene jederzeit spielbare Pauksammlung. Mit echten Browserdaten geprüft: keine Antwort-/Belohnungseffekte beim Vormerken, SRS und Undo erhalten Schwer-Markierungen, Aufdecken/Tippen, JSON-/CSV-Felder und Offline-Neustart. Bestehende Lernmodi und abgesicherte Aktualisierung bestanden. Kein physischer iPhone-Test.
## Tagesmissionen und Korea-Reisebuch: Version 27

Lokale Datenbank erweitert auf Version 6 mit Tagesmissionen/Reisestempeln und vollständigen Runden. Garten bleibt unverändert. Mit echten Daten geprüft: Migration aus v26, Ziele bei kleinen Sammlungen, schwierige Wörter/Alternativaufgabe, keine historischen Stempel, vollständige Runden, Undo, einmaliges Abholen, getrennte Gartenmünzen, Vergleich nur bei gleicher Kartenmenge und gleichen Einstellungen, persönliche Verbesserung, JSON-Backups, freigeschaltete Postkarten, Tageswechsel aus dem Hintergrund und Offline-Neustart. Bestehende Abfragen, SRS, Undo und Ernte/Bauökonomie weiterhin bestanden. Kompatible Rückkehr zu v26 getestet. Mobile Vorschauen visuell geprüft; kein direkter iPhone-Test.

## Erntegarten und Bauplan: Version 26

Einmaliger Neustart nur des Gartens bei Migration der Datenbank auf Version 5; Vokabeln, SRS und Statistik bleiben erhalten. Eigene Tests mit echten IndexedDB-Daten für 40 Wachstum/Tag, 200 bis zur Ernte, 25 Münzen je manueller Ernte, Doppeltipp-Schutz, Münzausgaben und einmalige Käufe, Undo, alte Backups ohne rückwirkende Punkte, neue Backups mit Ernte-/Kaufstand, Hanok-Sichtbarkeit und Offline-Neustart. Bestehende Lernmodi mit SRS/Undo/Rundenfortschritt geprüft. Mobile Ansicht visuell kontrolliert; kein direkter iPhone-Test.

## Hanok-Garten: Version 25

Eigene Gartenseite, Vorschau auf der Startseite und offline gespeicherte Illustration. IndexedDB erweitert auf Version 4 mit dauerhaftem Garten-Ledger. Echte Browserprüfung: Migration aus Version 3 samt Lernverlauf, Wort-/Tages-Deduplizierung über Kategorien hinweg, Punkte für falsche Antworten, Wiederholungen, Rücknahme, Erhalt beim Löschen einer Vokabel, JSON-Export/Import/Merge, ungültige Backup-Daten, Freischaltungen und Offline-Neustart. Mobile Darstellung visuell geprüft. Rückkehr-Paket ohne Garten ist für Datenbankversion 4 angepasst. Kein direkter Test auf einem physischen iPhone.

## Farbiger Rundenfortschritt und Touch-Behandlung: Version 21

Richtig/falsch werden in Antwortreihenfolge als grüne/rote Stücke dargestellt; Rücknahme und Ergebnisbildschirm geprüft. In mobiler Browseransicht mit echten IndexedDB-Daten: schnelle Aufdecken/Bewerten-Tipps zählen einmal; Zoomfaktor bleibt 1. Touch-Abbruch, Bewegungen, Mehrfinger-Gesten sowie entfernte/deaktivierte Ziele geprüft. Bestehende Prüfungen für Karten, Undo, Wiederholungsplan und Offline-Neustart bestanden. Kein direkter Test des Safari-Zooms auf einem physischen iPhone.

## Kategorien, Rundenfortschritt und Rücknahme: Version 20

Die neue Startseite und Lernkarte wurden in einem mobilen Browser visuell kontrolliert. Mit echten IndexedDB-Daten geprüft: Kategorien-Kacheln und direkter Rundenstart; letzte Bewertung zurücknehmen bei Texteingabe, Karteikarten, Zufallsrichtung, Pauken und Spaced Repetition; Wiederherstellung der ursprünglichen Karte, Richtung, Reihenfolge, Statistik und Lernplanung, auch nach dem Ergebnisbildschirm; Rundenfortschritt, Offline-Neustart und mobile Breite. Zusätzlich Fehler bei der Rücknahme und Doppelbetätigung geprüft. Bestehende Swipe- und Karteikartenprüfungen sowie die abgesicherte Offline-Aktualisierung bestanden. Kein Test auf einem physischen iPhone. Die folgenden Berichte beschreiben frühere Versionen.

## Swipe-Karteikarten: Version 17

Automatisch geprüft: Karte antippen zum Aufdecken, Hauptlösung in derselben Kartenfläche und ursprüngliche Frage verborgen; Swipe-Entscheidung rechts=true/links=false, zunehmender Farbwert, Mindestweg abhängig von Kartenbreite, keine Wertung bei kurzen oder überwiegend senkrechten/diagonalen Bewegungen, Pointer-Abbruch, keine Wertung vor Aufdecken oder bei laufender Speicherung, Tastaturbedienung und Schutz gegen nachlaufenden Klick, der sonst die nächste Karte aufdecken könnte. Die tatsächlichen Pointer-Handler wurden zusammen mit der App-Speicherung geprüft: rechts/links zählen gemeinsam mit Buttons in Rundenergebnis, Statistik und SRS; Prozent und Note bleiben korrekt. Bestehende Prüfungen für Zufallsrichtung, Karteikarten, Speicherausfall, Doppelklick, Eingabefokus und komplette 115-Karten-Paukrunde bestanden. Exit-Animation berücksichtigt reduzierte Bewegung. Keine neue physische iPhone- oder visuelle Browserprüfung. Die folgenden Berichte beschreiben frühere Versionen.

## Import in verschiedene Kategorien: Version 16

Der Vergleichsschlüssel für identische Vokabeln enthält jetzt zusätzlich die Kategorie. Tatsächliche App-Importfunktion mit simulierten lokalen Daten geprüft: 115 vorhandene quiz#1-Karten samt Lernstand und Statistik bleiben unverändert; alle 261 midterm-Karten, einschließlich gemeinsamer Wörter, werden ergänzt. Zusammen 376 Karten in beiden Kategorien. Wiederholter Import erzeugt keine weiteren Kopien und erhält erworbene midterm-Lernstände. Gleiche Wort-/Übersetzungs-/Kategorie-Kombination mit anderer ID wird weiter übersprungen. JSON-Export enthält beide Kategorien, Lernstände, Geschichte, Umschriften und Merkhilfen. Datenliste: 115/115 Listenwörter und 50/50 Lehnwörter vollständig enthalten; alle 261 Karten innerhalb der Sammlung eindeutig, beide Antwortsprachen, Umschrift und Merkhilfe vorhanden, App-Validator bestanden. JavaScript-Syntaxprüfung bestanden. Keine neue physische iPhone- oder visuelle App-Browserprüfung. Die sieben Quell-PDFs wurden ausgelesen und relevante Folien visuell geprüft. Folgende Berichte beschreiben ältere Versionen.

## Fragengestaltung: Version 15

Die übersetzte Frageseite verwendet eigene Bereiche für englische Hauptbedeutung und deutsche Nebenbedeutung. Erste Semikolon-Alternativen werden gezeigt, gespeicherte Daten und Antwortprüfung unverändert beibehalten. Sprachlabels, Schriftgrößen und Zeilenabstände unterscheiden die Hierarchie; die obere Richtungsanzeige ist kürzer. Überprüft: erste Bedeutung, beide Sprachen, reine deutsche Karten, HTML-Escaping und JavaScript-Syntax. Bestehendes Eingabefokus-/Karteikartenverhalten weiter geprüft. Kein neuer physischer iPhone- oder visueller Browserdurchlauf. Die folgenden Abschnitte beschreiben frühere Versionen.

## Bewertungsbuttons und Tagesstatistik: Version 14

Die Bewertungsleiste und die Aufdecken-Schaltfläche sind fest über der unteren Navigation positioniert; deren tatsächliche Höhe einschließlich Safe Area wird wie bisher gemessen. Reihenfolge: Nicht gewusst links, Gewusst rechts. Zusätzlicher Platz unter dem Lerninhalt bleibt vorhanden. Tagesstatistiken werden aus der vorhandenen Historie abgeleitet. Automatisch geprüft: lokale Tagesgrenzen, Monats-/Jahres-/Schaltjahrwechsel, korrekte Quoten und Summen, verschiedene Vokabeln, Richtungen/Kategorien, Streak, leere Tage, Datumswahl und Vor-/Zurück-/Heute, alle 61 Lerntage über paginierte Liste, historische Daten, Button-Reihenfolge, vollständige Offline-Dateiliste samt statistics.mjs. Bestehende Karteikarten-/Zufallsrichtungs-, Paukmodus-, Import-/Backup- und Syntaxprüfungen bestanden. Eine neue visuelle Browserprüfung war nicht möglich: Der gestartete lokale Vorschauprozess war über den Browser nicht erreichbar (Verbindungs-Timeout). Kein Test auf einem physischen iPhone. Die folgenden Berichte beschreiben ältere Versionen.

## Zufällige Richtung und Karteikarten: Version 13

Automatisch mit der tatsächlichen App-Logik geprüft: pro Karte zufällig gewählte konkrete Richtung, passende Frageseite, Eingabesprache und Antwortprüfung; Richtung bleibt bei erneutem Rendern und Aufdecken stabil. Geschichte und SRS enthalten ausschließlich ko-en/en-ko; im Wiederholungsmodus werden nur fällige Richtungen gewählt und nur deren SRS geändert. Karteikarten halten das Eingabefeld verborgen und fokussieren es nicht; Aufdecken allein schreibt keine Statistik und erhöht keine Rundenzähler. Selbsteinschätzung speichert einmal, zählt richtig/falsch und geht direkt zur nächsten Karte. Doppelklick, gescheitertes Speichern, erneutes Anzeigen einer aufgedeckten Karte, gezielte Fehlerwiederholung, Prozent/Note und unveränderte Einstellungen beim Neustart geprüft. Bestehende Pauk-Prüfungen mit 115 Karten, bilingualer Antwortprüfung, Migration, Backup samt Merkhilfen und synchronem Eingabefokus im Tippmodus bestanden. JavaScript-Syntaxprüfung bestanden. Kein neuer physischer iPhone- oder visueller Browserdurchlauf. Die folgenden Berichte beschreiben ältere Versionen.

## Paukmodus: Version 12

Die tatsächliche App-Logik wurde in einer simulierten Oberfläche geprüft: Eine vollständig in der Zukunft fällige Kategorie ist im Paukmodus sofort lernbar; andere Kategorien werden ausgeschlossen; Fisher-Yates-Mischen erhält alle eindeutigen Karten; jede kommt einmal pro Runde. Eine echte Runde mit allen 115 quiz#1-Karten wurde durchlaufen: 100 richtige und 15 falsche Antworten ergeben angezeigt 87 % und Note 2. Zusätzlich geprüft: beide Richtungen und Antwortsprachen, alle Notengrenzen, keine Note ohne Antworten, Fehlerwiederholung, sofortiger kompletter Neustart, Rücksetzen der Rundenzähler, abgebrochene Runde als Zwischenstand, kein Zählen bei Speicherausfall oder Doppelklick, Statistik-Schreibvorgänge, keine Veränderung der SRS-Daten im Paukmodus, reguläre SRS-Planung weiterhin aktiv und derselbe Eingabeknoten mit synchronem Fokus. JavaScript-Syntax sowie bisherige bilinguale Antwort-/Auswertungsprüfungen bestanden. Importierte Umschriften und Eselsbrücken samt Lernstanderhalt weiterhin geprüft. Neue Offline-Datei learning.mjs wird vorab gecacht. Keine neue physische iPhone- oder visuelle Browserprüfung. Trainingsnoten verwenden den in der Oberfläche ausgewiesenen eigenen Schlüssel; sie behaupten keine Übereinstimmung mit dem tatsächlichen Test. Die folgenden Berichte beschreiben ältere Versionen.

## Importierte Merkhilfen und Aussprache: Version 11

Für alle 115 quiz#1-Karten sind Umschriften und individuelle Merkhilfen enthalten. Die koreanischen Wörter, Bedeutungen, IDs und Kategorie stimmen mit der ersten Datei überein. Die neuen Felder werden validiert, HTML-escaped, gespeichert und in JSON/CSV exportiert. Die Umschrift erscheint erst nach der Antwort, Merkhilfen nur nach Fehlern und zunächst eingeklappt. Der vorhandene synchron ausgelöste Eingabefokus beim Weitergehen bleibt erhalten. Die tatsächliche App-Importfunktion wurde mit einer simulierten Datenbank auf Ergänzung, wiederholten Import ohne Duplikate, Erhalt vorhandener Lernstände bei unveränderten Wörtern sowie JSON-Export geprüft. Keine neue physische iPhone- oder visuelle Browserprüfung. Die Aussprachehilfe ist schriftlich; keine Tonaufnahmen. Einzelne deutsche Klanganker sind bewusst näherungsweise. Quellen für die Umschriftregeln: https://www.korean.go.kr/front_eng/roman/roman_01.do . Die folgenden Abschnitte beschreiben ältere Versionen.

## 100 Eselsbrücken: Version 10

Automatisch geprüft: exakt 100 eindeutige Merkhilfen für die ursprüngliche Alltagsliste; Zuordnung für beide Antwortsprachen und Abfragerichtungen; native, zunächst geschlossene Aufklappfelder nur nach falschen Antworten; richtige Hauptantwort davor; korrekte Antworten ohne Merkhilfe. Andere Bedeutungen von 차, 밤, 사과, 쓰다, 적다 und 은행 sowie unbekannte Wörter und leere Bedeutungen bleiben ohne unpassende Merkhilfe. Ausgabe ist HTML-escaped; Objekt-Prototypnamen werden als unbekannt behandelt. Die Offline-Dateiliste enthält mnemonics.mjs; alle referenzierten Dateien sind vorhanden. App-Anzeige, Cache und Aktualisierungsseite verwenden Version 10. Bestehende Tests für bilinguale Antworten, Migration, Lernstände, Auswertung und synchronen Weiter-Fokus bestanden. JavaScript-Syntaxprüfung bestanden. Die 100 Szenen wurden einzeln geschrieben und redaktionell gelesen; ihre Merkfähigkeit ist individuell und nicht empirisch gemessen. Kein neuer Test auf einem physischen iPhone. Die folgenden Abschnitte beschreiben ältere Versionen.

## Übersichtliche Auswertung: Version 9

Die Diss-Sprüche wurden aus der Oberfläche und dem Reaktionsmodul entfernt. Hauptantworten sind groß und in einem eigenen Lösungsfeld hervorgehoben. Weitere zulässige Alternativen, Umschrift, Beispielsatz und Wiederholungszeit liegen in nativen, standardmäßig geschlossenen Details. Emoji bleibt klein im Auswertungskopf, Konfetti bei richtigen Antworten bleibt erhalten. Geprüft: beide Antwortsprachen, Rückrichtung, Details standardmäßig geschlossen, HTML-Escaping, keine Sprüche, bestehendes Emoji-Verhalten und synchroner Fokus desselben Eingabefeldes beim Weitergehen. Keine neue physische iPhone- oder visuelle Browserprüfung durchgeführt. Cache hangul-v9-clear-feedback enthält feedback.mjs.

## Sprüche und Konfetti: Version 8

Geprüft: 60 eindeutige Sprüche, keine Wiederholung innerhalb eines Durchlaufs und kein direktes Wiederholen zwischen Durchläufen. Konfetti verwendet 28 lokale DOM-Elemente, startet nur nach einer richtigen Antwort, stapelt sich nicht, wird automatisch und beim Weitergehen bereinigt und entfällt bei reduzierter Bewegung. Simulierte Oberfläche mit tatsächlicher App-Logik geprüft: Spruch nur bei falscher Antwort, Konfetti nur bei richtiger Antwort, Emoji und permanentes Antwortfeld weiter funktionsfähig. CSS verwendet pointer-events:none, damit Schaltflächen bedienbar bleiben. Keine physische iPhone- oder neue visuelle Browserprüfung vorgenommen. Cache hangul-v8-reactions enthält reactions.mjs.

## Emojis: Version 7

Geprüft: Alle 100 Alltagswörter erhalten ein lokales Emoji; eigene Emojis überschreiben die Standardzuordnung; unbekannte Wörter bleiben ohne Bild. Emoji-Feld akzeptiert komplexe Sequenzen einschließlich Familien, Flaggen und Hauttönen und lehnt Text/HTML ab. JSON- und CSV-Roundtrip erhalten eigene Emojis; alte Dateien ohne Emoji bleiben importierbar. Die tatsächliche App-Logik wurde in einer simulierten Oberfläche geprüft: kein Emoji vor der Antwort oder nach Fehlern, Emoji nach richtiger Antwort. Der bereits auf dem iPhone bestätigte Eingabefokus bleibt unverändert. Ein neuer physischer iPhone-Test und ein visueller Browserdurchlauf wurden nicht durchgeführt. Die CSS-Animation berücksichtigt prefers-reduced-motion. Offline-Cache enthält emojis.mjs und verwendet hangul-v7-emojis.

## iPhone-Fokus: Version 6

Die hochgeladenen Dateien und die öffentliche Adresse enthielten Version 5, dennoch meldete der Nutzer fehlende Tastaturöffnung. Deshalb bleibt das Antwortfeld jetzt beim Wechsel zur nächsten Karte im Dokument erhalten. Nur Frage, Ergebnis und Feldwert werden aktualisiert; das Formular wird synchron sichtbar gemacht und seine Geometrie vor focus() berechnet. Geprüft mit der tatsächlichen App-Logik in einer simulierten Oberfläche: derselbe Eingabeknoten bleibt erhalten, die nächste Frage erscheint, das Feld wird geleert, aktiviert und direkt im Klick-Aufruf fokussiert. Ein physischer iPhone-Test steht weiterhin aus. Oben erscheint „Offline bereit · v6“, damit sich der geladene Stand am Handy erkennen lässt.

## Direkter Eingabefokus

Nach einem Tipp auf „Jetzt lernen“ oder „Nächste Vokabel“ wird das Antwortfeld unmittelbar beim Aufbau der Frage fokussiert. Der Fokus liegt synchron im Klick-Aufruf, ohne Timeout oder vorgeschaltetes Speichern, damit iOS das Öffnen der Tastatur als direkte Benutzeraktion behandeln kann. Im Test der tatsächlichen App-Logik geprüft: der Weiter-Klick fokussiert das nächste Antwortfeld synchron und verwendet preventScroll. Ein physischer iPhone-Test steht aus. Für diese Version lautet der Offline-Cache hangul-v5-focus.

## Dark Mode und erreichbare Weiter-Schaltfläche

Die Oberfläche verwendet nun ein dunkles Farbschema einschließlich Formulare, Dialoge, Auswertung und Navigation. Nach erfolgreichem Speichern einer Antwort wird das Eingabeformular ausgeblendet und der Eingabefokus entfernt. Die Weiter-Schaltfläche bleibt fest oberhalb der unteren Navigation; deren tatsächliche Höhe wird gemessen, einschließlich iPhone-Sicherheitsabstand. Lange Auswertungen erhalten zusätzlichen Platz unten. Mit der tatsächlichen App-Logik in einer simulierten Oberfläche geprüft: richtige und falsche Antworten, Ausblenden des Formulars, Entfernen des Tastaturfokus, Weiter-Aktion und Navigation-Höhe. Antwort- und Migrationsprüfungen weiterhin bestanden. JavaScript-Syntaxprüfung bestanden. Kein neuer Test auf einem echten iPhone; das Verhalten der iOS-Tastatur muss dort abschließend geprüft werden.

## Aktuelle Version: beide Antwortsprachen

Automatisiert geprüft: 친구 akzeptiert friend, Freund und Freundin; fremde Antworten werden abgelehnt. Englische oder deutsche Einzelbedeutungen sind möglich; leere Übersetzungen werden abgelehnt. Bestehende Starterwörter erhalten die zweite Sprache; eigene deutsche Bedeutungen aus der vorherigen Migration werden wiederhergestellt. Lernstände bleiben erhalten. CSV enthält beide Sprachen und ältere deutsche/englische CSV-Dateien sind importierbar. Rückrichtung erwartet Koreanisch. Aktualisierungsseite erneuert nur App-Caches und die Registrierung im App-Pfad, erkennt alte Projektdateien und greift nicht auf IndexedDB zu. Syntaxprüfung bestanden. Die folgenden Berichte beschreiben frühere Versionen; ein neuer vollständiger Browserdurchlauf wurde nicht durchgeführt.

## Aktualisierung auf Koreanisch ↔ Englisch

Zusätzlich geprüft: englische Antworten und Alternativen, Ablehnung deutscher Antworten zu englischen Vokabeln, Migration unveränderter Starterwörter, Erhalt und Markierung eigener deutscher Bedeutungen, Übernahme bestehender Lernstände eigener Wörter, neues CSV-Format mit en-Spalte und Import alter CSV-Dateien mit de-Spalte. JavaScript-Syntaxprüfung bestanden. Diese Aktualisierung wurde mit automatisierten Prüfungen der Daten- und Antwortfunktionen getestet; ein erneuter vollständiger Browserdurchlauf wurde nicht durchgeführt. Der folgende Browserbericht bezieht sich auf die ursprüngliche Version.

Geprüft am 9. Oktober 2026 mit Node.js 24 und einem echten headless Microsoft-Edge-Browser, mobile Ansicht 390 × 844 Pixel.

Bestanden: Antwortnormalisierung und Alternativen, korrekte/falsche Wiederholungsintervalle, CSV mit Unicode, Anführungszeichen und mehrzeiligen Feldern, Ablehnung ungültiger Eingaben, Beispielvokabeln, Hinzufügen/Bearbeiten/Löschen, IndexedDB-Persistenz nach Neuladen, schriftliche Abfragen in beiden Richtungen, JSON-Download und Wiederimport, Statistik, keine horizontale Überbreite, Service-Worker-Aktivierung, Neuladen und Vokabelsuche bei abgeschaltetem Netzwerk. Keine JavaScript-Seitenfehler im Ablauf. JavaScript-Syntaxprüfung bestanden.

Die mobile Oberfläche wurde zusätzlich als Screenshot geprüft. Kein Test auf physischem iPhone oder Safari durchgeführt. Die Home-Bildschirm-Installation und der abschließende Flugmodus-Test auf dem eigenen iPhone bleiben erforderlich. Keine öffentliche Bereitstellung vorgenommen; die Installationsanleitung beschreibt die tatsächlichen Schritte zu GitHub Pages.








