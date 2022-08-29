import React, { useEffect, useState } from "react";
import axios from 'axios';
import './Profile.css';
function Profile(){
    const [name,setname] = useState("")
    const [id,setid] = useState("")
    const [mail,setmail] = useState("")
    const [branch,setbranch] = useState("")
    const [section,setsection] = useState("")
    const [room,setroom] = useState("")
    const [address,setaddress] = useState("")
    const [mobile,setmobile] = useState()
    const [pmobile, setpmobile] = useState()
    const [gender,setgender] = useState("")
function fetchUser(){
   const url = "http://127.0.0.1:3001/student/"+id
    axios.get(url)
   .then((res)=>{
      setname(res.data["name"])
      setmail(res.data["email"])
      setgender(res.data["gender"])
      setbranch(res.data["branch"])
      setroom(res.data["room"])
      setaddress(res.data["city"])
      setmobile(res.data["mobile"])
      setpmobile(res.data["pmobile"])
   })
   
}
function fetchid(){

}
    useEffect(()=>{
      axios.get("http://127.0.0.1:3001/getUser",{
            headers:{
                "x-access-token" : localStorage.getItem("token")
            }
        }).then((res)=> 
         setid(res.data["uid"])) 

      fetchUser();
   

    },[id])
    return(
        <div className="profile">
            <div className="profile-main">
            <div className="image-profile"> <img src="https://as1.ftcdn.net/v2/jpg/03/46/83/96/1000_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg" alt="Profile Image"/> </div>
            <div className="centered-block">
                <div className="one">
                    <div className="profile-name">Student's  Name </div><div className="profile-value">: {name}</div>
                 </div>
                 <div className="one">
                    <div className="profile-name">Gender </div><div className="profile-value">: {gender}</div>
                 </div>
                 <div className="one">
                    <div className="profile-name">  I'd Number </div><div className="profile-value">: {id}</div>
                 </div>
                 <div className="one">
                    <div className="profile-name">  Email I'd </div><div className="profile-value">: {mail}</div>
                 </div>
                 <div className="one">
                    <div className="profile-name">  Branch Name </div><div className="profile-value">: {branch}</div>
                 </div>
                 {/* <div className="one">
                    <div className="profile-name">  Section Number </div><div className="profile-value">: {section}</div>
                 </div> */}
                 <div className="one">
                    <div className="profile-name">  Room Number </div><div className="profile-value">: {room}</div>
                 </div>
                 <div className="one">
                    <div className="profile-name">  Address </div><div className="profile-value">: {address}</div>
                 </div>
                 <div className="one">
                    <div className="profile-name">  Mobile Number </div><div className="profile-value">: +91 {mobile}</div>
                 </div>
                 <div className="one">
                    <div className="profile-name">  Parent's Mobile Number </div><div className="profile-value">: +91 {pmobile}</div>
                 </div>
            {/* <div className="profile-name"> Id Number&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; : O170515</div>
            <div className="profile-name"> Mail I'd&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; : sridhar7348@gmail.com</div>

            <div className="profile-name"> Department&nbsp;&nbsp; : C.S.E</div>
            <div className="profile-name"> Section&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; : CSE-1</div>
            <div className="profile-name"> Room No&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; : J-213</div>
            <div className="profile-name"> Mobile No&nbsp;&nbsp;&nbsp;&nbsp; : +91 9642326699</div>
            <div className="profile-name"> Parent's Mobile No&nbsp;&nbsp;&nbsp;&nbsp; : +91 9642326699</div>   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*/}
            </div>
            </div>
        </div>
    )
}

export default Profile;