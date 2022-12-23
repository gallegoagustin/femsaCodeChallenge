import HomeScreen from '../components/screens/homeScreen/homeScreen.container';
import ItemScreen from '../components/screens/itemScreen/itemScreen.container';
import { RouteInfo } from '../constants/modelConstants';

const screens: Array<RouteInfo> = [
    {
        name: 'home',
        title: '',
        component: HomeScreen,
        initialParams: {},
        hasNavBar: false,
        extraOptions: {},
        loggedIn: false,
    },
    {
        name: 'details',
        title: '',
        component: ItemScreen,
        initialParams: {},
        hasNavBar: false,
        extraOptions: {},
        loggedIn: false,
    },
];

export default screens;
