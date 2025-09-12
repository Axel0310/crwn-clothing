import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAEiTnazWcr-WUDRMe8q1C0b87RCIpsJS0",
  authDomain: "crwn-clothing-db-d17c6.firebaseapp.com",
  projectId: "crwn-clothing-db-d17c6",
  storageBucket: "crwn-clothing-db-d17c6.firebasestorage.app",
  messagingSenderId: "814553440749",
  appId: "1:814553440749:web:547a9e6716e60bee7d87e4",
};

const firebaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth, additionalInfo) => {
  const userDocRef = doc(db, "users", userAuth.uid);
  const userSnapShot = await getDoc(userDocRef);

  if (!userSnapShot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInfo
      });
    } catch (error) {
      console.log(
        "Following error occured trying to create user",
        error.message
      );
    }
  }

  return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
    if(!email || !password) return;
    return await createUserWithEmailAndPassword(auth, email, password);
}

export const signInEmailAndPassword = async (email, password) => {
  if(!email || ! password) return;
  return await signInWithEmailAndPassword(auth, email, password);
}
