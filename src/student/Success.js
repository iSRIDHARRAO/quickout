import React, {useEffect, useState} from "react";
import axios from 'axios';
import './Success.css';
function Success(){
    const [id,setid] = useState("")
    const [status,setstatus] = useState(0)
    const [accept,setaccept] = useState(null)

    function getaccepted(){
        const url = "http://127.0.0.1:3001/studentstatus/"+id
        axios.get(url)
        .then((res)=>{

            setaccept(res.data)
        })
    }
    useEffect(()=>{
        axios.get("http://127.0.0.1:3001/getUser",{
            headers:{
                "x-access-token" : localStorage.getItem("token")
            }
        }).then((res)=> 
         setid(res.data["uid"])) 


         
        setstatus(0)
        getaccepted()
        setstatus(1)
        },[id])

    return(
        <div className="Success">
           <div className="apply-heading">
                <div className="head">Applied</div>
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
            
            { status == 1 && accept &&   accept.map((value,key) =>( 
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

export default Success;