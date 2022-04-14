/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  KeyboardAvoidingView,
  Keyboard,
  TouchableWithoutFeedback,
  ScrollView,
} from 'react-native';

const KeyboardAvoidingViewWrapper = ({children}: any) => {
  return (
    <KeyboardAvoidingView style={{flex: 1}}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          {children}
        </TouchableWithoutFeedback>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default KeyboardAvoidingViewWrapper;
