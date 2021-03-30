import firebase from "firebase"

const app = firebase.initializeApp({
  apiKey: "AIzaSyDHbrQ2eaRY3BlcwZBL7he9Ntqh1QwRE1g",
  authDomain: "todo-app-2bd4a.firebaseapp.com",
  databaseURL: "https://todo-app-2bd4a.firebaseio.com",
  projectId: "todo-app-2bd4a",
  storageBucket: "todo-app-2bd4a.appspot.com",
  messagingSenderId: "884213506436",
  appId: "1:884213506436:web:d5258fcb81c490ebf3bdd1",
  measurementId: "G-FWLKFTDLGJ"


  
})

export const auth = app.auth()

export const firestore = app.firestore()


export const db = {

  folders:firestore.collection('folders'),
  files:firestore.collection('files')
}

export default app
