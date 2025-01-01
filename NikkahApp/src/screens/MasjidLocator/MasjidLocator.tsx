import React, { useState } from 'react';
import { Text, View, FlatList } from 'react-native';
import { Globalstyles } from '../../styles/globalStyes';
import { CLAUSES } from '../../styles/constant';
import MasjidCard from '../MasjidLocator/components/MasjidCard'
import { styles } from '../MasjidLocator/styles';
import MaritalProfile_Modal from '../../components/MartialProfile_Modal';
import BackButton from '../../components/BackButton';
import {MasjidLocatorProps} from '../../types/interfaces/interfaces'


function MasjidLocator({ navigation }: MasjidLocatorProps) {
  const [isModalVisible, setModalVisible] = useState(false);

  const masjids = [
    { id: 1, title: CLAUSES.MASJID1, image: require('../../assets/images/Masjid_Logo1.png') },
    { id: 2, title: CLAUSES.MASJID2, image: require('../../assets/images/Masjid_Logo2.png') },
    { id: 3, title: CLAUSES.MASJID3, image: require('../../assets/images/Masjid_Logo3.png') },
    { id: 4, title: CLAUSES.MASJID4, image: require('../../assets/images/Masjid_Logo4.png') },
  ];

  const handleCardPress = () => {
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
  };

  return (
    <View style={Globalstyles.container}>
      <BackButton />

      <View style={Globalstyles.HeaderView}>
        <Text style={Globalstyles.HeaderText}>{CLAUSES.CHOOSE_MASJID}</Text>
      </View>

      <FlatList
        data={masjids}
        renderItem={({ item, index }) => (
          <MasjidCard
            title={item.title}
            image={item.image}
            onPress={handleCardPress}
            style={index === masjids.length - 1 ? styles.lastCard : {}}
          />
        )}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        contentContainerStyle={styles.gridContainer}
      />

      <MaritalProfile_Modal
        visible={isModalVisible}
        onClose={handleCloseModal}
      />
    </View>
  );
}

export default MasjidLocator;
