import React, { useState, useEffect} from "react";
import axios from "axios";

export default function Update(){
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [studentID, setStudentID] = useState("")
    const [email, setEmail] = useState("")
    const [mobileNumber, setMobileNumber] = useState("")
    const [ID, setID] = useState(null)

    const sendDataToAPI = () => {
        axios.put(`https://628a4b89e5e5a9ad3222f8d9.mockapi.io/Crud/${ID}`,{
                firstName,
                lastName,
                studentID,
                email,
                mobileNumber,
        })
    }

    useEffect(() => {
        setFirstName(localStorage.getItem("firstName"))
        setLastName(localStorage.getItem("lastName"))
        setStudentID(localStorage.getItem("studentID"))
        setEmail(localStorage.getItem("email"))
        setMobileNumber(localStorage.getItem("mobileNumber"))
        setID(localStorage.getItem("ID"))

        console.log(firstName)
        console.log(lastName)
        console.log(studentID)
        console.log(email)
        console.log(mobileNumber)
    }, [])
    
    return (
        <div>
            <form action="" >
                <div className="row mt-5">
                    <div className="col-md-12">
                        <div className="col-md-12">
                            <div className="form-group">
                                <label><strong>first_name:</strong></label>
                                <input type="text" name="first_name" className="form-control" value={firstName} placeholder="Enter first_name" onChange={(e) => setFirstName(e.target.value)}></input>       
                            </div>
                        </div>
                        <div className="col-md-12"></div>
                            <div className="form-group">
                                <label><strong>last_name:</strong></label>
                                <input type="text" name="last_name" className="form-control" value={lastName}placeholder="Enter last_name" onChange={(e) => setLastName(e.target.value)} ></input>
                            </div>
                        <div className="col-md-12">
                            <div className="form-group">
                                <label><strong>student_id:</strong></label>
                                <input type="text" name="student_id" className="form-control" value={studentID}placeholder="Enter student_id" onChange={(e) => setStudentID(e.target.value)}></input>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="form-group">
                                <label><strong>email:</strong></label>
                                <input type="email" name="email" className="form-control" value={email}placeholder="Enter email" onChange={(e) => setEmail(e.target.value)}></input>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="form-group">
                                <label><strong>mobile_number:</strong></label>
                                <input type="text" name="mobile_number" className="form-control" value={mobileNumber}placeholder="Enter mobile_number" onChange={(e) => setMobileNumber(e.target.value)}></input>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
            <div className="col-md-12">
                    <button type="submit" className="btn btn-success my-3" onClick={sendDataToAPI}>Update</button>
            </div>
        </div>
    )
}