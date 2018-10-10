import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {createMaterialTopTabNavigator} from 'react-navigation';

class ScheduleListScreen extends Component<Props> {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>Schedule page!</Text>
            </View>
        );
    }
}

class TaskListScreen extends Component<Props> {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>TaskList page!</Text>
            </View>
        );
    }
}

class MemoListScreen extends Component<Props> {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>MemoList page!</Text>
            </View>
        );
    }
}

class RecycledListScreen extends Component<Props> {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>RecycledList page!</Text>
            </View>
        );
    }
}

const TaskTab = createMaterialTopTabNavigator({
    ScheduleList:{screen: ScheduleListScreen,navigationOptions: {tabBarLabel:'日程'}},
    TaskList:{screen: TaskListScreen,navigationOptions: {tabBarLabel:'任务'}},
    MemoList:{screen: MemoListScreen,navigationOptions: {tabBarLabel:'便签'}},
    RecycledList:{screen: RecycledListScreen,navigationOptions: {tabBarLabel:'回收站'}},
},{
    navigationOptions:{
    }
});

type Props = {};
export default class Task extends Component<Props> {
    render() {
        return (
            <TaskTab />
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
});
