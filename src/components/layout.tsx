import * as React from "react";
import {Navbar} from "./navbar"
import { Link } from 'react-router'

export interface LayoutProps {
}

export class Layout extends React.Component<LayoutProps, {}> {
     render() {
         return <div>
                    <Navbar title={<img src="logo.svg" height="35"
                            style={{padding: 2.5}}/>}
                            height="40" 
                            items={[<Link style={{padding: 7, fontSize: 30, color: "white"}} activeStyle={{color: "red"}} to="/search">Search</Link>]}
                            />
                    <div style={{"margin": 30}}>
                        {this.props.children}
                    </div>
                </div>
    }
}