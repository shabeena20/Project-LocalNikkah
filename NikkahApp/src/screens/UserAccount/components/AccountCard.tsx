import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { colors } from '../../../styles/colors';
import { INTER_BOLD } from '../../../styles/fonts';
import Icon from 'react-native-vector-icons/Ionicons';

interface AccountCardProps {
  onPress: () => void;
  title: string
  icon: any
  style?: object;
}

export const AccountCard: React.FC<AccountCardProps> = ({ onPress, title, icon, style }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.card}>
      <View style={styles.iconContainer}>
        {icon}
      </View>
      <View style={styles.textContainer}>
        <Text style={[styles.title, style]}>{title}</Text>
        <Icon name="chevron-forward" size={24} color={colors.BlACK} />
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
  card: {
    flexDirection: 'row',
    backgroundColor: colors.WHITE,
    paddingVertical: 17,
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
    marginLeft: 20,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  title: {
    color: colors.BlACK,
    fontSize: 14,
    fontFamily: INTER_BOLD
  },
});

export default AccountCard;
