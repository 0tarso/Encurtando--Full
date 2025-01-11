require("dotenv").config()
const { initializeApp } = require("firebase/app");
const { getFirestore } = require("firebase/firestore")

// Configs de conexão com o firebase
const firebaseConfig = {
    apiKey: process.env.API_KEY,
    authDomain: process.env.AUTH_DOMAIN,
    projectId: process.env.PROJECT_ID,
    storageBucket: process.env.STORAGE_BUCKET,
    messagingSenderId: process.env.MESSAGING_SENDER_ID,
    appId: process.env.APP_ID
};

// Inicialização no app
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

module.exports = { app, db }