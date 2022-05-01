import * as React from 'react';
import { CommonActions, DrawerActions } from '@react-navigation/native';

export const navigationRef = React.createRef();

export function navigate(name, params) {
  navigationRef.current?.navigate(name, params);
}
export function goBack() {
  navigationRef.current?.goBack();
}

export function navigateAndReset(routes = [], index = 0) {
  navigationRef.current?.dispatch(
    CommonActions.reset({
      index,
      routes,
    }),
  );
}

export function openDrawer() {
  navigationRef.current?.dispatch(DrawerActions.openDrawer());
}

export function closeDrawer() {
  navigationRef.current?.dispatch(DrawerActions.closeDrawer());
}

export function navigateAndSimpleReset(name, index = 0) {
  navigationRef.current?.dispatch(
    CommonActions.reset({
      index,
      routes: [{ name }],
    }),
  );
}
