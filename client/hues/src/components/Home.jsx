import { useState } from "react";
import "./Home.css";
import Logo from "../assets/logos/Hues_transparent.png";
import Img from "../assets/home-img.png";
import Img2 from "../assets/grid-img.png";
import uni1 from "../assets/img1.jpg";
import uni2 from "../assets/img2.png";
import uni3 from "../assets/img3.jpg";
import dress from "../assets/dress.png";
import imgg from '../assets/logos/logo.png'
import { Link, useNavigate } from "react-router-dom";

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

        <div>
              <Link to="/signup"><button className="signup">Sign Up</button></Link>
            </div>
            <div className="slash">
              <h2>/</h2>

            </div>
            <div>
              <Link to="/login"><button className="login">Login</button></Link>
            </div>
      </nav>

      <div className="info-container">
        <h2 className="title-text">Welcome To Fashion Community</h2>
        <img src={Img} className="home-img" alt="Hues logo" />

        <button className="explore">Explore</button>
        <button className="create">Create</button>

        <div className="specification">
          <h1>20 +</h1>
          <h1>100 +</h1>
          <h1>150 +</h1>

        </div>
        <div className="specs">
          <h3>Designers</h3>
          <h3>Users</h3>
          <h3>Designs</h3>

        </div>
      </div>

      <div className="container-2">
        <img src={Img2} className="grid-img" alt="Grid image" />

        <h2 className="name-college">DESIGNERS AND COLLABORATORS FROM:</h2>

        <div className="uni-img">
          <img src={uni1} className="image1" alt="" />
          <img src={uni2} className="image2" alt="" />
          <img src={uni3} className="image3" alt="" />
        </div>
      </div>

      <div>
        <h1 className="about-title">ABOUT HUES</h1>
        <img src={dress} className="dress-img" alt="" />
        <p className="para">
          <b>Trending and Top-Voted Designs:</b> Get top trending designs by
          scrolling through top voted designs by multiple users and experts and
          know about latest designs and styles that are ruling the fashion
          world.
          <br />
          <b>Designer Portfolios:</b> Dive deep into the portfolios of great
          fashion designers and know more about their creative designs and
          artworks. Hues is the platform for fashion designers to get user
          interaction and choice by posting their designs here.
          <br />
          <b>Connect and Customise:</b> Hues bridges the gap between designers
          and fashion enthusiasts by providing a platform for direct
          communication. Users can interact with designers for their
          customizations and needs on the designs and buy their products. Top
          Portfolios will be voted by users based on their artworks and
          portfolios for more engagement.
        </p>
      </div>

      <footer>

        
        <hr />
        <img src={imgg} className="footer-img" alt="Hues logo" />

        <div></div>

        



        

        
      </footer>


    </>
  );
}

export default Home;
