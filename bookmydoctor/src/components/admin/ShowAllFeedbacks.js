import React,{useState ,useEffect} from 'react'
import './ShowDoctor.css' 
const axios = require('axios').default;


export default function ShowAllFeedbacks() {
    
    const [feedbacks, setFeedbacks] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8080/getallfeedbacks').then((response)=>{
            setFeedbacks(response.data.list)
        });
        
    })

    return (
        <div>

            <div class="col-md-9">
            <table className="table table-striped">
            <thead className="thead" style={{background: " rgb(62, 71, 95)"}}>
                    <tr>
                        <th scope="col">Rating Id</th>
                        <th scope="col">Rating</th>
                        <th scope="col">Patient Id</th>
                        <th scope="col">Doctor Id</th>
                        
                       
                    </tr>
                </thead>
                <tbody> 
                {
                        feedbacks.map( 
                            feedback =>
                            <tr key={feedback.id}>
                             <th scope="row"> {feedback.ratingId}</th>
                             <td>{feedback.rating}</td>
                             <td>{feedback.patientInfo.patientId}</td>
                             <td>{feedback.doctorInfo.doctorId}</td> 
           
                        </tr>
                        )
                }               
                   
                </tbody>
            </table>
        </div>
        </div>
        
    )
}
