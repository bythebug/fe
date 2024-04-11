import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { Button, Text, Chip } from 'react-native-paper';


function CardNFC(props) {

    const [checked, setChecked] = React.useState('first');

    return (
        <View style={styles.container}>
            <View style={styles.Header}>
                <Text variant="displayMedium">Tap & Go</Text>
            </View>

            <View style={styles.OptionsSpacing}>
                <Text variant='titleMedium'>Take Your Phone Near To The Reader</Text>
            </View>

            <View>
                <Image source={require('../assets/CardNFC.png')} style={{ width: 300, height: 215, borderRadius: 20 }} />
            </View>

            <View style={{ margin: 30 }}>
                <Text>Number of Tickets: {"10 here"}</Text>
            </View>

            <View>
                <Button style={styles.button} mode="contained" onPress={() => console.log('Register Pressed')}>
                    Recharge
                </Button>
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
    chips: {
        margin: 10,
        padding: 10,
    },
    OptionsSpacing: {
        marginBottom: "20%",
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
        marginTop: 40,
        marginBottom: 10,
    }
})

export default CardNFC;