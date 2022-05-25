import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom"

export default function Get(){
    const [apiData, setApiData] = useState([]);
    useEffect(() =>{
        getData()
    })

    const setData = (id, firstName, lastName, studentID, email, mobileNumber) => {
        console.log(id)
        localStorage.setItem("ID", id)
        localStorage.setItem("firstName", firstName)
        localStorage.setItem("lastName", lastName)
        localStorage.setItem("studentID", studentID)
        localStorage.setItem("email", email)
        localStorage.setItem("mobileNumber", mobileNumber)
    }

    const setData2 = (firstName, lastName, studentID, email, mobileNumber) => {
        localStorage.setItem("firstName", firstName)
        localStorage.setItem("lastName", lastName)
        localStorage.setItem("studentID", studentID)
        localStorage.setItem("email", email)
        localStorage.setItem("mobileNumber", mobileNumber)
    }

    const getData = () => {
        axios.get( `https://628a4b89e5e5a9ad3222f8d9.mockapi.io/Crud`).then((getData) => {
            // console.log(getData.data)
            setApiData(getData.data)
        })
    }

    const onDelete = (id) => {
        axios.delete(`https://628a4b89e5e5a9ad3222f8d9.mockapi.io/Crud/${id}`).then(() => {
            getData();
        })
    }

    return(
        <div class="row mt-1">
            <Link to='/create'>
                <button className="btn btn-success my-3" >
                    Create new student
                </button>
            </Link>
            {/* <div style="overflow-x:auto;"> */}
                <table className="table table-bordered">
                    <tr>
                        <th> No . </th>
                        <th> first_name </th>
                        <th> last_name </th>
                        <th> student_id </th>
                        <th> email </th>
                        <th> mobile_number </th>
                        <th width="280px">Action</th>
                    </tr>

                    {apiData.map((data) => {
                        return (
                            <tr>  
                                <td>{ data.id}</td>
                                <td> { data.firstName }</td>
                                <td> { data.lastName} </td>
                                <td> { data.studentID }</td>
                                <td> { data.email }</td>
                                <td> { data.mobileNumber}</td>
                                <td>
                                    <form>
                                        <Link to='/show'>
                                            <button className="btn btn-primary" onClick={setData2(data.firstName, data.lastName, data.studentID, data.email, data.mobileNumber)}>
                                                Show
                                            </button>
                                        </Link>
                                        <Link to='/update'>
                                            <button className="btn btn-success" onClick={setData(data.id, data.firstName, data.lastName, data.studentID, data.email, data.mobileNumber)}>
                                                Update
                                            </button>
                                        </Link>
                                        <button className="btn btn-danger" onClick={() => onDelete(data.id)}>
                                            Delete
                                        </button>
                                    </form>
                                    {/* <form action="{{ route('students.destroy', $value->id) }}" method="post">
                                        <a href="{{ route('students.show', $value->id) }}" class="btn btn-primary">Show</a>
                                        <a href="{{ route('students.edit', $value->id) }}" class="btn btn-secondary">Edit</a>
                                        @csrf
                                        @method('DELETE')
                                        <button type="submit" class="btn btn-danger">Delete</button>             
                                    </form> */}
                                </td>
                            </tr>
                        )
                    })}
                </table>
            {/* </div> */}
        </div>
    )
}