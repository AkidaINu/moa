import React, {Component} from 'react';
import {createStackNavigator} from "react-navigation";


import TabNavigator from './TabNavigator'
import ChatScreen from "./pages/Chat";

//设置标题栏
TabNavigator.navigationOptions = ({ navigation }) => {
    const { routeName } = navigation.state.routes[navigation.state.index];
    const headerTitle = routeName;
    return {
        headerTitle,
    };
};

export default createStackNavigator({
    Home: TabNavigator,
    Chat: ChatScreen,
},{
    navigationOptions:{

    }
});
