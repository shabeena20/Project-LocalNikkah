import { StyleSheet } from 'react-native';
import { colors } from '../../styles/colors';
import { GELASIOBOLD } from '../../styles/fonts';

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
    HeaderView: {
        marginTop: 90,
        marginBottom: 20
    },
    HeaderText: {
        fontSize: 20,
        marginStart: 13,
        fontFamily: GELASIOBOLD,
    },
    ProgressBar: {
        marginRight: 10,
    },
    ContinueButton: {
        marginTop: 100
    }
});