import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux';

import HomeScreen from './HomeScreen';
import ScarletScreen from './ScarletScreen';
import GrayScreen from './GrayScreen';
import { StyleSheet} from 'react-native';
import {
    Text,
    View
} from 'native-base';

const TabIcon = ({ selected, title }) => {
    return (
        <Text style={{ color: 'white' }}>{title}</Text>
    );
}

const App = () => {
    return (
        <Router>
            <Scene key="root" hideNavBar={true} navigationBarStyle={{backgroundColor: '#3D51B4'}} titleStyle={{color:'#FFFFFF'}}>
                {/* Tab Container */}
                <Scene
                    key="homeTabBar"
                    tabs={true}
                    tabBarStyle={{ backgroundColor: '#3D51B4',marginBottom:-2}}
                    tabBarPosition="bottom"
                >
                    {/* Tab and it's scenes */}
                    <Scene key="homeTab" title="Home" icon={TabIcon}>
                        <Scene
                            key="home"
                            component={HomeScreen}
                            title="Tokopoin"
                        />
                        <Scene
                            key="gray"
                            component={GrayScreen}
                            title="Gray"
                        />
                    </Scene>
                    {/* Removed for brevity */}
                </Scene>
            </Scene>
        </Router>
    );
}

export default App;