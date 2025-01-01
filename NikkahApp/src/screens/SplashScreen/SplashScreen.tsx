import React, { useEffect } from 'react';
import { View, Text, ImageBackground } from 'react-native';
import SplashLogo from '../../assets/svgs/SplashLogo';
import { LABELS, CLAUSES } from '../../styles/constant';
import { styles } from '../SplashScreen/styles';

type SplashScreenProps = {
  navigation: any;
};
const SplashScreen: React.FC<SplashScreenProps> = ({ navigation }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('Welcome');
    }, 1000);

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <ImageBackground
      source={require('../../assets/images/Splash_Background.png')}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.container}>

        <SplashLogo style={styles.logo} />
        <Text style={styles.title}>{LABELS.LOCAL_NIKKAH}</Text>
        <View style={styles.ArabicView}>
          <Text style={styles.arabicText}>{LABELS.ARABIC_TEXT}</Text>
          <Text style={styles.translation}>{CLAUSES.CREATED_IN_PAIRS}</Text>
        </View>
      </View>
    </ImageBackground>
  );
};

export default SplashScreen;
