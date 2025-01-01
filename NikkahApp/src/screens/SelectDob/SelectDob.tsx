import React, { useState, useEffect } from 'react';
import { Text, View, TouchableOpacity, StyleSheet, Alert, BackHandler } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Globalstyles } from '../../styles/globalStyes';
import { CLAUSES } from '../../styles/constant';
import BackButton from '../../components/BackButton';
import ProgressBar from '../../components/ProgressBar';
import ContinueButton from '../../components/ContinueButton';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../redux/store';
import { incrementProgress, decrementProgress } from '../../redux/Slice/progressSlice';
import InputField from '../../components/InputField';

function Select_DOB({ navigation }) {
  const progress = useSelector((state: RootState) => state.progress.value);
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState('');
  const dispatch = useDispatch();

  const handleContinue = () => {
    dispatch(incrementProgress());
    navigation.navigate('UserAccount');
  };

  const handleBack = () => {
    if (progress > 0) {
      dispatch(decrementProgress());
      navigation.goBack();
    } else {
      Alert.alert('Notice', 'You are at the first step!');
    }
    return true;
  };

  useEffect(() => {
    const backHandler = BackHandler.addEventListener('hardwareBackPress', handleBack);
    return () => backHandler.remove();
  }, [progress]);

  const onChange = (event, chosenDate) => {
    if (event.type === 'set' && chosenDate) {
      const formattedDate = chosenDate.toLocaleDateString();
      setDate(chosenDate);
      setSelectedDate(formattedDate);
    }
    setOpen(false);
  };

  return (
    <View style={Globalstyles.container}>
      <View style={Globalstyles.progressView}>
        <BackButton />
        <ProgressBar progress={progress} />
      </View>
      <Text style={Globalstyles.HeaderText}>{CLAUSES.SHARE_DOB}</Text>


      <TouchableOpacity onPress={() => setOpen(true)}>
        <InputField
          value={selectedDate}
          placeholder="Select your date of birth"
          editable={false}
        />
      </TouchableOpacity>


      {open && (
        <View
          style={{
            marginTop: -10,
            backgroundColor: 'transparent',
            borderRadius: 10,
            borderWidth: 1,
            borderColor: '#ddd',
            padding: 10,
            alignSelf: 'center',
          }}
        >
          <DateTimePicker
            testID="dateTimePicker"
            value={date}
            mode="date"
            is24Hour={true}
            display="spinner"
            onChange={onChange}
            textColor="#333"
            style={styles.picker}

          />
        </View>
      )}

      <View style={{ marginTop: 500 }}>
        <ContinueButton onPress={handleContinue} />
      </View>
    </View>
  );
}

export default Select_DOB;

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 12,
    backgroundColor: '#fff',
    fontSize: 16,
    color: '#333',
  },
  picker: {
    width: 300,
    backgroundColor: 'transparent',
  }
});
