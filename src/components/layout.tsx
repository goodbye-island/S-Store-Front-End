import * as React from "react";
import {Navbar} from "./navbar"
export interface LayoutProps {
}

export class Layout extends React.Component<LayoutProps, {}> {
     render() {
         return <div>
                    <Navbar title={<img src="logo.svg" height="35" style={{padding: 2.5}}/>} height="40" items={["test"]}/>
                    {this.props.children}
                </div>
    }
}