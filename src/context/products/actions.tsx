import React from 'react';
import { createAction } from 'typesafe-actions';
import api from '../../api';
import { normalizeDates } from '../../utils';

export const loadProductsList = createAction('LOAD_PRODUCTS', (list: Array<any> | null) => ({
    list,
}))();

export const setLoading = createAction('SET_LOADING')();

export async function getProductsList() {
    const response = await api.products.getProductsList();
    return async (dispatch: React.Dispatch<any>) => {
        if (response === null) {
            return dispatch(loadProductsList(null));
        }
        if (response.length) {
            const parsedList = normalizeDates(response);
            return dispatch(loadProductsList(parsedList));
        } else {
            return dispatch(loadProductsList([]));
        }
    };
}
