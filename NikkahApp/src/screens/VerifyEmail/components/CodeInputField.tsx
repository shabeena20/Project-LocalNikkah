import React, { useRef, useState } from 'react';
import { TextInput, StyleSheet, View } from 'react-native';
import { colors } from '../../../styles/colors';

interface CodeInputFieldProps {
  length?: number;
  onCodeChange?: (code: string) => void;
  secureTextEntry?: boolean;
}

const CodeInputField: React.FC<CodeInputFieldProps> = ({ length = 4, onCodeChange, secureTextEntry = true }) => {
  const inputs = useRef<Array<TextInput | null>>([]);
  const [values, setValues] = useState<string[]>(Array(length).fill(''));

  const handleChangeText = (text: string, index: number) => {
    const updatedValues = [...values];
    updatedValues[index] = text;
    setValues(updatedValues);

    // Combine values into a single code
    const combinedCode = updatedValues.join('');
    onCodeChange?.(combinedCode);

    if (text.length === 1 && index < length - 1) {
      inputs.current[index + 1]?.focus();
    }
  };

  const handleKeyPress = (e: any, index: number) => {
    if (e.nativeEvent.key === 'Backspace' && values[index] === '' && index > 0) {
      inputs.current[index - 1]?.focus();
      const updatedValues = [...values];
      updatedValues[index - 1] = '';
      setValues(updatedValues);

      // Combine values into a single code
      const combinedCode = updatedValues.join('');
      onCodeChange?.(combinedCode);
    }
  };

  return (
    <View style={styles.container}>
      {Array.from({ length }).map((_, index) => (
        <TextInput
          key={index}
          style={styles.codeInput}
          keyboardType="number-pad"
          maxLength={1}
          secureTextEntry={secureTextEntry}
          onChangeText={(text) => handleChangeText(text, index)}
          onKeyPress={(e) => handleKeyPress(e, index)}
          value={values[index]}
          ref={(el) => (inputs.current[index] = el)}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  codeInput: {
    width: 80,
    height: 56,
    margin: 9,
    borderWidth: 1,
    borderColor: colors.DARK_SKIN,
    borderRadius: 17,
    textAlign: 'center',
    textAlignVertical: 'center',
    fontSize: 28,
    marginTop: 20,
  },
});

export default CodeInputField;
