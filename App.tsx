import React from 'react';
import Navigation from './src/navigation/navigation';
import { getProductsList, setLoading } from './src/context/products/actions';
import { ProductsContext } from './src/context/products/reducer';

const App = () => {
    const [productContext, productDispatch] = React.useContext(ProductsContext);

    React.useEffect(() => {
        const asyncFetch = async () => {
            productDispatch(setLoading());
            productDispatch(await getProductsList());
        };
        asyncFetch();
    }, []);

    return <Navigation />;
};

export default App;
