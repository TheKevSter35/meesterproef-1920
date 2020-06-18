# Digi-weet

Digi-weet is a tool designed for all redidents of Amsterdam, particularly the digital illiterate, to teach how the digital world works. With accessible games/tools they will learn for example: What for data is collected by company's and how to recognize a phishing mail. The user can earn points to see if there digital skills are improved.

Also the webapllication can be expanded with more games/tools from different developers. For Examples students from HvA that also have a fun idea that can a new addition to Digi-wijzer.

![e3f13b9d4d05722b06123c2fb5ab7c15](https://user-images.githubusercontent.com/43183768/84875798-c080e380-b086-11ea-998c-a23973f62cca.jpg)

[**Visit the live demo**](https://meesterproef-1920.herokuapp.com/)

## Install

```bash
# Clone repository
git clone https://github.com/TheKevSter35/meesterproef1920.git

# Navigate to folder
cd meesterproef1920

# Install dependencies
npm install

# Start liveserver
npm run dev

# Start Gulp-clean-css
npm run watch
```

## Design rationale (dutch)

### Debriefing

Wij bevinden ons tegenwoordig in een samenleving waar we steeds meer afhankelijk zijn van het digitale wereldje. In dit wereldje delen we steeds vaker onze gegevens met bedrijven en instellingen zonder hier altijd goed bij stil te staan. Denk bijvoorbeeld aan het nemen van een nieuwe telefoon abonnement, winkelen met een bonuskaart of een account aanmaken bij een webshop. Al deze verschillende soorten data worden dagelijks over ons verzamelt. Waarom, door wie, hoe heeft dit invloed op mijn leven en wat kan ik er tegen doen? Voor de een liggen antwoorden op deze vragen wat meer voor de hand dan de ander. Het feit is dat een aanzienlijk groot deel van Amsterdam weinig tot geen digitale vaardigheden bezit. Deze doelgroep moet toch mee kunnen draaien met steeds meer digitaliserende maatschappij. Hoe kan hiervoor gezorgd worden?

Het Ontwerplab Digitale Stad is een samenwerkingsverband tussen de Gemeente Amsterdam, de OBA en ontwerpcollectief idiotes.  

Samen moet de opdrachtgevers: Ontwerplab OBA en ontwerpcollectief idiotēs. Gaan wij aan de slag om binnen 5-6 weken een digitaal interactief product te ontwikkelen om Niet digitale vaardige Amsterdammers meer transpiratie te geven over hun data en waarvoor het gebruikt gaat/kan worden.

Nog veel (minder digitaal vaardige) Amsterdammers zijn zich niet bewust over hoe zij zich online veilig kunnen bewegen. Zij zijn daarbij kwetsbaar voor het delen van persoonlijk gevoelige informatie en voor de online dataverzameling door verschillende organisaties. Zij weten niet wat voor data van hen wordt verzameld, waar de data voor bedoeld is en waarvoor het wordt gebruikt, en wie toegang heeft tot de data.

### Probleemstelling

Het Ontwerplab Digitale Stad wil een nieuwe toepassing ontwikkelen die minder digitaal vaardige Amsterdammers meer bewustwording geeft over de digitale wereld, laat zien wat voor invloed hun online gedrag heeft voor hun online veiligheid en privacy, en hen tools aanbiedt om hun digitale vaardigheden te kunnen verbeteren.

### Doelgroep

Het product moet toegankelijk zijn voor iedere Amsterdammer. De doelgroep is daarom breed. Iedere gebruiker, iemand die goed met een computer kan omgaan of moeite heeft met het navigeren op een computer, moet het product kunnen gebruiken.  Het product is specifiek gericht tot Amsterdammers die zich nog niet goed online kunnen weren tegen de dataverzameling van bedrijven en organisaties, waarmee dit product meer inzicht tot moet geven.

### Stakeholder

- OBA
- Gemeente van Amsterdam
- Ontwerplab Digitale Stad
- Ontwerpcollectief idiotēs
- Minder digitaal vaardige Amsterdammers

### Concept: (Digi-weet)

Digi-weet leert minder digitale vaardige Amsterdammers over hoe de digitale wereld werkt. Met behulp van hulpmiddelen, quizzen en vragen kunnen ze hun vaardigheden verhogen om zo meer digitaal vaardiger te worden. Digi-weet bevat onderwerpen zoals het bewust omgaan met persoonlijke data en het voorkomen van slachtoffer worden door internetcriminaliteit.

Wat voor functies bevat Digi-weet.

1. De gebruiker kan zien wat voor data aan een bedrijf overhandigt voor alle daagse  activiteiten. Denk aan gebruik maken van het openbaar vervoer en boodschappen.
2. Punten kunnen verdienen per tool/spel om te laten zien dat je digitale vaardigheden zijn verbeterd.
3. Een map van Amsterdam waar de gebruiker doorheen kan navigeren.
4. Scores vergelijken met anderen.

## Localfocus

![kaart_Digi-weet](https://user-images.githubusercontent.com/43183768/85029393-885bcc80-b17c-11ea-9ef5-0545ccce9e49.png)

Een cruciaal onderdeel van deze applicatie is de kaartweergave. Op de kaartweergave pagina vinden gebruikers een kaart van Amsterdam. Op deze kaart zijn verschillende locaties spellen te vinden die de gebruikers kunnen spelen. Er zijn zowel losse spellen te spelen, als spellen die onderdeel maken van een route met een reeks spellen. Deze routes bevatten een verhaal die de gebruikers stapsgewijs begeleiden in het spelen van de gerelateerde spellen. De markers (iconen) van de spellen zijn geplaatst op specifieke locaties in Amsterdam. Dit gaat door middel van longitude en latitude data in een Google sheet bestand die weer gelinkt zijn aan een kaart.

![Screenshot_2020-06-18_15 34 17](https://user-images.githubusercontent.com/43183768/85027081-c9061680-b179-11ea-8e4e-0b588e8eb1fa.png)

Om de kaart te realiseren hebben wij uiteindelijk gebruikt gemaakt van een kaart CMS systeem. Dit systeem heet Localfocus. Met Localfocus kun je jouw eigen data inzichtelijk maken door middel van een kaart, grafiek of tabel visualisatie. Localfocus is een interne tool bij de OBA. Een van de hoofdreden waarom zij hier gebruik van maken, is het verzamelen van data activiteiten uit de kaart. Daarom was het een grote vraag om hiermee verder te gaan.

![kaart_Digi-weet](https://user-images.githubusercontent.com/43183768/85030419-bb529000-b17d-11ea-8ad1-49dd70c30dfd.png)

## Code uitleg

### Gulp

Voor CSS hebben wij gulp-clean-css gebruikt om alle css bestanden in 1 minified css bestand te maken.

```js
const gulp = require('gulp')
const cleanCSS = require('gulp-clean-css')
const concat = require('gulp-concat-css')

gulp.task('buildCSS', () => {
  return gulp.src('public/css/*.css')
     .pipe(cleanCSS({compatibility: 'ie8'}))
     .pipe(concat('style.css'))
     .pipe(gulp.dest('public/css/minified'))
})

gulp.task('watch', function(){
  gulp.watch('public/css/*.css', gulp.series('buildCSS'))
})
 ```

### EJS

EJS is gebruikt om templates te maken. Met include voegen we EJS bestanden toe bijvoorbeeld head.ejs waar de `<head>` bevindt.

 ```html
 <!DOCTYPE html>
 <html lang="en">

 <%- include ('../partials/head.ejs') %>

 <body id="start">
     <main>
         <section>
             <h1>Login</h1>
             <form action="/overview">
                 <label for="username"> Naam</label>
                 <input type="text" name="username" placeholder="Gebruikersnaam">
                 <label for="username">wachtwoord</label>
                 <input type="password" placeholder="wachtwoord">
                 <button type="submit">Submit</button>
             </form>
         </section>
     </main>
 </body>
 </html>
 ```

### Routes

 ```js
 const router = require('express').Router()

 // controllers
 const welcome = require('./controllers/start')
 const introduction = require('./controllers/introduction')
 const login = require('./controllers/inlog')
 const overview = require('./controllers/overview')
 const addPlugin = require('./controllers/addplugin')
 const dashboard = require('./controllers/dashboard')
 const guest = require('./controllers/guest')
 const signup = require('./controllers/signup')
 const popup = require('./controllers/popup')
 const message = require('./controllers/message')

 router.get('/', welcome)
   .get('/intro', introduction)
   .get('/gast', guest)
   .get('/login', login.get)
   .get('/overzicht', overview.get)
   .get('/popup', popup.get)
   .get('/dashboard', dashboard.get)
   .get('/add-plugin', addPlugin)
   .get('/account-aanmaken', signup.get)
   .post('/login', login.process)
   .post('/delete-message', message.delete)

 module.exports = router
 ```

### Session

 ```js
 exports.get = function (req, res) {
   if (!req.session.userID) {
      return res.redirect('/')
   }
   const user = {
      name: req.session.name,
      score: req.session.score,
      level: req.session.level
   }
   return res.render('pages/overview', {
      user: user,
      usedTools: req.session.usedtools
   })
 }
 ```

### Score

 ```js
 function reviewAnswers (answers, pointsForCorrectAnswer, allAnswers) {
   let totalScore, totalAnswers, score, correctAnswers
   totalScore = totalAnswers = score = correctAnswers = 0
   Object.entries(answers).map((answer, index) => {
      if (answer[1] === '1') {
         score += pointsForCorrectAnswer
         correctAnswers += 1
      }
      totalScore += pointsForCorrectAnswer
      totalAnswers += index
   })
   if (allAnswers && isNaN(allAnswers) === false) {
      totalAnswers = allAnswers
      totalScore = pointsForCorrectAnswer * allAnswers
   }
   return {
      correctAnswers: correctAnswers,
      earnedPoints: score,
      totalPoints: totalScore
   }
 }

 function checkLevel (score) {
   switch (true) {
   case (score < 500):
      return 1
   case (score >= 500 && score < 1500):
      return 2
   case (score >= 1500 && score < 3000):
      return 3
   case (score >= 3000 && score < 5000):
      return 4
   case (score >= 5000 && score < 7000):
      return 5
   }
 }

 function progressToNextLevel (score, level) {
   let pointsToNextLevel = 0
   switch (level) {
   case 1:
      pointsToNextLevel = 500 - score
      break
   case 2:
      pointsToNextLevel = 1500 - score
      break
   case 3:
      pointsToNextLevel = 3000 - score
      break
   case 4:
      pointsToNextLevel = 5000 - score
      break
   case 5:
      pointsToNextLevel = 7000 - score
      break
   }
   return {
      pointsToNextLevel: pointsToNextLevel,
      nextLevel: level + 1
   }
 }

 function getLevelName (level) {
   const levelNames = ['Verkennen', 'Ontdekken', 'Leren', 'Onderzoeken', 'Begrijpen']
   return levelNames[level - 1]
 }

 function calculateTotalScore (toolCollection, key = 'highscore') {
   let total = 0
   toolCollection.map(function (tool) {
      total += tool[key]
   })
   return total
 }

 exports.review = reviewAnswers
 exports.checkLevel = checkLevel
 exports.levelName = getLevelName
 exports.toNextLevel = progressToNextLevel
 exports.getTotalScore = calculateTotalScore
 ```

### Structuur

```
# Server

- modules/ (JS functies)
- Routes/ (Render componenten)
- server root bestand
- config files

# Client
- public/ (client side)
    - CSS/  alle css bestanden met een minified css bestand.
    - JS/
    - Source/ Afbeelingen, Iconen, fonts
    - types/ (TypeScript types)
    - utils/ (General utility JavaScript functions)
    - Server application root file
- views (Render component)
    - partials/ (Navigatie, footer )
    - pages/ all ejs pages
    - Source/ Afbeelingen, Iconen, fonts
    - types/ (TypeScript types)
    - utils/ (General utility JavaScript functions)
    - Server application root filean JS schrijven
- gulpfile.js/ Alle losse css bestand te combineren.
- package.json
- .gitignore
- Procfile/ Voor heroku om the site te kunnen draaien.
```

## Product biography

To read the full design process of each individual team member, go to [**Product Biography team**](https://github.com/TheKevSter35/meesterproef-1920/wiki/Product-Biografie-team) in the wiki.
