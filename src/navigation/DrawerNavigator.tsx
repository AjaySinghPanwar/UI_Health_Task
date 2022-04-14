import * as React from 'react';
import Home from '../screens/Home';
import {navigationConstants} from '../utils/constants/navigationConstants';
import Appointment from '../screens/Appointment';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {stringConstants} from '../utils/constants/stringConstants';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Drawer.Screen
        name={navigationConstants.home_screen}
        component={Home}
        options={{title: stringConstants.home}}
      />
      <Drawer.Screen
        name={navigationConstants.appointment_screen}
        component={Appointment}
        options={{title: stringConstants.appointment}}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
