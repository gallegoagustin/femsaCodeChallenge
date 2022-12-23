import { FunctionComponent } from 'react';

export interface RouteInfo {
    name: string;
    title: string;
    component: FunctionComponent;
    initialParams: any;
    hasNavBar: boolean;
    extraOptions: any;
    loggedIn: boolean;
}

export interface ListItem {
    item: {
        createdAt: string;
        product: string;
        points: number;
        image: string;
        is_redemption: boolean;
        id: string;
    };
}

export interface ApiItem {
    createdAt: string;
    product: string;
    points: number;
    image: string;
    is_redemption: boolean;
    id: string;
}

export const months = [
    {
        number: 1,
        title: 'Enero',
    },
    {
        number: 2,
        title: 'Febrero',
    },
    {
        number: 3,
        title: 'Marzo',
    },
    {
        number: 4,
        title: 'Abril',
    },
    {
        number: 5,
        title: 'Mayo',
    },
    {
        number: 6,
        title: 'Junio',
    },
    {
        number: 7,
        title: 'Julio',
    },
    {
        number: 8,
        title: 'Agosto',
    },
    {
        number: 9,
        title: 'Septiembre',
    },
    {
        number: 10,
        title: 'Octubre',
    },
    {
        number: 11,
        title: 'Noviembre',
    },
    {
        number: 12,
        title: 'Diciembre',
    },
];
