import * as React from "react";

export interface NavbarProps {
    title: string|JSX.Element,
    items: (string|JSX.Element)[]
}

export class Navbar extends React.Component<NavbarProps, {}> {
    render() {
        let items = this.props.items.map(item => {
            return <div style={{display: "inline-block", padding: 15, boxSizing: "content-box"}}>{item}</div>
        })
        return  <div style={{width: "100%", height: 60, background: "#002664", color: "white"}} className="navbar">
                    <a href="/" style={{display: "inline-block"}}>
                        {this.props.title}
                    </a>
                    {items}
                </div>
    }
}