import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, TextInput, Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

function Welcome(props) {

    const navigation = useNavigation();

    const goToCardNFC = () => {
        registerUser("username", "password", "recoverySeedHash");
        navigation.navigate('CardNFC'); // Navigate to the CardNFC screen
      };

      const goToForgetPassword = () => {
        navigation.navigate('Reset'); // Navigate to the Reset
      };

      const goToPrivacyPolicy = () => {
        navigation.navigate('PrivacyPolicy'); // Navigate to the PrivacyPolicy
      }

      return (
        <View style={styles.container}>

            <View style={styles.Header}>
                <Text style={{ display: 'flex', flexDirection: 'row' }} variant="displayMedium">
                    <Text>Safe</Text>
                    <Text style={{ fontWeight: 'bold' }}>Fare</Text>
                </Text>
                <Text variant="headlineSmall">Travel Safe</Text>
            </View>

            <View style={styles.InputView}>
                <TextInput label="Enter Username" mode='outlined'> </TextInput>
            </View>

            <View style={styles.InputView}>
                <TextInput label="Enter Password" mode='outlined'> </TextInput>
            </View>

            <View style={styles.InputView}>
                <TextInput label="Enter Recovery Phrase" mode='outlined'> </TextInput>
            </View>

            <View>
                <Button style={styles.button} mode="contained" onPress={goToCardNFC} >
                    Register
                </Button>
            </View>

            <View>
                <Text style={styles.forgetPassword} onPress={goToForgetPassword}>Forgot Password</Text>
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
        marginTop: '10%',
        marginBottom: 10,
    }
})

export default Welcome;