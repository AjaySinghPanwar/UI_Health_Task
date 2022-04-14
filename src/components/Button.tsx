/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {colors} from '../utils/constants/colors';
import {fonts} from '../utils/constants/fonts';

type ButtonProps = {
  width: number;
  height: number;
  title: string;
  onPress?: () => void;
};

const Button = (props: ButtonProps) => {
  return (
    <SafeAreaView>
      <TouchableOpacity style={styles.touchable_styles} onPress={props.onPress}>
        <View
          style={[
            styles.container_style,
            {width: props.width, height: props.height},
          ]}>
          <Text style={styles.title_style}>{props.title}</Text>
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Button;

const styles = StyleSheet.create({
  touchable_styles: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  container_style: {
    backgroundColor: colors.blue,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },

  title_style: {
    fontFamily: fonts.primary_bold_font,
    fontSize: 16,
    lineHeight: 24,
    color: colors.primary_white,
  },
});
