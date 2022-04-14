/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text, View} from 'react-native';

const TextComponent = ({children, ...props}: any) => {
  return (
    <View>
      <Text
        style={{
          fontFamily: props.fontFamily,
          color: props.color,
          fontSize: props.fontSize,
          lineHeight: props.lineHeight,
          textTransform: props?.textTransform,
        }}>
        {children}
      </Text>
    </View>
  );
};

export default TextComponent;
