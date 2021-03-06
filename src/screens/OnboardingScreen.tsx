/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/react-in-jsx-scope */
import React, {useRef, useState} from 'react';
import {Animated, StyleSheet, TouchableOpacity, View} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import Button from '../components/Button';
import OnboardingItem from '../components/OnboardingItem';
import Paginator from '../components/Paginator';
import TextComponent from '../components/TextComponent';
import {colors} from '../utils/constants/colors';
import {slides} from '../utils/constants/data';
import {fonts} from '../utils/constants/fonts';
import {navigationConstants} from '../utils/constants/navigationConstants';
import {stringConstants} from '../utils/constants/stringConstants';

const OnboardingScreen = ({navigation}: any) => {
  //Variables
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;
  const slidesRef = useRef<any>(null);

  const viewableItemsChanged = useRef(({viewableItems}: any) => {
    setCurrentIndex(viewableItems[0].index);
  }).current;

  const viewConfig = useRef({viewAreaCoveragePercentThreshold: 50}).current;

  const scrollTo = () => {
    if (currentIndex < slides.length - 1) {
      slidesRef.current.scrollToIndex({
        index: currentIndex + 1,
      });
      setCurrentIndex(currentIndex + 1);
    } else {
      navigation.navigate(navigationConstants.drawer_navigator);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.title_container}>
        <TextComponent
          fontFamily={fonts.primary_bold_font}
          color={colors.blue}
          fontSize={20}
          lineHeight={32}>
          Healthy App
        </TextComponent>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate(navigationConstants.drawer_navigator)
          }>
          <TextComponent
            fontFamily={fonts.primary_bold_font}
            color={colors.desc_color}
            fontSize={16}
            lineHeight={24}>
            Skip
          </TextComponent>
        </TouchableOpacity>
      </View>

      <FlatList
        data={slides}
        renderItem={({item}) => <OnboardingItem item={item} />}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        bounces={false}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {x: scrollX}}}],
          {useNativeDriver: false},
        )}
        scrollEventThrottle={42}
        onViewableItemsChanged={viewableItemsChanged}
        viewabilityConfig={viewConfig}
        ref={slidesRef}
      />

      <Paginator data={slides} scrollX={scrollX} />

      <View style={{marginVertical: 43}}>
        <Button
          title={stringConstants.next}
          width={155}
          height={52}
          onPress={() => {
            scrollTo();
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },

  title_container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 30,
    width: '100%',
    paddingHorizontal: 24,
  },
});

export default OnboardingScreen;
