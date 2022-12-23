import React from 'react';
import Compose from './compose';
import { ProductsContextProvider } from './products/reducer';
import { UserContextProvider } from './user/reducer';
import { FiltersContextProvider } from './filters/reducer';

interface Props {
    children: React.ReactNode;
}

const ComposeContexts = (props: Props) => {
    const { children } = props;

    return <Compose components={[ProductsContextProvider, UserContextProvider, FiltersContextProvider]}>{children}</Compose>;
};

export default ComposeContexts;
