import React from "react";

import './Home.css';
import {  Link } from 'react-router-dom';
function Home(){

    return(
        <div className="Home">
            <Link style={{textDecoration: 'none'}} to="/login"><div className="student">
                <div className="image">
                <img src="https://img.freepik.com/free-vector/learning-concept-illustration_114360-6186.jpg?w=826&t=st=1661445791~exp=1661446391~hmac=3eaf4ddc1d2669eb8dc79b555997dfb58f299dcec2591ceebf54515b360d471d" alt="This is student"/>
                </div>
                <div className="name">
                    STUDENT PORTAL
                </div>
            </div>
            </Link>
            <Link style={{textDecoration: 'none'}} to="/login"><div className="caretaker">
            <div className="image">
                <img src="https://img.freepik.com/free-vector/charity-logo-with-hand_23-2147503001.jpg?w=826&t=st=1661446254~exp=1661446854~hmac=ab7c7cdc79390f6159ac2ca8eeae958a779c85d4a7818d34a81e34cca8abbcc0" alt="This is student"/>
                </div>
                <div className="name">
                    CARE TAKER PORTAL
                </div>
            </div></Link>
            <Link  style={{textDecoration: 'none'}} to="/login"><div className="dean">
            <div className="image">
                <img src="https://img.freepik.com/free-vector/community-social-media-people_24877-50804.jpg?w=826&t=st=1661448271~exp=1661448871~hmac=71c1fe65731a48c05e62b5ad2e46e1e8d9637229bc6936b7ac00bb2dee759e5b" alt="This is student"/>
                </div>
                <div className="name">
                    S.W. DEAN PORTAL
                </div>
            </div></Link>
            <Link style={{textDecoration: 'none'}} to="/login"><div className="security">
            <div className="image">
                <img src="https://illustimage.com/photo/1324.png" alt="This is student"/>
                </div>
                <div className="name">
                    SECURITY PORTAL
                </div>
            </div></Link>
        </div>
    )
}

export default Home;