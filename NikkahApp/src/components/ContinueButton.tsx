import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { Globalstyles } from '../styles/globalStyes';
import { LABELS } from '../styles/constant';
import { ContinueButtonProps} from '../types/interfaces/interfaces'

const ContinueButton: React.FC<ContinueButtonProps> = ({ onPress }) => {
  return (
    <TouchableOpacity style={Globalstyles.Button} onPress={onPress}>
      <Text style={Globalstyles.ButtonText}>{LABELS.CONTINUE}</Text>
    </TouchableOpacity>
  );
};

export default ContinueButton;
