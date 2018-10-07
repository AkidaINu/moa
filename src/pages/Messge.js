import React, {Component} from 'react';
import {ScrollView,StyleSheet,FlatList, Text,View,} from 'react-native';

type Props = {};
//测试数据
var TestData = [
    {key:"1",userName: 'Devin',avatar:'',lastMsg:'你好',msgType:'chat'},
    {key:"2",userName: 'Jackson'},
    {key:"3",userName: 'James'},
    {key:"4",userName: 'Joel'},
    {key:"5",userName: 'John'},
    {key:"6",userName: 'Jillian'},
    {key:"7",userName: 'Jimmy'},
    {key:"2",userName: 'Julie'},
];
export default class Messge extends Component<Props> {
    static navigationOptions = {
        title:'消息',
    };
    render() {
        return (
            <View style={styles.container}>
                <ScrollView contentContainerStyle={styles.contentContainer}>
                    <FlatList
                        data={TestData}
                        renderItem={this.renderItem}
                    />
                </ScrollView>
            </View>

        );
    }

    renderItem = (item) => {
        return (
            <View style={{flexDirection: 'column', alignItems: 'center'}}>
                <View>
                    <View >
                        <Text >1</Text>
                    </View>
                </View>
            </View>
        )
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
    item:{
        flex: 1,
        backgroundColor: '#F5FCFF',
    },
    contentContainer:{
        backgroundColor: '#F5FCFF',
    }
});
