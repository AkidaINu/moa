import React, {Component} from 'react';
import {
    ScrollView,
    StyleSheet,
    FlatList,
    Text,
    View,
    Image,
    TouchableNativeFeedback,
    TouchableHighlight
} from 'react-native';

type Props = {};
//测试数据
//item类型 -打开web应用(web)  -打开本地应用(local)  -打开聊天(1.chat 2.chatWithGroup)  -打开公众号（1.chat  2.chatWithReplyItem  3.web
var TestData = [
    {sessionId:"boos",itemName: '老大',avatar:'',lastMsg:'[大笑]',itemType:'chat',data:null,time:''},
    {sessionId:"newFriend",itemName: '新的好友',avatar:'',lastMsg:'你的联系人正在使用moa，快去联系他们',itemType:'local',data:null,time:''},
    {sessionId:"update",itemName: '升级提醒',avatar:'',lastMsg:'1.0版本正式上线',itemType:'web',data:null,time:''},
    {sessionId:"cloud",itemName: '云盘',avatar:'',lastMsg:'打开云盘',itemType:'local',data:null,time:''},
    {sessionId:"meeting",itemName: '会议提醒',avatar:'',lastMsg:'老大邀请您参加10:30的会议',itemType:'flashSelect',data:null,time:''},
    {sessionId:"department",itemName: '部门',avatar:'',lastMsg:'你好',itemType:'chat',data:null,time:''},
    {sessionId:"division",itemName: '科室',avatar:'',lastMsg:'你好',itemType:'chat',data:null,time:''},
    {sessionId:"group111",itemName: '自定义群组',avatar:'',lastMsg:'你好',itemType:'chat',data:null,time:''},
    {sessionId:"cloud",itemName: '云盘',avatar:'',lastMsg:'打开云盘',itemType:'local',data:null,time:''},
    {sessionId:"meeting",itemName: '会议提醒',avatar:'',lastMsg:'老大邀请您参加10:30的会议',itemType:'flashSelect',data:null,time:''},
    {sessionId:"department",itemName: '部门',avatar:'',lastMsg:'你好',itemType:'chat',data:null,time:''},
    {sessionId:"division",itemName: '科室',avatar:'',lastMsg:'你好',itemType:'chat',data:null,time:''},
    {sessionId:"group111",itemName: '自定义群组',avatar:'',lastMsg:'你好',itemType:'chat',data:null,time:''},
];

export default class Messge extends Component<Props> {
    render() {
        return (
            <View style={styles.container}>
                <ScrollView contentContainerStyle={styles.contentContainer}>
                    <TouchableHighlight>
                        <View style={{marginVertical: 6,marginHorizontal: 12,backgroundColor:'#fff'}}>
                            <View style={{
                                backgroundColor:'#edeef5',
                                borderWidth:1,
                                borderRadius:4,
                                borderColor:'#e6e7ee',
                                height:40,
                                justifyContent:'center'}}>
                                <Text style={{color:'#a1a1a1',marginStart: 60}}>搜索</Text>
                            </View>
                        </View>
                    </TouchableHighlight>
                    <FlatList
                        data={TestData}
                        renderItem={this._renderItem}
                        keyExtractor={this._keyExtractor}
                    />
                </ScrollView>
            </View>
        );
    }

    _keyExtractor = (item, index) => item.sessionId;

    //是否是快速选择Item
    _renderItem = ({item}) => {
        if ('flashSelect' !== item.itemType) {
            return(this.renderDefaultItemOnAndroid(item))
        }else {

        }
    };


    renderDefaultItemOnAndroid = (item) => {
        let itemAvatarBgColor;
        if ('local' === item.itemType) {
            itemAvatarBgColor = '#ffc83c'
        }else if ('web' === item.itemType){
            itemAvatarBgColor = '#2ac440'
        } else itemAvatarBgColor = '#5dc3ff';

        return (
            <TouchableNativeFeedback
                onPress={() => this._onPress(item)}
            >
                <View>
                    <View style={styles.itemContainer}>
                        <View style={[styles.itemAvatar,{backgroundColor:itemAvatarBgColor}]}/>
                        <View style={styles.itemInfo}>
                            <Text style={styles.itemInfoName}>{item.itemName}</Text>
                            <Text style={styles.itemInfoLastMsg}>{item.lastMsg}</Text>
                        </View>
                        <View style={styles.itemTime}>
                            <Text style={styles.itemTimeText}>下午8:35</Text>
                        </View>
                    </View>
                    <View style={styles.itemDivider}/>
                </View>
            </TouchableNativeFeedback>
        )
    };

    _onPress = (item) => {
        switch (item.itemType) {
            case 'chat':
                this.props.navigation.navigate('Chat',{ userNameChatWith: item.itemName });
                break;
            default:
                break;
        }
        // this.props.navigation.navigate('Chat', )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#fff'
    },
    contentContainer:{
        backgroundColor: '#fff',
    },
    itemContainer: {
        flex:1,
        flexDirection:'row',
        alignItems:'stretch',
        height:60,
        marginHorizontal: 12,
        marginVertical: 8
    },
    itemAvatar : {
        alignItems:'center',
        justifyContent:'center',
        width:60,
        height:60,
        // backgroundColor:'#5dc3ff',
        borderRadius:30,
    },
    itemInfo:{
        flex:6,
        marginVertical: 6,
        marginHorizontal:12,
    },
    itemInfoName:{
        fontSize:18,
        color:'#131313'
    },
    itemInfoLastMsg:{
        fontSize:16,
        color:'#6e6e6e'
    },
    itemTime:{
        flex:1,
        marginVertical: 6,
    },
    itemTimeText:{
        fontSize:10,
        color:'#7e7e7e'
    },
    itemDivider:{
        flex: 1,
        height: 1,
        backgroundColor: '#e3e3e3',
        marginStart: 80
    },

});
