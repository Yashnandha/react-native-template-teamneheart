import React from 'react';
import {View, Text, ViewStyle} from 'react-native';

interface ErrorProps {
  label: String;
  errorStyle: ViewStyle;
}

const Error = (props: ErrorProps) => {
  return (
    <View style={props.errorStyle}>
      <Text
        style={{
          fontSize: 12,
          color: 'red',
          marginTop: 5,
          fontFamily: 'Poppins-Regular',
        }}>
        {props.label}
      </Text>
    </View>
  );
};

export default Error;
