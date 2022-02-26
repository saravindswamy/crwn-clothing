import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore' // for database

import 'firebase/compat/auth' //for authentication

const config = {
    apiKey: "AIzaSyBTjZUc90a0cxGTOAROp1F_VFwozjqmkyc",
    authDomain: "crwn-db-6269f.firebaseapp.com",
    projectId: "crwn-db-6269f",
    storageBucket: "crwn-db-6269f.appspot.com",
    messagingSenderId: "663061842903",
    appId: "1:663061842903:web:06b0685d883fd22ea61992",
    measurementId: "G-39HB75CK8W"
}

firebase.initializeApp(config)

export const auth = firebase.auth();
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;