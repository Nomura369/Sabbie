import { getApps, getApp, initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWidthEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  getReactNativePersistence,
  initializeAuth
} from 'firebase/auth';

import {
  getFirestore,
  doc,
  setDoc,
  initializeFirebase,
  // getDoc
} from "firebase/firestore";

import AsyncStorage from '@react-native-async-storage/async-storage';

// Import the functions you need from the SDKs you need
//import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDd-cOu93XhSaQx9hJT6AyfDloqk0Mb0s8",
  authDomain: "sabbie-6fea7.firebaseapp.com",
  projectId: "sabbie-6fea7",
  storageBucket: "sabbie-6fea7.appspot.com",
  messagingSenderId: "998454437009",
  appId: "1:998454437009:web:1702809d2f5d4c50b24b30"
};

const app_length=getApps().length>0;

// Initialize Firebase
const app = app_length ? getApp(): initializeApp(firebaseConfig);

const auth = app_length ? getAuth(app):
  initializeAuth(app,{
    persistence: getReactNativePersistence(AsyncStorage)
  });

  const db = getFirestore(app);

  export const login=async({email,password})=>{
    const userCredential=await signInWidthEmailAndPassword(auth,email,password);
    const user = userCredential.user;
    return user;
  }

  export const register = async({name,email,password})=>{
    try{
      const userCredential=
       await createUserWithEmailAndPassword(auth,email,password);
       const user = userCredential.user;
       await setDoc(doc(db,"users",user.uid),{
         name,
         email:"",
         tel:"",
       });
       return user;
    } catch (e){
      console.log('erro...')
      console.log(e)
    }
  }

  export const logout =()=>{
    signOut(auth);
  }

  export const readUser = async()=>{
    const {uid} = auth.currentUser;

    try{
      const docRef= doc(db,"users",uid);
      const docSnap=await getDoc(docRef);

      if(docSnap.exists()){
        return docSnap.data();

      }else {
        return "No such document";

      }
    } catch(e){
      console.log(e)
    }
  }

  export const updateUser= async(userInfo)=>{
    const {uid} =auth.currentUser;
    try{
      const docRef=doc(db,"users",uid);
      await setDoc(docRef,userInfo);
      const docSnap=await getDoc(docRef);
      return docSnap.data();

    }catch(e){
      console.log(e)
    }
  }