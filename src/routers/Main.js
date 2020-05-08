import React from 'react';
import { Text, 
    View, 
    } from 'react-native';

export default class Main extends React.Component{
    
    render(){
        return (
            <View style = {styles.inputStyle}>
                <Text>
                    Main Page
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