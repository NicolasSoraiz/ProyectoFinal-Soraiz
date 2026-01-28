import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDwpdhWppDbH6w8Cwfz4Jlc1FMeEmIyESs",
    authDomain: "digital-market-8d556.firebaseapp.com",
    projectId: "digital-market-8d556",
    storageBucket: "digital-market-8d556.firebasestorage.app",
    messagingSenderId: "616429084947",
    appId: "1:616429084947:web:6a8f115cd9c557dbc7fae6"
}

export const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)