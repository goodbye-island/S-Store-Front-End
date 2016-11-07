import * as React from "react";
import {Input} from "../components/utilities/input"
import {login} from "../login"
import {setOauth} from "../actions"
export interface LoginProps {location: {hash: string}, history: any}


export class Login extends React.Component<LoginProps, {email: string}> {
    static contextTypes = {
        store: React.PropTypes.object
    }

    constructor(props: LoginProps) {
        super(props);
    }
    state: {email: string} = {email: ""}
    save_login() {
        if (this.props.location.hash === "") {
            return
        }
        let login_info = this.props.location.hash.substr(1);
        let sections = login_info.split("&");
        let results: {[index: string]: string} = {};
        sections.forEach( section => {
            let keyword_value = section.split("=");
            results[decodeURIComponent(keyword_value[0])] = decodeURIComponent(keyword_value[1])
        });
        (this.context as any).store.dispatch(setOauth(results["access_token"], new Date((new Date()).getSeconds() + parseInt(results["expires_in"]))))
        setTimeout( () => this.props.history.push(results["state"]), 1);
    }
    render() {
        this.save_login()
        return  <div>
                    <form style={{"width": "10%", "margin": "0 auto"}} onSubmit={ e => {
                        e.preventDefault()
                        console.log(this.state.email)
                        login("/", this.state.email)
                        this.setState({email: ""})
                    }}>
                        <Input value={this.state.email} onChange={s => this.setState({email: s})} label="Email" />
                        <input type="submit"/>
                    </form>
                </div>
    }
}