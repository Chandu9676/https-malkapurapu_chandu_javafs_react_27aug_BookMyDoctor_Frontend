
import React,{useState,useEffect} from 'react';
import DoctorList from './DoctorList';
const axios = require('axios').default;


export default function  ViewDoctors({match}){ 
    const [state, setstate] = useState(false)
    const [speciality, setSpeciality] = useState("");
    const [location, setLocation] = useState("");
    
    const [doctors, setDoctors] = useState([]);
    const [doctorsBean, setDoctorsBean] = useState({});
    const patientId = match.params.patientId;
    console.log(patientId);


    useEffect(() => {
        axios.get('http://localhost:8080/getdoctors', {
            params: {
                speciality: speciality,
                location: location
            }

        }
        ).then((response) => {
            setDoctors(response.data.list)
            setDoctorsBean(response.data.message)

        });
    }, [speciality, location])

    console.log(doctors);
    console.log(doctorsBean);
    const handleSubmit = e => {
        e.preventDefault();
        console.log(doctors);
        console.log(doctorsBean); console.log(doctorsBean);
        
        if (doctors != null) {

            console.log(doctors);
            setstate(true);
        } else {
            alert("No doctors Found with that speciality and location");
        }

    }

    if(state){

        return <DoctorList doctors = {doctors} patientId = {patientId}/>
    }



    return( 
        
             <div class="col-md-6 card" id="card-card">
                <div class="card-body">
                
                <form onSubmit={handleSubmit}>
                    <div class="form-group">
                        <h5 class="header-color"><b>Check Doctors based on speciality...</b></h5>
                    </div>
                    <div class="form-group">
                        <label><b>Speciality</b></label>
                        <input type="text" class="form-control" id="speciality"
                            pattern="^[a-zA-Z]{4,20}"
                            title="Only alphabets allowed 4 - 20 letters"
                            name="speciality"
                            onChange={e => { setSpeciality(e.target.value) }}
                            required />
                    </div>
                    <div class="form-group">
                        <label ><b>Location</b></label>
                        <input type="text" class="form-control" id="location"
                            pattern="^[a-zA-Z]{4,30}"
                            title="Only alphabets allowed 4 - 30 letters"
                            name="location"
                            onChange={e => { setLocation(e.target.value) }}
                            required />
                    </div>
                    <div class="button">

                        <button type="submit" class="btn buttonFont btn-block" style={{ backgroundColor: "mediumvioletred" }}>Submit</button>

                    </div>
                </form>
            </div>
            </div>
            
        
        )
    }

    //<Route exact path="/doctorList" component={DoctorList} />
    //