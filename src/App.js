import logo from './logo.svg';
import './App.css';
import { Home } from './pages/Home';
import {
  BrowserRouter as Router,
  Routes,Route,Link
} from "react-router-dom";
import { Navigation } from './pages/Navigation';
import { Destination } from './pages/Destination';
import { Crew } from './pages/Crew';
import { useState } from "react";
import homePageImg from "./pages/assets/home/background-home-desktop.jpg"
import { Technology } from './pages/Technology';
import dataJson from './data.json';



function App() {
  const [backgroundImg,setBackgroundImg]=useState(`${homePageImg}`);
  const changeImg=(backgroundImgUrl)=>
  {
    setBackgroundImg(backgroundImgUrl);
  }
  return (
    <div className="App" style={{backgroundImage:`url(${backgroundImg})`}}>
      <Router>
       <Navigation changeImg={changeImg}></Navigation>
      <Routes>
        <Route path="/" element={<Home/> }/>
        <Route path="/destination" element={<Destination destinationData={dataJson.destinations}/> } />
        <Route path="/crew" element={<Crew crewData={dataJson.crew}/> }/>
        <Route path="/technology" element={<Technology/> }/>
      </Routes>
      </Router>
    </div>
  );
}

export default App;
