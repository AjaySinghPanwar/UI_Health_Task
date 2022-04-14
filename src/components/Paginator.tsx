/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/react-in-jsx-scope */
import React from 'react';
import {StyleSheet, View, Animated, useWindowDimensions} from 'react-native';
import {images} from '../utils/constants/assets';
import {SliderDataProps} from '../utils/types';

const Paginator = ({data, scrollX}: SliderDataProps) => {
  const {width} = useWindowDimensions();

  return (
    <View style={styles.container}>
      {data.map((_, index: number) => {
        const inputRange = [
          (index - 1) * width,
          index * width,
          (index + 1) * width,
        ];

        const opacity = scrollX.interpolate({
          inputRange,
          outputRange: [0.4, 1, 0.4],
          extrapolate: 'clamp',
        });

        return (
          <Animated.Image
            source={images.slider}
            style={[styles.image, {resizeMode: 'contain', opacity}]}
            key={'Paginator' + index.toString()}
          />
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 48,
  },

  image: {
    width: 8,
    height: 8,
  },
});

export default Paginator;
