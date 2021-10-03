const firebase = require("firebase");
// Required for side-effects
require("firebase/firestore");
const firebaseApp = firebase.initializeApp({
	apiKey: "AIzaSyBQRbtJ1EM6AQPRPwCfQYkMmnyFneHMQjI",
	authDomain: "clone-91985.firebaseapp.com",
	projectId: "clone-91985",
	storageBucket: "clone-91985.appspot.com",
	messagingSenderId: "120583409567",
	appId: "1:120583409567:web:9dac2de5b59f946c29f7aa",
	measurementId: "G-EPQ102S2LX"
});
const db = firebaseApp.firestore();
const auth = firebase.auth();
export { db, auth };
