import React from "react";
import './Dean.css';
import {  Link, Outlet } from 'react-router-dom';

function Dean(){
  function logout(){

    localStorage.removeItem("token");

  }

    return(
        <div className="Dean">
          <div className="left">
        <div className="approved"><Link style={{textDecoration: 'none'}} to="approved"><span class="span">Approve</span></Link></div>
        <div className="reject"><Link style={{textDecoration: 'none'}} to="reject"><span class="span">Rejected</span></Link></div>
        <div className="logout"><Link onClick={logout} style={{textDecoration: 'none'}} to="/"><span class="span">Logout</span></Link></div>

        </div>
      <Outlet />
      </div>
    )
}
export default Dean;