import React, {useContext} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';

import {MenuItem} from '../interfaces/appInterfaces';
import {ThemeContext} from '../context/theme/ThemeContext';

interface Props {
  menuItem: MenuItem;
}
export const FlatListMenuItem = ({menuItem}: Props) => {
  const navigation = useNavigation();
  const {theme} = useContext(ThemeContext);

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => navigation.navigate(menuItem.component as any)}>
      <View style={styles.container}>
        <Icon name={menuItem.icon} color={theme.colors.primary} size={23} />
        <Text style={{...styles.itemText, color: theme.colors.text}}>
          {menuItem.name}
        </Text>
        <View style={styles.containerIcon}>
          <Icon
            name="chevron-forward-outline"
            color={theme.colors.primary}
            size={23}
            style={styles.icon}
          />
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  itemText: {
    marginLeft: 10,
    fontSize: 19,
  },
  containerIcon: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    flex: 1,
  },
  icon: {},
});
