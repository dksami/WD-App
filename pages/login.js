import Link from "next/link"
import Head from "next/head"
import React from 'react'
import firebase from './firebase';
import 'firebase/auth';
import Router from 'next/router'


export default class Index extends React.Component {
    constructor(props){
      super(props)
        this.state = {
            email : null,
            password : null,
            loading : true
        }
      
    }
    componentDidMount(){
        firebase.auth().onAuthStateChanged((user)=> {
            
            if (user) {
              var displayName = user.displayName;
              var email = user.email;
              var emailVerified = user.emailVerified;
              var photoURL = user.photoURL;
              var isAnonymous = user.isAnonymous;
              var uid = user.uid;
              var providerData = user.providerData;
              console.log("user is signed in")
                Router.push("/home")

            } else {
                this.setState({loading:false})
            console.log("user is signed oyut")
            }
          });
    }
    Login(){
        if(this.state.email != "" && this.state.password != ""){

        
        firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((firebaseUser) => {
            if (firebaseUser) {
              console.log("Success")
            }
          }).catch((error) => {
          console.log("Wrong pw")
          });
        }
    }
 

    render(){
        console.log(this.state)
        return(
        <section>
        <Head>	
	<link rel="icon" type="image/png" href="../static/images/icons/favicon.ico"/>
	<link rel="stylesheet" type="text/css" href="../static/vendor/bootstrap/css/bootstrap.min.css"/>
	<link rel="stylesheet" type="text/css" href="../static/fonts/font-awesome-4.7.0/css/font-awesome.min.css"/>
	<link rel="stylesheet" type="text/css" href="../static/fonts/iconic/css/material-design-iconic-font.min.css"/>
	<link rel="stylesheet" type="text/css" href="../static/vendor/animate/animate.css"/>	
    <link rel="stylesheet" type="text/css" href="../static/vendor/css-hamburgers/hamburgers.min.css"/>
	<link rel="stylesheet" type="text/css" href="../static/vendor/animsition/css/animsition.min.css"/>
	<link rel="stylesheet" type="text/css" href="../static/vendor/select2/select2.min.css"/>	
	<link rel="stylesheet" type="text/css" href="../static/vendor/daterangepicker/daterangepicker.css"/>
	<link rel="stylesheet" type="text/css" href="../static/css/util.css"/>
	<link rel="stylesheet" type="text/css" href="../static/css/main.css"/>

	<script src="../static/vendor/jquery/jquery-3.2.1.min.js"></script>
	<script src="../static/vendor/animsition/js/animsition.min.js"></script>
	<script src="../static/vendor/bootstrap/js/popper.js"></script>
	<script src="../static/vendor/bootstrap/js/bootstrap.min.js"></script>
	<script src="../static/vendor/select2/select2.min.js"></script>
	<script src="../static/vendor/daterangepicker/moment.min.js"></script>
	<script src="../static/vendor/daterangepicker/daterangepicker.js"></script>

	<script src="../static/vendor/countdowntime/countdowntime.js"></script>
	<script src="../static/js/main.js"></script>
        </Head>

        <div className="limiter">
        {this.state.loading === false ? (
            	<div className="container-login100">
                <div className="wrap-login100">
                        <span className="login100-form-title p-b-26">
                            Welcome
                        </span>
                        <span className="login100-form-title p-b-48">
                            <i className="zmdi zmdi-coffee"></i>
                        </span>
    
                        <div className="wrap-input100 validate-input" data-validate = "Valid email is: a@b.c">
                            <input className="input100" type="text" onChange={(event) => this.setState({email:event.target.value})} name="email"/>
                            <span className="focus-input100" data-placeholder="Email"></span>
                        </div>
    
                        <div className="wrap-input100 validate-input" data-validate="Enter password">
                            <span className="btn-show-pass">
                                <i className="zmdi zmdi-eye"></i>
                            </span>
                            <input className="input100" type="password"  onChange={(event) => this.setState({password:event.target.value})} name="pass"/>
                            <span className="focus-input100" data-placeholder="Password"></span>
                        </div>
    
                        <div className="container-login100-form-btn">
                            <div className="wrap-login100-form-btn">
                                <div className="login100-form-bgbtn"></div>
                                <button className="login100-form-btn" onClick={() => this.Login()}>
                                    Login
                                </button>
                            </div>
                        </div>
    
                        <div className="text-center p-t-115">
                            <span className="txt1">
                                Don’t have an account?
                            </span>
    
                            <a className="txt2" href="#">
                                Sign Up
                            </a>
                        </div>
                </div>
            </div>
        ):(
             <div style={{backgroundColor:'#f2f2f2',flex:1}}>
                
            </div>
        )}
	
	</div>

        </section>)
    }
    }