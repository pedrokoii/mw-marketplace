import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { Home } from '../screens/Home';
import { NewAccountAddressData } from '../screens/NewAccountAddressData';
import { NewAccountComplete } from '../screens/NewAccountComplete';
import { NewAccountPersonalData } from '../screens/NewAccountPersonalData';
import { NewAccountProfilePicture } from '../screens/NewAccountProfilePicture';
import { NewAccountUserData } from '../screens/NewAccountUserData';
import { PasswordRecovery } from '../screens/PasswordRecovery';
import { PasswordRecoveryComplete } from '../screens/PasswordRecoveryComplete';
import { SignIn } from '../screens/SignIn';
import { Start } from '../screens/Start';


const Stack = createStackNavigator();

export function AppRoutes() {
  return(
    <Stack.Navigator screenOptions={{headerShown:false}} >

      <Stack.Screen name="Start" component={Start} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="SignIn" component={SignIn} />

      <Stack.Screen name="PasswordRecovery" component={PasswordRecovery} />
      <Stack.Screen name="PasswordRecoveryComplete" component={PasswordRecoveryComplete} />

      <Stack.Screen name="NewAccountUserData" component={NewAccountUserData} />
      <Stack.Screen name="NewAccountPersonalData" component={NewAccountPersonalData} />
      <Stack.Screen name="NewAccountAddressData" component={NewAccountAddressData} />
      <Stack.Screen name="NewAccountProfilePicture" component={NewAccountProfilePicture} />
      <Stack.Screen name="NewAccountComplete" component={NewAccountComplete} />

    </Stack.Navigator>
  );
}