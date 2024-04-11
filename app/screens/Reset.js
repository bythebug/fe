import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, TextInput, Button } from 'react-native-paper';



function Reset(props) {
    return (
        <View style={styles.container}>

            <View style={styles.Header}>
                <Text variant="displayMedium">Password Reset</Text>
            </View>

            <View style={styles.InputView}>
                <TextInput label="Enter Username" mode='outlined'> </TextInput>
            </View>

            <View style={styles.InputView}>
                <TextInput label="Enter Recovery Key" mode='outlined'> </TextInput>
            </View>


            <View style={styles.InputView}>
                <TextInput label="Set New Password" mode='outlined'> </TextInput>
            </View>


            {/* // if password updated show here */}
            {/* <Text>Password Updated Successfully</Text> */}

            <View>
            <Button style={styles.button} mode="contained" onPress={() => console.log('Go To WelcomePage Pressed')}> Recover Account </Button>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    Header: {
        marginBottom: 100,
        alignItems: 'center',
    },
    InputView: {
        width: 300,
        height: 50,
        marginBottom: 20,
        justifyContent: 'center',
        padding: 20,
    },
    button: {
        width: '80%',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 40,
        marginBottom: 10,
    },

    forgetPassword: {
        width: '80%',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 40,
        marginBottom: 10,
    },

    privacy: {
        width: '80%',
        alignItems: 'flex-end',
        justifyContent: 'center',
        marginTop: 40,
        marginBottom: 10,
    }
})

export default Reset;