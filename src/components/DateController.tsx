import React from 'react';
import {
  ActivityIndicator,
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import {images} from '../utils/constants/assets';
import {colors} from '../utils/constants/colors';
import {fonts} from '../utils/constants/fonts';
import TextComponent from './TextComponent';

const DateController = (props: any) => {
  return (
    <View style={styles.arrow_container}>
      <TouchableOpacity onPress={() => props.getPrevWeek()}>
        <Image source={images.arrow_left} />
      </TouchableOpacity>

      {props.isLoading ? (
        <ActivityIndicator color={colors.cyan_blue} />
      ) : (
        <TextComponent
          fontFamily={fonts.primary_bold_font}
          fontSize={12}
          lineHeight={24}
          color={colors.screen_title_color}>
          {props.selectedDate.split(' ')[0] +
            ' ' +
            props.selectedDate.split(' ')[1]}
        </TextComponent>
      )}

      <TouchableOpacity onPress={() => props.getNextWeek()}>
        <Image source={images.arrow_right} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  arrow_container: {
    marginTop: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

export default DateController;
