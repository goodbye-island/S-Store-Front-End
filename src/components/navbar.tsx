import * as React from "react";

export interface NavbarProps {
    title: string|JSX.Element,
    items: (string|JSX.Element)[],
    height?: number|string
}

export class Navbar extends React.Component<NavbarProps, {}> {
    render() {
        let height = this.props.height ? this.props.height:60;
        let items = this.props.items.map(item => {
            return <li style={{display: "block", paddingRight: 15, float: "left", height: height}}>{item}</li>
        })
        return  <div style={{width: "100%", height: height, background: "#002664", color: "white"}} className="navbar">
                    <a href="/" style={{display: "inline-block", height: height}}>
                        {this.props.title}
                    </a>
                    <ul style={{display: "block", float: "right", height: height}}>
                    {items}
                    </ul>
                </div>
    }
}