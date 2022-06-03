import React, {useContext} from 'react';
import {Animated, Button, StyleSheet, Text, View} from 'react-native';

import {ThemeContext} from '../context/theme/ThemeContext';
import {useAnimation} from '../hook/useAnimation';

export const Animation101Screen = () => {
  const {opacity, position, fadeIn, fadeOut, startMovingPosition} =
    useAnimation();

  const {theme} = useContext(ThemeContext);
  return (
    <View style={styles.container}>
      <Animated.View
        style={{
          ...styles.purpleBox,
          marginBottom: 20,
          opacity,
          backgroundColor: theme.colors.primary,
          transform: [
            {
              translateY: position,
            },
          ],
        }}
      />

      <Button
        title="FadeIn"
        onPress={() => {
          fadeIn();
          startMovingPosition(-100);
        }}
        color={theme.colors.primary}
      />
      <Text style={{color: theme.colors.text}}>{'---------------'}</Text>
      <Button title="FadeOut" onPress={fadeOut} color={theme.colors.primary} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  purpleBox: {
    width: 150,
    height: 150,
  },
});
