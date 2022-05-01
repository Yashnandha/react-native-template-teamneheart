import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AuthStack from '../navigation/Stack/AuthStack';
import { navigationRef } from '../services/sagaservice/NavigationService';

const Route = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      {AuthStack()}
    </NavigationContainer>
  );
};

export default Route;
