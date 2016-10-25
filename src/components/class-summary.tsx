import * as React from "react";

export interface ClassSummaryProps {
    title: string,
    professors: string[],
    description: string,
}

export class ClassSummary extends React.Component<ClassSummaryProps, {}> {
     render() {
         let professors = this.props.professors.map( (professor, i) => <li key={professor}>{professor}</li> )
         return <div>
                    <h1>{this.props.title}</h1>
                    <ul>
                        {this.props.description}
                    </ul>
                </div>
    }
}