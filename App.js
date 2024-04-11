import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Recharge from './app/screens/Recharge';
import Welcome from './app/screens/Welcome';
import { Card, PaperProvider } from 'react-native-paper';
import Reset from './app/screens/Reset';
import CardNFC from './app/screens/CardNFC';
import CardInfo from './app/screens/CardInfo';
import AllRoutes from './app/routes/AllRoutes';
import LoginScreen from './app/screens/LoginScreen';
import TransactionStatus from './app/screens/TransactionStatus';
import TransactionHistory from './app/screens/TransactionHistory';
import { SafeAreaView } from 'react-native-safe-area-context';
import Testing from './app/screens/Testing';

const App = () => {
  return (
    <PaperProvider>
      <SafeAreaView style={styles.container}>
        <StatusBar style="auto" />
        {/* <Welcome /> */}
        {/* <LoginScreen /> */}
        {/* <Reset /> */}
        {/* <Recharge /> */}
        {/* <CardNFC />  */}
        {/* <TransactionStatus /> */}
        {/* <TransactionHistory /> */}
        {/* <CardInfo /> */}
        <AllRoutes />
      </SafeAreaView>
    </PaperProvider>

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

