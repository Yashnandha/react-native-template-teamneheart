import React from 'react';
import {
  View,
  Text,
  Modal,
  StyleProp,
  ViewStyle,
  TextStyle,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import colors from '../utils/Colors';
import fontFamily from '../utils/Fontfamily';

type activitySize = 'small' | 'large';

type propType = {
  visible: Boolean,
  message: String,
  containerStyle: StyleProp<ViewStyle> | undefined,
  boxStyle: StyleProp<ViewStyle> | undefined,
  messageStyle: StyleProp<TextStyle> | undefined,
  activitySize: null | activitySize | undefined,
  activityColor: String,
};

const Sppiner = (props: propType) => {
  return (
    <Modal visible={props.visible} transparent statusBarTranslucent={true}>
      <View style={[style.container, props.containerStyle]}>
        <View style={[style.view, props.boxStyle]}>
          <Text style={[style.messageText, props.messageStyle]}>
            {props.message}
          </Text>
          <ActivityIndicator
            size={props.activitySize}
            color={props.activityColor}
          />
        </View>
      </View>
    </Modal>
  );
};
Sppiner.defaultProps = {
  activitySize: 'small',
  activityColor: '#2A2A2A',
};
export default Sppiner;

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.2)',
    justifyContent: 'center',
    paddingHorizontal: 30,
  },
  view: {
    paddingVertical: 25,
    paddingHorizontal: 30,
    flexDirection: 'row',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  messageText: {
    fontSize: 18,
    fontFamily: fontFamily.GothamMedium,
    color: colors.lightBlack,
    marginRight: 20,
  },
});
