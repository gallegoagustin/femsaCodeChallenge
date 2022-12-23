import React, { createContext } from 'react';
import { ActionType, getType } from 'typesafe-actions';
import useThunkReducer from 'react-hook-thunk-reducer';

import * as actions from './actions';
type Action = ActionType<typeof actions>;

export const FiltersContext = createContext<[State, React.Dispatch<any>]>(undefined as any);

type State = {
    productsList: string;
};

const initialState: State = {
    productsList: 'all',
};

const reducer = (state: State, action: Action): State => {
    switch (action.type) {
        case getType(actions.changeProductFilter):
            return {
                ...state,
                productsList: action.payload.value,
            };
        default:
            throw new Error();
    }
};

export const FiltersContextProvider = (props: any) => {
    const [state, dispatch] = useThunkReducer(reducer, initialState);

    return <FiltersContext.Provider value={[state, dispatch]}>{props.children}</FiltersContext.Provider>;
};
