import { View, FlatList, Text } from 'react-native';
import React from 'react';
import PropTypes, { InferProps } from 'prop-types';
import styles from './itemsList.styles';
import Item from './item/item.container';
import { ListItem } from '../../../constants/modelConstants';

const renderItem = ({ item }: ListItem) => (
    <Item date={item.createdAt} title={item.product} points={item.points} imageUrl={item.image} isRedemption={item.is_redemption} id={item.id} />
);

export default function ItemsList(props: Props) {
    const { items } = props;

    if (items === null) {
        return (
            <View style={styles.messageContainer} testID={'errorListId'}>
                <Text style={styles.messageText}>Hubo un problema cargando tus datos...</Text>
            </View>
        );
    }

    if (items !== null && items.length === 0) {
        return (
            <View style={styles.messageContainer} testID={'emptyListId'}>
                <Text style={styles.messageText}>Aún no tienes movimientos...</Text>
            </View>
        );
    }

    return (
        <View style={styles.listContainer}>
            <FlatList
                data={items}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}
            />
        </View>
    );
}

ItemsList.propTypes = {
    items: PropTypes.array.isRequired,
};

type Props = InferProps<typeof ItemsList.propTypes>;
