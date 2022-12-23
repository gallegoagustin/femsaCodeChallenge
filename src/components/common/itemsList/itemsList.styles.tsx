import { StyleSheet } from 'react-native';
import Colors from '../../../assets/styles/colors';
import * as Typography from '../../../assets/styles/typography';

const styles = StyleSheet.create({
    listContainer: {
        width: '100%',
        height: 293,
        backgroundColor: Colors.WHITE_1,
        borderRadius: 20,
        paddingHorizontal: 15,
        paddingVertical: 20,
    },
    messageContainer: {
        width: '100%',
        height: 293,
        backgroundColor: Colors.WHITE_1,
        borderRadius: 20,
        paddingHorizontal: 15,
        paddingVertical: 20,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    messageText: {
        fontFamily: Typography.FONT_FAMILY_REGULAR,
        fontWeight: Typography.FONT_WEIGHT_REGULAR,
        fontSize: Typography.FONT_SIZE_14,
        color: Colors.MAIN_GREY,
    },
});

export default styles;
