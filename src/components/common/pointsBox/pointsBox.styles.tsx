import { StyleSheet } from 'react-native';
import Colors from '../../../assets/styles/colors';
import * as Typography from '../../../assets/styles/typography';

const styles = StyleSheet.create({
    boxContainer: {
        width: 286,
        height: 143,
        backgroundColor: Colors.MAIN_BLUE,
        borderRadius: 20,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: Colors.BLACK_2,
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.5,
        shadowRadius: 4,
        elevation: 4,
    },
    pointsText: {
        color: Colors.WHITE_1,
        fontFamily: Typography.FONT_FAMILY_BOLD,
        fontWeight: Typography.FONT_WEIGHT_BOLD,
        fontSize: Typography.FONT_SIZE_32,
    },
    dateText: {
        color: Colors.WHITE_1,
        fontFamily: Typography.FONT_FAMILY_BOLD,
        fontWeight: Typography.FONT_WEIGHT_BOLD,
        fontSize: Typography.FONT_SIZE_16,
        position: 'absolute',
        top: 21,
        left: 18,
    },
});

export default styles;
