import React ,{useEffect} from 'react';
import { Text, View , BackHandler} from 'react-native';
import { Globalstyles } from '../../styles/globalStyes';
import { CLAUSES, LABELS } from '../../styles/constant';
import BackButton from '../../components/BackButton';
import ProgressBar from '../../components/ProgressBar';
import { styles } from '../GenderSelection/styles';
import GenderCard from '../GenderSelection/components/GenderCard'
import Male from '../../assets/svgs/Male';
import Female from '../../assets/svgs/Female';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../redux/store';
import { incrementProgress , decrementProgress} from '../../redux/Slice/progressSlice';
import {GenderSelectionProps} from '../../types/interfaces/interfaces'

function GenderSelection({ navigation }: GenderSelectionProps) {
  const progress = useSelector((state: RootState) => state.progress.value);
  const dispatch = useDispatch();


  const handleMalePress = () => {
    dispatch(incrementProgress());
    navigation.navigate('SelectDob');
  };
  const handleBack = () => {
    if (progress > 0) {
      dispatch(decrementProgress());
      navigation.goBack(); 
    } 
    else {
      navigation.goBack();
    }
    return true; 
  };

  useEffect(() => {
    const backHandler = BackHandler.addEventListener('hardwareBackPress', handleBack);
    return () => backHandler.remove(); 
  }, [progress]);
  return (
    <View style={styles.container}>
      <View style={styles.progressView}>
        <BackButton />
        <ProgressBar progress={progress} />
      </View>
      <Text style={Globalstyles.HeaderText}>{CLAUSES.SHARE_GENDER}</Text>
      <View style={styles.CardView}>
        <GenderCard title={LABELS.MAN} icon={<Male />} onPress={handleMalePress} />
        <GenderCard title={LABELS.WOMAN} icon={<Female />} onPress={handleMalePress} />
      </View>
    </View>
  );

}

export default GenderSelection;

