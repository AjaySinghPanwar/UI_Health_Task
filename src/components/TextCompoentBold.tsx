/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View} from 'react-native';
import {colors} from '../utils/constants/colors';
import {fonts} from '../utils/constants/fonts';
import TextComponent from './TextComponent';

const TextComponentBold = (props: any) => {
  return (
    <View>
      <TextComponent
        fontFamily={fonts.primary_bold_font}
        fontSize={16}
        lineHeight={24}
        textTransform={'capitalize'}
        color={colors.screen_title_color}>
        {props.title}
      </TextComponent>
    </View>
  );
};

export default TextComponentBold;
