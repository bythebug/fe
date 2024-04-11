import { useNavigation } from '@react-navigation/native';

function Routes(props) {

  const navigation = useNavigation();

  const goToCardNFC = () => {
      navigation.navigate('CardNFC'); // Navigate to the CardNFC screen
    };

    const goToForgetPassword = () => {
      navigation.navigate('Reset'); // Navigate to the Reset
    };

    const goToPrivacyPolicy = () => {
      navigation.navigate('PrivacyPolicy'); // Navigate to the PrivacyPolicy
    }
}

export default Routes;