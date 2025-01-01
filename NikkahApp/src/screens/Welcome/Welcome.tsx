import React from "react";
import { View, Text, ImageBackground } from "react-native";
import { styles } from "./styles";
import { LABELS, CLAUSES } from '../../styles/constant';
import { LoginOptionButton } from "../../components/LoginOptionButton";
import { useNavigation } from '@react-navigation/native';
import Email from "../../assets/svgs/Email";
import Apple from "../../assets/svgs/Apple";
import Google from "../../assets/svgs/Google";
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../navigation/RootStack';

type WelcomeNavigationProp = StackNavigationProp<RootStackParamList, 'Welcome'>;
const Welcome: React.FC = () => {
  const navigation:any = useNavigation<WelcomeNavigationProp>();
  const handleButtonPress = (screenName: keyof RootStackParamList) => {
    navigation.navigate(screenName);
  };
  return (
    <ImageBackground
      source={require('../../assets/images/Welcome_Background.png')}
      style={styles.background}
      resizeMode="cover"
    >
      <View >
        <View style={styles.NikkahView}>
          <Text style={styles.NikkahText}>{LABELS.NIKKAH}</Text>
          <Text style={styles.FindSpouse}>{CLAUSES.FIND_SPOUSE}</Text>
        </View>
        <View style={styles.ContinueView}>
          <LoginOptionButton onPress={() => handleButtonPress('EmailSignUp')} title={CLAUSES.GOOGLE} icon={<Google />} />
          <LoginOptionButton onPress={() => handleButtonPress('EmailSignUp')} title={CLAUSES.APPLE} icon={<Apple />} />
          <LoginOptionButton onPress={() => handleButtonPress('EmailSignUp')} title={CLAUSES.EMAIL} icon={<Email />} />
        </View>
        <Text style={styles.TermsText}>
          <Text style={styles.BY_CONTINUING}>{CLAUSES.BY_CONTINUING}</Text>
          <Text style={styles.TERMS_AND_SERVICES} >{CLAUSES.TERMS_AND_SERVICES}</Text>
          <Text >{LABELS.AND}</Text><Text style={styles.TERMS_AND_SERVICES} >{CLAUSES.BOLD_PRIVACY}</Text>
        </Text>
      </View>
    </ImageBackground>
  );
};


export default Welcome;
