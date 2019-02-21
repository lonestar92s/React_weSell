import React, { Component } from 'react'
import FacebookLogin from 'react-facebook-login';
import '../App.css'


export default class Home extends Component {
    render() {
        const responseFacebook = (response) => {
      console.log(response);
    }
        return (
     <div className="Login">
      	<FacebookLogin>
        appId="" 
        fields="name,email,picture"
        callback={responseFacebook}
      	</FacebookLogin>
      </div>

        )
    }
}
        
