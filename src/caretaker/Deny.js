import React from "react";
import './Deny.css';
function Deny(){
    return(
        <div className="Deny">
           <div className="apply-heading">
                <div className="head">Denied</div>
            <div className="applied">
                <div className="number">S.No</div>
                <div className="number">Id Number</div>
                <div className="apply-name">Name</div>
                <div className="to">Applied to</div>
                
                <div className="reason">Reason</div>
                <div className="days">Days</div>
                <div className="status">Status</div>
            </div>
            </div>
            
            <div className="applied-values">
            <div className="number">1</div>
            <div className="number">O170515</div>
                <div className="apply-name">Sridhar Rao</div>
                <div className="to">Care Taker</div>
                
                <div className="reason">Health</div>
                <div className="days">5 days</div>
                <div className="status">Denied</div>
            </div>
            <div className="applied-values">
            <div className="number">2</div>
            <div className="number">O170515</div>
                <div className="apply-name">Sridhar Rao</div>
                <div className="to">Care Taker</div>
                
                <div className="reason">Health</div>
                <div className="days">5 days</div>
                <div className="status">Denied</div>
            </div>
        </div>
    )
}

export default Deny;