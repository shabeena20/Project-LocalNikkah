import { StyleSheet } from 'react-native';
import {colors} from '../../styles/colors';
import { GELASIOBOLD, INTER_BOLD,INTER_REGULAR } from '../../styles/fonts';


export const styles = StyleSheet.create({
    background: {
        flex: 1,
        width: '100%',
        height: '100%',
      },
      NikkahView:{
        
      marginTop:60,
         alignItems:'center',
       justifyContent:'center'
      },
      NikkahText:{
        fontFamily:GELASIOBOLD,
        color:colors.WHITE,
        fontSize:24,
    
      },
      FindSpouse:{
        fontSize:13,
        fontFamily:INTER_REGULAR,
        color:colors.WHITE,
        marginTop:3
      },
      ContinueView:{
        marginTop:40
      },
      AppleView:{
        marginTop:20,
      },
      EmailView:{
        marginTop:20,
      },
      TERMS:{
        marginTop:20,
        marginStart:40
      },
      TermsText:{
        fontSize:14,
        marginStart:10,
        marginTop:15,
        color:colors.WHITE,
        fontFamily:INTER_REGULAR,
        textAlign: 'center', 
        marginHorizontal: 20,
        
      },
      TERMS_AND_SERVICES:{
        fontFamily:INTER_BOLD,
      },
      BY_CONTINUING:{
        fontFamily:INTER_REGULAR,
       
      }
});