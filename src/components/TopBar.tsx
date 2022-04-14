/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Image, ImageSourcePropType, StyleSheet, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {colors} from '../utils/constants/colors';
import {fonts} from '../utils/constants/fonts';

type TopBarProps = {
  left_image: ImageSourcePropType;
  title: string;
  right_image: ImageSourcePropType;
  navigation: any;
};

const TopBar = ({navigation, ...props}: TopBarProps) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.openDrawer()}>
        <View style={styles.ham_icon}>
          <Image source={props.left_image} />
        </View>
      </TouchableOpacity>
      <View>
        <Text style={styles.title}>{props.title}</Text>
      </View>
      <View
        style={[
          styles.ham_icon,
          {
            backgroundColor:
              props.title !== '' ? colors.white_smoke : colors.cyan_blue,
          },
        ]}>
        <Image source={props.right_image} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  ham_icon: {
    width: 36,
    height: 36,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.white_smoke,
  },

  title: {
    fontFamily: fonts.primary_bold_font,
    fontSize: 20,
    lineHeight: 28,
    color: colors.screen_title_color,
  },
});

export default TopBar;
