import React from 'react';
import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack';
import utils from '../../utils/utils';

const Stack = createStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}>

      <Stack.Screen name={utils.screenname.welcome} component={utils.modules.Welcome} />
    </Stack.Navigator>
  );
};

export default AuthStack;