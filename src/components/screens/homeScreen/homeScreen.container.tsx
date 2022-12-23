import React from 'react';
import HomeScreen from './homeScreen';
import { InferProps } from 'prop-types';
import { ProductsContext } from '../../../context/products/reducer';
import { UserContext } from '../../../context/user/reducer';
import { FiltersContext } from '../../../context/filters/reducer';
import { setProductFilter } from '../../../context/filters/actions';

export default function HomeScreenContainer() {
    const [productContext, productDispatch] = React.useContext(ProductsContext);
    const [userContext, userDispatch] = React.useContext(UserContext);
    const [filtersContext, filtersDispatch] = React.useContext(FiltersContext);

    const userPoints = React.useMemo(() => {
        if (productContext.products !== null && productContext.products.length) {
            let counter = 0;
            for (let i = 0; i < productContext.products.length; i++) {
                if (productContext.products[i].is_redemption) {
                    counter = counter - productContext.products[i].points;
                } else {
                    counter = counter + productContext.products[i].points;
                }
            }
            return counter;
        } else {
            return 0;
        }
    }, [productContext.products]);

    const handleFilterChange = (value: string) => {
        filtersDispatch(setProductFilter(value));
    };

    const childProps = {
        itemsList: productContext.products,
        isLoading: productContext.loading,
        userName: userContext.userName ?? '',
        userPoints,
        productFilter: filtersContext.productsList,
        handleFilterChange,
    };

    return <HomeScreen {...childProps} />;
}

HomeScreenContainer.propTypes = {};

type Props = InferProps<typeof HomeScreenContainer.propTypes>;
