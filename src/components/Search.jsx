import * as React from "react";
import school from "../services/school.js";
import Students from "./Students";

function Search(){
    const [currentStudents, setStudents] = React.useState(null);
    const inputRef = React.useRef();



    const handleSearch = (studentId) => {
        const sch = new school();
        console.log(studentId);
        sch.student(studentId).then((students) => {
          console.log(typeof(students));
          console.log(JSON.stringify(students));
          setStudents(students);
        }).catch((reason) => {
          console.log(reason);
        })
      }


    return(
        
        <div className="bg-blue-900 text-white h-screen flex-row"> 

            

            <h1>Search database: </h1>
            <div className="flex flex-wrap space-x-1">
                <input className="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm text-black focus:outline-none"
                    type="search" name="searchdb" ref={inputRef} placeholder="Enter id or major"/>

                <button className="border-gray-300 bg-white h-10 px-5 pr-100 rounded-lg text-sm focus:outline-none text-black" onClick={() => {
                    //setId(inputRef.current.value)
                    handleSearch(inputRef.current.value);
                }}>
                    Search Students
                </button>
            </div>

            {currentStudents &&
            <div >
            <Students stu={currentStudents}/>
            </div>
            }
        </div>
    )
}

export default Search;