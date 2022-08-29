import React from "react";
import './Student.css';
import {  Link, Outlet } from 'react-router-dom';
function Student(){
  function logout(){

    localStorage.removeItem("token");

  }
    return(

        <div className="Student">
          <div className="left">
          <div className="profile"><Link style={{textDecoration: 'none'}} to="profile"><span className="span">Profile</span></Link></div>
        <div className="apply"><Link style={{textDecoration: 'none'}} to="apply"><span className="span">Apply</span></Link></div>
        <div className="success"><Link style={{textDecoration: 'none'}} to="success"><span className="span">Status</span></Link></div>
        {/* <div className="reset"><Link style={{textDecoration: 'none'}} to="reset"><span className="span">Reset</span></Link></div> */}

        <div className="logout"><Link style={{textDecoration: 'none'}} onClick={logout} to="/" ><span className="span">Logout</span></Link></div>

        </div>
      <Outlet />
      </div>
    )
}
export default Student;