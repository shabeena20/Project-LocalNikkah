import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { colors } from '../styles/colors';
import {LoginOptionButtonProps} from '../types/interfaces/interfaces'

export const LoginOptionButton: React.FC<LoginOptionButtonProps> = ({ onPress, title, icon }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <View style={styles.iconContainer}>
        {icon}
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.buttonText}>{title}</Text>
      </View>
    </TouchableOpacity>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.LIGHT_GREY,
    paddingVertical: 13,
    paddingHorizontal: 20,
    borderRadius: 15,
    width: '94%',
    marginStart: 11,
    marginTop: 15
  },
  iconContainer: {
    width: 24,
    height: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontFamily: 'Inter_24pt-Bold'
  },
});


export default LoginOptionButton;
