import React,{useState} from 'react'

import './ShowDoctor.css'
const axios = require('axios').default; 


export default class ShowDoctor extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            doctorId: "",
            doctor: {}
        } 

        this.handleInput = this.handleInput.bind(this);
        this.handleClick = this.handleClick.bind(this);

        // this.deleteDoctor = this.deleteDoctor.bind(this.doctorId);

    }

    handleInput(e) {
        this.setState({ doctorId: e.target.value })
    }

    handleClick() {
        axios.get('http://localhost:8080/getdoctor', {
            params: {
                doctorId: this.state.doctorId
            }
        }
        ).then((response) => {
            this.setState({ doctor: response.data.bean })
        });
    }  

    // deleteDoctor = () =>{
    //     alert("Are you sure, you whant to delete ")
    // //     axios.delete('http://localhost:8080/deletedoctor/'+ doctorId).then((response)=>{
    // //      if(response.data !=null){
    // //          alert("Book deleted successfully")
    // //      }
    // // })
    //    };
    
    render(){ 
    return (

      
        <div>

        <div className="card col-md-6">
                 
          <div class="form-group">
          <label className="mt-4">Enter ID to get Doctor</label> 
          <input type="number" id="doctorId" placeholder=" Enter ID"
          value={this.state.doctorId}
          onChange={this.handleInput}
           class="form-control"
           required />
          </div>
          <div class="form-group">
            <button class="btn btn-block" onClick={this.handleClick} style={{background: " rgb(28, 171, 228)"}}
            >Get Doctor</button>
          </div>
        </div>
        <div class="col-md-11">
             
        </div>
            <table className="table table-striped">
            <thead className="thead" style={{background: " rgb(62, 71, 95)"}}>
                    <tr>
                        <th scope="col">Doctor Id</th>
                        <th scope="col">Doctor Name</th>
                        <th scope="col">Speciality</th>
                        <th scope="col">Location</th>
                        <th scope="col">Hospital Name</th>
                        <th>Mobile No</th>
                        <th scope="col">Email</th>
                        

                    </tr>
                </thead>
                <tbody>
                    <tr> 
                               <th scope="row"> {this.state.doctor.doctorId}</th>
                                <td>{this.state.doctor.doctorName}</td>
                                <td>{this.state.doctor.speciality}</td>
                                <td>{this.state.doctor.location}</td>
                                <td>{this.state.doctor.hospitalName}</td>
                                <td>{this.state.doctor.mobileNo}</td>
                                <td>{this.state.doctor.email}</td>
                              
                            </tr>
                </tbody>
            </table>
        </div>
           
    )
}
}
