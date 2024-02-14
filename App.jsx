import React from 'react';
import Home from './src/screens/Home';
import Email from './src/screens/Email';
import SignIn from './src/screens/SignIn';
import {SafeAreaView} from 'react-native';
import EmailCount from './src/screens/EmailCount';
import Statusbar from './src/components/Statusbar';
import {STANDARD_FLEX} from './src/config/constants';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

// Creating stack navigator
const Stack = createStackNavigator();

// Functional component
const App = () => {
  // Returning JSX
  return (
    <>
      <Statusbar barStyle="light-content" />
      <SafeAreaView style={{flex: STANDARD_FLEX}}>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerTitle: 'Demo - Sign in with phone',
              headerTintColor: '#fff',
              headerStyle: {backgroundColor: '#45B04E', elevation: 0},
            }}>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Email" component={Email} />
            <Stack.Screen
              name="Sign In"
              component={SignIn}
              options={{headerLeft: null}}
            />
            <Stack.Screen
              name="Email Count"
              component={EmailCount}
              options={{headerLeft: null}}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </>
  );
};

// Exporting component
export default App;
