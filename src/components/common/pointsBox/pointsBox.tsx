import { View, Text } from 'react-native';
import React from 'react';
import PropTypes, { InferProps } from 'prop-types';
import styles from './pointsBox.styles';

export default function PointsBox(props: Props) {
    const { points, month } = props;

    return (
        <View style={styles.boxContainer}>
            {points === -1 && <Text style={styles.pointsText} testID={'errorPointsId'}>Oops!</Text>}
            {points !== -1 && <Text style={styles.dateText}>{month}</Text>}
            {points !== -1 && <Text style={styles.pointsText}>{points} pts</Text>}
        </View>
    );
}

PointsBox.propTypes = {
    points: PropTypes.number.isRequired,
    month: PropTypes.string.isRequired,
};

type Props = InferProps<typeof PointsBox.propTypes>;
