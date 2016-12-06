import * as React from "react";
import {InputProps} from "./input"
export interface DropdownInputProps<T> extends InputProps{
    options: {
        value: JSX.Element,
        id: T
    }[]
    onChange: (value: T) => void,
}

export class DropdownInput<T extends React.Key> extends React.Component<DropdownInputProps<T>, {}> {
    state: {expanded: boolean, selected: T} = {expanded: false, selected: null}
    constructor(props: DropdownInputProps<T>) {
        super(props);
        window.addEventListener("click", (event) => {
            this.setState({expanded: (event as any).dropdown == this});
        })
    }
    render() {
        let dropdown = this.props.options.filter(i=>i.id!=this.state.selected).map(
            (option) => <div key={option.id} onClick={e => {
                console.log(e)
                this.props.onChange(option.id)
                this.setState({selected: option.id})
            }}>{option.value}</div>
        )
        return  <div style={{position: "relative"}} className={this.props.class+" dropdown-simple float-label"}>
                    <div onClick={e => (e.nativeEvent as any).dropdown = this} className="selected">
                        {this.state.selected?this.props.options.find(o=>o.id==this.state.selected).value:"Schedule"}
                    </div>
                    { (() => {
                        if (this.state.expanded) {
                            return  <div style={{position: "absolute", zIndex: 1}} className="dropdown">
                                        {dropdown}
                                    </div>
                        } else {
                            return <div/>
                        }
                    })()}
                </div>
    }
}