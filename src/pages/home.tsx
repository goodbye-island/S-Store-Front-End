import * as React from "react";
export interface HomeProps {}


export class Home extends React.Component<HomeProps, {}> {
    state: {title: string} = {title: undefined}
    render() {
        return  <div>
                    home
                </div>
    }
}