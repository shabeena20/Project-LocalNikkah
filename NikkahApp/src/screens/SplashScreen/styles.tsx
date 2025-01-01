import { StyleSheet } from 'react-native';
import { colors } from '../../styles/colors';
import { INTER_REGULAR, FUTURA_MEDIUM, AMIRI_QURAN } from '../../styles/fonts';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  logo: {
    width: 120,
    height: 120,
    marginTop: -190,
  },
  title: {
    fontSize: 28,
    marginTop: 0,
    fontFamily: FUTURA_MEDIUM,
    color: colors.NEW_BRAND_PRIMARY,
    marginBottom: 40,
  },
  arabicText: {
    fontSize: 40,
    marginTop: 0,
    fontWeight: '400',
    color: 'black',
    textAlign: 'center',
    marginBottom: 10,
    fontFamily: AMIRI_QURAN,
  },
  translation: {
    fontSize: 17,
    color: 'black',
    textAlign: 'center',
    marginTop: -10,
    fontFamily: INTER_REGULAR
  },
  ArabicView: {
    marginTop: 80,
  },
});
