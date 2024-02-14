import styles from './styles';
import {WebView} from 'react-native-webview';

// Functional component
const Email = () => {
  // Returning JSX
  return (
    <WebView
      source={{uri: 'https://web.phone.email'}}
      originWhitelist={['*']}
      style={styles.webView}
    />
  );
};

// Exporting
export default Email;
