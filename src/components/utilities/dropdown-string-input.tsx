import * as React from "react";
import {IntInputProps} from "./int-input"
export interface DropdownStringInputProps extends IntInputProps{
    options: {
        value: string,
        id: number
    }[]
}
export class DropdownStringInput extends React.Component<DropdownStringInputProps, {}> {
    state: {value: string};
    last: number = undefined
    constructor(props: DropdownStringInputProps) {
        super(props);
        this.state = {value: props.value?props.value:""};
    }

    componentWillReceiveProps(props: DropdownStringInputProps) {
        if (props.value == this.props.value) {
            return;
        }
        this.setState({value: props.value?props.value:""})
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
        return  <div id={this.props.id} className={this.props.class}>
                    <input className="dropdown-input" value={this.state.value} onChange={(e: any) =>{
                        this.setState({value: e.target.value})
                        this.checkStatus(e.target.value)
                    }} />
                    <div className="dropdown">
                        {dropdown}
                    </div>
                </div>
    }
}