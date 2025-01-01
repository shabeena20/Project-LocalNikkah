import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, GestureResponderEvent } from 'react-native';
import { INTER_REGULAR } from '../../../styles/fonts';
import { colors } from '../../../styles/colors';

interface GenderCardProps {
  icon: React.ReactNode;
  title: string;
  onPress: (event: GestureResponderEvent) => void;
  style?: object;
}

const GenderCard: React.FC<GenderCardProps> = ({ icon, title, onPress, style }) => {
  return (
    <TouchableOpacity style={[styles.card, style]} onPress={onPress}>
      <View style={styles.iconContainer}>
        {icon}
      </View>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    alignItems: 'center',
    margin: 8,
    backgroundColor: colors.WHITE,
    padding: 24,
    borderRadius: 15,
    width: 384,
    height: 112,
    marginLeft: 12
  },
  title: {
    fontSize: 14,
    fontFamily: INTER_REGULAR,
    marginLeft: -110
  },
  iconContainer: {
    width: 24,
    height: 24,
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginLeft: -270,
    marginTop: -5
  },
});

export default GenderCard;
