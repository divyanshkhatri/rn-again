import React, {Component} from 'react';
import {Router, Scene, Actions, Stack} from 'react-native-router-flux';
import {AsyncStorage} from 'react-native';
import Signup from './routers/Signup';
import Login from './routers/Login';
import Main from './routers/Main';

export default class RouterComponent extends Component {

    constructor(props){
        super(props);

        AsyncStorage.getItem('token')
        .then((token) => {
            if(token) Actions.LoggedIn();
            else Actions.Auth();
        })
        
    }

    render() {
        return (
            <Router {...SceneConfig}>
                <Scene key = "Root">
                    <Scene key = "Auth" initial>
                        <Scene 
                        key = "signup" 
                        component = {Signup} 
                        title = "" 
                        navTransparent 
                        hideNavBar
                        initial />
                        <Scene 
                        key = "login"
                        component = {Login} 
                        title = "" 
                        navTransparent 
                        hideNavBar />
                    </Scene>
                    <Scene key ="LoggedIn">
                        <Scene 
                        key = "Main" 
                        component = {Main} 
                        title = "" 
                        hideNavBar  
                        initial/>
                    </Scene>
                </Scene>   
            </Router>
        )
    }
} 

const SceneConfig = {
    cardStyle :{
        background: 'white'
    }
}

