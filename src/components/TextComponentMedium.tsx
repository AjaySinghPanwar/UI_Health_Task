/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View} from 'react-native';
import {colors} from '../utils/constants/colors';
import {fonts} from '../utils/constants/fonts';
import TextComponent from './TextComponent';

const TextComponentMedium = (props: any) => {
  return (
    <View>
      <TextComponent
        fontFamily={fonts.primary_medium_font}
        fontSize={14}
        lineHeight={24}
        textTransform={'capitalize'}
        color={colors.blue}>
        {props.title}
      </TextComponent>
    </View>
  );
};

export default TextComponentMedium;
