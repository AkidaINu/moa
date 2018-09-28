/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {createBottomTabNavigator,createStackNavigator} from 'react-navigation';

import MessageScreen from './src/pages/Messge';
import TaskScreen from './src/pages/Task';
import WorkScreen from './src/pages/Work';
import RosterScreen from './src/pages/Roster';
import MineScreen from './src/pages/Mine';

//二级页面
import ChatScreen from './src/pages/Chat'


const TabNavigator = createBottomTabNavigator({
    Message:{screen: MessageScreen,navigationOptions: {tabBarLabel:'消息'}},
    Task:{screen: TaskScreen,navigationOptions: {tabBarLabel:'任务'}},
    Work:{screen: WorkScreen,navigationOptions: {tabBarLabel:'工作'}},
    Roster:{screen: RosterScreen,navigationOptions: {tabBarLabel:'通讯录'}},
    Mine: {screen: MineScreen,navigationOptions: {tabBarLabel:'我的'}},
},{
    navigationOptions: {

    }
});

const RootStack = createStackNavigator({
   Home: TabNavigator,
    Chat: ChatScreen,
});



type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <RootStack />
    );
  }
}
