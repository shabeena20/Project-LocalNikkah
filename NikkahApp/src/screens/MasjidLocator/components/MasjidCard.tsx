import React from 'react';
import { Text, Image, TouchableOpacity, StyleSheet, GestureResponderEvent, ImageSourcePropType } from 'react-native';

interface MasjidCardProps {
  image: ImageSourcePropType;
  title: string;
  onPress: (event: GestureResponderEvent) => void;
  style?: object;
}
const MasjidCard: React.FC<MasjidCardProps> = ({ image, title, onPress, style }) => {
  return (
    <TouchableOpacity style={[styles.card, style]} onPress={onPress}>
      <Image source={image} style={styles.image} />
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  card: {
    alignItems: 'center',
    margin: 10,
    backgroundColor: '#fff',
    padding: 24,
    borderRadius: 15,
    width: 181,
    height: 184,
  },
  image: {
    width: '100%',
    height: 80,
    resizeMode: 'contain',
    marginBottom: 10,
  },
  title: {
    fontSize: 14,
    fontFamily: 'Inter_18pt-Regular',
    textAlign: 'center',
  },
});

export default MasjidCard;
