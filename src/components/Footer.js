import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom'; 
import Weather from './Weather';

const Footer = () => {
  const handleMissionClick = () => {
    window.scrollTo(0, 0); // Scroll to the top of the page
  };
  const handleAbout = () => {
    window.scrollTo(0, 0); // Scroll to the top of the page
  };
  const handlePublication= () => {
    window.scrollTo(0, 0); // Scroll to the top of the page
  };
  const handleAreas = () => {
    window.scrollTo(0, 0); // Scroll to the top of the page
  };
  const handleReview = () => {
    window.scrollTo(0, 0); // Scroll to the top of the page
  }; 
  const handleFaculty = () => {
    window.scrollTo(0, 0); // Scroll to the top of the page
  };
  const handleHod = () => {
    window.scrollTo(0, 0); // Scroll to the top of the page
  };
  const handleLab = () => {
    window.scrollTo(0, 0); // Scroll to the top of the page
  };

  return (
    <footer className="bg-zinc-800 text-white ">
      {/* newsletter row */}
      {/* <div className="md:flex md:justify-center md:items-center sm:px-10 px-4 bg-[#ffffff19] py-3">
        <h1
           className="lg:text-4xl text-3xl md:mb-0 mb-6 lg:leading-normal font-semibold
          md:w-2/5"
         >
           <span className="text-teal-400">Subscribe</span> to our newsletter
         </h1>
         <div>
           <input
             type="text"
             placeholder="Your Email"
             className="text-gray-800
            sm:w-72 w-full sm:mr-5 mr-1 lg:mb-0 mb-0 py-2.5 rounded px-2 focus:outline-none"
           />
         </div>
      </div> */}
      
                        {/* below footer */}
      <div className="md:flex md:justify-center md:items-center sm:px-10 px-4 py-0">
        {/* left half */}
        <div className="flex flex-col px-2 py-2 ml-4 mr-24 ">
          <div className="contact-info">
            <h3>Delhi Technological University</h3>
            <ul style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '16px' }}>
              <li><i className="fas fa-map-marker-alt"></i> Delhi Technological University,Shahbad Daulatpur,
                   <br/>Main Bawana Road,Delhi-110042
                   <br/>India</li>
              <li><i className="fas fa-light fa-envelope"></i><a className="text-gray-400 hover:text-teal-400 duration-300 text-sm cursor-pointer leading-6" href="mailto:info@company.com"> dtumitr.dtu.ac.in</a></li>
              <li><i className="fas fa-phone"></i> <span className="text-gray-400 hover:text-teal-400 duration-300 text-sm cursor-pointer leading-6">+91-11-27871018</span></li>
            </ul> 
         </div>
        </div>

        {/* right half */}
        <div className="md:flex md:justify-center md:items-center py-2 mb-10">
          <div className="flex flex-col p-10 no-underline">
            <Link to="/about" onClick={handleAbout}>
              <a className="text-gray-400 hover:text-teal-400 duration-300 text-lg cursor-pointer leading-6 ">Message from HOD</a>
            </Link>
            <Link to="/mission" onClick={handleMissionClick}>
              <a className="text-gray-400 hover:text-teal-400 duration-300 text-lg cursor-pointer leading-6">Mission & Vision</a>
            </Link> 
            <Link to="/hod" onClick={handleHod}>
              <a className="text-gray-400 hover:text-teal-400 duration-300 text-lg cursor-pointer leading-6">Staff</a>
            </Link>
            <Link to="/faculty" onClick={handleFaculty}>
              <a className="text-gray-400 hover:text-teal-400 duration-300 text-lg cursor-pointer leading-6">Faculty</a>
            </Link>   
           
          </div>
          <div className="flex flex-col p-10">
          <Link to="/lab" onClick={handleLab}>
              <a className="text-gray-400 hover:text-teal-400 duration-300 text-lg cursor-pointer leading-6">Laboratory</a>
            </Link>
            <Link to="/researchareas" onClick={handleAreas}>
              <a className="text-gray-400 hover:text-teal-400 duration-300 text-lg cursor-pointer leading-6">Research Areas</a>
            </Link>
            <Link to="/publication" onClick={handlePublication}>
              <a className="text-gray-400 hover:text-teal-400 duration-300 text-lg cursor-pointer leading-6">Books and Conference Papers</a>
            </Link>
            <Link to="/researchandreview" onClick={handleReview}>
              <a className="text-gray-400 hover:text-teal-400 duration-300 text-lg cursor-pointer leading-6">Research and Review Papers</a>
            </Link>   
          </div>
        </div>

        {/* 3rd half */}
        {/* <div>
            <div>
            <Weather
            />
            </div>
        </div> */}
        
      </div>
                           {/* div for social media icons */}
      {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10
                    text-center pt-2 text-gray-400 text-sm pb-8"> */}
        {/* <SocialIcons Icons={Icons} /> */}
        {/* <li><i className="fa-solid fa-hashtag"></i></li>
      </div> */}

    </footer>
  );
};

export default Footer;

