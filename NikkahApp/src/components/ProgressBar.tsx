import React from 'react';
import { View, StyleSheet } from 'react-native';
import { colors } from '../styles/colors'
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import {ProgressBarProps} from '../types/interfaces/interfaces'

const ProgressBar: React.FC<ProgressBarProps> = () => {
  const progresss = useSelector((state: RootState) => state.progress.value)
  return (
    <View style={styles.container}>
      <View style={[styles.progress, { width: `${progresss * 100}%` }]} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 10,
    backgroundColor: colors.WHITE,
    borderRadius: 5,
    overflow: 'hidden',
    width: '90%',
    marginLeft: 15
  },
  progress: {
    backgroundColor: colors.GREEN,
    borderRadius: 5,
    height: '100%'
  },
});

export default ProgressBar;
