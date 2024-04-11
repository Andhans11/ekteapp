import React from 'react';
import { NativeBaseProvider, extendTheme } from 'native-base';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from './src/screens/SplashScreen';
import HomeScreen from './src/screens/HomeScreen'; // Import your HomeScreen
// ... import other screens as needed

const Stack = createStackNavigator();

const theme = extendTheme({
  // Add your customizations here
});

const App = () => {
  return (
    <NativeBaseProvider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Splash">
          <Stack.Screen
            name="Splash"
            component={SplashScreen}
            options={{ headerShown: false }} // Hides the header for the splash screen
          />
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            // options for other screens
          />
          {/* Add other Stack.Screen components for your other screens */}
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
};

export default App;