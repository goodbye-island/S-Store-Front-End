import * as React from "react";
import {Navbar} from "./navbar"
import { Link } from 'react-router'

export interface LayoutProps {
}

export class Layout extends React.Component<LayoutProps, {}> {
     render() {
         return <div>
                    <Navbar title={<img src="/logo.svg"
                            style={{padding: 2.5, height: "35px"}}/>}
                            height="40" 
                            items={[<Link style={{padding: 7, fontSize: 30, color: "white"}} activeStyle={{fontWeight: "bold"}} to="/about">About</Link>,
                                    <Link style={{padding: 7, fontSize: 30, color: "white"}} activeStyle={{fontWeight: "bold"}} to="/course/add/">Add Course</Link>]}
                            />
                    <div style={{minHeight: "100%", "margin": "0 auto"}} className="content">
                        {this.props.children}
                    </div>
                </div>
    }
}