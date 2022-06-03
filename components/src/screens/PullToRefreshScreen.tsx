import React, {useContext, useState} from 'react';
import {RefreshControl, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';

import {styles} from '../theme/appTheme';
import {HeaderTitle} from '../components/HeaderTitle';
import {ThemeContext} from '../context/theme/ThemeContext';

export const PullToRefreshScreen = () => {
  const [refreshing, setRefreshing] = useState(false);
  const [data, setData] = useState<string>();
  const {theme} = useContext(ThemeContext);

  const onRefresh = () => {
    setRefreshing(true);

    setTimeout(() => {
      console.log('terminamos');
      setData('Hola mundo');
      setRefreshing(false);
    }, 1500);
  };
  return (
    <ScrollView
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={onRefresh}
          progressViewOffset={10}
          progressBackgroundColor={theme.colors.primary}
          colors={['white']}
          title="Refreshing"
          titleColor={theme.colors.text}
          tintColor={theme.colors.text}
        />
      }>
      <View style={styles.globalMargin}>
        <HeaderTitle title="Pull to refresh" />

        {data && <HeaderTitle title={data} />}
      </View>
    </ScrollView>
  );
};
