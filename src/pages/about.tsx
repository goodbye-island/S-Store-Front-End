import * as React from "react";
export interface AboutProps {}


export class About extends React.Component<AboutProps, {}> {
    render() {
        return  <div>

                     <div style={{
                     fontSize: "60px",
                     color: "#002664"
                    }}>
                        About our project - S-Store 
                    </div>

                    <p style={{
                    fontSize: "40px"
                    }}>
                        Click the search button in the top right corner to get started searching!
                    </p>

                    <p>
                        In this database of syllabus' you can search and compare classes being offered at Kent State for a better understanding of the course's schedule, curriculum, and research for transfer credit purposes.  
                    </p>

                    <p>
                        We are five students from Kent State University in the Capstone Project course for seniors that intends simulate a real world project with software engineering, deadlines, and teamwork. This course is taught by Augstine Samba with the lab instructor of Zhiqiang Wang. To accomplish our goal we used React.js for the front end along with Node.js with NPM, Ruby on Rails for the back end, conntected to a MySQL database. David hosted the database on his MySQL server, Tod hosted the back end on his DevServer hosted on his Windows Virtual Machine, and Isaac hosted the front end on his EnginX digital ocean virtual machine.  
                    </p>

                    <p>
                        In the beginning phase we interviewed professors, students, administraive clerks for the Computer Science department, and Study Abroad advisors to see that a large database of collected syllabus' can be very useful to a lot of different individuals for different purposes in the field of academia. The largest thing people were requested was the search option by course description, such as looking for key words like "programming", "networking", or "politcical". 

                    </p>

                    <p>
                    	Kent State Univeristy - S-Store,
                    	Davd Christ, Tod Knott, James Robinson, Isaac Parks, Justin Guting 
                    </p>
                    
                </div>
    }
}