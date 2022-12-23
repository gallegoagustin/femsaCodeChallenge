import screens from './screens';
import { RouteInfo } from '../constants/modelConstants';
import React from 'react';
import { StatusBar } from 'react-native';
import PropTypes, { InferProps } from 'prop-types';

import { NavigationContainer } from '@react-navigation/native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

function Navigation(props: Props): any {
    let routes = (
        <NavigationContainer>
            <StatusBar barStyle="light-content" />
            <Stack.Navigator initialRouteName={screens[0].name}>
                {screens.map((route: RouteInfo, key: number) => {
                    return (
                        <Stack.Screen
                            name={route.name}
                            component={route.component}
                            initialParams={route.initialParams}
                            options={{
                                title: route.title,
                                header: route.hasNavBar ? undefined : () => null,
                                headerShown: route.hasNavBar ? true : false,
                                ...route.extraOptions,
                            }}
                            key={key}
                        />
                    );
                })}
            </Stack.Navigator>
        </NavigationContainer>
    );

    return routes;
}

export default Navigation;

Navigation.propTypes = {};

type Props = InferProps<typeof Navigation.propTypes>;
