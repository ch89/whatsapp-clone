import firebase from "firebase"

let app = firebase.initializeApp({
	apiKey: "AIzaSyCdIxXiaW_nQih0xWdW3HFi7_LttdJhrbo",
	authDomain: "whatsapp-clone-1f95d.firebaseapp.com",
	databaseURL: "https://whatsapp-clone-1f95d.firebaseio.com",
	projectId: "whatsapp-clone-1f95d",
	storageBucket: "whatsapp-clone-1f95d.appspot.com",
	messagingSenderId: "708362666400",
	appId: "1:708362666400:web:66bf422cda60dae13c64c5",
	measurementId: "G-FER84VTG86"
})

let db = app.firestore()
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()

export { db, auth, provider }