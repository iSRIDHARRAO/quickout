import React from "react";
import {useNavigate} from 'react-router';
function Logout(){
    const navigate = useNavigate();
    localStorage.removeItem("token");


}

export default Logout;