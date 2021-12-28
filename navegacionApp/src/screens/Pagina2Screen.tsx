import React, {useEffect} from 'react';
import {View, Text, Button} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {useNavigation} from '@react-navigation/native';
import {styles} from '../theme/appTheme';
import {RootStackParams} from '../navigator/StackNavigator';

type NavigationProps = StackNavigationProp<RootStackParams>;

export const Pagina2Screen = () => {
  const navigation = useNavigation<NavigationProps>();

  useEffect(() => {
    navigation.setOptions({
      title: 'Hola Mundo',
      headerBackTitle: 'Back',
    });
  }, []);

  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Pagina2Screen</Text>
      <Button
        title="Ir página 3"
        onPress={() => {
          navigation.navigate('Pagina3Screen');
        }}
      />
    </View>
  );
};
