import { View, Text, Image, Pressable } from 'react-native';
import React from 'react';
import PropTypes, { InferProps } from 'prop-types';
import styles from './item.styles';

export default function Item(props: Props) {
    const { date, title, points, imageUrl, isRedemption, id, handleItemPress } = props;

    return (
        <Pressable style={styles.itemContainer} onPress={() => handleItemPress(id)}>
            <Image source={{ uri: imageUrl }} style={styles.imagePreview} defaultSource={require('../../../../assets/images/loader.png')} />
            <View style={styles.titleContainer}>
                <Text style={styles.productTitle}>{title}</Text>
                <Text>{date}</Text>
            </View>
            <Text style={styles.productPoints}>
                {isRedemption ? <Text style={styles.redIndicator}>-</Text> : <Text style={styles.greenIndicator}>+</Text>}
                {points}
            </Text>
            <Text style={styles.productPoints}>{'>'}</Text>
        </Pressable>
    );
}

Item.propTypes = {
    date: PropTypes.any.isRequired,
    title: PropTypes.string.isRequired,
    points: PropTypes.number.isRequired,
    imageUrl: PropTypes.string.isRequired,
    isRedemption: PropTypes.bool.isRequired,
    id: PropTypes.string.isRequired,
    handleItemPress: PropTypes.func.isRequired,
};

type Props = InferProps<typeof Item.propTypes>;
