import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Text, TouchableOpacity } from 'react-native';
import {colors} from '../styles/colors'
import Icon from 'react-native-vector-icons/Ionicons';

type InputFieldProps = {
  label?: string;
  placeholder: string;
  secureTextEntry?: boolean;
  onChangeText: (text: string) => void;
  value: string;
  style?:any;
  editable?: boolean; 
};

export const InputField: React.FC<InputFieldProps> = ({
  label,
  placeholder,
  secureTextEntry = false,
  onChangeText,
  value,
  style,
  editable = true,
}) => {
  const [isPasswordVisible, setPasswordVisible] = useState(!secureTextEntry);

  return (
    <View style={[styles.container,style]}>
    
      {label && <Text style={styles.label}>{label}</Text>}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder={placeholder}
          secureTextEntry={!isPasswordVisible}
          onChangeText={onChangeText}
          value={value}
          editable={editable}
        />
        {secureTextEntry && (
          <TouchableOpacity onPress={() => setPasswordVisible(!isPasswordVisible)} style={{marginEnd:10}}>
             <Icon  name={isPasswordVisible ? 'eye-outline' : 'eye-off-outline'} size={22} color={colors.BlACK} />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    
  },
  label: {
    fontSize: 15,
    marginBottom: 5,
    marginStart:10,
    color:colors.BlACK,
    fontFamily:'Inter_24pt-Bold'
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 17,
    paddingHorizontal: 5,
    paddingVertical: 3,
    width:'93%',
    marginStart:13
  },
  input: {
    flex: 1,
    fontSize: 15,
    fontFamily:'Inter_18pt-Regular',
  },
  backButton: {
    marginBottom: 10,
    marginStart: 10,
  },
});

export default InputField;
