import React from 'react'

import './ShowDoctor.css'
export default function DeleteDoctor() {

    return (

      
        <div>

        <div className="card col-sm-4  mb-4 mt-3 ml-5">
            <form>
            <label className="mt-4"><b>To Delete Doctor</b></label><br/>
            <input type="number" id="doctorId" placeholder=" Enter Doctor ID" 
            className="col-sm-5"
           required /><br/>
           
            <button type="submit"  className="bt">Delete</button>
            </form>
        </div>
{/*         
            <table className="table table-striped">
                <thead className="thead-dark">
                    <tr>
                        <th scope="col">DoctorId</th>
                        <th scope="col">Doctor Name</th>
                        <th scope="col">Speciality</th>
                        <th scope="col">Location</th>
                        <th scope="col">Hospital Name</th>
                        <th scope="col">Mobile</th>
                        <th scope="col">Email</th>
                        <th scope="col">Password</th>

                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row"> 1</th>


                        <td>Ram</td>
                        <td>cardiology</td>
                        <td>Hyderabad</td>
                        <td>ABC</td>
                        <td>8521479632</td>
                        <td>Ram@gmail.com</td>
                        <td>Ram@123</td>
                    </tr>
                </tbody>
            </table> */}
        </div>
           
    )
}
