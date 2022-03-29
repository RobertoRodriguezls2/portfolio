
import React, { Component } from "react";
import './components/Card.css'
import './App.css';
import Topmenu from './components/Topmenu';
import Gallery from './components/Gallery';

import CardII from "./components/CardII";

import Portfolio from "./pages/Portfolio";
import AutoPage from "./pages/AutoPage";
import PortPage from "./pages/PortPage";
import DronePage from "./pages/DronePage";
import LandPage from "./pages/LandPage";
import { SocialIcon } from 'react-social-icons';
import SideCard from "./components/SideCard";
import AboutPage from "./pages/AboutPage";

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

const Auto = require('./images/Auto.jpg');
const Drone = require('./images/Drone.jpg');
const Land = require('./images/Land.jpg');
const Port = require('./images/Port.jpg');



class App extends Component {

  constructor() {
    super()
    this.state = {

      photo: "hola"

    }
  }


  render() {
    return (
      <>
        <Router>
          <Routes>
            <Route exact path='/' element={
              <>

                <Topmenu />
                <Gallery />
                <div class='container' data-theme="dark">

                  <CardII
                    title="Automotive"
                    body="From casual cruisers to hypercars in the wild. Rolling shots, studio shots, and everything in between to create the best compositions"
                    image={Auto}
                    page='Automotive'
                  />
                  <CardII

                    title="Portraits"
                    body="Whether its professional headshots or personal photos for fun, everyone has a good side so lets find yours."
                    image={Port}
                    page='Port'
                  />
                  <CardII
                    title="Drone"
                    body="They say the sky's the limit, until you get a drone. Then the opportunities are endless. Covering all areas imaginable"
                    image={Drone}
                    page='Drone'
                  />
                  <CardII
                    title="Landscapes"
                    body="My personal favorite photos to take. Capturing moments that highlight the best an area has to offer."
                    image={Land}
                    page='Land'
                  />
                  



                  {/* <SideCard
                  title="Roberto Rodriguez" 
                   body="A photographer/videographer from the SouthBay Area of California.
                   I cover areas from the Long Beach, Carson, San Pedro area to as far as Malibu, Oxnard and Inland Empire.
                   I can cover your arial needs as I'm part 107 certified to fly a drone commercially and realiably for your photo, video or any other needs.
                   I can cover any photo or video needs you have, click below to learn more or contact me through email or any of my socials."
                   firstbtn={"/About"}
                   firstbtnmsg={"About"}
                   secondbtn={"/About"}
                   secondbtnmsg={"contact"}
                   /> */}
                   <SideCard
                   title='About me'
                   body="A photographer/videographer from the SouthBay Area of California.
                   I cover areas from the Long Beach, Carson, San Pedro area to as far as Malibu, Oxnard and Inland Empire.
                   I can cover your arial needs as I'm part 107 certified to fly a drone commercially and realiably for your photo, video or any other needs.
                   I can cover any photo or video needs you have, click below to learn more or contact me through email or any of my socials."
                   firstbtn='/About'
                   firstbtnmsg='About'
                   secondbtn='/About'
                   secondbtnmsg='Contact'                   />
                </div>

              </>


            }>
            </Route>
            {/* <Route path="/about" element={<About />} /> */}
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/Automotive" element={<AutoPage />} />
            <Route path="/Portraits" element={<PortPage />} />
            <Route path="/Drone" element={<DronePage />} />
            <Route path="/Land" element={<LandPage />} />
            <Route path="/About" element={<AboutPage />} />
          </Routes>
        </Router>

        <div className="bottom">

          <SocialIcon
            url="https://www.instagram.com/jushustudios310/?hl=en"
            className='icons' />
          <SocialIcon
            url="https://www.youtube.com/channel/UCeZ24tgb-H_gEFFVuPw07dQ"
            className='icons' />
          <SocialIcon
            url="https://github.com/RobertoRodriguezls2"
            bgColor="white"
            className='icons' />
        </div>
      </>
    );



  }


}



export default App;