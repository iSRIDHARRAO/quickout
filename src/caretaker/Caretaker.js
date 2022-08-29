import React from "react";
import './Caretaker.css';
import {  Link, Outlet } from 'react-router-dom';

function CareTaker(){
  function logout(){

    localStorage.removeItem("token");

  }
    return(
        <div className="Caretaker">
          <div className="left">
        <div className="approve"><Link style={{textDecoration: 'none'}} to="approve"><span class="span">Approve</span></Link></div>
        <div className="forward"><Link style={{textDecoration: 'none'}} to="forward"><span class="span">Forward</span></Link></div>
        {/* <div className="deny"><Link style={{textDecoration: 'none'}} to="deny"><span class="span">Deny</span></Link></div> */}
       <div className="logout"> <Link style={{textDecoration: 'none'}} onClick={logout} to="/"><span class="span">Logout</span></Link></div>

        </div>
      <Outlet />
        </div>
    )
}
export default CareTaker;