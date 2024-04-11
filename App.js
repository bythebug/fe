import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Recharge from './app/screens/Recharge';
import Welcome from './app/screens/Welcome';
import { Card, PaperProvider } from 'react-native-paper';
import Reset from './app/screens/Reset';
import CardNFC from './app/screens/CardNFC';
import CardInfo from './app/screens/CardInfo';
import LoginScreen from './app/screens/LoginScreen';
import TransactionStatus from './app/screens/TransactionStatus';
import TransactionHistory from './app/screens/TransactionHistory';
import { SafeAreaView } from 'react-native-safe-area-context';
import PrivacyPolicy from './app/screens/PrivacyPolicy';

// Importing Navigation Container and Stack Navigator
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


// Implementing Stack Navigation
const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="CardInfo" component={CardInfo} />
        <Stack.Screen name="CardNFC" component={CardNFC} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Recharge" component={Recharge} />
        <Stack.Screen name="Reset" component={Reset} />
        <Stack.Screen name="PrivacyPolicy" component={PrivacyPolicy} />
        <Stack.Screen name="TransactionHistory" component={TransactionHistory} />
        <Stack.Screen name="TransactionStatus" component={TransactionStatus} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;

