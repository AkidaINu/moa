import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    SectionList,
    Text,
    Dimensions,
    TouchableOpacity,
    TouchableNativeFeedback,
    TouchableHighlight
} from 'react-native';

let windowsSize = {
    width: Dimensions.get('window').width,
    height: Dimensions.get("window").height
};

class AppItem extends Component {
    _rowClick =()=>{
        let appName = this.props.data.appName;
        alert(appName);
    };
    render(){
        return(
            <TouchableOpacity onPress={this._rowClick}>
                <View style={{
                    width: windowsSize.width/4,
                    height: windowsSize.width/4,
                    alignItems:'center',
                    justifyContent: 'center',
                }} >
                    <View style={{width:60,height:60 ,backgroundColor:'#58aeff',borderRadius:5}}>
                    </View>
                    <Text style={{fontSize: 14,marginTop: 4}}>
                        {this.props.data.appName}
                    </Text>
                </View>
            </TouchableOpacity>
        )
    }
}

export default class Work extends React.PureComponent{
    constructor(props){
        super(props);
        //这里面的data属性后面跟数组，是为了在布局renderItem的时候可以传入的参数item是数组，而不是data1这个对象
        this.state = {
            appListData: [
                {key: '智能内外勤', data: [[{appName:'考勤打卡'},{appName:'签到'},{appName:'请假'},{appName:'补卡申请'},{appName:'外出'},{appName:'出差'},{appName:'加班'},]]},
                {key: '高效汇报', data: [[{appName:'日报'},{appName:'周报'},{appName:'月报'},{appName:'拜访记录'}]]},
                {key: '协同效率', data: [[{appName:'电话会议'},{appName:'办公电话'},{appName:'视频会议'},{appName:'邮箱'},{appName:'公告'},{appName:'云盘'},{appName:'日志'},{appName:'审批'}],]}
            ]
        }

    }
    _listHeaderComponent =()=> {
        return(
            <View>
                <View style={{height:180,borderRadius: 5,backgroundColor:'#9353ff',marginVertical: 10,marginHorizontal: 10}}>
                </View>
                <View style={{flexDirection: 'row',marginHorizontal:10,marginVertical:10}}>
                    <Text style={{flex:4,fontSize:14,}}>置顶的公告会在这里滚动通知，去看看……</Text>
                    <Text style={{flex:1,textAlign:'right',fontSize:14,color: '#5ecaff',}}> 更多</Text>
                </View>
            </View>
        )
    };
    _listFooterComponent =()=> {
        return(
            <View style={{backgroundColor: '#aaaaff'}}>
                <Text>
                    我是listFooter
                </Text>
            </View>
        )
    };

    _renderSectionHeader = ({section}) => {
        return(
            <View>
                <View style={{height:1,marginHorizontal: 10,backgroundColor:'#e2e2e2',marginVertical: 1}}></View>
                <View style={{flex: 1, height: 40, justifyContent: 'center'}}>
                    <Text style={styles.sectionHeader}>{section.key}</Text>
                </View>
            </View>
        )
    };

    //item data应该是个数组
    _renderItem =({item})=> {
        console.log('_renderItem' + item[0]);
        return (
            <View style={styles.list}>
                {
                    item.map((val, i)=>{
                        return <AppItem key={i} data={val}/>
                    })
                }
            </View>
        )
    };
    _extraUniqueKey =(item)=> {
        return "index"+item;
    };

    render(){
        return(
            <SectionList style={{flex: 1,backgroundColor:'#fff'}}
                         renderItem={this._renderItem}
                         ListHeaderComponent={this._listHeaderComponent}
                         ListFooterComponent={this._listFooterComponent}
                         renderSectionHeader={this._renderSectionHeader}
                         keyExtractor = {this._extraUniqueKey}
                         sections={
                             this.state.appListData
                         }>

            </SectionList>
        )
    }
}
const styles = StyleSheet.create({
    list:{
        flexDirection: 'row', //这里的属性很重要，可以学习下flex布局
        flexWrap: 'wrap',
        alignItems: 'flex-start',
    },
    sectionHeader: {
        marginLeft: 10,
        fontSize: 16,
        color: '#1c1c1c',
        fontWeight:'100'
    },
});

