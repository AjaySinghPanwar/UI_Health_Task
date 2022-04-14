import * as React from 'react';
import {navigationConstants} from '../utils/constants/navigationConstants';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import DrawerNavigator from './DrawerNavigator';
import OnboardingScreen from '../screens/OnboardingScreen';

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen
        name={navigationConstants.onboarding_screen}
        component={OnboardingScreen}
      />
      <Stack.Screen
        name={navigationConstants.drawer_navigator}
        component={DrawerNavigator}
      />
    </Stack.Navigator>
  );
};

export default StackNavigator;
