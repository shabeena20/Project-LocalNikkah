import React from 'react';
import {
  Modal,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { INTER_REGULAR, GELASIOBOLD, INTER_BOLD } from '../styles/fonts';
import { colors } from '../styles/colors';
import { LABELS, CLAUSES } from '../styles/constant';
import { useNavigation } from '@react-navigation/native';
import { MaritalProfileModalNavigationProp, MaritalProfileModalProps } from '../types/interfaces/interfaces';


const MaritalProfile_Modal: React.FC<MaritalProfileModalProps> = ({
  visible,
  onClose,
}) => {

  const navigation = useNavigation<MaritalProfileModalNavigationProp>();
  const handleContinue = () => {
    navigation.navigate('NameForm'); 
  };

  return (
    <Modal
      visible={visible}
      transparent={true}
      animationType="fade"
      onRequestClose={onClose}
    >
      <View style={styles.overlay}>
        <View style={styles.modalContainer}>
          <Text style={styles.title}>{LABELS.MARITAL_PROFILE}</Text>
          <Text style={styles.description}>{CLAUSES.CREATE_PROFILE_TEXT}</Text>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.button}
              onPress={onClose}
            >
              <Text style={styles.Not_Now}>{LABELS.NOT_NOW}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button2}
              onPress={handleContinue}
            >
              <Text style={styles.Profile_ButtonText}>{CLAUSES.CREATE_MARITAL}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    width: '83%',
    backgroundColor: 'white',
    borderRadius: 15,
    padding: 20,
    alignItems: 'center',
    elevation: 5,
  },
  title: {
    fontSize: 24,
    fontFamily: GELASIOBOLD,
    marginBottom: 10,
    marginStart: -110,
  },
  description: {
    fontSize: 14,
    color: colors.DARK_BROWN,
    fontFamily: INTER_REGULAR,
    textAlign: 'left',
    marginBottom: 20,
    marginStart: -1,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  button: {
    marginLeft: 40,
    paddingVertical: 10,
    alignItems: 'center',
  },
  button2: {
    paddingVertical: 10,
    alignItems: 'center',
  },
  Not_Now: {
    color: colors.RED,
    fontSize: 14,
    fontFamily: INTER_BOLD,
  },
  Profile_ButtonText: {
    fontFamily: INTER_BOLD,
    color: colors.GREEN,
    fontSize: 14,
  },
});

export default MaritalProfile_Modal;
