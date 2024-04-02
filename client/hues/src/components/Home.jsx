import { useState } from "react";
import "./Home.css";
import Logo from "../assets/logos/Hues_transparent.png";
import Img from '../assets/home-img.png'

function Home() {
  return (
    <>
      <nav>
        <img src={Logo} className="logo" alt="Hues logo" />

        <input
          type="text"
          className="search"
          placeholder="Search For the Outfits"
        />

        <div>
          <button className="explore-btn"> Explore</button>
        </div>

        <div>
          <button className="desi-btn">Designers</button>
        </div>

        <div>
          <button className="create-btn"> Create</button>
        </div>
      </nav>


      <div className="info-container">

        <h2 className="title-text">Welcome To Fashion Community</h2>
      <img src={Img} className="home-img" alt="Hues logo" />



      </div>
    </>
  );
}

export default Home;
