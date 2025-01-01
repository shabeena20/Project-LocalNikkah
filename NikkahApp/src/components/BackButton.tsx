import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { decrementProgress } from '../redux/Slice/progressSlice';

const BackButton: React.FC = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const handleBackPress = () => {
    dispatch(decrementProgress());
    navigation.goBack();
  };

  return (
    <TouchableOpacity style={styles.backButton} onPress={handleBackPress}>
      <Icon name="arrow-back" size={24} color="black" />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({

  backButton: {
    position: 'absolute',
    top: 20,
    left: 6,
    zIndex: 10,
    padding: 10,
  },
});

export default BackButton;
