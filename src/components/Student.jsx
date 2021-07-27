import * as React from "react";

function Student(props){
    return(
        <div>
            <h1>
                {props.id}
            </h1>
            <p>
                {props.fName} {props.lName}
                <br/>
                {props.major}
            </p>
            <br/>
            <br/>
            

        </div>
    )
}
export default Student;