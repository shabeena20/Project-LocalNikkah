import { StyleSheet } from 'react-native';
import { colors } from '../../styles/colors';
import { GELASIOBOLD , INTER_REGULAR} from '../../styles/fonts';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: 'relative',
        backgroundColor: colors.SKIN,
    },
    profileImageWrapper: {
        width: 120, 
        height: 120,
        borderRadius: 60, 
        backgroundColor: colors.WHITE, 
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 5, 
        marginStart:145,
        marginTop:60
      },
      profileImage: {
        width: 110, 
        height: 110,
        borderRadius: 55,
      },
      name:{
        alignItems:'center',
        justifyContent:'center',
        marginLeft:140,
        marginTop:15,
        fontFamily:GELASIOBOLD,
        fontSize:25
      },
       EmailText: {
          color: colors.LIGHT_BROWN,
          fontFamily: INTER_REGULAR,
          marginStart:110,
          fontSize:15
        },
});