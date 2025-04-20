import React, { useContext, useState } from 'react'
import withAuth from '../utils/withAuth'
import { useNavigate } from 'react-router-dom'
import "../App.css";
import { Button, IconButton, TextField } from '@mui/material';
import { AuthContext } from '../contexts/AuthContext';

function HomeComponent() {
    let navigate = useNavigate();
    const [meetingCode, setMeetingCode] = useState("");

    const { addToUserHistory } = useContext(AuthContext);

    let handleJoinVideoCall = async () => {
        await addToUserHistory(meetingCode);
        navigate(`/${meetingCode}`);
    };

    return (
        <div className='landingPageContainer'>
            <nav>
                <div className='navHeader'>
                    <h2>VividHub</h2>
                </div>
                <div className='navlist'>
                    <p onClick={() => navigate("/history")}>History</p>
                    <p onClick={() => {
                        localStorage.removeItem("token");
                        navigate("/");
                    }}>
                        Logout
                    </p>
                </div>
            </nav>

            <div className="meetContainer">
                <div className="leftPanel">
                    <div>
                        <h2 style={{ marginBottom: "20px" }}>
                            Providing Quality Video Call Just Like Quality Education
                        </h2>

                        <TextField 
                            onChange={e => setMeetingCode(e.target.value)} 
                            id="outlined-basic" 
                            label="Meeting Code" 
                            variant="outlined" 
                            style={{ marginBottom: "10px" }} 
                        />

                        <br />

                        <Button onClick={handleJoinVideoCall} variant="contained">
                            Join
                        </Button>
                    </div>
                </div>
                <div className="rightPanel">
                    <img srcSet="/3.jpg" alt="" />
                </div>
            </div>
        </div>
    );
}

export default withAuth(HomeComponent);
