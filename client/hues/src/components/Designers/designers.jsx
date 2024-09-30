// import React from 'react';
// import Logo from "../../assets/logos/Hues_transparent.png";
// import Pic from "../../assets/designer.png";
// import { Link, useNavigate } from "react-router-dom";
// import "./designer.css";

// function Designers() {
//   return (
//     <div>
//       <nav>
//         <Link to = "/"><img src={Logo} className="logo" alt="Hues logo" /></Link>

//         <input
//           type="text"
//           className="search"
//           placeholder="Search For the Outfits"
//         />

//         <div>
//           <Link to="/explore"><button className="explore-btn"> Explore</button></Link>
//         </div>

//         <div>
//           <Link to="/designers"><button className="desi-btn">Designers</button></Link>
//         </div>

//         <div>
//           <Link to="/create"><button className="create-btn"> Create</button></Link>
//         </div>
//       </nav>

//       <div className='title-text'>
//         <h3>Top Collaborators and Designers</h3>
//       </div>

//       <div className="card-container">
//         <div className="card">
//           <img src={Pic} className='design-pic' alt="" />
//           <div className="card-details">
//             <h4>Designer Name</h4>
//             <p>Description of the designer or collaboration</p>
//           </div>
//           <div className="circle-image">
//             <img src={Pic} alt="" />
//           </div>
//         </div>

        
//       </div>
//     </div>
//   );
// }deded

// export default Designers;


import React from 'react';
import Logo from "../../assets/logos/Hues_transparent.png";
import Pic from "../../assets/designer.png";
import { Link } from "react-router-dom";
import "./designer.css";

function Designers() {
  const designers = [
    { name: 'John Doe', description: 'Expert in modern fashion.', img: Pic },
    { name: 'Jane Smith', description: 'Innovative streetwear designer.', img: Pic },
    { name: 'Alex Johnson', description: 'Specializes in haute couture.', img: Pic },
    { name: 'Emily Davis', description: 'Sustainable and eco-friendly designs.', img: Pic },
    { name: 'Michael Brown', description: 'Minimalist aesthetics.', img: Pic },
    { name: 'Sarah Wilson', description: 'Bold and vibrant styles.', img: Pic },
    { name: 'David Taylor', description: 'Classic and timeless designs.', img: Pic },
    { name: 'Olivia Martinez', description: 'Avant-garde fashion.', img: Pic },
    { name: 'James Anderson', description: 'Contemporary and chic.', img: Pic },
  ];

  return (
    <div>
      <nav>
        <Link to="/"><img src={Logo} className="logo" alt="Hues logo" /></Link>
        <input type="text" className="search" placeholder="Search For the Outfits" />
        <Link to="/explore"><button className="explore-btn"> Explore</button></Link>
        <Link to="/designers"><button className="desi-btn">Designers</button></Link>
        <Link to="/create"><button className="create-btn"> Create</button></Link>
      </nav>

      <div className='title-text'>
        <h3>Top Collaborators and Designers</h3>
      </div>

      <div className="card-container">
        {designers.map((designer, index) => (
          <div className="card" key={index}>
            <img src={designer.img} className='design-pic' alt={designer.name} />
            <div className="circle-image">
              <img src={designer.img} alt={designer.name} />
            </div>
            <div className="card-details">
              <h4>{designer.name}</h4>
              <p>{designer.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Designers;

