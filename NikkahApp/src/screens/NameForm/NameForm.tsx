import React, { useState, useEffect } from 'react';
import { Text, View, BackHandler } from 'react-native';
import { Globalstyles } from '../../styles/globalStyes';
import { CLAUSES, LABELS } from '../../styles/constant';
import { styles } from './styles';
import BackButton from '../../components/BackButton';
import ProgressBar from '../../components/ProgressBar';
import InputField from '../../components/InputField';
import ContinueButton from '../../components/ContinueButton';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../redux/store';
import { decrementProgress, incrementProgress } from '../../redux/Slice/progressSlice';
import { NameformProps } from '../../types/interfaces/interfaces';

function SignUp1({ navigation }: NameformProps) {
  const [firstname, setFirstName] = useState('');
  const [middlename, setMiddleName] = useState('');
  const [lastname, setLastName] = useState('');
  const [fullname, setFullName] = useState('');
  const [displayname, setDisplayName] = useState('');

  const progress = useSelector((state: RootState) => state.progress.value);
  const dispatch = useDispatch();

  const handleContinue = () => {
    dispatch(incrementProgress());
    navigation.navigate('GenderSelection');
  };

  const handleBack = () => {
    if (progress > 0) {
      dispatch(decrementProgress());
      navigation.goBack();
    }
    else {
      navigation.goBack();
    }
    return true;
  };

  useEffect(() => {
    const backHandler = BackHandler.addEventListener('hardwareBackPress', handleBack);
    return () => backHandler.remove();
  }, [progress]);

  return (
    <View style={styles.container}>
      <View style={styles.progressView}>
        <BackButton />
        <ProgressBar progress={progress} />
      </View>
      <View>
        <Text style={Globalstyles.HeaderText}>{CLAUSES.WHATS_NAME}</Text>
      </View>

      <InputField
        label={LABELS.FIRST_NAME}
        placeholder={CLAUSES.ENTER_EMAIL}
        onChangeText={setFirstName}
        value={firstname}
      />
      <InputField
        label={LABELS.MIDDLE_NAME}
        placeholder={CLAUSES.ENTER_EMAIL}
        onChangeText={setMiddleName}
        value={middlename}
      />
      <InputField
        label={LABELS.LAST_NAME}
        placeholder={CLAUSES.ENTER_EMAIL}
        onChangeText={setLastName}
        value={lastname}
      />
      <InputField
        label={LABELS.FULL_NAME}
        placeholder={CLAUSES.ENTER_EMAIL}
        onChangeText={setFullName}
        value={fullname}
      />
      <InputField
        label={LABELS.DISPLAY_NAME}
        placeholder={CLAUSES.ENTER_EMAIL}
        onChangeText={setDisplayName}
        value={displayname}
      />
      <View style={styles.ContinueButton}>
        <ContinueButton onPress={handleContinue} />
      </View>
    </View>
  );
}

export default SignUp1;
