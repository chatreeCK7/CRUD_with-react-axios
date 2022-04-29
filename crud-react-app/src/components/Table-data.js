import React, { Component } from "react";

export default class Table extends Component {
    render(){
        return (<div className="container" style={{marginTop: '20 px'}}> 
            <div className="row">
                <div className="col-lg-12">
                    <table className="table table-border">
                        <thead>
                            <tr>
                            <th> No . </th>
                            <th> first_name </th>
                            <th> last_name </th>
                            <th> student_id </th>
                            <th> email </th>
                            <th> mobile_number </th>
                            <th width="280px">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td> test 1 </td>
                                <td> test-fn </td>
                                <td> test-ln </td>
                                <td> test-student-id </td>
                                <td> test-email </td>
                                <td> test-mobile_number </td>
                                <td width="280px">test-Action</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        )
    }
}
