import React, { createContext } from 'react';
import { ActionType } from 'typesafe-actions';
import useThunkReducer from 'react-hook-thunk-reducer';

import * as actions from './actions';
type Action = ActionType<typeof actions>;

export const UserContext = createContext<[State, React.Dispatch<any>]>(undefined as any);

type State = {
    userName: string | null;
};

const initialState: State = {
    userName: 'Ruben Rodriguez',
};

const reducer = (state: State, action: Action): State => {
    switch (action) {
        default:
            throw new Error();
    }
};

export const UserContextProvider = (props: any) => {
    const [state, dispatch] = useThunkReducer(reducer, initialState);

    return <UserContext.Provider value={[state, dispatch]}>{props.children}</UserContext.Provider>;
};
