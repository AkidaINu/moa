import React, {Component} from 'react';

import RootStack from './src/RootStack'

//主页各组件的堆栈
// const MessgeStack = createStackNavigator({screen:MessageScreen},{navigationOptions:{title:'消息'}});
// const TaskStack = createStackNavigator({screen:TaskScreen},{navigationOptions:{title:'任务'}});
// const WorkStack = createStackNavigator({screen:WorkScreen},{navigationOptions:{title:'工作'}});
// const RosterStack = createStackNavigator({screen:RosterScreen},{navigationOptions:{title:'通讯录'}});
// const MineStack = createStackNavigator({screen:MineScreen},{navigationOptions:{title:'我的'}});


type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <RootStack />
    );
  }
}
