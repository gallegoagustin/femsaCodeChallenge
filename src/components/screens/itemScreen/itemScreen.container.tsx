import React from 'react';
import ItemScreen from './itemScreen';
import PropTypes, { InferProps } from 'prop-types';
import { useRoute, useNavigation } from '@react-navigation/native';
import { ProductsContext } from '../../../context/products/reducer';
import { ApiItem } from '../../../constants/modelConstants';

export default function ItemScreenContainer() {
    const [productContext, productDispatch] = React.useContext(ProductsContext);
    const route = useRoute();
    const navigation = useNavigation();
    const [selectedItem, setSelectedItem] = React.useState<ApiItem>({
        createdAt: '',
        product: '',
        points: 0,
        image: '',
        is_redemption: false,
        id: '',
    });

    const handleGoBack = () => {
        navigation.reset({
            index: 0,
            routes: [{ name: 'home' }],
        });
    };

    React.useEffect(() => {
        if (route.params?.item && productContext) {
            const item = productContext.products?.filter(item => route.params?.item === item.id);
            if (item?.length) {
                setSelectedItem(item[0]);
            }
        }
    }, []);

    const childProps = {
        date: selectedItem.createdAt,
        title: selectedItem.product,
        points: selectedItem.points,
        imageUrl: selectedItem.image,
        isRedemption: selectedItem.is_redemption,
        handleGoBack,
    };

    return <ItemScreen {...childProps} />;
}

ItemScreenContainer.propTypes = {};

type Props = InferProps<typeof ItemScreenContainer.propTypes>;