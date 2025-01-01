import { StyleSheet } from 'react-native';
import { colors } from '../styles/colors'
import { GELASIOBOLD, INTER_BOLD, INTER_REGULAR } from './fonts';

export const Globalstyles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
    backgroundColor: colors.SKIN,
  },
  HeaderView: {
    marginTop: 90,
    marginBottom: 20
  },
  HeaderText: {
    fontSize: 20,
    marginStart: 13,
    fontFamily: GELASIOBOLD,
  },
  Button: {
    backgroundColor: colors.YELLOW,
    borderRadius: 15,
    paddingVertical: 12,
    alignItems: 'center',
    justifyContent: 'center',
    width: '93%',
    alignSelf: 'center',
    marginVertical: 10,

  },
  ButtonText: {
    color: colors.GREEN,
    fontFamily: INTER_BOLD
  },
  FooterContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginStart: 80,
    marginTop: 10,
    paddingHorizontal: 10,
  },
  InfoText: {
    color: colors.LIGHT_BROWN,
    fontFamily: INTER_REGULAR
  },
  EnterCredentials: {
    color: colors.GREEN,
    fontFamily: INTER_BOLD
  },
  ContinueButtonView: {
    marginTop: 100
  },
  container_Progress: {
    flex: 1,
    position: 'relative',
    backgroundColor: colors.SKIN,
  },
  progressView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 40,

  },
});