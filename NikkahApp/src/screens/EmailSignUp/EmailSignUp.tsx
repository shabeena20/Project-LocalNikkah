import React, { useState } from 'react';
import { View, Text, Alert, TouchableOpacity } from 'react-native';
import { Globalstyles } from '../../styles/globalStyes';
import { LABELS, CLAUSES } from '../../styles/constant';
import InputField from '../../components/InputField';
import BackButton from '../../components/BackButton';
import ContinueButton from '../../components/ContinueButton';
import { EmailSignUpProps } from '../../types/interfaces/interfaces';


const EmailSignUp = ({ navigation }: EmailSignUpProps) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleContinue = () => {
    if (password !== confirmPassword) {
      Alert.alert('Error', 'Passwords do not match!');
      return;
    }
    navigation.navigate('VerifyEmail', { email });
  };


  return (
    <View style={Globalstyles.container}>

      <BackButton />

      <View style={Globalstyles.HeaderView}>
        <Text style={Globalstyles.HeaderText}>{CLAUSES.EMAIL_SIGNUP}</Text>
      </View>

      <InputField
        label={LABELS.EMAIL}
        placeholder={CLAUSES.ENTER_EMAIL}
        onChangeText={setEmail}
        value={email}
      />
      <InputField
        label={LABELS.PASSWORD}
        placeholder={CLAUSES.ENTER_PASSWORD}
        secureTextEntry={true}
        onChangeText={setPassword}
        value={password}
      />
      <InputField
        label={LABELS.CONFIRM_PASSWORD}
        placeholder={CLAUSES.CONFIRM_YOUR_PASSWORD}
        secureTextEntry={true}
        onChangeText={setConfirmPassword}
        value={confirmPassword}
      />

      <ContinueButton onPress={handleContinue} />

      <View style={Globalstyles.FooterContainer}>
        <Text style={Globalstyles.InfoText}>{CLAUSES.ALREADY_ACCOUNT}</Text>
        <TouchableOpacity>
          <Text style={Globalstyles.EnterCredentials}>{LABELS.LOGIN}</Text></TouchableOpacity>
      </View>
    </View>
  );
};



export default EmailSignUp;
