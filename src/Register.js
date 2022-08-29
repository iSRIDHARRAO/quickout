import React, { useState } from "react";
import './Register.css';
import {  Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function Register(){
    const navigate = useNavigate();
    const [name,setname] = useState("");
    const [id,setid] = useState("");
    const [gender,setgender] = useState("");
    const [email,setemail] = useState("");
    const [branch,setbranch] = useState("");
    const [room,setroom] = useState("");
    const [city,setcity] = useState("");
    const [mobile_no,setmobile_no] = useState("");
    const [pmobile_no,setpmobile_no] = useState("");
    const [password,setpassword] = useState("");
    const [status,setStatus] = useState("")
    

    const fetchData = () => {

        const article = {
             "name" : name,
             "id": id,
             "gender": gender,
             "email": email,
             "branch": branch,
             "room": room,
             "city": city,
             "mobile_no": mobile_no,
             "pmobile_no": pmobile_no,
             "password":password
            }
            var self = this;
        axios.post('http://127.0.0.1:3001/register', {article})
        .then(res => {
            var status = res.data.message
        console.log(status)
          if(status==="Success"){
            navigate("/")

          }
          else{
            alert("Registration Failed");
          }
        
            
          });
        }
          

    const onRegister= (event) => {
        event.preventDefault();
        const pwd= document.getElementById("check_pwd").value
        if(pwd===""){
            alert("Enter password")
        }
        else{
        const a = checkPassword()

        if(!a){
            alert("Password Not Matched")
        }
        else{
            fetchData();
        }}
    }
    function checkPassword(){
       const pwd= document.getElementById("check_pwd").value
        
        if(pwd===password){
            return true;
        }
        else{
            return false;
        }
    }
    return(
        <div className="Register">
            <div className="Register-container">
                <form onSubmit={onRegister}>
                <div className="head headd">Register Now</div>

                
                <div className="for-flex">
                    <div className="uname-name1 "><span className="pad pad2">Name </span><input onChange={(e)=>{setname(e.target.value)}}className="uname" name="name"></input></div>
                    <div className="uname-name1"><span className="pad  pad2">I'd Number</span> <input onChange={(e)=>{setid(e.target.value)}} className="uname" name="id"></input></div>
                </div>
                <div className="for-flex">
                    <div className="uname-name2 "><span className="pad pad2">Gender</span>
                    <select name="gender" onChange={(e)=>{setgender(e.target.value)}}>
                        <option value="none" selected disabled hidden>Select an Option</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                    </select>
                    </div>
                    <div className="uname-name2"><span className="pad  pad2">Email I'd</span> <input type="email" onChange={(e)=>{setemail(e.target.value)} } className="uname" name="email"></input></div>
                </div>
                <div className="for-flex">
                    <div className="uname-name2 "><span className="pad pad2">Branch</span> 
                        <select name="branch" onChange={(e)=>{setbranch(e.target.value)}} >
                            <option value="none" selected disabled hidden>Select an Option</option>
                            <option value="C.S.E">C.S.E</option>
                            <option value="CIVIL">CIVIL</option>
                            <option value="E.C.E">E.C.E</option>
                            <option value="MECH">MECH</option>
                        </select>    
                    </div>
                    <div className="uname-name2"><span className="pad  pad2">Section</span> 
                    <select name="section" >
                            <option value="none" selected disabled hidden>Select an Option</option>
                            <option value="section1">Section 1</option>
                            <option value="section2">Section 2</option>
                            <option value="section3">Section 3</option>
                            <option value="section4">Section 4</option>
                            <option value="section5">Section 5</option>
                            <option value="section6">Section 6</option>
                        </select>    
                    </div>
                </div>
                <div className="for-flex">
                    <div className="uname-name2 "><span className="pad pad2">Room No</span> <input onChange={(e)=>{setroom(e.target.value)}}className="uname" name="room_no"></input></div>
                    <div className="uname-name2"><span className="pad pad2 ">City</span> <input onChange={(e)=>{setcity(e.target.value)}} className="uname" name="city"></input></div>
                </div>
                <div className="for-flex">
                    <div className="uname-name2 "><span className="pad pad2">Mobile Number</span><input onChange={(e)=>{setmobile_no(e.target.value)}} className="uname" name="mobile_no"></input></div>
                    <div className="uname-name2"><span className="pad  pad2">Parent's Mobile Number</span> <input onChange={(e)=>{setpmobile_no(e.target.value)}} className="uname" name="pmobile_no"></input></div>
                </div>
                <div className="for-flex">
                    <div className="uname-name2 "><span className="pad pad2">Password</span><input className="uname" type="password" name="password" id="check_pwd"></input></div>
                    <div className="uname-name2"><span className="pad  pad2">Confirm Password</span> <input onChange={(e)=>setpassword(e.target.value)} type="password" className="uname" name="uname"></input></div>
                </div>
               

                <div className="submit"><button className="submit-button1" type="submit">Register</button> <Link style={{textDecoration: 'none'}} to="/login"><button  className="submit-button2" >Login</button></Link></div>
                </form>


            </div>
        </div>
    )
}
export default Register;