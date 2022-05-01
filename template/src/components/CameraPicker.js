import React from 'react';
import {
  View,
  Text,
  Modal,
  StyleSheet,
  Touchable,
  TouchableOpacity,
} from 'react-native';
import Colors from '../utils/Colors';
import Fontfamily from '../utils/Fontfamily';

interface pickerProps {
  visible?: Boolean;
  onPresscancel?: Function;
  onPressCamera?: Function;
  onPressPicker?: Function;
}

const CameraPicker = (props: pickerProps) => {
  return (
    <Modal visible={props.visible} transparent statusBarTranslucent={true}>
      <View style={[styles.container]}>
        <View style={styles.contentContainer}>
          <View style={styles.optionTab}>
            <TouchableOpacity
              activeOpacity={0.7}
              style={styles.buttonStyle}
              onPress={props.onPressCamera}>
              <Text style={styles.buttonlabel}>Take Photo</Text>
            </TouchableOpacity>

            <TouchableOpacity
              activeOpacity={0.7}
              style={styles.buttonStyle}
              onPress={props.onPressPicker}>
              <Text style={styles.buttonlabel}>Choose from Gallary</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.canceltab}>
            <TouchableOpacity
              activeOpacity={0.7}
              style={styles.buttonStyle}
              onPress={props.onPresscancel}>
              <Text style={styles.buttonlabel}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default CameraPicker;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000a1',
  },

  contentContainer: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 20,
  },
  optionTab: {
    backgroundColor: '#ffffff',
    height: 120,
    borderRadius: 20,
    margin: 7,
  },
  canceltab: {
    backgroundColor: '#ffffff',
    height: 60,
    borderRadius: 15,
    margin: 7,
    marginTop: 0,
  },
  buttonStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  buttonlabel: {
    color: Colors.ThemeMainColor,
    fontSize: 18,
    fontFamily: Fontfamily.Poppins_SemiBold,
  },
});
