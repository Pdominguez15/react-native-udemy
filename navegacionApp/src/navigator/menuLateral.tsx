import React from 'react';

import {
  createDrawerNavigator,
  DrawerContentComponentProps,
  DrawerContentScrollView,
} from '@react-navigation/drawer';
import {SettingsScreen} from '../screens/Settings';
import {StackNavigator} from './StackNavigator';
import {
  Image,
  Text,
  useWindowDimensions,
  View,
  TouchableOpacity,
} from 'react-native';
import {styles} from '../theme/appTheme';

const Drawer = createDrawerNavigator();

export const MenuLateral = () => {
  const {width} = useWindowDimensions();

  return (
    <Drawer.Navigator
      screenOptions={{
        drawerType: width >= 768 ? 'permanent' : 'front',
        headerShown: width >= 768 ? false : true,
      }}
      drawerContent={props => <MenuInterno {...props} />}>
      <Drawer.Screen
        name="StackNavigator"
        options={{title: 'Home'}}
        component={StackNavigator}
      />
      <Drawer.Screen
        name="SettingsScreen"
        options={{title: 'Settings'}}
        component={SettingsScreen}
      />
    </Drawer.Navigator>
  );
};

const MenuInterno = ({navigation}: DrawerContentComponentProps) => {
  return (
    <DrawerContentScrollView>
      {/*Parte del avatar*/}
      <View style={styles.avatarContainer}>
        <Image
          source={{
            uri: 'https://cdn.icon-icons.com/icons2/1097/PNG/512/1485477097-avatar_78580.png',
          }}
          style={styles.avatar}
        />
      </View>

      {/*Opciones del menu*/}
      <View style={styles.menuContainer}>
        <TouchableOpacity style={styles.menuBoton}>
          <Text
            style={styles.menuTexto}
            onPress={() => {
              navigation.navigate('StackNavigator');
            }}>
            Navegacion
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuBoton}>
          <Text
            style={styles.menuTexto}
            onPress={() => {
              navigation.navigate('SettingsScreen');
            }}>
            Ajustes
          </Text>
        </TouchableOpacity>
      </View>
    </DrawerContentScrollView>
  );
};
