import React, {Component} from 'react';
import {Button,StyleSheet, Text, View} from 'react-native';

type Props = {};
export default class Messge extends Component<Props> {
    static navigationOptions = {

    };
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>Message page!</Text>
                <Button title={'Go to Chat'} onPress={() => this.props.navigation.navigate('Chat')}/>
            </View>
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
