import * as React from "react";
import Student from "./Student";

function Students(props){

    const students = props.stu;

    if(Array.isArray(students))
    return(
        <div>
            {    
            students.map((student, index) => {
                return <Student key={index} id={student.id} fName={student.fName} lName={student.lName} major={student.major} />
            })
            }
        </div>
    )
    else
        return <Student id={students.id} fName={students.fName} lName={students.lName} major={students.major} />
}
export default Students;
