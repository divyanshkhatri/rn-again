import React from 'react';
import { Text, 
    View, 
    } from 'react-native';

export default class Login extends React.Component{
    
    render(){
        return (
            <View>
                <Text>
                    Login Page
                </Text>
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
    }
}