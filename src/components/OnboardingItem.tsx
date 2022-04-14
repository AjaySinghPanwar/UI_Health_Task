/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/react-in-jsx-scope */
import React from 'react';
import {Image, StyleSheet, Text, useWindowDimensions, View} from 'react-native';
import {colors} from '../utils/constants/colors';
import {fonts} from '../utils/constants/fonts';

const OnboardingItem = ({item}: any) => {
  const {width} = useWindowDimensions();

  return (
    <View style={[styles.container, {width}]}>
      <Image
        source={item.image}
        style={[styles.image, {width, resizeMode: 'contain'}]}
      />

      <View style={{marginTop: 30, paddingHorizontal: 8}}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description}>{item.description}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 24,
  },

  image: {
    justifyContent: 'center',
    marginTop: 55,
  },

  title: {
    fontFamily: fonts.primary_bold_font,
    color: colors.blue,
    fontSize: 28,
    lineHeight: 40,
    textAlign: 'center',
  },

  description: {
    fontFamily: fonts.primary_medium_font,
    color: colors.grayBlue,
    fontSize: 14,
    lineHeight: 24,
    marginTop: 8,
    textAlign: 'center',
  },
});

export default OnboardingItem;
