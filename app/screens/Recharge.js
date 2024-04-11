import React from 'react';
import { View, StyleSheet } from 'react-native';
import {Button, Text, Chip } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';


function Recharge(props) {

    // Write Functions For All The Chips

    const navigation = useNavigation();

    const goToTransactionHistory = () => {
        navigation.navigate('TransactionHistory'); // Navigate to the TransactionHistory screen
      };

    

    const [checked, setChecked] = React.useState('first');

    return (
        <View style={styles.container}>
            <View style={styles.Header}>
                <Text variant="displayMedium">Add Trips</Text>
            </View>

            <View>
                <Button style={styles.button} mode="contained" onPress={goToTransactionHistory}>
                    Transaction History
                </Button>
            </View>

            <View style = {styles.OptionsSpacing}>
                <Text variant='titleLarge'>Select Recharge Option</Text>
            </View>

            <View style={styles.chips}>
            <Chip style={styles.chips} icon="select" onPress={() => console.log('Single Trip @ $7.00 Pressed')}>Single Trip @ $7.00 </Chip>
            <Chip style={styles.chips} icon="select" onPress={() => console.log('Day Pass @ $22.00 Pressed')}>Day Pass @ $22.00 </Chip>
            <Chip style={styles.chips} icon="select" onPress={() => console.log('Weekly Pass @ $54.00 Pressed')}>Weekly Pass @ $54.00 </Chip>
            <Chip style={styles.chips} icon="select" onPress={() => console.log('Monthly Pass @ $98.00 Pressed')}>Monthly Pass @ $98.00 </Chip>
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
    chips:{
        margin : 10,
        padding: 10,
    },
    OptionsSpacing:{
        marginTop: "15%",
        marginBottom: "5%",
    },
    Header: {
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

export default Recharge;