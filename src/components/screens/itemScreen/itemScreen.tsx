import { View, Text, SafeAreaView, Image } from 'react-native';
import React from 'react';
import PropTypes, { InferProps } from 'prop-types';
import styles from './itemScreen.styles';
import ButtonDefault from '../../common/buttonDefault/buttonDefault.container';

export default function ItemScreen(props: Props) {
    const { date, title, points, imageUrl, isRedemption, handleGoBack } = props;

    return (
        <View style={styles.fullSize}>
            <SafeAreaView style={styles.safeAreaView}>
                <View style={styles.titleContainer}>
                    <Text style={styles.itemTitle}>{title}</Text>
                </View>
            </SafeAreaView>
            <View style={styles.screenContainer}>
                <View style={styles.sectionContainer}>
                    <View style={styles.boxShadow}>
                        <Image
                            source={{ uri: imageUrl }}
                            style={styles.image}
                            resizeMode={'cover'}
                            defaultSource={require('../../../assets/images/loader.png')}
                        />
                    </View>
                </View>
                <View style={styles.sectionContainer}>
                    <Text style={styles.sectionTitle}>Detalles del producto:</Text>
                    <Text style={styles.dateText}>Comprado el {date}</Text>
                </View>
                <View style={styles.sectionContainer}>
                    <Text style={styles.sectionTitle}>Con esta compra {isRedemption ? 'gastaste' : 'acumulaste'}:</Text>
                    <Text style={styles.pointsText}>{points} puntos</Text>
                </View>
                <View style={styles.buttonsContainer}>
                    <ButtonDefault title="Aceptar" onPress={handleGoBack} styles={{ width: '100%', height: 50 }} />
                </View>
            </View>
        </View>
    );
}

ItemScreen.propTypes = {
    date: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    points: PropTypes.number.isRequired,
    imageUrl: PropTypes.string.isRequired,
    isRedemption: PropTypes.bool.isRequired,
    handleGoBack: PropTypes.func.isRequired,
};

type Props = InferProps<typeof ItemScreen.propTypes>;
