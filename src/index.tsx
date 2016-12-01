import * as React from "react";
import * as ReactDOM from "react-dom";
import {Search} from "./pages/search"
import {Login} from "./pages/login"
import {About} from "./pages/about"
import {ClassView} from "./pages/class"
import {ClassAdd} from "./pages/class-add"

import {Layout} from "./components/layout/layout"
import { Router, Route, browserHistory, IndexRoute } from 'react-router'

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux'
import {addClass, setDepartments, update, setUserAction} from './actions'
import { sStore} from './reducers'
import { Roles } from './user'
import config from "./config"
import thunkMiddleware from 'redux-thunk'

let store = createStore(sStore, applyMiddleware(thunkMiddleware))

store.dispatch(setUserAction(Roles.admin, "", "", "", undefined))


store.dispatch(update(config.api))

ReactDOM.render(
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={Layout}>
                <Route path="/about" component={About}/>
                <Route path="/login" component={Login}/>
                <Route path="/class/:CRN" component={ClassView}/>
                <Route path="/class/add/:dep/:course_num" component={ClassAdd}/>

                <IndexRoute component={Search}/>
            </Route>
        </Router>
    </Provider>,
    document.getElementById("react")
);