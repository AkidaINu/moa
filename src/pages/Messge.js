import React, {Component} from 'react';
import {ScrollView,StyleSheet,FlatList, Text,View,Image,} from 'react-native';

type Props = {};
//测试数据
var TestData = [
    {key:"1",itemName: '老大',avatar:'',lastMsg:'[大笑]',itemType:'chat',data:null,time:''},
    {key:"2",itemName: '新的好友',avatar:'',lastMsg:'你的联系人正在使用moa，快去联系他们',itemType:'local',data:null,time:''},
    {key:"3",itemName: '升级提醒',avatar:'',lastMsg:'你好',itemType:'local',data:null,time:''},
    {key:"4",itemName: '云盘',avatar:'',lastMsg:'打开云盘',itemType:'app',data:null,time:''},
    {key:"5",itemName: 'Devin',avatar:'',lastMsg:'你好',itemType:'chat',data:null,time:''},
    {key:"6",itemName: 'Devin',avatar:'',lastMsg:'你好',itemType:'chat',data:null,time:''},
    {key:"7",itemName: 'Devin',avatar:'',lastMsg:'你好',itemType:'chat',data:null,time:''},
    {key:"8",itemName: 'Devin',avatar:'',lastMsg:'你好',itemType:'chat',data:null,time:''},
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
                        renderItem={this.renderDefaultMsg}
                    />
                </ScrollView>
            </View>

        );
    }

    renderDefaultMsg = (item) => {
        return (
            <View>
                <View style={{flex:1,flexDirection:'row',alignItems:'stretch',height:60,marginHorizontal: 12,marginVertical: 8}}>
                    <View style={{
                        alignItems:'center',
                        justifyContent:'center',
                        width:60,
                        height:60,
                        backgroundColor:'#5dc3ff',
                        borderRadius:30,}}></View>
                    <View style={{flex:6,marginVertical: 6,marginHorizontal:12,backgroundColor:'#ff6329'}}>
                        <Text style={{fontSize:18,color:'#131313',top: 0}}>大佬</Text>
                        <Text style={{fontSize:16,color:'#6e6e6e'}}>你好</Text>
                    </View>
                    <View style={{flex:1,marginVertical: 6,backgroundColor:'#ff3fa1'}}>
                        <Text style={{fontSize:10,color:'#7e7e7e',top: 0}}>下午8:35</Text>
                    </View>
                </View>
                <View style={{flex:1,height:1,backgroundColor:'#d5d5d5',marginStart: 80}}></View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#fff'
    },
    msgContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        backgroundColor: '#fff'
    },
    avatar : {
        width: 40,
        height: 40,
        backgroundColor:'#5dc3ff',
        borderRadius:15,
    },
    contentContainer:{
        backgroundColor: '#fff',
    }
});
