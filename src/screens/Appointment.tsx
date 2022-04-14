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
import TextComponent from '../components/TextComponent';
import TextComponentBold from '../components/TextCompoentBold';
import TextComponentMedium from '../components/TextComponentMedium';
import DateController from '../components/DateController';

type drawerNavigationType = DrawerScreenProps<StackParamList, 'Appointment'>;

let controller = 0;

const Appointment = ({navigation}: drawerNavigationType) => {
  const [weekDates, setWeekDates] = useState([]);
  const [selectedTime, setSelectedTime] = useState<any>({
    start_time: '',
    end_time: '',
  });
  const [isStart, setIsStart] = useState(false);
  const [isPickerVisibility, setIsPickerVisibility] = useState(false);
  const [selectedDate, setSelectedDate] = useState<any>('');
  const [isLoading, setIsLoading] = useState(true);

  const getCurrentWeek = () => {
    let currentDate = moment();

    let days: any = [];
    let weekStart = currentDate.clone().startOf('isoWeek');

    for (let i = 0; i <= 5; i++) {
      days.push(moment(weekStart).add(i, 'days').format('D MMM YYYY'));
    }
    setWeekDates(days);
  };

  const getNextWeek = () => {
    controller = controller + 6;

    let currentDate = moment();

    let days: any = [];
    let weekStart = currentDate.clone().startOf('isoWeek');

    for (let i = 0; i <= 5; i++) {
      days.push(
        moment(weekStart)
          .add(i + controller, 'days')
          .format('D MMM YYYY'),
      );
    }
    setWeekDates(days);
  };

  const getPrevWeek = () => {
    controller = controller - 6;

    let currentDate = moment();

    let days: any = [];
    let weekStart = currentDate.clone().startOf('isoWeek');

    for (let i = 0; i <= 5; i++) {
      days.push(
        moment(weekStart)
          .add(i + controller, 'days')
          .format('D MMM YYYY'),
      );
    }
    setWeekDates(days);
  };

  useEffect(() => {
    getCurrentWeek();
  }, []);

  useEffect(() => {
    weekDates.forEach((day: any) => {
      if (day === moment().format('D MMM YYYY')) {
        setSelectedDate(day);
      }
    });
    setIsLoading(false);
  }, [weekDates]);

  return (
    <KeyboardAvoidingViewWrapper>
      <View style={styles.container}>
        <SafeAreaView>
          <TopBar
            left_image={images.burger_icon}
            title={stringConstants.appointment}
            right_image={images.calendar_icon}
            navigation={navigation}
          />
        </SafeAreaView>

        <View style={styles.card}>
          <Image source={images.appointment_page_banner} />
        </View>

        <View style={styles.main_container}>
          <View style={styles.this_week_dates}>
            <TextComponentBold title={stringConstants.date} />
            <TextComponentMedium title={stringConstants.other} />
          </View>

          <DateController
            isLoading={isLoading}
            selectedDate={selectedDate}
            getNextWeek={getNextWeek}
            getPrevWeek={getPrevWeek}
          />

          <View style={styles.card_container}>
            {weekDates.map((day: any, index: number) => {
              return (
                <View
                  style={
                    selectedDate === day
                      ? styles.dates_card_selected
                      : styles.dates_card
                  }
                  key={index}>
                  <TextComponent
                    fontFamily={fonts.primary_bold_font}
                    fontSize={12}
                    lineHeight={24}
                    color={
                      selectedDate === day
                        ? colors.primary_white
                        : colors.desc_color
                    }>
                    {day.split(' ')[0]}
                  </TextComponent>
                  <TextComponent
                    fontFamily={fonts.primary_regular_font}
                    fontSize={12}
                    lineHeight={24}
                    color={
                      selectedDate === day
                        ? colors.primary_white
                        : colors.desc_color
                    }>
                    {day.split(' ')[1]}
                  </TextComponent>
                </View>
              );
            })}
          </View>
        </View>

        <View style={[styles.main_container, {marginTop: 16}]}>
          <TextComponentBold title={stringConstants.schedule} />

          <View style={styles.picker_main_container}>
            <TouchableOpacity
              style={styles.picker_styles}
              onPress={() => {
                setIsPickerVisibility(true);
                setIsStart(true);
              }}>
              <View style={styles.picker_inner_styles}>
                {selectedTime.start_time !== '' ? (
                  <>
                    <Text style={styles.pickerText}>
                      {selectedTime.start_time}
                    </Text>
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
              <View style={styles.picker_inner_styles}>
                {selectedTime.end_time !== '' ? (
                  <>
                    <Text style={styles.pickerText}>
                      {selectedTime.end_time}
                    </Text>
                    <Image source={images.down_arrow} />
                  </>
                ) : (
                  <>
                    <Text style={styles.pickerText}>
                      {stringConstants.end_time}
                    </Text>
                    <Image source={images.down_arrow} />
                  </>
                )}
              </View>
            </TouchableOpacity>
          </View>
        </View>

        <View style={[styles.main_container, {marginTop: 16}]}>
          <TextComponentBold title={stringConstants.complaint} />
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
              ? setSelectedTime({
                  ...selectedTime,
                  start_time: time.toLocaleTimeString(),
                })
              : setSelectedTime({
                  ...selectedTime,
                  end_time: time.toLocaleTimeString(),
                });
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
    paddingVertical: 30,
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
    justifyContent: 'space-between',
    alignItems: 'center',
    width: 50,
    height: 56,
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 12,
    backgroundColor: '#F9F9F9',
  },

  dates_card_selected: {
    justifyContent: 'space-between',
    alignItems: 'center',
    width: 46,
    height: 56,
    paddingHorizontal: 12,
    paddingVertical: 4,
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

  picker_inner_styles: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
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
    paddingTop: 16,
    paddingLeft: 16,
  },
});

export default Appointment;
