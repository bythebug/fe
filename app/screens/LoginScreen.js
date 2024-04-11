import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, TextInput, Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import PrivacyPolicy from './PrivacyPolicy';
import { useState } from 'react';


function LoginScreen(props) {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const navigation = useNavigation();

    const goToPrivacyPolicy = () => {
        navigation.navigate('PrivacyPolicy'); // Navigate to the PrivacyPolicy
    }

    const goToForgetPassword = () => {
        navigation.navigate('Reset'); // Navigate to the Reset
    };

    // Login Button Calls This Function
    const goToCardNFC = () => {
        console.log("Username:", username);
        console.log("Password:", password);
        navigation.navigate('CardNFC'); // Navigate to the Welcome
    }

    const goToWelcome = () => {
        navigation.navigate('Welcome'); // Navigate to the Welcome
    }


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
                <TextInput label="Enter Username" onChangeText={text => setUsername(text)} mode='outlined'> </TextInput>
            </View>

            <View style={styles.InputView}>
                <TextInput label="Enter Password" onChangeText={text => setPassword(text)} secureTextEntry={true} style={styles.default} mode='outlined' > </TextInput>
            </View>

            <View>
                <Button style={styles.button} mode="contained" onPress={goToCardNFC}>
                    Login
                </Button>
            </View>

            <View>
                <Text style={styles.forgetPassword} onPress={goToWelcome}>Don't Have A Account?</Text>
            </View>

            <View>
                <Text style={styles.privacy} onPress={goToPrivacyPolicy}>Privacy Policy</Text>
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