import * as React from "react";
import {Navbar} from "./navbar"
import { Link } from 'react-router'

export interface LayoutProps {
}

export class Layout extends React.Component<LayoutProps, {}> {
     render() {
         return <div>
                    <Navbar title={<img src="/logo.svg" height="35"
                            style={{padding: 2.5}}/>}
                            height="40" 
                            items={[<Link style={{padding: 7, fontSize: 30, color: "white"}} activeStyle={{color: "red"}} to="/about">About</Link>,
                                    <Link style={{padding: 7, fontSize: 30, color: "white"}} activeStyle={{color: "red"}} to="/login">Login</Link>]}
                            />
                    <div style={{position: "absolute", top: 0, height: "100%", width: "100%", "paddingBottom": "20px", "paddingTop": "60px", boxSizing: "border-box"}}>
                        <div style={{width: "70%", height: "100%", "margin": "0 auto"}}>
                            {this.props.children}
                        </div>
                    </div>
                </div>
    }
}