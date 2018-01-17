import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducers from './src/reducers';
import firebase from 'firebase';

export default class App extends React.Component {

    componentWillMount() {

        const config = {
            apiKey: "AIzaSyCS7pXgFd_LgmagIWHk1Q4xQ5nJXNb3WfE",
            authDomain: "manager-b8858.firebaseapp.com",
            databaseURL: "https://manager-b8858.firebaseio.com",
            projectId: "manager-b8858",
            storageBucket: "",
            messagingSenderId: "406571691559"
        };
        firebase.initializeApp(config);

    }

    render() {
        return (
            <Provider store={createStore(reducers)}>
                <View>
                    <Text>Hi</Text>
                </View>
            </Provider>
        );
    }
}
