import Link from "next/link"
import Head from "next/head"
import React from 'react'
import firebase from './firebase';
import 'firebase/auth';
import 'firebase/firestore';
import Router from 'next/router'


export default class Index extends React.Component {
    constructor(props){
      super(props)
        this.state = {
            key : null,
            sec : null,
            loading : true

        }
    
    }
    Proc(){
               if(this.state.key === null && this.state.sec == null){
                            this.setState({warn:'warning ! '})
               }else{
                this.setState({warn:false})

        firebase.firestore().collection("users").doc(this.state.user.uid).set({
          key:this.state.key,
          sec:this.state.sec
        })
        .then(()=> {
            console.log("Document successfully written!");
            this.setState({success : true})
        })
        .catch(function(error) {
            console.error("Error writing document: ", error);
        });
    }
}
    componentDidMount(){
        firebase.auth().onAuthStateChanged((user)=> {
            if (user) {
                this.setState({loading:false})
                this.setState({user})

              console.log("user is signed in")
              
            } else {
            console.log("user is signed oyut")
            Router.push("/login")

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
                            Lets Not Waste Time
                        </span>
                        <p>Fill your api detail below</p><br/>
                        <div className="wrap-input100 validate-input">
                            <input className="input100" type="text" onChange={(event) => this.setState({key:event.target.value})} />
                            <span className="focus-input100" data-placeholder="Consumer key	"></span>
                          
                        </div>
                        <div className="wrap-input100 validate-input">
                            <input className="input100" type="password" onChange={(event) => this.setState({sec:event.target.value})} />
                            <span className="focus-input100" data-placeholder="Consumer Secret	"></span>
                        
                        </div>
                        {
                            this.state.warn ? (
                                <p style={{color:'red'}} >Make Sure You Have Fill Both</p>
                            ) : (
                                <p></p>
                            )
                        }
                        <div className="container-login100-form-btn">
                            <div className="wrap-login100-form-btn">
                                <div className="login100-form-bgbtn"></div>
                                <button className="login100-form-btn" onClick={() => this.Proc()}>
                                    Procced
                                </button>
                            </div>
                        </div>
                        <br/>
                        {
                            this.state.success ? (
                                <p style={{}} >Success ! Now you can use your Mobile App or Pc App</p>
                            ) : (
                                <p></p>
                            )
                        }
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