/* eslint-disable react-native/no-inline-styles */
import {DrawerScreenProps} from '@react-navigation/drawer';
import moment from 'moment';
import React, {useEffect, useState} from 'react';
import {View, StyleSheet, Image, Text, TouchableOpacity} from 'react-native';
import TopBar from '../components/TopBar';
import {images} from '../utils/constants/assets';
import {colors} from '../utils/constants/colors';
import {fonts} from '../utils/constants/fonts';
import {stringConstants} from '../utils/constants/stringConstants';
import {StackParamList} from '../utils/types';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import {TextInput} from 'react-native-gesture-handler';
import Button from '../components/Button';
import {SafeAreaView} from 'react-native-safe-area-context';
import KeyboardAvoidingViewWrapper from '../components/KeyboardAvoidingViewWrapper';

type drawerNavigationType = DrawerScreenProps<StackParamList, 'Appointment'>;

const Appointment = ({navigation}: drawerNavigationType) => {
  const [weekDates, setWeekDates] = useState([]);
  const [selectedDay, setSelectedDay] = useState(0);
  const [selectedStartTime, setSelectedStartTime] = useState<any>('');
  const [selectedEndTime, setSelectedEndTime] = useState<any>('');
  const [isStart, setIsStart] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const [isPickerVisibility, setIsPickerVisibility] = useState(false);

  const getCurrentWeek = () => {
    var currentDate = moment();

    var days: any = [];
    var weekStart = currentDate.clone().startOf('isoWeek');

    for (var i = 0; i <= 6; i++) {
      days.push(moment(weekStart).add(i, 'days').format('D MMM'));
    }

    setWeekDates(days);
  };

  useEffect(() => {
    getCurrentWeek();
  }, []);

  return (
    <KeyboardAvoidingViewWrapper>
      <View style={styles.container}>
        <SafeAreaView>
          <TopBar
            left_image={images.burger_icon}
            title={stringConstants.appointment}
            right_image={images.calender_icon}
            navigation={navigation}
          />
        </SafeAreaView>
        <View style={styles.card}>
          <Image source={images.appointment_page_banner} />
        </View>

        <View style={styles.main_container}>
          <View style={styles.this_week_dates}>
            <Text
              style={{
                fontFamily: fonts.primary_bold_font,
                fontSize: 16,
                lineHeight: 24,
                textTransform: 'capitalize',
                color: colors.screen_title_color,
              }}>
              {stringConstants.date}
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

          <View style={styles.card_container}>
            {weekDates.map((day: any, index: number) => {
              return (
                <TouchableOpacity
                  onPress={() => {
                    setSelectedDay(day);
                    setSelectedIndex(index);
                  }}
                  key={index}>
                  <View
                    style={
                      selectedIndex === index
                        ? styles.dates_card_selected
                        : styles.dates_card
                    }>
                    <Text
                      style={{
                        fontFamily: fonts.primary_bold_font,
                        fontSize: 14,
                        lineHeight: 24,
                        color:
                          selectedIndex === index
                            ? colors.primary_white
                            : colors.desc_color,
                      }}>
                      {day.split(' ')[0]}
                    </Text>
                    <Text
                      style={{
                        fontFamily: fonts.primary_regular_font,
                        fontSize: 12,
                        lineHeight: 24,
                        color:
                          selectedIndex === index
                            ? colors.primary_white
                            : colors.desc_color,
                      }}>
                      {day.split(' ')[1]}
                    </Text>
                  </View>
                </TouchableOpacity>
              );
            })}
          </View>
        </View>

        <View style={styles.main_container}>
          <Text
            style={{
              fontFamily: fonts.primary_bold_font,
              fontSize: 16,
              lineHeight: 24,
              textTransform: 'capitalize',
              color: colors.screen_title_color,
            }}>
            {stringConstants.schedule}
          </Text>

          <View style={styles.picker_main_container}>
            <TouchableOpacity
              style={styles.picker_styles}
              onPress={() => {
                setIsPickerVisibility(true);
                setIsStart(true);
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  width: '100%',
                }}>
                {selectedStartTime !== '' ? (
                  <>
                    <Text style={styles.pickerText}>{selectedStartTime}</Text>
                    <Image source={images.down_arrow} />
                  </>
                ) : (
                  <>
                    <Text style={styles.pickerText}>
                      {stringConstants.start_time}
                    </Text>
                    <Image source={images.down_arrow} />
                  </>
                )}
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.picker_styles}
              onPress={() => {
                setIsPickerVisibility(true);
                setIsStart(false);
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  width: '100%',
                }}>
                {selectedEndTime !== '' ? (
                  <>
                    <Text style={styles.pickerText}>{selectedEndTime}</Text>
                    <Image source={images.down_arrow} />
                  </>
                ) : (
                  <>
                    <Text style={styles.pickerText}>
                      {stringConstants.start_time}
                    </Text>
                    <Image source={images.down_arrow} />
                  </>
                )}
              </View>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.main_container}>
          <Text
            style={{
              fontFamily: fonts.primary_bold_font,
              fontSize: 16,
              lineHeight: 24,
              textTransform: 'capitalize',
              color: colors.screen_title_color,
            }}>
            {stringConstants.complaint}
          </Text>

          <TextInput
            style={styles.complaint_box}
            placeholder={stringConstants.complaint_text}
            multiline
          />
        </View>

        <View style={{marginTop: 28}}>
          <Button title={stringConstants.next} width={324} height={52} />
        </View>

        <DateTimePickerModal
          isVisible={isPickerVisibility}
          mode="time"
          onConfirm={time => {
            isStart
              ? setSelectedStartTime(time.toLocaleTimeString())
              : setSelectedEndTime(time.toLocaleTimeString());

            setIsPickerVisibility(false);
          }}
          onCancel={() => {
            setIsPickerVisibility(false);
          }}
        />
      </View>
    </KeyboardAvoidingViewWrapper>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary_white,
    paddingHorizontal: 24,
    paddingVertical: 42,
  },

  card: {
    width: '100%',
    height: 233,
    justifyContent: 'center',
    alignItems: 'center',
  },

  main_container: {
    marginTop: 8,
  },

  this_week_dates: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  card_container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 8,
  },

  dates_card: {
    justifyContent: 'space-evenly',
    alignItems: 'center',
    width: 44,
    height: 56,
    paddingHorizontal: 4,
    paddingVertical: 12,
    borderRadius: 12,
    backgroundColor: '#F9F9F9',
  },

  dates_card_selected: {
    justifyContent: 'space-evenly',
    alignItems: 'center',
    width: 44,
    height: 56,
    paddingHorizontal: 4,
    paddingVertical: 12,
    borderRadius: 12,
    backgroundColor: colors.blue,
  },

  picker_main_container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 8,
  },

  picker_styles: {
    width: '45%',
    height: 52,
    backgroundColor: colors.primary_white,
    borderRadius: 16,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#E6E6E6',
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 14,
    paddingHorizontal: 16,
  },

  pickerText: {
    fontFamily: fonts.primary_medium_font,
    fontSize: 16,
    lineHeight: 24,
    color: '#949494',
  },

  complaint_box: {
    width: '100%',
    height: 117,
    backgroundColor: colors.primary_white,
    borderRadius: 12,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#E6E6E6',
    marginTop: 8,
    textAlignVertical: 'top',
    padding: 16,
  },
});

export default Appointment;
