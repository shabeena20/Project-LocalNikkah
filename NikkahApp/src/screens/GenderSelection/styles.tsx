import { StyleSheet } from 'react-native';
import { colors } from '../../styles/colors';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: 'relative',
        backgroundColor: colors.SKIN,
    },
    progressView: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 40,

    },
    ContinueButton: {
        marginTop: 600
    },
    CardView: {
        marginTop: 20
    }
});