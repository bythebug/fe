import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, TextInput, Button } from 'react-native-paper';


function LoginScreen(props) {
    return (
        <View style={styles.container}>

            <View style={styles.Header}>
                <Text style={{ display: 'flex', flexDirection: 'row' }} variant="displayMedium">
                    <Text>Safe</Text>
                    <Text style={{ fontWeight: 'bold' }}>Fare</Text>
                </Text>
                <Text variant="headlineSmall">User Login</Text>
            </View>

            <View style={styles.InputView}>
                <TextInput label="Enter Username" mode='outlined'> </TextInput>
            </View>

            <View style={styles.InputView}>
                <TextInput label="Enter Password" mode='outlined'> </TextInput>
            </View>

            <View>
                <Button style={styles.button} mode="contained" onPress={() => console.log('Register Pressed')}>
                    Login
                </Button>
            </View>

            <View>
                <Text style={styles.forgetPassword} onPress={() => console.log('Forgot Password Pressed')}>Don't Have A Account?</Text>
            </View>

            <View>
                <Text style={styles.privacy} onPress={() => console.log('Privacy Pressed')}>Privacy Policy</Text>
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
        marginBottom: 20,
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
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 40,
        // marginBottom: 10,
    },

    privacy: {
        width: '100%',
        justifyContent: 'center',
        marginTop: '10%',
    }
})

export default LoginScreen;