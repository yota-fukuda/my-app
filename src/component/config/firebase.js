import * as firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

const firebaseConfig = {
    // 各人の認証情報を記述
    apiKey: "AIzaSyDNeinkSrz4VPcO0Sy_tZz6MGlujotkx5M",
    authDomain: "app-ts-b49f3.firebaseapp.com",
    projectId: "app-ts-b49f3",
    storageBucket: "app-ts-b49f3.appspot.com",
    messagingSenderId: "632722867696",
    appId: "1:632722867696:web:d113a225554a9509ffc935",
    measurementId: "G-7HV5ZH7VYB"
}

firebase.initializeApp(firebaseConfig)

export default firebase;