# kestrel

Kestrel is an idea board web app for sprint retrospective meetings implemented using [Ember](http://emberjs.com) and [Firebase](https://firebase.google.com).

### Background

This project is part of [52projects](https://donny.github.io/52projects/) and the new stuff that I learn through this project: [EmberFire](https://github.com/firebase/emberfire), [Ember Paper](http://miguelcobain.github.io/ember-paper), [Ember](http://emberjs.com) (revisit), and [Firebase Web](https://firebase.google.com/docs/web/setup).

### Project

Kestrel utilises the Firebase Realtime Database that synchronises in realtime to every connected client (using WebSocket). This allows changes made by one user (e.g. new card creation, card voting, etc) to be propagated to other connected Kestrel users. Kestrel facilitates sprint retrospective meetings among distributed team members. After cloning Kestrel and running `npm install && ember build && firebase deploy`. Ensure that we change `config/environment.js` to add Firebase API key. And then, we need to login to Firebase console and create a new shared user account. Give this account to participating team members. The screenshot of Kestrel:

![Screenshot](https://raw.githubusercontent.com/donny/kestrel/master/screenshot.png)

### Implementation

...

### Conclusion

...
