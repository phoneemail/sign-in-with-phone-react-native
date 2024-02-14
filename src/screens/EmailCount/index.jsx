import axios from 'axios';
import styles from './styles';
import {decode} from 'base-64';
import {SvgXml} from 'react-native-svg';
import {useEffect, useState} from 'react';
import {BackHandler} from 'react-native';
import {ICON_SIZE} from '../../config/constants';
import email from '../../assets/icons/svg/email';
import {View, Text, TouchableOpacity} from 'react-native';

// Functional component
const EmailCount = ({route, navigation}) => {
  // Getting route params
  const {token} = route.params;

  // Local states
  const [count, setCount] = useState(0);
  const [data, setData] = useState({});

  // Hooks
  useEffect(() => {
    // Decode the Base64 part of the token(encodedJWT)
    const decodedJWT = decode(token.split('.')[1]);

    // Parse(JSON) the decodedJWT
    const finalData = JSON.parse(decodedJWT);

    // Updating state
    setData(finalData);

    // Create a new FormData object
    const dataToSend = new FormData();
    dataToSend.append('merchant_phone_email_jwt', token);
    // Add other form data properties as needed

    // Make a POST request using Axios
    axios
      .post('https://eapi.phone.email/email-count', dataToSend, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Accept: '*/*',
        },
      })
      .then(response => {
        // Handle the response and update state
        setCount(response.data);
      })
      .catch(error => {
        // Handle error
        console.error('Error making API request:', error);
      });
  }, []);

  useEffect(() => {
    // Hardware back press handler
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      handleBackPress,
    );

    // Returning
    return () => {
      backHandler.remove();
    };
  }, []);

  // Method to handle hardware back press
  const handleBackPress = () => {
    // Exiting the app
    BackHandler.exitApp();

    // Return true to prevent default behavior (closing the app)
    return true;
  };

  // Method to open url
  const _openEmailURL = () => {
    // Navigating to the SignIn screen
    navigation.navigate('Email');
  };

  // Returning JSX
  return (
    <View style={styles.mainWrapper}>
      <View style={styles.contentWrapper}>
        {/* Heading */}
        <Text style={styles.actionHeading}>You are logged in with</Text>

        {/* Info */}
        <Text style={styles.actionInfo}>
          {`${data.country_code} ${data.phone_no}`}
        </Text>

        {/* Button */}
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.popToTop()}>
          {/* Button label */}
          <Text style={styles.buttonLabel}>logout</Text>
        </TouchableOpacity>

        {/* Email icon and count badge */}
        <TouchableOpacity
          style={styles.emailIconWrapper}
          onPress={_openEmailURL}>
          {/* Icon */}
          <SvgXml
            xml={email}
            width={ICON_SIZE * 1.25}
            height={ICON_SIZE * 1.25}
          />

          <View style={styles.countBadge}>
            <Text style={styles.count}>{count}</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

// Exporting
export default EmailCount;
