import * as React from "react";
import {Navbar} from "./navbar"
export interface LayoutProps {
}

export class Layout extends React.Component<LayoutProps, {}> {
     render() {
         return <div>
                    <Navbar title={<img src="logo.svg" width="60px" height="60px"/>} items={["test"]}/>
                    {this.props.children}
                </div>
    }
}