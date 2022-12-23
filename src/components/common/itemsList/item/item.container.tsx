import React from 'react';
import PropTypes, { InferProps } from 'prop-types';
import Item from './item';
import { useNavigation } from '@react-navigation/native';

export default function ItemContainer(props: Props) {
    const { date, title, points, imageUrl, isRedemption, id } = props;

    const navigation = useNavigation();

    const handleItemPress = (itemId: string) => {
        navigation.navigate('details', { item: itemId });
    };

    const childProps = {
        date,
        title,
        points,
        imageUrl,
        isRedemption,
        id,
        handleItemPress,
    };

    return <Item {...childProps} />;
}

ItemContainer.propTypes = {
    date: PropTypes.any.isRequired,
    title: PropTypes.string.isRequired,
    points: PropTypes.number.isRequired,
    imageUrl: PropTypes.string.isRequired,
    isRedemption: PropTypes.bool.isRequired,
    id: PropTypes.string.isRequired,
};

type Props = InferProps<typeof ItemContainer.propTypes>;
