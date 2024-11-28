# LB Modul 223

In diesem Projekt haben wir, Fabian und Mazlum, ein bestehendes Hangman-Spiel in React erweitert und um Multiuser-Funktionen ergänzt. Ziel war es, ein Spiel mit erweiterten Features zu entwickeln, die in unseren User Stories definiert wurden. Das Frontend wurde mit JSX erstellt und implementiert die gewünschten Funktionalitäten. Diese Dokumentation, begleitet von der README-Datei, dient zur detaillierten Beschreibung des Projekts und dessen Entwicklungsschritte.

## Authoren

- [@Jokuurinio](https://github.com/Jokuurinio) Fabian
- [@mazo999](https://github.com/mazo999) Mazlum

## Index

- [Installation](https://linktoinstallation)
- [User Stories](https://linktouserstories)
- [Sicherheitskonzept](https://linktosicherheitskonzept)
- [Arbeitsplanung](https://linktoarbeitsplanung)
- [Frameworks](https://linktoframeworks)
- [Test-Konzept](https://linktotest-konzept)
- [Login-Ablauf](https://linktologin-ablauf)
- [Test Protokoll](https://linktotestprotokoll)
- [Arbeitsjournal](https://linktodocumentation)

## Installationsanleitung

### Abhängigkeiten

- **Git**: Zum Klonen des Repositories und Versionierung.
- **Docker**: Für das Setup und Management der MySQL-Datenbank mithilfe von Docker Compose.

### Backend

Stellen Sie sicher, dass alle Abhängigkeiten installiert sind, bevor Sie beginnen:

1. **Repository klonen**

   Öffnen Sie ein Terminal und klonen Sie das Git-Repository:

   ```bash
   git clone https://github.com/Jokuurinio/m223_LB_project
   ```

2. **Docker-Container starten**

   Wechseln Sie in das Projektverzeichnis und starten Sie das Docker-Setup:

   ```bash
   docker-compose up -d
   ```

3. **Container prüfen**

   Vergewissern Sie sich, dass der MySQL-Container läuft, indem Sie den Befehl `docker ps` ausführen oder Docker Desktop verwenden.

4. **Spring Boot-Anwendung starten**

   Starten Sie die Spring Boot-Anwendung mit Maven:

   ```bash
   mvn spring-boot:run
   ```

### Frontend

1. **In das Frontend-Verzeichnis wechseln**

- ...\m223_LB_project\frontend

2. **Installiere die Abhängigkeiten und starte eine Instanz oder Entwicklerinstanz auf Port 5173 starten:**

```bash
npm install
```

```bash
npm run dev
```

3. **Eventuell werden noch weitere Bibliotheken benötigt wie Axios und React-Router-Dom.**
   Diese Biblitheken können mit dem Befehl npm install installiert werden.

```bash
npm install axios

npm install react-router-dom
```

## User Stories

Als Benutzer möchte ich mich einloggen müssen, um spielen zu können, damit meine Aktivitäten geschützt sind und nur ich Zugriff auf das Spiel habe.
Ich möchte während des Spiels die Wörter sehen, die zum Erraten notwendig sind, jedoch keine Möglichkeit haben, Wörter hinzuzufügen, einzusehen oder zu löschen.

Akzeptanzkriterien:

- Der Benutzer kann das Spiel nur starten, wenn er eingeloggt ist.
- Der Benutzer hat keine Zugriffsrechte auf Funktionen wie Hinzufügen, Einsehen oder Löschen von Wörtern.
- Während des Spiels kann der Benutzer nur die Wörter sehen, die zum Erraten angezeigt werden.
- Ein nicht eingeloggter Benutzer sieht lediglich die Login-Maske und hat keinen Zugriff auf das Spiel.

Als Admin möchte ich Wörter zur Datenbank hinzufügen oder löschen können,
damit ich die verfügbaren Wörter für das System verwalten und anpassen kann.

Akzeptanzkriterien:

1. Wörter hinzufügen:

   - Der Admin kann über eine Oberfläche ein neues Wort eingeben.
   - Es gibt ein Feld zur Eingabe des neuen Wortes und einen Button "Hinzufügen".
   - Nach dem Hinzufügen wird das neue Wort in der Datenbank gespeichert.
   - Eine Erfolgsmeldung wird angezeigt, wenn das Wort erfolgreich hinzugefügt wurde.

2. Wörter löschen:
   - Der Admin sieht eine Liste aller verfügbaren Wörter aus der Datenbank.
   - Jedes Wort in der Liste hat einen Button "Löschen".
   - Nach dem Klick auf "Löschen" wird das entsprechende Wort aus der Datenbank entfernt.
   - Eine Erfolgsmeldung wird angezeigt, wenn das Wort erfolgreich gelöscht wurde.

## Sicherheitskonzept

Unser Sicherheitskonzept umfasst diese Massnahmen:

- Authentifizierung
- RBAC
- Datenübertragung

## Arbeitsplanung

Für die Arbeitsplanung haben wir uns ausgetauscht und eine grobe Aufgabensammlung erstellt. Die Zeitzuteilung wurde in einer Mappe im Ordner documents dokumentiert.

#### Fazit Arbeitsplanung

a

## Frameworks

Im diesem Projekt wurden folgende Frameworks und Tools verwendet:

- **React:** Für Frontend-Entwicklung
- **Spring Boot:** Für Backend-Entwicklung
- **Axios:** Für Kommunikation zwischen Frontend und Backend
- **Docker:** Für die Bereitstellung einer isolierten Datenbankinstanz
- **Jest und React Testing Library:** Testen des Frontends

## Test-Konzept

## Arbeitsjournal

### Mazlum

#### 22.11.24 Block 7

Im Block 7 haben Fabian und ich uns mit der Arbeitsplanung beschäftigt. Nachdem festgelegt wurde wer welche Aufgaben trägt haben wir uns an die Arbeit gemacht.
Ich habe mit der Dokumentation begonnen und unseren Arbeitsplan visualisiert.

#### 22.11.24 Block 8

Im Block 8 ging es los mit Frontend. Alle notwendigen Fetch-Methoden wurden umgeschrieben und greifen über die Axios-Bibliothek auf unser Backend zu. Authorisierung wurde implementiert, Spiel hat letztendlich auch funktioniert.

### Fabian

#### 22.11.24 Block 7

Aufwand: 4h
Nach dem wir uns für unserere Projektidee entschieden haben, haben wir eine grobe Aufgabenteilung aufgestellt. Mazlum wird sich mit dem Frontend beschäftigen, wärend ich mich auf das Backend fokusiere. Damit sollen die Aufgaben passend verteilt werden und wir sollen nicht unnötig einander in die Quere kommen. 
Anschliessend habe ich die bereits zuvor im Unterricht behandelten Log-in und security files für das Backend zu erstellen. 

#### 22.11.24 Block 8

Aufwand: 4h
Es wurden die ersten Endpoints erstellt und an Mazlum kommuniziert, damit er weiss, welche er ansprechen kann. Die Funktion, dass man User anlegen sowie Wörter anlegen und löschen kann funktioniert aus Backend sicht bereits und wurde mit Insomnia überprüft und getestet.

#### 28.11.24 Block 9

Aufwand: 4h
Die Dokumentation wurde ausgearbeitet und auf Stand gebracht.
Nach einem harten kampf wurden Unit-Test zum einlesen und löschen von Wörtern implementiert.
Produktpräsentation vorbereitet und auf Projektabschluss vorbereitet.

## Login-Ablauf

1. Der Benutzer gibt Benutzername und Passwort ein.
2. Das Frontend sendet eine Anfrage an den Authentifizierungs-Endpunkt (/api/auth/login).
3. Nach erfolgreicher Authentifizierung wird ein Token zurückgegeben und im localStorage gespeichert.
4. Das Token wird für geschützte Anfragen (z. B. DELETE) als Authorization-Header verwendet

## Test Protokoll

### Backend

#### WordControllerTest

Prüft, ob neue Wörter hinzugefügt werden können und gelöscht werden können.
Wichtigste Funktion des ganzen Spiels.

### Frontend

#### App.test.js

Prüft, ob jede Route die korrekte Komponente rendert.

#### HangmanGame.test.js

Prüft, ob die HangmanGame-Komponente grundlegende Elemente wie Titel und Meldungen anzeigt.

#### Login.test.js

Prüft, ob die Login-Komponente korrekt rendert (Eingabefelder und Button).

## Fehlerbehebung

    Docker funktioniert nicht: Stelle sicher, dass Docker installiert ist und der Daemon aktiv ist.
    npm-Befehle schlagen fehl: Überprüfe, ob Node.js installiert ist (empfohlene Version: 16 oder höher).
    Maven-Befehle schlagen fehl: Stelle sicher, dass Maven in der Umgebungsvariable PATH eingetragen ist.
