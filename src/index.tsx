import * as React from "react";
import * as ReactDOM from "react-dom";
import {Search} from "./pages/search"
import {Login} from "./pages/login"
import {Home} from "./pages/home"

import {Layout} from "./components/layout"
import { Router, Route, browserHistory, IndexRoute } from 'react-router'

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux'
import {addClass, setDepartments, update} from './actions'
import { sStore } from './reducers'
import thunkMiddleware from 'redux-thunk'

let store = createStore(sStore, applyMiddleware(thunkMiddleware))

store.dispatch(update("http://isaacpark.me:8080/"))

ReactDOM.render(
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={Layout}>
                <Route path="/search" component={Search}/>
                <Route path="/login" component={Login}/>
                <IndexRoute component={Home}/>
            </Route>
        </Router>
    </Provider>,
    document.getElementById("react")
);