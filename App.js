import React from 'react';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import reducers from './src/reducers';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import Router from './src/Router'

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
            <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
                <Router/>
            </Provider>
        );
    }
}
