import firebase from "firebase";

const firebaseConfig = {
	apiKey: "AIzaSyCC_qJiKybjwMUp6aMYD-uvqnc0uY-E_wY",
	authDomain: "clone-build.firebaseapp.com",
	databaseURL: "https://clone-build.firebaseio.com",
	projectId: "clone-build",
	storageBucket: "clone-build.appspot.com",
	messagingSenderId: "746065498966",
	appId: "1:746065498966:web:eda2e61f01f9a2ccd27cf7",
	measurementId: "G-6343RK0DKK",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
