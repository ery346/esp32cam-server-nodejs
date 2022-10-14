const {initializeApp} = require('firebase/app');
const { getDatabase, ref, onValue, set, update} = require('firebase/database');
const express = require('express');
const http = require('http');
const port = process.env.PORT || 3000;
const server = express();

const SetInterval = require('set-interval');

const firebaseConfig = {
    apiKey: "AIzaSyCOoDU_3dejelgL0BUmaRteeTtFpt9xqpc",
    authDomain: "esp8266-test1-86ada.firebaseapp.com",
    databaseURL: "https://esp8266-test1-86ada-default-rtdb.firebaseio.com",
    projectId: "esp8266-test1-86ada",
    storageBucket: "esp8266-test1-86ada.appspot.com",
    messagingSenderId: "1063224577587",
    appId: "1:1063224577587:web:cc243e2b0ca407c90e9d46"
  };


  const app = initializeApp(firebaseConfig);
  const db = getDatabase(app);


  readHeartPulses();
  function readHeartPulses(){
     const changeRef = ref(db, 'isAlive/' + 'vitalSigns/' );
     onValue(changeRef, (snapshot) => {
         if (snapshot) { // detecta el cambio 
             console.log('status on');
             SetInterval.clear('test')
             SetInterval.start(ca, 12000, 'test')
            function ca(){
             console.log('status off');
             const updateRef = ref(db, 'isAlive/' );
             update(updateRef, {status: false})
                SetInterval.clear('test')
             }
         }
         });
  }


  server.listen(port, () => {
    console.log('Servidor corriendo');
})