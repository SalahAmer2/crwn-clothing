import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAh1ozUeZZgK4FLX0lW7rtEXq9PWOhnofc",
    authDomain: "crwn-db-c629f.firebaseapp.com",
    databaseURL: "https://crwn-db-c629f.firebaseio.com",
    projectId: "crwn-db-c629f",
    storageBucket: "crwn-db-c629f.appspot.com",
    messagingSenderId: "608358319306",
    appId: "1:608358319306:web:056c57fcfdda587c1b6033",
    measurementId: "G-J0RVH0TG0L"
}

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if(!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData    
            })
        } catch (error) {
            console.log('error creating user', error.message);
        }
    }

    return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;