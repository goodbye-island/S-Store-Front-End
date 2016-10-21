import * as React from "react";
import * as ReactDOM from "react-dom";
import {Search} from "./pages/search"
import {Home} from "./pages/home"

import {Layout} from "./components/layout"
import { Router, Route, browserHistory, IndexRoute } from 'react-router'

import { Provider } from 'react-redux';
import { createStore } from 'redux'
import {addCourse} from './actions'
import { sStore } from './reducers'
let store = createStore(sStore)
store.dispatch(addCourse({
    title: "hacksu",
    course: 12312,
    department: 1,
    section: 1,
    semester: 1,
    year: 2016,
    teacher: "Isaac",
    CRN: 123123,
    keyword: "Student led classes"
}))

store.dispatch(addCourse({
    title: "KHE",
    course: 12312,
    department: 1,
    section: 1,
    semester: 1,
    year: 2016,
    teacher: "Isaac",
    CRN: 123123,
    keyword: "Student Led Classes"
}))

ReactDOM.render(
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={Layout}>
                <Route path="/search" component={Search}/>
                <IndexRoute component={Home}/>
            </Route>
        </Router>
    </Provider>,
    document.getElementById("react")
);