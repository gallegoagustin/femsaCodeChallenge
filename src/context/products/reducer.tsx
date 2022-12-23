import React, { createContext } from 'react';
import { ActionType, getType } from 'typesafe-actions';
import useThunkReducer from 'react-hook-thunk-reducer';

import * as actions from './actions';
type Action = ActionType<typeof actions>;

export const ProductsContext = createContext<[State, React.Dispatch<any>]>(undefined as any);

type State = {
    products: Array<any> | null;
    loading: boolean;
};

const initialState: State = {
    products: null,
    loading: false,
};

const reducer = (state: State, action: Action): State => {
    switch (action.type) {
        case getType(actions.loadProductsList):
            return {
                ...state,
                products: action.payload.list,
                loading: false,
            };
        case getType(actions.setLoading):
            return {
                ...state,
                loading: true,
            };
        default:
            throw new Error();
    }
};

export const ProductsContextProvider = (props: any) => {
    const [state, dispatch] = useThunkReducer(reducer, initialState);

    return <ProductsContext.Provider value={[state, dispatch]}>{props.children}</ProductsContext.Provider>;
};
