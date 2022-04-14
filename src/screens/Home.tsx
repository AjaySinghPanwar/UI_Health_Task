/* eslint-disable react-native/no-inline-styles */
import {DrawerScreenProps} from '@react-navigation/drawer';
import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  ImageBackground,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import TopBar from '../components/TopBar';
import {images} from '../utils/constants/assets';
import {colors} from '../utils/constants/colors';
import {packageData, servicesData} from '../utils/constants/data';
import {fonts} from '../utils/constants/fonts';
import {stringConstants} from '../utils/constants/stringConstants';
import {StackParamList} from '../utils/types';

type drawerNavigationType = DrawerScreenProps<StackParamList, 'Home'>;

const Home = ({navigation}: drawerNavigationType) => {
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <TopBar
          left_image={images.burger_icon}
          title=""
          right_image={images.profile_image}
          navigation={navigation}
        />
      </SafeAreaView>
      <View style={styles.card}>
        <Text style={styles.hello_text}>
          {stringConstants.homeCardhelloText}
        </Text>
        <Text style={styles.card_title}>
          {stringConstants.homeCarddDescText}
        </Text>

        <ImageBackground
          source={images.home_page_banner}
          resizeMode="cover"
          style={styles.image}
        />
      </View>
      <View style={styles.search_input_container}>
        <Image
          source={images.search_icon}
          style={{position: 'absolute', marginLeft: 16, marginVertical: 14}}
        />
        <Text style={styles.search_input_title}>{stringConstants.search}</Text>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: 100}}>
        <View style={styles.services_main_container}>
          <View style={styles.services_title}>
            <Text
              style={{
                fontFamily: fonts.primary_bold_font,
                fontSize: 16,
                lineHeight: 24,
                textTransform: 'capitalize',
                color: colors.screen_title_color,
              }}>
              {stringConstants.our_service}
            </Text>
            <Text
              style={{
                fontFamily: fonts.primary_medium_font,
                fontSize: 14,
                lineHeight: 24,
                textTransform: 'capitalize',
                color: colors.blue,
              }}>
              {stringConstants.view_all}
            </Text>
          </View>
          <View style={styles.services_card_container}>
            {servicesData.map((service, index: number) => {
              return (
                <TouchableOpacity>
                  <View style={styles.services_card} key={'services' + index}>
                    <View style={styles.service_card_image_container}>
                      <Image source={service.image} />
                    </View>
                    <Text style={styles.service_text}>{service.title}</Text>
                  </View>
                </TouchableOpacity>
              );
            })}
          </View>
        </View>

        <SafeAreaView>
          <View style={styles.services_main_container}>
            <View style={styles.services_title}>
              <Text
                style={{
                  fontFamily: fonts.primary_bold_font,
                  fontSize: 16,
                  lineHeight: 24,
                  textTransform: 'capitalize',
                  color: colors.screen_title_color,
                }}>
                {stringConstants.our_package}
              </Text>
              <Text
                style={{
                  fontFamily: fonts.primary_medium_font,
                  fontSize: 14,
                  lineHeight: 24,
                  textTransform: 'capitalize',
                  color: colors.blue,
                }}>
                {stringConstants.view_all}
              </Text>
            </View>
            <View style={styles.services_card_container}>
              {packageData.map((item, index: number) => {
                return (
                  <TouchableOpacity>
                    <View style={styles.packages_card} key={'packages' + index}>
                      <View style={styles.service_card_image_container}>
                        <Image source={item.image} />
                      </View>
                      <View
                        style={{
                          width: '100%',
                          marginTop: 4,
                        }}>
                        <Text style={styles.packages_title}>{item.title}</Text>
                        <Text style={styles.packages_subtitle}>
                          {item.subtitle}
                        </Text>
                      </View>
                    </View>
                  </TouchableOpacity>
                );
              })}
            </View>
          </View>
        </SafeAreaView>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 42,
  },

  card: {
    marginTop: 16,
  },

  image: {
    height: 200,
  },

  card_title: {
    fontFamily: fonts.primary_medium_font,
    fontSize: 14,
    lineHeight: 24,
    color: colors.desc_color,
  },

  hello_text: {
    fontFamily: fonts.primary_bold_font,
    fontSize: 20,
    lineHeight: 32,
    color: colors.screen_title_color,
  },

  search_input_container: {
    width: '100%',
    height: 52,
    backgroundColor: colors.primary_white,
    borderRadius: 16,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#E6E6E6',
    marginTop: 16,
  },

  search_input_title: {
    position: 'absolute',
    marginLeft: 52,
    marginTop: 16,
    marginBottom: 17,
    textTransform: 'capitalize',
    fontFamily: fonts.primary_semi_bold_font,
    color: colors.desc_color,
    fontSize: 16,
    lineHeight: 19,
  },

  services_main_container: {
    height: 136,
    marginTop: 20,
  },

  services_title: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  services_card_container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
  },

  services_card: {
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 100,
  },

  service_card_image_container: {
    backgroundColor: colors.primary_white,
    borderRadius: 16,
    width: 68,
    height: 68,
    shadowColor: 'rgba(131, 131, 131, 0.1)',
    shadowOffset: {width: 0, height: 4},
    shadowRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },

  service_text: {
    fontFamily: fonts.primary_semi_bold_font,
    color: colors.grayBlue,
    fontSize: 12,
    lineHeight: 20,
  },

  packages_card: {
    justifyContent: 'space-evenly',
    alignItems: 'center',
    width: 156,
    height: 160,
    padding: 12,
    borderRadius: 16,
    backgroundColor: colors.primary_white,
    shadowColor: 'rgba(158, 158, 158, 0.1)',
    shadowOffset: {width: 0, height: 4},
    shadowRadius: 10,
  },

  packages_title: {
    fontFamily: fonts.primary_semi_bold_font,
    color: colors.screen_title_color,
    fontSize: 14,
    lineHeight: 24,
  },

  packages_subtitle: {
    fontFamily: fonts.primary_semi_bold_font,
    color: colors.desc_color,
    fontSize: 12,
    lineHeight: 16,
  },
});

export default Home;
