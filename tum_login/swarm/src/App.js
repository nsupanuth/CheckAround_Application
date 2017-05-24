import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Router from './Router';

class App extends Component {
  componentWillMount() {
		// Initialize Firebase
		var config = {
			apiKey: "AIzaSyC-5VciALPKkA9x-WSe3t3Kp4Qgwxjk3F0",
			authDomain: "bott-a9c49.firebaseapp.com",
			databaseURL: "https://bott-a9c49.firebaseio.com",
			projectId: "bott-a9c49",
			storageBucket: "bott-a9c49.appspot.com",
			messagingSenderId: "998480316370"
		};
		firebase.initializeApp(config);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;