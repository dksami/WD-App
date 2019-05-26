import Link from "next/link";
import Header from "../components/header";
import firebase from './firebase';
import 'firebase/firestore';
import React from 'react'
import 'firebase/auth';


export default class Index extends React.Component {
  constructor(props){
    super(props)
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        var displayName = user.displayName;
        var email = user.email;
        var emailVerified = user.emailVerified;
        var photoURL = user.photoURL;
        var isAnonymous = user.isAnonymous;
        var uid = user.uid;
        var providerData = user.providerData;
        console.log("user is signed in")

      } else {
      console.log("user is signed oyut")
      }
    });
  }

  render(){
  
    return (
      <main>
        <Header />
        <section>
          <Link href="/login">
            <a>Go to About Me</a>
          </Link>
        </section>
      </main>
    )
  }

}

