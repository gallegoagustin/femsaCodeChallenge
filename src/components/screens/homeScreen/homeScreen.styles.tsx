import { StyleSheet } from 'react-native';
import Colors from '../../../assets/styles/colors';
import * as Typography from '../../../assets/styles/typography';

const styles = StyleSheet.create({
    safeAreaView: {
        backgroundColor: Colors.TRANSPARENT,
    },
    screenContainer: {
        width: '100%',
        height: '100%',
        paddingHorizontal: 20,
        paddingTop: 20,
        paddingBottom: 40,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    loaderContainer: {
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    sectionContainer: {
        width: '100%',
    },
    headerTitle: {
        fontFamily: Typography.FONT_FAMILY_BOLD,
        fontWeight: Typography.FONT_WEIGHT_BOLD,
        fontSize: Typography.FONT_SIZE_20,
        color: Colors.BLACK_1,
    },
    headerSubtitle: {
        fontFamily: Typography.FONT_FAMILY_REGULAR,
        fontWeight: Typography.FONT_WEIGHT_REGULAR,
        fontSize: Typography.FONT_SIZE_16,
        color: Colors.BLACK_1,
    },
    sectionTitle: {
        fontFamily: Typography.FONT_FAMILY_BOLD,
        fontWeight: Typography.FONT_WEIGHT_BOLD,
        fontSize: Typography.FONT_SIZE_14,
        color: Colors.MAIN_GREY,
        marginBottom: 20,
    },
    buttonsContainer: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
});

export default styles;
