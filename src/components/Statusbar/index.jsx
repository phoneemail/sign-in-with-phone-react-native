import {View, StatusBar} from 'react-native';
import {getModel} from 'react-native-device-info';
import {statusBarHeight} from '../../stateless_functions/statusBarHeight';

// Functional component
const Statusbar = ({...props}) => {
  // Returning
  return (
    <View
      style={[
        {height: statusBarHeight(getModel()), backgroundColor: '#024430'},
      ]}>
      <StatusBar translucent backgroundColor={'#024430'} {...props} />
    </View>
  );
};

// Exporting
export default Statusbar;
