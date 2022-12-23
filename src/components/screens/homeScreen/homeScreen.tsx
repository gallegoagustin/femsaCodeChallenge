import { View, Text, SafeAreaView } from 'react-native';
import React from 'react';
import PropTypes, { InferProps } from 'prop-types';
import styles from './homeScreen.styles';
import ButtonDefault from '../../common/buttonDefault/buttonDefault.container';
import PointsBox from '../../common/pointsBox/pointsBox';
import ItemsList from '../../common/itemsList/itemsList.container';
import { Circle } from 'react-native-progress';
import Colors from '../../../assets/styles/colors';

export default function HomeScreen(props: Props) {
    const { itemsList, isLoading, userName, userPoints, productFilter, handleFilterChange } = props;

    if (isLoading) {
        return (
            <SafeAreaView>
                <View style={styles.loaderContainer}>
                    <Circle size={48} indeterminate={true} color={Colors.MAIN_BLUE} />
                </View>
            </SafeAreaView>
        );
    }

    return (
        <SafeAreaView>
            <View style={styles.screenContainer}>
                <View style={styles.sectionContainer}>
                    <Text style={styles.headerTitle}>Bienvenido de vuelta!</Text>
                    <Text style={styles.headerSubtitle}>{userName}</Text>
                </View>
                <View style={styles.sectionContainer}>
                    <Text style={styles.sectionTitle}>TUS PUNTOS</Text>
                    <View style={{ alignSelf: 'center' }}>
                        <PointsBox points={itemsList === null ? -1 : userPoints} month={'Diciembre'} />
                    </View>
                </View>
                <View style={styles.sectionContainer}>
                    <Text style={styles.sectionTitle}>TUS MOVIMIENTOS</Text>
                    <View style={{ alignSelf: 'center', width: '100%' }}>
                        <ItemsList items={itemsList} filter={productFilter} />
                    </View>
                </View>
                <View style={styles.buttonsContainer}>
                    {productFilter === 'all' ? (
                        <>
                            <ButtonDefault title="Ganados" onPress={() => handleFilterChange('won')} disabled={itemsList === null} />
                            <ButtonDefault title="Canjeados" onPress={() => handleFilterChange('lost')} disabled={itemsList === null} />
                        </>
                    ) : (
                        <ButtonDefault title="Todos" onPress={() => handleFilterChange('all')} styles={{ width: '100%', height: 50 }} />
                    )}
                </View>
            </View>
        </SafeAreaView>
    );
}

HomeScreen.propTypes = {
    itemsList: PropTypes.array,
    isLoading: PropTypes.bool.isRequired,
    userName: PropTypes.string.isRequired,
    userPoints: PropTypes.number.isRequired,
    productFilter: PropTypes.string.isRequired,
    handleFilterChange: PropTypes.func.isRequired,
};

type Props = InferProps<typeof HomeScreen.propTypes>;
