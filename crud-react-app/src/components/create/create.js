import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom"

export default function Create(){
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [studentID, setStudentID] = useState("")
    const [email, setEmail] = useState("")
    const [mobileNumber, setMobileNumber] = useState("")
    const [password, setPassword] = useState("")

    console.log(firstName)
    console.log(lastName)
    console.log(studentID)
    console.log(email)
    console.log(mobileNumber)
    console.log(password)

    const sendDataToAPI = () => {
        axios.post(`https://628a4b89e5e5a9ad3222f8d9.mockapi.io/Crud`,{
                firstName,
                lastName,
                studentID,
                email,
                mobileNumber,
                password 
        })
    }
    
    return (
        <div>
            <div class="col-md-12">
                <h2>Add new student</h2>
            </div>
            <form action="" >
                <div className="row mt-5">
                    <div className="col-md-12">
                        <div className="col-md-12">
                            <div className="form-group">
                                <label><strong>first_name:</strong></label>
                                <input type="text" name="first_name" className="form-control" placeholder="Enter first_name" onChange={(e) => setFirstName(e.target.value)}></input>       
                            </div>
                        </div>
                        <div className="col-md-12"></div>
                            <div className="form-group">
                                <label><strong>last_name:</strong></label>
                                <input type="text" name="last_name" className="form-control" placeholder="Enter last_name" onChange={(e) => setLastName(e.target.value)} ></input>
                            </div>
                        <div className="col-md-12">
                            <div className="form-group">
                                <label><strong>student_id:</strong></label>
                                <input type="text" name="student_id" className="form-control" placeholder="Enter student_id" onChange={(e) => setStudentID(e.target.value)}></input>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="form-group">
                                <label><strong>email:</strong></label>
                                <input type="email" name="email" className="form-control" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)}></input>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="form-group">
                                <label><strong>mobile_number:</strong></label>
                                <input type="text" name="mobile_number" className="form-control" placeholder="Enter mobile_number" onChange={(e) => setMobileNumber(e.target.value)}></input>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="form-group">
                                <label><strong>password:</strong></label>
                                <input type="password" name="password" className="form-control" placeholder="Enter password" onChange={(e) => setPassword(e.target.value)}></input>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
            <Link to="/get">
                <div className="col-md-12">
                        <button type="submit" className="btn btn-success my-3" onClick={sendDataToAPI}>Submit</button>
                </div>
            </Link>
        </div>
    )
}