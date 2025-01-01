import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Globalstyles } from '../../styles/globalStyes';
import { styles } from '../VerifyEmail/styles';
import { LABELS, CLAUSES } from '../../styles/constant';
import CodeInputField from '../VerifyEmail/components/CodeInputField';
import BackButton from '../../components/BackButton';
import {VerifyEmailProps} from '../../types/interfaces/interfaces'



const VerifyEmail = ({ route, navigation }: VerifyEmailProps) => {
  const { email } = route.params;

  const handleContinue = () => {
    navigation.navigate('MasjidLocator');
  };

  return (
    <View style={Globalstyles.container}>
      <BackButton />
      <View style={Globalstyles.HeaderView}>
        <Text style={Globalstyles.HeaderText}>{CLAUSES.VERIFY_EMAIL}</Text>
      </View>
      <View style={styles.confirmationEmail}>
        <Text style={Globalstyles.InfoText}>{CLAUSES.CONFIRMATION_CODE}</Text>
        <Text style={styles.Email}>{email}</Text>
      </View>
      <CodeInputField length={4} />
      <TouchableOpacity style={Globalstyles.Button} onPress={handleContinue}>
        <Text style={Globalstyles.ButtonText}>{CLAUSES.VERIFY_EMAIL}</Text>
      </TouchableOpacity>
      <View style={Globalstyles.FooterContainer}>
        <Text style={Globalstyles.InfoText}>{CLAUSES.RECIEVE_CODE}</Text>
        <TouchableOpacity>
          <Text style={Globalstyles.EnterCredentials}>{LABELS.RESEND}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default VerifyEmail;
