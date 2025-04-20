import './App.css';
import { Route, BrowserRouter as Router, Routes, Navigate } from 'react-router-dom';
import LandingPage from './pages/landing';
import HomeComponent from './pages/home';
import Authentication from './pages/authentication';
import VideoMeetComponent from './pages/VideoMeet';
import History from './pages/history';


function App() {
  return (
    
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/auth' element={<Authentication />} />
        <Route path='/home' element={<HomeComponent />}/>
        <Route path='/:url' element={<VideoMeetComponent />} />
        <Route path='/history' element={<History />} />
      </Routes>
    
  );
}

export default App;
