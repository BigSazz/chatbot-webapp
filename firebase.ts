import { getApp, getApps, initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: 'AIzaSyDmypheB9zeN5ivLrNFudVKxgNgECM4DbU',
	authDomain: 'chatbot-webapp-42243.firebaseapp.com',
	projectId: 'chatbot-webapp-42243',
	storageBucket: 'chatbot-webapp-42243.appspot.com',
	messagingSenderId: '1071138924662',
	appId: '1:1071138924662:web:4a775a9794658ac946d757',
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
