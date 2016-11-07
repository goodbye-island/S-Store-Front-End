import * as React from "react";
import * as ReactDOM from "react-dom";
import {Search} from "./pages/search"
import {Login} from "./pages/login"
import {About} from "./pages/about"

import {Layout} from "./components/layout"
import { Router, Route, browserHistory, IndexRoute } from 'react-router'

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux'
import {addClass, setDepartments, update} from './actions'
import { sStore } from './reducers'
import config from "./config"
import thunkMiddleware from 'redux-thunk'

let store = createStore(sStore, applyMiddleware(thunkMiddleware))



store.dispatch(update(config.api))

ReactDOM.render(
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={Layout}>
                <Route path="/about" component={About}/>
                <Route path="/login" component={Login}/>
                <IndexRoute component={Search}/>
            </Route>
        </Router>
    </Provider>,
    document.getElementById("react")
);