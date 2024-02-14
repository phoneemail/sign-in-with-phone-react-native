import styles from './styles';
import {SvgXml} from 'react-native-svg';
import phone from '../../assets/icons/svg/phone';
import {ICON_SIZE} from '../../config/constants';
import {View, Text, TouchableOpacity} from 'react-native';

// Functional component
const Login = ({navigation}) => {
  // Method to open url
  const _openSignInURL = () => {
    // Navigating to the SignIn screen
    navigation.navigate('Sign In');
  };

  // Returning JSX
  return (
    <View style={styles.mainWrapper}>
      <View style={styles.contentWrapper}>
        {/* Heading */}
        <Text style={styles.actionHeading}>Try Sign In Demo</Text>

        {/* Info */}
        <Text style={styles.actionInfo}>
          Below button demonstrate the usage of Sign In button
        </Text>

        {/* Button */}
        <TouchableOpacity style={styles.button} onPress={_openSignInURL}>
          {/* Phone icon */}
          <SvgXml xml={phone} width={ICON_SIZE} height={ICON_SIZE} />

          {/* Button label */}
          <Text style={styles.buttonLabel}>sign in with phone</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

// Exporting component
export default Login;
