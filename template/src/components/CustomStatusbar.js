import React from 'react';
import { View, StatusBar, StyleProp, ViewStyle } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
type barStyle = 'dark-content' | 'default' | 'light-content';
type propType = {
  backgroundColor: String,
  containerStyle: StyleProp<ViewStyle> | undefined,
  barStyle: null | barStyle | undefined,
};

const CustomStatus = (props: propType) => {
  const insets = useSafeAreaInsets();
  return (
    <View
      style={[
        { height: insets.top, backgroundColor: props.backgroundColor },
        props.containerStyle,
      ]}>
      <StatusBar
        animated={true}
        backgroundColor={props.backgroundColor}
        barStyle={props.barStyle}
        {...props}
      />
    </View>
  );
};

export default CustomStatus;