import firebase from "firebase/app"
import 'firebase/auth';
import 'firebase/firestore';


const app = firebase.initializeApp({
  apiKey: "AIzaSyDbiFCpOrcMW0hZQhthjKdhqcRAtLdaowg",
  authDomain: "insta-drive-ee98c.firebaseapp.com",
  projectId: "insta-drive-ee98c",
  storageBucket: "insta-drive-ee98c.appspot.com",
  messagingSenderId: "272535344275",
  appId: "1:272535344275:web:16bad5712128198eb12966",
  measurementId: "G-V76FZX3CSG"



  
});

const firestore = app.firestore()
export const database = {
  folders: firestore.collection("folders"),
  files: firestore.collection("files"),
  formatDoc: doc => {
    return { id: doc.id, ...doc.data() }
  },
  getCurrentTimestamp: firebase.firestore.FieldValue.serverTimestamp,
}

  // firebase.analytics();
// export const storage = app.storage()
export const auth = app.auth()
export default app