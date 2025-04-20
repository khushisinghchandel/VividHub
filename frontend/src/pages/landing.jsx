import React from 'react'
import "../App.css"
import { Link, useNavigate } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid';

export default function LandingPage() {


    const router = useNavigate();

    return (
        <div className='landingPageContainer'>
            <nav>
                <div className='navHeader'>
                    <h2>VividHub</h2>
                </div>
                <div className='navlist'>
                    <p onClick={() => {
    const randomRoomId = uuidv4(); // Generates a unique ID
    router(`/${randomRoomId}`);
}}>Join as Guest</p>
                    <p onClick={() => {
                        router("/auth")

                    }}>Register</p>
                    <div onClick={() => {
                        router("/auth")

                    }} role='button'>
                        <p>Login</p>
                    </div>
                </div>
            </nav>


            <div className="landingMainContainer">
                <div>
                    <h1><span style={{ color: "#FF9839" }}>Connect</span> with your loved Ones</h1>

                    <p>Cover a distance by VividHub</p>
                    <div role='button'>
                        <Link to={"/auth"}>Get Started</Link>
                    </div>
                </div>
                <div>

                <img src="/3.jpg" alt="" class="small-img" />


                </div>
            </div>



        </div>
    )
}