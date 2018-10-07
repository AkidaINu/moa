import React, {Component} from 'react';
import {Image, StyleSheet} from 'react-native';
import {createBottomTabNavigator} from 'react-navigation';

//主页各组件
import MessageScreen from './pages/Messge';
import TaskScreen from './pages/Task';
import WorkScreen from './pages/Work';
import RosterScreen from './pages/Roster';
import MineScreen from './pages/Mine';

export default createBottomTabNavigator({
    Message:{screen: MessageScreen,navigationOptions: {tabBarLabel:'消息'}},
    Task:{screen: TaskScreen,navigationOptions: {tabBarLabel:'任务'}},
    Work:{screen: WorkScreen,navigationOptions: {tabBarLabel:'工作'}},
    Roster:{screen: RosterScreen,navigationOptions: {tabBarLabel:'通讯录'}},
    Mine: {screen: MineScreen,navigationOptions: {tabBarLabel:'我的'}},
},{
    //设置tabBar
    navigationOptions: ({ navigation }) => ({
        tabBarIcon: ({ focused, tintColor }) => {
            const { routeName } = navigation.state;
            let source;
            switch (routeName) {
                case 'Message':
                    source = require('./images/icon_tab_message.png');
                    break;
                case 'Task':
                    source = require('./images/icon_tab_task.png');
                    break;
                case 'Work':
                    source = require('./images/icon_tab_work.png');
                    break;
                case 'Roster':
                    source = require('./images/icon_tab_roster.png');
                    break;
                case 'Mine':
                    source = require('./images/icon_tab_mine.png');
                    break;
                default:
                    break;
            }
            return <Image style={[styles.tabBarIcon,{tintColor:tintColor}]} source={source}/>;
        },
    }),
    // tabBarOptions: {
    //     activeTintColor: 'tomato',
    //     inactiveTintColor: 'gray',
    // },
});

const styles = StyleSheet.create({
    tabBarIcon: {
        width: 25,
        height: 25,
    }
});
