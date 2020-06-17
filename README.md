
# Concept: Digi-wijzer

A webapplication that teach Digital illiterate living in Amsterdam how the digital world works.With accessible games/tools they will learn for example: What for data is collected by company's and how to recognize a phishing mail. The user can earn points to see if there digital skills are improved. 

Also the webapllication can be expanded with more games/tools from different developers. For Examples students from HvA that also have a fun idea that can a new addition to Digi-wijzer.

![e3f13b9d4d05722b06123c2fb5ab7c15](https://user-images.githubusercontent.com/43183768/84875798-c080e380-b086-11ea-998c-a23973f62cca.jpg)



### Features

* A streetview from amsterdam were the users can choose alle the different games/tools.
* Toggle for streetview or list view.
* Earn points.
* Compare points with different users.
* You get points if you guess it first
* Game over screen with the winner of the game.

#### Commands
* /help : explain how the game works
* /room : Show Room Name
* /marco : polo
* /hint : give a hint (not working now)

## DLC

![DLC](https://user-images.githubusercontent.com/43183768/81080010-90bfb700-8ef0-11ea-8d9d-7f906e3e16d6.png)

## Events

* ``` new-user ``` : You have joined message (other users will not see this message) 
* ``` room-created ``` : Creates a new room
* ``` user-connected ```: a user has joined a room 
* ``` ronde-message ```:  broadcast message which round the game is
* ``` send-chat-message ``` triggers from input chat
* ``` correct-message ``` message that you have the correct answer
* ``` update-score ``` Add a point to the user, message is send to broadcast
* ``` chat-message ``` message is send to broadcast
* ``` user-disconnected ``` user has leaved the room
* ``` newImage ``` add new image
* ``` game-over ``` The game is over and the room wil be deleted


## Install 

```
# Clone repository
git clone https://github.com/TheKevSter35/meesterproef1920.git

cd meesterproef1920

# Install dependencies
npm install

# Start liveserver + eslint
npm run dev

# Start Gulp-clean-css
npm run watch
```

## Dependencies 

```
   "body-parser": "^1.19.0",
    "compression": "^1.7.4",
    "ejs": "^3.0.1",
    "express": "^4.17.1",
    "express-session": "^1.17.1",
    "heroku": "^7.41.1",
    "node-fetch": "^2.6.0",
    "npm": "^6.14.5",
    "uuid": "^8.1.0"
```
## devDependencies 

```
   "eslint": "^7.1.0",
    "gulp": "^4.0.2",
    "gulp-clean-css": "^4.3.0",
    "gulp-concat-css": "^3.1.0",
    "nodemon": "^2.0.2"
```

## Localfocus 
https://localfocus.nl/


