import { StyleSheet } from 'react-native';
import * as Typography from '../../../../assets/styles/typography';
import Colors from '../../../../assets/styles/colors';

const styles = StyleSheet.create({
    itemContainer: {
        width: '100%',
        height: 55,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginVertical: 4,
    },
    imagePreview: {
        width: 55,
        height: 55,
        borderRadius: 10,
    },
    titleContainer: {
        width: '50%',
    },
    productTitle: {
        fontFamily: Typography.FONT_FAMILY_BOLD,
        fontWeight: Typography.FONT_WEIGHT_BOLD,
        fontSize: Typography.FONT_SIZE_14,
        color: Colors.BLACK_2,
    },
    productDate: {
        fontFamily: Typography.FONT_FAMILY_REGULAR,
        fontWeight: Typography.FONT_WEIGHT_REGULAR,
        fontSize: Typography.FONT_SIZE_12,
        color: Colors.BLACK_2,
    },
    productPoints: {
        fontFamily: Typography.FONT_FAMILY_BOLD,
        fontWeight: Typography.FONT_WEIGHT_BOLD,
        fontSize: Typography.FONT_SIZE_16,
        color: Colors.BLACK_2,
    },
    redIndicator: {
        color: Colors.MAIN_RED,
    },
    greenIndicator: {
        color: Colors.MAIN_GREEN,
    },
});

export default styles;
