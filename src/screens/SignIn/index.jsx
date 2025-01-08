import styles from './styles';
import {useEffect, useState} from 'react';
import {WebView} from 'react-native-webview';
import {getUniqueId} from 'react-native-device-info';

// Functional component
const SignIn = ({navigation}) => {
  // Local states
  const [deviceId, setDeviceId] = useState('');

  // Declaring an object
  const userInfo = {
    iss: 'phmail',
    aud: 'user',
    client_id : '********************'
  };

  // Declaring sign-in URL
  const URI = `https://auth.phone.email/log-in?client_id=${userInfo.client_id}&auth_type=4&device=${deviceId}`;

  // Hooks
  useEffect(() => {
    // Method to fetch device ID
    const fetchDeviceId = async () => {
      // Getting unique ID
      const id = await getUniqueId();

      // Updating state
      setDeviceId(id);

      // Log the device ID to the console
      // console.log('Device ID:', id);
    };

    fetchDeviceId();
  }, []);

  const phoneAuthJwt = event => {
    // Getting encodedJWT
    const encodedJWT = event.nativeEvent.data;

    // Navigating to the EmailCount screen with the token param
    navigation.navigate('Email Count', {token: encodedJWT});
  };

  // Returning JSX
  return (
    <WebView
      source={{uri: URI}}
      style={styles.webView}
      onMessage={phoneAuthJwt}
      ref={webView => {
        this.webView = webView;
      }}
    />
  );
};

// Exporting
export default SignIn;
