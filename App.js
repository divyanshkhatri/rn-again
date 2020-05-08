import React from 'react';
import {View, AsyncStorage} from 'react-native';
import Signup from './src/routers/Signup';
import {Router, Scene, Actions} from 'react-native-router-flux';
import Login from './src/routers/Login';
import Main from './src/routers/Main';

export default class App extends React.Component{

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
        <View style = {{flex: 1}}>
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
        </View>
    )}
}

const SceneConfig = {
    cardStyle :{
        background: 'white'
    }
}