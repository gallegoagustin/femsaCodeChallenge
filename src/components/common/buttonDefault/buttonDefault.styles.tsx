import { StyleSheet } from 'react-native';
import Colors from '../../../assets/styles/colors';
import * as Typography from '../../../assets/styles/typography';

const styles = StyleSheet.create({
    buttonContainer: {
        backgroundColor: Colors.MAIN_BLUE,
        borderRadius: 10,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    defaultButtonStyles: {
        width: '47.5%',
        height: 50,
    },
    buttonTitle: {
        color: Colors.WHITE_1,
        fontFamily: Typography.FONT_FAMILY_BOLD,
        fontWeight: Typography.FONT_WEIGHT_BOLD,
        fontSize: Typography.FONT_SIZE_12,
    },
    disabled: {
        backgroundColor: Colors.LIGHT_GREY,
    },
});

export default styles;
