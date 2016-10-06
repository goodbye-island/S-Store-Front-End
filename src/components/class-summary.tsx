import * as React from "react";

export interface ClassSummaryProps {
    title: string,
    professors: string[]
}

export class ClassSummary extends React.Component<ClassSummaryProps, {}> {
     render() {
         let professors = this.props.professors.map( (professor, i) => <li key={professor}>{professor}</li> )
         return <div>
                    <h1>{this.props.title}</h1>
                    <ul>
                        {professors}
                    </ul>
                </div>
    }
}