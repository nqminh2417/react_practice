/**
 * @format
 */

import './src/i18n/i18n.config';

import App from './App';
import { AppRegistry } from 'react-native';
import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => App);
