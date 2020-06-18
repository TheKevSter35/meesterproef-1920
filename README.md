
# Concept: Digi-wijzer

A webapplication that teach Digital illiterate living in Amsterdam how the digital world works.With accessible games/tools they will learn for example: What for data is collected by company's and how to recognize a phishing mail. The user can earn points to see if there digital skills are improved. 

Also the webapllication can be expanded with more games/tools from different developers. For Examples students from HvA that also have a fun idea that can a new addition to Digi-wijzer.

![e3f13b9d4d05722b06123c2fb5ab7c15](https://user-images.githubusercontent.com/43183768/84875798-c080e380-b086-11ea-998c-a23973f62cca.jpg)

## Live demo
https://meesterproef-1920.herokuapp.com/

## Collaborators

Kevin Curi// https://github.com/TheKevSter35

Kevin Kreule// https://github.com/qiubee

Randy Dalgliesh// https://github.com/randy554


## Install 

```
# Clone repository
git clone https://github.com/TheKevSter35/meesterproef1920.git

cd meesterproef1920

# Install dependencies
npm install

# Start liveserver 
npm run dev

# Start Gulp-clean-css
npm run watch
```

## Design rationale (Dutch Version)

### Debriefing

Wij bevinden ons tegenwoordig in een samenleving waar we steeds meer afhankelijk zijn van het digitale wereldje. In dit wereldje delen we steeds vaker onze gegevens met bedrijven en instellingen zonder hier altijd goed bij stil te staan. Denk bijvoorbeeld aan het nemen van een nieuwe telefoon abonnement, winkelen met een bonuskaart of een account aanmaken bij een webshop. Al deze verschillende soorten data worden dagelijks over ons verzamelt. Waarom, door wie, hoe heeft dit invloed op mijn leven en wat kan ik er tegen doen? Voor de een liggen antwoorden op deze vragen wat meer voor de hand dan de ander. Het feit is dat een aanzienlijk groot deel van Amsterdam weinig tot geen digitale vaardigheden bezit. Deze doelgroep moet toch mee kunnen draaien met steeds meer digitaliserende maatschappij. Hoe kan hiervoor gezorgd worden? 

Het Ontwerplab Digitale Stad is een samenwerkingsverband tussen de Gemeente Amsterdam, de OBA en ontwerpcollectief idiotes.  

Samen moet de opdrachtgevers: Ontwerplab OBA en ontwerpcollectief idiotēs. Gaan Team Toolbox aan de slag om binnen 5-6 weken een digitaal interactief product te ontwikkelen om Niet digitale vaardige Amsterdammers meer transpiratie te geven over hun data en waarvoor het gebruikt gaat/kan worden. 

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

Een cruciaal onderdeel van deze applicatie is de kaartweergave. Op de kaartweergave pagina vinden gebruikers een kaart van Amsterdam. Op deze kaart zijn verschillende locaties spellen te vinden die de gebruikers kunnen spelen. Er zijn zowel losse spellen te spelen als spellen die onderdeel maken van een route met een reeks spellen. Deze routes bevatten een verhaal die de gebruikers stapsgewijs begeleiden in spelen van de gerelateerde spellen. De markers (iconen) van de spellen zijn geplaatst op specifieke locaties in Amsterdam. Dit gaat door middel van longitude en latitude data in een Google sheet bestand die weer gelinkt zijn aan een kaart.

![Screenshot_2020-06-18_15 34 17](https://user-images.githubusercontent.com/43183768/85027081-c9061680-b179-11ea-8e4e-0b588e8eb1fa.png)

latitude en longitute

## Code

Digi-weet is gemaakt met HTML, CSS , JavaScript, NodeJS, Express en EJS.

Wij gebruiken Node voor onze servertaal, omdat het een taal is waar wij bekend mee zijn. Ook gebruiken wij Express om de connectie met de server en client te maken en omdat het makkelijk te gebruiken is. We gebruiken compression om de bestanden klein te houden. 

Om de map en chatbot laden we in met een <iframe> die wij van de opdrachtgever hebben gekregen. 

- Code voorbeelden

### Structuur

- server/
    - modules/ (JS functies)
    - Routes/ (Render componenten)
    - server root bestand
    - config files
- client/
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
        - Server application root file
- .eslintrc.json/ een rightlijn van JS schrijven

- gulpfile.js/ Alle losse css bestand te combineren.

- package.json

- .gitignore

- Procfile/ Voor heroku om the site te kunnen draaien.

### Product biography 
Kevin Curi// https://github.com/TheKevSter35/meesterproef-1920/wiki/

Kevin Kreule// https://github.com/qiubee/meesterproef-1920/wiki/

Randy Dalgliesh// https://github.com/randy554/meesterproef-1920/wiki/

## Reflection



