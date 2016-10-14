import * as React from "react";
import {Navbar} from "./navbar"
export interface LayoutProps {
}

export class Layout extends React.Component<LayoutProps, {}> {
     render() {
         return <div>
                    <Navbar title={<img src="logo.svg" height="35" style={{padding: 2.5}}/>} height="40" items={[<span style={{padding: 7, fontSize: 30}}>Nothing yet</span>]}/>
                    <div style={{"margin": 30}}>
                        {this.props.children}
                    </div>
                </div>
    }
}