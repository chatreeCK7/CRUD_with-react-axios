import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom"

export default function Show(){
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [studentID, setStudentID] = useState("")
    const [email, setEmail] = useState("")
    const [mobileNumber, setMobileNumber] = useState("")

    useEffect(() => {
        setFirstName(localStorage.getItem("firstName"))
        setLastName(localStorage.getItem("lastName"))
        setStudentID(localStorage.getItem("studentID"))
        setEmail(localStorage.getItem("email"))
        setMobileNumber(localStorage.getItem("mobileNumber"))

        console.log(firstName)
        console.log(lastName)
        console.log(studentID)
        console.log(email)
        console.log(mobileNumber)
    }, [])
    
    return (
            <div>
                <div class="row mt-5">
                    <div class="col-md-12">
                        <h2>Student's information</h2>
                        <Link to={'/get'}>
                            <button class="btn btn-primary my-3">Back</button>
                        </Link>
                    </div>
                </div>
                <div class="row" >
                    <div class="card p-3">
                        <div class="card-title">
                            <strong>first_name:</strong>
                            {firstName}
                        </div>
                        <div class="card-title">
                            <strong>last_name:</strong>
                            {lastName}
                        </div>
                        <div class="card-title">
                            <strong>student_id:</strong>
                            {studentID}
                        </div>
                        <div class="card-title">
                            <strong>email:</strong>
                            {email}
                        </div>
                        <div class="card-title">
                            <strong>mobile_number:</strong>
                            {mobileNumber}
                        </div>
                    </div>
                </div>
            </div>
    )
}