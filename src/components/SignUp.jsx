import * as React from "react";
import school from "../services/school.js";

function SignUp(){
    const [message, setMessage] = React.useState(null);
    const fNameRef = React.useRef();
    const lNameRef = React.useRef();
    const majorRef = React.useRef();

    const handleAdd = (newUser) => {
        const sch = new school();
        sch.addStudent(newUser.fName, newUser.lName, newUser.major)
        .then((mess) => {
            console.log(JSON.stringify(mess));
            setMessage(mess);
        })
        .catch((reason) => {
          console.log(reason);
        })
    }

    return(
        <div  className=" text-white bg-red-900 h-screen">
          <h1>Sign up: </h1>
          <div className="flex flex-wrap space-x-1">
              <div>
                <input className="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm text-black focus:outline-none"
                    type="input" name="fName" ref={fNameRef} placeholder="First Name"/>
              </div>
              <div>
                <input className="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm text-black focus:outline-none"
                    type="input" name="lName" ref={lNameRef} placeholder="Last Name"/>
              </div>
              <div>
                <input className="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm text-black focus:outline-none"
                    type="input" name="major" ref={majorRef} placeholder="Major"/>
              </div>
            
            
            
            <button className="border-gray-300 bg-white h-10 px-5 pr-100 rounded-lg text-sm focus:outline-none text-black" onClick={() => {
                    // setUser({
                    //   fName:fNameRef.current.value,
                    //   lName:lNameRef.current.value,
                    //   major:majorRef.current.value
                    // })
                    handleAdd({
                    fName:fNameRef.current.value,
                    lName:lNameRef.current.value,
                    major:majorRef.current.value
                    });
                }}>
                Submit
            </button>
          </div>
          {message ? message.message : ""}
        </div>
    )
}

export default SignUp;