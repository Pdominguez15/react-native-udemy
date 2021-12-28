import React, {useState} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {CircleButton} from '../components/CircleButton';

export const ContadorScreen = () => {
  const [contador, setContador] = useState(10);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contador: {contador}</Text>
      <CircleButton
        title="+1"
        position="right"
        onPress={() => setContador(contador + 1)}
      />
      <CircleButton
        title="-1"
        position="left"
        onPress={() => setContador(contador - 1)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    textAlign: 'center',
    fontSize: 40,
  },
});
