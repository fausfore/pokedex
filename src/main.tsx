import * as ReactDOM from 'react-dom';
import * as React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import {
    BrowserRouter as Router,
    Route,
    Link,
    Redirect,
    withRouter
} from 'react-router-dom';
import store from '@Store/index';
import { AppComponent } from '@Components/app.component';



// Styles injection
require('./assets/styles/styles.scss')


ReactDOM.render(
    <Provider store={store}>
        <AppComponent/>
    </Provider>
    , document.getElementById("root2")
)




