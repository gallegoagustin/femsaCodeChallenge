import { StyleSheet } from 'react-native';
import Colors from '../../../assets/styles/colors';
import * as Typography from '../../../assets/styles/typography';

const styles = StyleSheet.create({
    fullSize: {
        width: '100%',
        height: '100%',
    },
    safeAreaView: {
        backgroundColor: Colors.LIGHT_BLUE,
        height: '20%',
        display: 'flex',
        justifyContent: 'flex-end',
    },
    screenContainer: {
        width: '100%',
        height: '80%',
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
    titleContainer: {
        paddingLeft: 20,
        paddingBottom: 24,
    },
    itemTitle: {
        fontFamily: Typography.FONT_FAMILY_BOLD,
        fontWeight: Typography.FONT_WEIGHT_BOLD,
        fontSize: Typography.FONT_SIZE_24,
        color: Colors.BLACK_2,
    },
    sectionTitle: {
        fontFamily: Typography.FONT_FAMILY_BOLD,
        fontWeight: Typography.FONT_WEIGHT_BOLD,
        fontSize: Typography.FONT_SIZE_14,
        color: Colors.MAIN_GREY,
    },
    dateText: {
        fontFamily: Typography.FONT_FAMILY_BOLD,
        fontWeight: Typography.FONT_WEIGHT_BOLD,
        fontSize: Typography.FONT_SIZE_16,
        color: Colors.BLACK_2,
    },
    pointsText: {
        fontFamily: Typography.FONT_FAMILY_BOLD,
        fontWeight: Typography.FONT_WEIGHT_BOLD,
        fontSize: Typography.FONT_SIZE_24,
        color: Colors.BLACK_2,
    },
    image: {
        height: 350,
        borderRadius: 10,
        shadowColor: Colors.BLACK_2,
    },
    boxShadow: {
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.5,
        shadowRadius: 4,
        elevation: 4,
    },
    buttonsContainer: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
});

export default styles;
