import * as React from "react";
export interface ToggleProps {
    expanded: boolean
}

export class Toggle extends React.Component<ToggleProps, {}> {
     render() {
         return (this.props.expanded?<div className="toggle">
                                        {this.props.children}
                                     </div>:
                                     null)
    }
}