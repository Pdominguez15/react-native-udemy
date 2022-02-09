import React from 'react';
import Carousel from 'react-native-snap-carousel';
import {ActivityIndicator, Dimensions, ScrollView, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useMovies} from '../hooks/useMovies';
import {MoviePoster} from '../components/MoviePoster';
import {HorizontalSlider} from '../components/HorizontalSlider';

const {width: windowWidth} = Dimensions.get('window');

export const HomeScreen = () => {
  const {nowPlaying, popular, topRated, upComing, isLoading} = useMovies();
  const {top} = useSafeAreaInsets();

  if (isLoading) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignContent: 'center'}}>
        <ActivityIndicator color="red" size={100} />
      </View>
    );
  }

  return (
    <ScrollView>
      <View style={{marginTop: top + 20}}>
        <View style={{height: 444}}>
          <Carousel
            data={nowPlaying} //Con el ! le decimos que el valor que le llegará es distinto a undefined
            renderItem={({item}) => <MoviePoster movie={item} />}
            sliderWidth={windowWidth}
            itemWidth={300}
            inactiveSlideOpacity={0.9}
          />
        </View>

        <HorizontalSlider title="Popular" movies={popular} />
        <HorizontalSlider title="Top Rated" movies={topRated} />
        <HorizontalSlider title="Upcoming" movies={upComing} />
      </View>
    </ScrollView>
  );
};
