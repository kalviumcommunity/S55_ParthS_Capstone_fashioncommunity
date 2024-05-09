import React from 'react';
import Logo from "../../assets/logos/Hues_transparent.png";
import Pic from "../../assets/designer.png";
import { Link, useNavigate } from "react-router-dom";
import "./designer.css";

function Designers() {
  return (
    <div>
      <nav>
        <Link to = "/"><img src={Logo} className="logo" alt="Hues logo" /></Link>

        <input
          type="text"
          className="search"
          placeholder="Search For the Outfits"
        />

        <div>
          <Link to="/explore"><button className="explore-btn"> Explore</button></Link>
        </div>

        <div>
          <Link to="/designers"><button className="desi-btn">Designers</button></Link>
        </div>

        <div>
          <Link to="/create"><button className="create-btn"> Create</button></Link>
        </div>
      </nav>

      <div className='title-text'>
        <h3>Top Collaborators and Designers</h3>
      </div>

      <div className="card-container">
        <div className="card">
          <img src={Pic} className='design-pic' alt="" />
          <div className="card-details">
            <h4>Designer Name</h4>
            <p>Description of the designer or collaboration</p>
          </div>
          <div className="circle-image">
            <img src={Pic} alt="" />
          </div>
        </div>

        
      </div>
    </div>
  );
}

export default Designers;
