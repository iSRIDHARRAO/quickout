import React, { useEffect, useState } from "react";

import axios from 'axios';
import './Apply.css';
function Apply(){
    const [id,setid] = useState();
    const [requestto,setrequestto]=useState("")
    const [type,settype] = useState("");
    const [reason,setreason] = useState("")
    const [days,setdays] = useState();

    useEffect(()=>{
        axios.get("http://127.0.0.1:3001/getUser",{
              headers:{
                  "x-access-token" : localStorage.getItem("token")
              }
          }).then((res)=> 
           setid(res.data["uid"])) 
        },[])

function applied(e){
    e.preventDefault();

    const url="http://127.0.0.1:3001/apply/"+id
    const article = {
             
        "id": id,
        "to": requestto,
        "type": type,
        "reason":reason,
        "days":days
       }

   axios.post(url, {article})
   window.location.reload()
}
    return(
        <div className="Apply">
            <div className="Apply-apply">
            <div className="apply-heading">
                <div className="head">Apply</div>
                </div>
                <div className="apply-form">
                    <div className="form-in-form">
                        <form onSubmit={applied}>
                        <div className="input-text">Request To</div>

                       <div className="input"> <select name="request_to" id="request_to" onChange={(e)=>{setrequestto(e.target.value)}} >
                            <option value="none" selected disabled hidden>Select an Option</option>
                            <option value="Care taker">Care Taker</option>
                            <option value="S.W.Dean">Student Welfare Dean</option>

  
                    </select></div>
                       <div className="input-text">Type of Reason</div>
                       <div className="input">
                       <select name="cars" id="type_of_reason" onChange={(e)=>{settype(e.target.value)}}>
                            <option value="none" selected disabled hidden>Select an Option</option>
                            <option value="Health Issue">Health Issue</option>
                            <option value="Emergency">Emergency</option>
                            <option value="Function">Function</option>
                            </select>
                       </div>
                       <div className="input-text">Reason</div>
                       <div className="input"><input name="reason" type="text" onChange={(e)=>{setreason(e.target.value)}} ></input></div>
                       <div className="input-text">No of Days</div>
                       <div className="input"><input onChange={(e)=>{setdays(e.target.value)}} name="days" type="number" min="1"></input></div>
                       <div className="button"><button type="submit">Submit</button></div>
                       </form>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default Apply;