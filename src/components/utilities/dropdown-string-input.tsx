import * as React from "react";
import {IntInputProps} from "./int-input"
export interface DropdownStringInputProps extends IntInputProps{
    value?: number,
    options: {
        value: string,
        id: number
    }[]
}

let last_id = 0
export class DropdownStringInput extends React.Component<DropdownStringInputProps, {}> {
    state: {value: string, expanded: boolean};
    last: number = undefined
    constructor(props: DropdownStringInputProps) {
        super(props);
        this.state = {value: props.value?this.props.options.find( o => o.id==this.props.value).value:"", expanded: false};

        window.onclick = (event) => {
            console.log(event)
            this.setState({expanded: false});
        }
    }

    componentWillReceiveProps(props: DropdownStringInputProps) {
        if (props.value == this.props.value) {
            return;
        }
        this.setState({value: props.value?this.props.options.find( o => o.id==this.props.value).value:""})
    }

    checkStatus(value: string) {
        let valid_options = this.props.options.filter(
            (option) => option.value.toLowerCase().indexOf(value.toLowerCase()) >= 0
        )
        if (valid_options.length == 1) {
            if (valid_options[0].id !== this.last) {
                this.last = valid_options[0].id
                this.props.onChange(valid_options[0].id);
            }
        } else if (this.last !== undefined){
            this.last = undefined;
            this.props.onChange(undefined);
        }
    }

    render() {
        let valid_options = this.props.options.filter(
            (option) => option.value.toLowerCase().indexOf(this.state.value.toLowerCase()) >= 0
        )
        let dropdown = valid_options.map(
            (option) => <div key={option.id} onClick={e => {
                this.setState({value: option.value});
                this.checkStatus(option.value);
            }}>{option.value}</div>
        )

        let id  = "";
        if (!this.props.id) {
            id = "dropdown_input" + last_id;
            last_id+=1;
        } else {
            id = this.props.id
        }
        return  <div style={{position: "relative"}} className={this.props.class+" float-label"} onFocus={_ => this.setState({expanded: true})}>
                    <input required className="dropdown-input" id={id} value={this.state.value} onChange={(e: any) =>{
                        this.setState({value: e.target.value})
                        this.checkStatus(e.target.value)
                    }} onClick={e => e.stopPropagation()}/>
                    <label htmlFor={id} > {this.props.label} </label>
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