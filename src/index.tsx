import * as React from "react";
import * as ReactDOM from "react-dom";
import {Search} from "./pages/search"
import {Home} from "./pages/home"

import {Layout} from "./components/layout"
import { Router, Route, browserHistory, IndexRoute } from 'react-router'

ReactDOM.render(
    <Router history={browserHistory}>
        <Route path="/" component={Layout}>
            <Route path="/search" component={Search}/>
            <IndexRoute component={Home}/>
        </Route>
    </Router>,
    document.getElementById("react")
);