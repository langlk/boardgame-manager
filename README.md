# Boardgame Manager

### _Epicodus Project in Angular, November 3, 2017_

### By Kelsey Langlois

## Description

_This is an app to help manage regular boardgame nights. It stores information about players' preferences and schedules, so that event organizers can pick the best day for a given game night. It also stores event listings, so that players can find game nights that match their interests._

## Setup/Installation Requirements

* Clone this repository from: [github.com/MacKLess/indiegofundstart](https://github.com/MacKLess/indiegofundstart.git).
* In order to run this app, you will need to set up a Firebase Database:
  * First, make a free Firebase account [here](https://firebase.google.com/).
  * Then, create a project from the [Firebase console](https://console.firebase.google.com/).
  * Create a file in the project directory at ```src/app/api-keys.ts```.
  * Once the Firebase project is created, select "Add Firebase to your web app."
    * Copy the information from the pop-up window into ```api-keys.ts``` as follows:
    ```typescript
    export var masterFirebaseConfig = {
      apiKey: "xxxx",
      authDomain: "xxxx.firebaseapp.com",
      databaseURL: "https://xxxx.firebaseio.com",
      storageBucket: "xxxx.appspot.com",
      messagingSenderId: "xxxx"
    };
    ```
  * Ensure that ```/src/app/api-keys.ts``` is included in your ```.gitignore``` file.
  * Return to the [Firebase console](https://console.firebase.google.com/) and select your database, then select "Database" from the left-hand navbar.
  * Select the "Rules" option from the blue navbar near the top of the page.
  * Change both the ```".read"``` and ```".write"``` properties to ```"true"```.
  * To upload a starter set of events and players:
    * Find your project in the [Firebase console](https://console.firebase.google.com/).
    * Select the "Database" option from the left navbar.
    * Select the 3 dots on the right of the grey bar with the database url.
    * From that menu, select "Import JSON".
    * Upload ```database-starter.json``` from the project root directory.
* Make sure you have Node.js installed. Instructions for doing so can be found [here](https://www.learnhowtoprogram.com/javascript/getting-started-with-javascript-2f9a73dc-b7f5-4a22-9101-e69d49f552ac/installing-node-js).
* From the project root directory, run the following commands in the terminal:
  ```
  npm install
  bower install
  ng serve
  ```
* You can now open the site in your web browser at ```localhost:4200```.

## Specifications

* Player record stores name, favorite game, preferred game types, and schedule.
* Users can add, edit, and delete players.
* Event record stores event name, location, date, and game types.
* Users can add, edit, and delete events.
* When creating an event, app provides suggested days based on the game types planned.

## Support and contact details

_Please contact [kels.langlois@gmail.com](mailto:kels.langlois@gmail.com) with questions, comments, or issues._

## Technologies Used

* JavaScript
* TypeScript
* Node.js
* Angular
* Bootstrap
* Firebase

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.0.0. To get help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

### License

Copyright (c) 2017 **Kelsey Langlois**

*This software is licensed under the MIT license.*
