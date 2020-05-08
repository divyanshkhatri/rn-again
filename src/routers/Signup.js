import React from 'react';
import { Text, 
    View, 
    TextInput,
    TouchableOpacity,
    AsyncStorage 
    } from 'react-native';

import {
    OutlinedTextField,
    } from 'react-native-material-textfield';

export default class Signup extends React.Component{
    state = {
       name: "aman",
        email: "aman@gmail.com",
        password: "aman1",
        url: 'https://149c0e3e.ngrok.io'
    }
    onSubmit = () => {
        const data = {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password
        }
        console.log(JSON.stringify(data));
        fetch(`${this.state.url}/signup`, {
            method: 'post',
            body: JSON.stringify(data),
            headers: { 'Content-type': 'application/json' }
        }).then(response => response.json())
            .then(json => {
                console.log(json)
                AsyncStorage.setItem('token', json.token)
        } )
    }
    render(){
        return (
            <View style={styles.container}>

                <OutlinedTextField
                containerStyle = {{width: 300, marginTop: 20, alignSelf: 'center'}}
                value = {this.state.name}
                label = "Name"
                onChangeText = {(value) => this.setState({name: value})} />

                <OutlinedTextField 
                value = {this.state.email} 
                containerStyle = {{width: 300, marginTop: 20, alignSelf: 'center'}}
                label = "Email"
                onChangeText = {(value) => this.setState({email: value})}/>

                <OutlinedTextField 
                value = {this.state.password} 
                containerStyle = {{width: 300, marginTop: 20, alignSelf: 'center'}}
                label = "Password"
                onChangeText = {(value) => this.setState({password: value})}/>

                <TouchableOpacity style = {styles.button} onPress = {this.onSubmit.bind(this)}>
                    <Text>Submit</Text>
                </TouchableOpacity>

            </View>

        );
    }
}

const styles = {
    inputStyle: {

        height: 50, 
        width: 200, 
        borderWidth: 1,
        marginTop: 100,
        alignSelf: "center"

    }, button: {

        alignSelf: "center",
        alignItems: "center",
        backgroundColor: "#DDDDDD",
        padding: 10,
        width: 80,
        borderRadius: 4
    }
}