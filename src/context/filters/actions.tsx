import React from 'react';
import { createAction } from 'typesafe-actions';

export const changeProductFilter = createAction('SET_PRODUCT_FILTER', (value: string) => ({
    value,
}))();

export function setProductFilter(value: string) {
    return (dispatch: React.Dispatch<any>) => {
        return dispatch(changeProductFilter(value));
    };
}
