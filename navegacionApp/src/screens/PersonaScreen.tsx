import {StackScreenProps} from '@react-navigation/stack';
import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import {RootStackParams} from '../navigator/StackNavigator';
import {styles} from '../theme/appTheme';

interface Props extends StackScreenProps<RootStackParams, 'PersonaScreen'> {}

export const PersonaScreen = ({route, navigation}: Props) => {
  useEffect(() => {
    navigation.setOptions({
      title: route.params.nombre,
    });
  }, []);
  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>{JSON.stringify(route.params, null, 3)}</Text>
    </View>
  );
};
