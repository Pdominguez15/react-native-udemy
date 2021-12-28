import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform,
  StyleSheet,
} from 'react-native';

interface Props {
  title: string;
  position?: 'right' | 'left';
  onPress: () => void;
}

export const CircleButton = ({title, position = 'right', onPress}: Props) => {
  const ios = () => {
    return (
      <TouchableOpacity
        activeOpacity={0.75}
        style={[
          styles.location,
          position === 'right' ? styles.locationRight : styles.locationLeft,
        ]}
        onPress={onPress}>
        <View style={styles.button}>
          <Text style={styles.text}>{title}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  const android = () => {
    return (
      <View
        style={[
          styles.location,
          position === 'right' ? styles.locationRight : styles.locationLeft,
        ]}>
        <TouchableNativeFeedback
          onPress={onPress}
          background={TouchableNativeFeedback.Ripple('#28425B', false, 30)}>
          <View style={styles.button}>
            <Text style={styles.text}>{title}</Text>
          </View>
        </TouchableNativeFeedback>
      </View>
    );
  };
  return Platform.OS === 'ios' ? ios() : android();
};

const styles = StyleSheet.create({
  location: {
    position: 'absolute',
    bottom: 25,
  },
  locationLeft: {
    left: 25,
  },
  locationRight: {
    right: 25,
  },
  button: {
    backgroundColor: '#5856D6',
    width: 60,
    height: 60,
    borderRadius: 100,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
  },
  text: {
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold',
  },
});
