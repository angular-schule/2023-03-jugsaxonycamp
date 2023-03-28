<img src="https://assets.angular.schule/header-intensivworkshop.png">

#### **mit Ferdinand Malcher**

<hr>

**Herzlich Willkommen zum JUG Saxony Camp 2023 – schön, dass du dabei bist!**  
In diesem Repository findest du alle Infos zur Vorbereitung und während des Workshops den Quelltext unserer Beispielanwendung.



# ✅ Vorbereitung


> ⚠️ **Bitte führe die Vorbereitung rechtzeitig VOR dem Workshop aus, damit wir ohne Zeitverlust loslegen können.**

Die gesamte Installation wird rund 30 Minuten dauern.

## Benötigte Software

1. **Node.js 14, 16 oder 18** (jeweils die aktuelle Nebenversionsnummer): [https://nodejs.org](https://nodejs.org)
   + (Mac-User sollten ggf. Homebrew verwenden, [siehe Anleitung](https://presentations.angular.schule/HOMEBREW_NODE).)
2. **Google Chrome:** [https://www.google.com/chrome/](https://www.google.com/chrome/)
3. **Visual Studio Code:** [https://code.visualstudio.com](https://code.visualstudio.com)
4. **Angular Language Service für VS Code:** [Angular Language Service (`Angular.ng-template`)](https://marketplace.visualstudio.com/items?itemName=Angular.ng-template)
    - Installiere die Extension über den *Extensions Browser* direkt im Editor.


⚠️ Überprüfe bitte anschließend noch einmal die installierten Versionen:

```
node -v
> Erwartet: 14.20.x, 16.13.x, 18.10.x oder höher, aber nicht 19.x!

npm -v
> Erwartet: 6.x oder höher
```


## Projekt installieren

Wir haben bereits ein Projekt vorbereitet, mit dem wir im Workshop arbeiten werden.
Bitte klone dieses Repo (oder [lade es als ZIP herunter](https://github.com/angular-schule/2023-03-jugsaxonycamp/archive/refs/heads/main.zip))und installiere das Angular-Projekt auf deinem Rechner. Führe dazu in deinem Arbeitsverzeichnis die folgenden Befehle aus.

### Repository klonen mit Git

```bash
git clone https://github.com/angular-schule/2023-03-jugsaxonycamp.git
```

### Installieren

```bash
cd 2023-03-jugsaxonycamp
cd book-rating
npm install
```

Die Installation kann bei langsamer Internetverbindung sehr lange dauern. Warte das `npm install` mit Geduld ab!

### Projekt starten

Um das Projekt zu starten, führe den folgenden Befehl im Projektordner `book-rating` aus:

```bash
npx ng serve
# ODER
npm start
```

> Auf http://localhost:4200 sollte nun eine Website mit dem Text *"Hallo JUG Saxony Camp 2023!"* erscheinen!


Beende danach den laufenden Webserver mit Strg + C.
Wenn du bis hierhin alles erledigt hast, bist Du startbereit für den Workshop! 🥳


### Wir freuen uns schon! 🙂

Wenn bei allen Teilnehmenden das Grundgerüst steht, können wir ohne Zeitverlust loslegen.
Sollte es zu Problemen kommen, melde dich bitte einfach per Mail an [team@angular.schule](mailto:team@angular.schule).

<hr>

<img src="https://assets.angular.schule/logo-angular-schule.png" height="60">

### &copy; https://angular.schule | Stand: 28.03.2023

