// import {NavigationContainer} from '@react-navigation/native';
import {Text, View} from 'react-native';

import App from './src';
import React from 'react';
import {createMemoryHistory} from 'history';
import dva from 'dva';

//create a dva app instance
const app = dva({
  history: createMemoryHistory(), //history object (reqd)
  onError(e, dispatch) {
    console.log(e, dispatch); //global error handler
  },
});

app.model(require('./src/models/app').default);
//register app router to navigate between views
app.router(() => <App />);

//start the app instance and export it to be rendered
export default app.start();
