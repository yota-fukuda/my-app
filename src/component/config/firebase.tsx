import firebase from 'firebase/app';
import 'firebase/firestore';
import {List} from './models'

const firebaseConfig = {
    apiKey: "AIzaSyDNeinkSrz4VPcO0Sy_tZz6MGlujotkx5M",
    authDomain: "app-ts-b49f3.firebaseapp.com",
    projectId: "app-ts-b49f3",
    storageBucket: "app-ts-b49f3.appspot.com",
    messagingSenderId: "632722867696",
    appId: "1:632722867696:web:d113a225554a9509ffc935",
    measurementId: "G-7HV5ZH7VYB"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  // firebase.analytics();

  export const addDoc = async (collectionName: string, list: List) => {
    try {
      await db.collection(collectionName).add(list)
    } catch (error) {
      alert(error)
    }
  }
  
  export const updateDoc = async (collectionName: string, list: List) => {
    try {
      await db.collection(collectionName).doc(list.id).set(list)
    } catch (error) {
      alert(error)
    }
  }
  
  export const deleteDoc = async (collectionName: string, list: List) => {
    try {
      await db.collection(collectionName).doc(list.id).delete()
    } catch (error) {
      alert(error)
    }
  }


export default firebase;
export const db = firebase.firestore();