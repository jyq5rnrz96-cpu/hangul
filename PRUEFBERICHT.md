# Prüfbericht

## Aktuelle Version: beide Antwortsprachen

Automatisiert geprüft: 친구 akzeptiert friend, Freund und Freundin; fremde Antworten werden abgelehnt. Englische oder deutsche Einzelbedeutungen sind möglich; leere Übersetzungen werden abgelehnt. Bestehende Starterwörter erhalten die zweite Sprache; eigene deutsche Bedeutungen aus der vorherigen Migration werden wiederhergestellt. Lernstände bleiben erhalten. CSV enthält beide Sprachen und ältere deutsche/englische CSV-Dateien sind importierbar. Rückrichtung erwartet Koreanisch. Aktualisierungsseite erneuert nur App-Caches und die Registrierung im App-Pfad, erkennt alte Projektdateien und greift nicht auf IndexedDB zu. Syntaxprüfung bestanden. Die folgenden Berichte beschreiben frühere Versionen; ein neuer vollständiger Browserdurchlauf wurde nicht durchgeführt.

## Aktualisierung auf Koreanisch ↔ Englisch

Zusätzlich geprüft: englische Antworten und Alternativen, Ablehnung deutscher Antworten zu englischen Vokabeln, Migration unveränderter Starterwörter, Erhalt und Markierung eigener deutscher Bedeutungen, Übernahme bestehender Lernstände eigener Wörter, neues CSV-Format mit en-Spalte und Import alter CSV-Dateien mit de-Spalte. JavaScript-Syntaxprüfung bestanden. Diese Aktualisierung wurde mit automatisierten Prüfungen der Daten- und Antwortfunktionen getestet; ein erneuter vollständiger Browserdurchlauf wurde nicht durchgeführt. Der folgende Browserbericht bezieht sich auf die ursprüngliche Version.

Geprüft am 9. Oktober 2026 mit Node.js 24 und einem echten headless Microsoft-Edge-Browser, mobile Ansicht 390 × 844 Pixel.

Bestanden: Antwortnormalisierung und Alternativen, korrekte/falsche Wiederholungsintervalle, CSV mit Unicode, Anführungszeichen und mehrzeiligen Feldern, Ablehnung ungültiger Eingaben, Beispielvokabeln, Hinzufügen/Bearbeiten/Löschen, IndexedDB-Persistenz nach Neuladen, schriftliche Abfragen in beiden Richtungen, JSON-Download und Wiederimport, Statistik, keine horizontale Überbreite, Service-Worker-Aktivierung, Neuladen und Vokabelsuche bei abgeschaltetem Netzwerk. Keine JavaScript-Seitenfehler im Ablauf. JavaScript-Syntaxprüfung bestanden.

Die mobile Oberfläche wurde zusätzlich als Screenshot geprüft. Kein Test auf physischem iPhone oder Safari durchgeführt. Die Home-Bildschirm-Installation und der abschließende Flugmodus-Test auf dem eigenen iPhone bleiben erforderlich. Keine öffentliche Bereitstellung vorgenommen; die Installationsanleitung beschreibt die tatsächlichen Schritte zu GitHub Pages.
