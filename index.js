/**
 * @format
 */

import React from 'react';
import { AppRegistry } from 'react-native';
import App from './App';
import ComposeContexts from './src/context/composeContexts';
import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => () => (
    <ComposeContexts>
        <App />
    </ComposeContexts>
));
