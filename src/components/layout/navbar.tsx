import * as React from "react";
import { Link } from 'react-router'

export interface NavbarProps {
    title: string|JSX.Element,
    items: (string|JSX.Element)[],
    height?: number|string
}

export class Navbar extends React.Component<NavbarProps, {}> {
    render() {
        let height = this.props.height ? this.props.height:60;
        height = height + "px"
        let items = this.props.items.map( (item, i) => {
            return <li key={i} style={{display: "block", paddingRight: 15, float: "left", height: height}}>{item}</li>
        })
        return  <div style={{width: "100%", height: height, background: "#002664", color: "white", boxShadow: "0 5px 5px rgba(0,0,0,0.5)", position: "absolute", top: 0}} className="navbar">
                    <Link to="/" style={{display: "inline-block", height: height}}>
                        {this.props.title}
                    </Link>
                    <ul style={{display: "block", float: "right", height: height,  margin: 0}}>
                    {items}
                    </ul>
                </div>
    }
}