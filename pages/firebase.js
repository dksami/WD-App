import firebase from 'firebase/app';
var firebaseConfig = {
    apiKey: "AIzaSyAuTzATnAWfeX3_ClAVhKjCrZ8fM9OeUkg",
    authDomain: "wooapp-66644.firebaseapp.com",
    databaseURL: "https://wooapp-66644.firebaseio.com",
    projectId: "wooapp-66644",
    storageBucket: "wooapp-66644.appspot.com",
    messagingSenderId: "19987481390",
    appId: "1:19987481390:web:f3102690721a773c"
  };
  // Initialize Firebase
  if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
export default firebase;
