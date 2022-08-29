import React from "react";
import './Security.css';
import {  Link, Outlet } from 'react-router-dom';


function Security(){
  function logout(){

    localStorage.removeItem("token");

  }
    return(
        <div className="Security">
          <div className="left">
        <div className="list"><Link style={{textDecoration: 'none'}} to="list"><span class="span">List</span></Link></div>
        <div className="logout"><Link onClick={logout} style={{textDecoration: 'none'}} to="/"><span class="span">Logout</span></Link></div>

        </div>
      <Outlet />
        </div>
    )
}
export default Security;