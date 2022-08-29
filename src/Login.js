import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router';
import './Login.css';
import axios from 'axios';
import {  Link } from 'react-router-dom';

function Login(){
    const navigate = useNavigate();
    const [id,setid] = useState("");
    const [password,setpassword] =useState("");

    const fetchData = () => {

        const article = {
             
             "id": id,
             "password":password
            }
            var self = this;
        axios.post('http://127.0.0.1:3001/login', {article})
        .then(res => {
            var status = res.data.message
            var token = res.data.token;

            
          if(status==="iid"){
            document.getElementById("cr1").innerHTML = "Enter valid User Id"
          }
          else if(status==="ipwd"){
            document.getElementById("cr2").innerHTML = "Enter valid Password"

          }
          else{
           
            localStorage.setItem("token",token)
            window.location.reload()
          }
        
        
        })}

    function onLogin(e){
        e.preventDefault();
        if(id==="" && password===""){
            document.getElementById("cr1").innerHTML = "Enter I'd"
            document.getElementById("cr2").innerHTML = "Enter Password"
            
            }
            else if(id===""){
                document.getElementById("cr1").innerHTML = "Enter id"
            }
            else if(password===""){
                document.getElementById("cr2").innerHTML = "Enter Password"
            }
            else{
                document.getElementById("cr1").innerHTML = ""
                document.getElementById("cr2").innerHTML = ""
                fetchData()
            }
        
    }

    useEffect( ()=>{
        axios.get("http://127.0.0.1:3001/getUser",{
            headers:{
                "x-access-token" : localStorage.getItem("token")
            }
        })
        .then((res)=> 
        // alert(res.data["urole"])
            
            res.data["isLoggedIn"] ? (res.data["urole"]==="student"?navigate("/student"): (res.data["urole"]==="caretaker"?navigate("/caretaker"):(res.data["urole"]==="security"?navigate("/security"):navigate("/dean"))) ) : null 

        //     if(res.data["isLoggedIn"]){
        //         if(res.data["urole"]==="student"){
        //             navigate("/student")
        //         }
        //         else if(res.data["urole"]==="caretaker"){

        //         }
        //     }
       // }  
          )
    },[])

    return(
        <div className="Login">
            <div className="login-container">
                <form onSubmit={onLogin}>
                <div className="head headd">Sign In</div>
                <div className="uname-name">User I'd*</div>
                <input onChange={(e)=>{setid(e.target.value)}}className="uname" name="uname"></input>
                <p id="cr1" className="correction1"> </p>
                <div className="uname-name2">Password*</div>
                <input onChange={(e)=>{setpassword(e.target.value)}} className="uname2" type="password" name="password"></input>
                <p  id="cr2" className="correction2"></p>
                <div className="submit"><button className="submit-button1" type="submit">Login</button> <Link style={{textDecoration: 'none'}} to="/register"><button  className="submit-button2" >Register</button></Link></div>
                </form>
                <div className="note"><span className="bold-span">NOTE :- </span>Sign Up is only for the students.</div>

            </div>
        </div>
    )
}
export default Login;