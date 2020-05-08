import React, {Component} from 'react';
import {Router, Scene, Actions, Stack} from 'react-native-router-flux';
import {AsyncStorage} from 'react-native';
import Signup from './routers/Signup';

export default class RouterComponent extends Component {

    constructor(props){
        super(props)
        AsyncStorage.getItem('token')
            .then((userToken) => {
            if(userToken){
                Actions.LoggedIn();
            } else {
                Actions.Auth();
            }
        })
    }
    render() {
        return (
        
        )
    }
}

