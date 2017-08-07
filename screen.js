import { Navigation } from 'react-native-navigation';

import ScarletScreen from './ScarletScreen';
import GrayScreen from './GrayScreen';

// register all screens of the app (including internal ones)
export function registerScreens() {
    Navigation.registerComponent('example.scarlet', () => ScarletScreen);
    Navigation.registerComponent('example.gray', () => GrayScreen);
}