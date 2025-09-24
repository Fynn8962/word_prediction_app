# Word Prediction App

**Beschreibung:**  
<div>
Eine mobile App, die Wörter  vervollständigt und so das Tippen schneller und effizienter macht.
<p align="right">
  <img src="https://github.com/Fynn8962/Lern-Periode-11/blob/main/images/word_prediction_icon.png" alt="App home-screen" width="200">
</p>
</div>

---

## Projektdaten

- **Startdatum:** 22.08.2025  
- **Fertigstellung:** 24.09.2025

---

## Dokumentation
Weitere Details zum Entwicklungsprozess und der App: [Lern-Periode 11](https://github.com/Fynn8962/Lern-Periode-11)

---

## Projektbeschreib

Die App beschleunigt das Tippen mit Satzvorhersage und Autovervollständigung. Sie schlägt die wahrscheinlichsten Wörter vor und erleichtert so schnelles Schreiben. Texteingaben können direkt in Google gesucht werden.

### Funktion           
Die Word-Prediction Applikation wurde mithilfe des React-Nativ framework "Expo" in TypeScript erstellt. Die besteht aus zwei grundlegenden Tabs, diese sind der Homescreen, welcher die Hauptfunktion darstellt und eine About-Section welche eine kleine Erklärung beinhaltet. 

Die Funktion der WordPrediction wird mithilfe eines Files ([wordPrediction.ts](https://github.com/Fynn8962/word_prediction_app/tree/main/utils)) ermöglicht. Dieses TypeScript File war ursprünglich eine Python File, welches mithilfe von KI umgeschrieben wurde. Die Homepage der Applikation greift auf die "Vorhersage" Funktion dieses TypeScript Files zu und zeigt somit passende, nächste Wörter an. 

Zusätzlich hat die App eine integrierte Google Suche, welche den Suchbegriff automatisch an die Google übergibt und im Browser öffnet. Beim ersten Mal erscheint ein Hinweisdialog, welcher denn Nutzer über die Suche informiert.

 &nbsp;

  &nbsp;


**Applikation Homescreen:**                                       
<img src="https://github.com/Fynn8962/Lern-Periode-11/blob/main/images/word_prediction_home.jpg" alt="App home-screen" width="300" >                     

 &nbsp;

**Applikation Wortvorhersage:**                                
Nach Eingabe von mindestens zwei Wörtern wird dem Benutzer eine Auswahl an passenden Wörtern angezeigt. Diese können ausgewählt und automatisch in der Suchleiste hinzugefügt werden.                        
<img src="https://github.com/Fynn8962/Lern-Periode-11/blob/main/images/word_prediction_search.jpg" alt="App searching" width="300" >
<img src="https://github.com/Fynn8962/Lern-Periode-11/blob/main/images/word_prediction_suggestion.jpg" alt="App word suggestion" width="300" >

 &nbsp;

**Applikation Googel-Suche:**               
Wird vom Benutzer die Google Suche zugelassen, wird das eingegebene im Browser gegoogelt.                        
<img src="https://github.com/Fynn8962/Lern-Periode-11/blob/main/images/word_prediction_search_google.jpg" alt="App search with Google" width="300" >

 &nbsp;

**Applikation Informationsscreen:**                     
Zeigt einen kurzen Informationstext über die Funktion des Programmes.           
<img src="https://github.com/Fynn8962/Lern-Periode-11/blob/main/images/word_prediction_about.jpg" alt="App about-screen" width="300" >

