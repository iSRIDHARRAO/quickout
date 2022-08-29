import React, {useEffect, useState} from "react";
import axios from 'axios';
import './Reject.css';
function Reject(){

    const [status,setstatus] = useState(0)
    const [reject,setreject] = useState(null)


    useEffect(()=>{
        
        setstatus(0)

        const url = "http://127.0.0.1:3001/deanrejected/"
        axios.get(url)
        .then((res)=>{

            setreject(res.data)
        })
        
        setstatus(1)
        },[])

    return(
        <div className="Success">
           <div className="apply-heading">
                <div className="head">Rejected</div>
            <div className="applied">
                <div className="number">Id.No</div>
                <div className="apply-name">Name</div>
                <div className="to">Applied to</div>
                <div className="to">Type of Reason</div>
                <div className="reason">Reason</div>
                <div className="days">Days</div>
                <div className="status">Status</div>
            </div>
            </div>
            
            { status == 1 && reject &&   reject.map((value,key) =>( 
        <div className="applied-values">

           <div className="number">{value.id}</div>
                <div className="apply-name">{value.name}</div>
                <div className="to">{value.request_to}</div>
                <div className="number">{value.type_of_reason}</div>
                <div className="reason">{value.reason}</div>
                <div className="days">{value.no_of_days} days</div>
                <div className="status">{value.status} </div> 

            </div> )) }
        </div>
    )
}

export default Reject;