import * as React from "react";
import * as ReactDOM from "react-dom";
import {Search} from "./pages/search"
import {Layout} from "./components/layout"
ReactDOM.render(
    <Layout> <Search/> </Layout>,
    document.getElementById("react")
);