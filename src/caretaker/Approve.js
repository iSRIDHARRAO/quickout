import axios from "axios";
import React, { useEffect, useState } from "react";
import './Approve.css';
function Approve(){
    const [request,setrequest] =  useState(null)
    const [status,setstatus] = useState(0)
    const [accept,setaccept] = useState(null)
    useEffect(()=>{
        setstatus(0)
        axios.get("http://127.0.0.1:3001/caretakerrequests")
        .then((res)=>{
            setrequest(res.data)
        })
        setstatus(1)

        axios.get("http://127.0.0.1:3001/caretakeraccepted")
        .then((res)=>{
            setaccept(res.data)
        })




    },[])

function approved(value){
    const url_for_approve = "http://127.0.0.1:3001/caretakerapproved/"+value
    axios.get(url_for_approve)

    window.location.reload()

}
function forwarded(value){
    const url_for_approve = "http://127.0.0.1:3001/caretakerforwarded/"+value
    axios.get(url_for_approve)

    window.location.reload()

}


    //return
    return(
        <div className="Approve">
            <div className="apply-heading">
                <div className="head">Approved</div>
                <div className="applied">

                    <div className="number">I'd Number</div>
                        <div className="apply-name">Name</div>
                        <div className="to">Request To</div>
                        <div className="number">Type of Reason</div>
                        <div className="reason">Reason</div>
                        <div className="days">No of Days</div>
                        <div className="status">Status</div>
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
            



            {/* Approve the requests */}
            <div className="apply-heading">
                <div className="head">Approve</div>
            <div className="applied">
            <div className="number">I'd Number</div>
                        <div className="apply-name">Name</div>
                        <div className="to">Request To</div>
                        <div className="number">Type of Reason</div>
                        <div className="reason">Reason</div>
                        <div className="days">No of Days</div>

                <div className="status">Approve</div>
                <div className="status">Forward</div>
            </div>
            </div>
            
            { status == 1 && request &&   request.map((value,key) =>( 
        <div className="applied-values">

           <div className="number">{value.id}</div>
                <div className="apply-name">{value.name}</div>
                <div className="to">{value.request_to}</div>
                <div className="number">{value.type_of_reason}</div>
                <div className="reason">{value.reason}</div>
                <div className="days">{value.no_of_days} days</div>

                <div className="status"><button type="submit"  onClick={()=>approved(value.id)} className="approved">Approve</button></div>
                <div className="status"><button type="submit" onClick={()=>forwarded(value.id)}  className="approved">Forward</button></div>

            </div> )) }
           
            

        </div>
    )
}

export default Approve;