// import React from "react";
// import { Row } from "react-bootstrap";
// import { useState, useEffect } from "react";
// import logo from "./images/logo.png";
// import { Link } from "react-router-dom";
// import Nav from "react-bootstrap/Nav";
// import Navbar from "react-bootstrap/Navbar";
// import NavDropdown from "react-bootstrap/NavDropdown";
// import { onAuthStateChanged, signOut } from "firebase/auth";
// import auth from "../firebase";
// import { Navigate } from "react-router-dom";

// function NavigationBar() {
//   const [showSecondaryNavbar, setShowSecondaryNavbar] = useState(false);
//   const [login, setLogin] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       let isScrolled = window.scrollY > 200;

//       setShowSecondaryNavbar(isScrolled);
//     };

//     window.addEventListener("scroll", handleScroll);

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   const handleLogout = () => {
//     signOut(auth)
//     .then(()=>{
//       setLogin(false);
//       <Navigate replace to='/'/>
//       localStorage.removeItem('loggedKey');
//     })
//     .catch((error)=>{
//       // console.log(error);
//       alert(error);
//     });
//   };

//   useEffect(() => {
//     onAuthStateChanged(auth, (user) => {
//       if (user) {
//         setLogin(true);
//         localStorage.setItem('loggedKey',true);
//       } else {
//         setLogin(false);
//       }
//     });
//   }, []);
//   return (
//     <div className="mynav">
//       <nav>
        
//       </nav>
      
//       <Row className="secondaryNav">
//         <Navbar
//            class="navbar navbar-light"
//           style={{
//           backgroundColor: showSecondaryNavbar ? "#e3f2fd" : "#e3f2fd",
//           fontWeight: showSecondaryNavbar ? "500" : "400",
//           borderRadius: "10px",
//           paddingLeft: "0px",
//           width: "100%", // Set the width to 100%
//           alignItems: "center",
//           scrollBehavior: "smooth",
//           boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
//           transition: "opacity 0.5s ease-in-out, visibility 0.3s ease-in",
//           opacity: showSecondaryNavbar ? "1" : "1",
//           visibility: "visible",
//         }}
//         expand="lg"
//         >
//             <Navbar.Toggle className="ms-auto" aria-controls="basic-navbar-nav" />
//             <Navbar.Collapse id="basic-navbar-nav" style={{ justifyContent: "center" }}>
//             <Nav className="mx-auto">
//               <Nav.Link as={Link} to="/">
//                 <i className="fas fa-home"></i>
//               </Nav.Link>
//               <Nav.Link as={Link} to="/about">
//                 About
//               </Nav.Link>
//               <Nav.Link as={Link} to="/mission">
//                 Mission & Vision
//               </Nav.Link>

//               {/* keep commented */}
//               {/* <Nav.Link as={Link} to="/hod">
//                 HOD
//               </Nav.Link> */}
//               {/* till here */}

//               <Nav.Link as={Link} to="/lab">
//                 Lab
//               </Nav.Link>

//               {/* keep commented */}
//               {/* <Nav.Link as={Link} to="/faculty">
//                 Faculty
//               </Nav.Link> */}
//               {/* till here */}

//               <NavDropdown title="People" id="basic-nav-dropdown">
//                 <NavDropdown.Item as={Link} to="/faculty">
//                   Faculty
//                 </NavDropdown.Item>
//               </NavDropdown>

//               <NavDropdown title="Publications" id="basic-nav-dropdown">
//                 <NavDropdown.Item as={Link} to="/researchareas">
//                   Research Areas
//                 </NavDropdown.Item>
//                 <NavDropdown.Item as={Link} to="/publication">
//                   Books & Conference Papers
//                 </NavDropdown.Item>
//                 <NavDropdown.Item as={Link} to="/researchandreview">
//                   Research & Review Papers
//                 </NavDropdown.Item>
//               </NavDropdown>
//               <Nav.Link as={Link} to="/contact">
//                 Contact
//               </Nav.Link>
//               {login ? (
//                 <div>
//                   <Nav.Link as={Link} to="/login" onClick={handleLogout}>
//                     Logout
//                   </Nav.Link>
//                 </div>
//               ) : (
//                 <div>
//                   <Nav.Link as={Link} to="/login">
//                     Login
//                   </Nav.Link>
//                 </div>
//               )}
// {/* keep this commented */}
//               {/* <NavDropdown title="Links" id="basic-nav-dropdown">
//                 <NavDropdown.Item as={Link} to="/lab">
//                   Lab
//                 </NavDropdown.Item>
//                 <NavDropdown.Item as={Link} to="/faculty">
//                   Faculty
//                 </NavDropdown.Item>
//                 <NavDropdown.Item href="#action/3.3">
//                   Something
//                 </NavDropdown.Item>
//                 <NavDropdown.Divider />
//                 <NavDropdown.Item href="#action/3.4">
//                   Separated link
//                 </NavDropdown.Item>
//               </NavDropdown> */}
//               {/* till here */}
              
//             </Nav>
//           </Navbar.Collapse>
//         </Navbar>
//       </Row>

//       {/* keep this commented */}
//       {/* </Container> */}
//       {/* <hr></hr> */}
//       {/* till here */}

//     </div>
//   );
// }

// export default NavigationBar;

// text-[#3aa8d3]





import React,{useState} from 'react';
import {NavLink, Link} from 'react-router-dom';
import {FiAlignRight,FiXCircle,FiChevronDown } from "react-icons/fi";
import logo from './images/homeImages/ImageLogo.jpg'

// head 1 containing DTU written only
// function Head2() {
//   return (
//     <div className=" flex  justify-between items-center text-1.1rem relative shadow-md transition-all duration-500 bg-zinc-600">
//       {/* <div className="container"> */}
//       {/* <div className="flex "> */}
//        {/* <div className="flex-grow"> */}
//         <div className="flex justify-center items-center -ml-4">
//           <a className=" pl-4 pr-4  " href="http://dtu.ac.in/" title="DTU Home" rel="home">
//             <img
//               src={logo}
//               alt="Home"
//               className="img-responsive  "/>
//           </a>
//           {/* <a className="-ml-4 text-1.1rem font-bold text-lg  leading-7 no-underline text-stone-800	 hover:text-stone-700" href="/" title="Home" rel="home">
//             Environmental Engineering
//           </a> */}
//         </div>
//         {/* <div className=' pl-24'>
//           <p className="text-2xl font-bold no-underline text-slate-100 hover:text-slate-300">
//             <Link to="http://dtu.ac.in/" className='no-underline text- hover:text-slate-50'>
//               Delhi Technological University
//             </Link>
//           </p>
//         </div> */}
//         {/* setup firebase for this or add newsletter pdfs to firebase */}
//         {/* <div className=' pl-32 mx-40 '>
//           <p >
//             <NavLink className='text-gray-300 hover:text-blue-400 duration-300 text-lg cursor-pointer leading-6' to={`/Newsletters`}>newsletter</NavLink>
//           </p>
//         </div> */}
//       {/* </div> */}
//     </div>
//   );
// }



// this contains the entire Navbar
const Navbarmenu = () => {
  const [isMenu, setisMenu] = useState(false);
  const [isResponsiveclose, setResponsiveclose] = useState(false);
  const toggleClass = () => {
    setisMenu(isMenu === false ? true : false);
    setResponsiveclose(isResponsiveclose === false ? true : false);
  };
  let boxClass = ["main-menu menu-right menuq1"];
  if(isMenu) {
    boxClass.push('menuq2');
  }else{
    boxClass.push('');
  }
  const [isMenuSubMenu, setMenuSubMenu] = useState(false);
  const toggleSubmenu = () => {
    setMenuSubMenu(isMenuSubMenu === false ? true : false);
  };
  let boxClassSubMenu = ["sub__menus"];
  if(isMenuSubMenu) {
    boxClassSubMenu.push('sub__menus__Active');
  }else {
    boxClassSubMenu.push('');
  }


  return (
    <div className="header__middle flex flex-col relative max-w-5xl mx-28">
      {/* <Head2/> */}
      {/* <div className="header__middle flex flex-col relative max-w-5xl mx-28"> */}
        {/* <div className="container"> */}
        {/* <div className="row"> */}

        {/* div containg orange line and icons */}
      <div className='flex justify-between bg-[#EA9320]'>
        {/* <div align="right"> */}
        <div>
          {/* <span className='mx-20 font-semibold font-sans text-white  text-lg'>Department of Environment Engineering</span> */}
          <NavLink exact activeClassName='is-active' onClick={toggleClass} to={`/`} className='mx-20 font-semibold font-sans text-white  text-lg'> Department of Environment Engineering</NavLink>
        </div>
        <div className='flex justify-end items-center space-x-1'>
        <a href='https://twitter.com/dtu_delhi' target='_blank'>
          <img src='http://dtu.ac.in/Web/images/logo_Twitter.jpg'/>
        </a>
        <a href='https://www.linkedin.com/company/paryavarnam-the-environmental-newsletter/about/' target='_blank'>
          <img src='http://dtu.ac.in/Web/images/logo_Linkedin.jpg'/>
        </a>
        <a href='https://www.instagram.com/paryavarnam_dtu/' target='_blank'>
          <img src='http://dtu.ac.in/Web/images/logo_Instagram.jpg' />
        </a>
        <a href='https://www.facebook.com/DTU_Official-106520998184971' target='_blank'>
          <img src='http://dtu.ac.in/Web/images/logo_Facebook.jpg'/>
        </a> 
        </div>                          
      </div>
        
      {/* div containing logo*/}
      <div className='flex'>
        
        {/* div containing logo*/}
        <div className="flex justify-center items-center -ml-4">
          <a className=" pl-4 pr-4  " href="http://dtu.ac.in/" title="DTU Home" rel="home">
            <img
              src={logo}
              alt="Home"/>
          </a>
          {/* <a className="-ml-4 text-1.1rem font-bold text-lg  leading-7 no-underline text-stone-800	 hover:text-stone-700" href="/" title="Home" rel="home">
            Environmental Engineering
          </a> */}
        </div >

        {/* div containing navbar links */}
        <div className="header__middle__menus">         
          <nav className="main-nav " >
            {/* Responsive Menu Button */}
            {isResponsiveclose === true ? <> 
              <span className="menubar__button" style={{ display: 'none' }} onClick={toggleClass} > <FiXCircle />   </span>
              </> : <> 
              <span className="menubar__button" style={{ display: 'none' }} onClick={toggleClass} > <FiAlignRight />   </span>
            </>}

            <ul className={boxClass.join(' ')}>
              <li  className="menu-item" >
                <NavLink exact activeClassName='is-active' onClick={toggleClass} to={`/`}> Home </NavLink> 
              </li>
                {/* <li className="menu-item " ><NavLink onClick={toggleClass} activeClassName='is-active' to={`/About`}> About </NavLink> </li> */}
              <li onClick={toggleSubmenu} className="menu-item sub__menus__arrows" > <Link to="#"> About <FiChevronDown /> </Link>
                <ul className={boxClassSubMenu.join(' ')} > 
                  <li> <NavLink onClick={toggleClass} activeClassName='is-active'  to={`/about`}> Message from HOD </NavLink> </li>
                  <li><NavLink onClick={toggleClass} activeClassName='is-active' to={`/mission`}> Mission and Vision </NavLink> </li>
                </ul>
              </li>
                {/* <li><NavLink onClick={toggleClass} activeClassName='is-active' to={`/Offline`}> Offline Shop </NavLink> </li> */}
                {/* <li onClick={toggleSubmenu} className="menu-item sub__menus__arrows" > <Link to="#"> Academics <FiChevronDown /> </Link>
                  <ul className={boxClassSubMenu.join(' ')} > 
                    <li> <NavLink onClick={toggleClass} activeClassName='is-active'  to="#"> xyz </NavLink> </li>
                    <li><NavLink onClick={toggleClass} activeClassName='is-active' to="#"> abc </NavLink> </li>
                  </ul>
                </li> */}

              <li onClick={toggleSubmenu} className="menu-item sub__menus__arrows" > <Link to="#"> People <FiChevronDown /> </Link>
                <ul className={boxClassSubMenu.join(' ')} > 
                  <li> <NavLink onClick={toggleClass} activeClassName='is-active'  to={`/faculty`}>Faculty </NavLink> </li>
                  <li><NavLink onClick={toggleClass} activeClassName='is-active' to={`/Staff`}> Guest Faculty </NavLink> </li>
                  {/* <li><NavLink onClick={toggleClass} activeClassName='is-active' to="#"> Students </NavLink> </li> */}
                  {/* <li><NavLink onClick={toggleClass} activeClassName='is-active' to={`/Offline`}> Offline Shop </NavLink> </li> */}
                </ul>
              </li>
              <li onClick={toggleSubmenu} className="menu-item sub__menus__arrows" > <Link to="#"> Research <FiChevronDown /> </Link>
                <ul className={boxClassSubMenu.join(' ')} > 
                  <li> <NavLink onClick={toggleClass} activeClassName='is-active'  to={`/lab`}> Academic Lab </NavLink> </li>
                  <li><NavLink onClick={toggleClass} activeClassName='is-active' to="#"> Research Lab </NavLink> </li>
                </ul>
              </li>
              <li onClick={toggleSubmenu} className="menu-item sub__menus__arrows" > <Link to="#"> Publications<FiChevronDown /> </Link>
                <ul className={boxClassSubMenu.join(' ')} > 
                  <li> <NavLink onClick={toggleClass} activeClassName='is-active'  to={`/researchareas`}> Research Areas</NavLink> </li>
                  <li><NavLink onClick={toggleClass} activeClassName='is-active' to={`/publication`}> Conference Papers </NavLink> </li>
                  <li><NavLink onClick={toggleClass} activeClassName='is-active' to={`/researchandreview`}> Research Papers </NavLink> </li>
                </ul>
              </li>
              <li className="menu-item " ><NavLink onClick={toggleClass} activeClassName='is-active' to={`/error404`}> Newsletter</NavLink> </li>
              <li className="menu-item " ><NavLink onClick={toggleClass} activeClassName='is-active' to={`/Contact`}> Contact </NavLink> </li>
              {/* <li className="menu-item " ><NavLink onClick={toggleClass} activeClassName='is-active' to={`/login`}> Login </NavLink> </li> */}
            </ul>
          </nav>     
        </div> 
      </div>  
          {/* </div> */}
	      {/* </div> */}
      {/* </div> */}
    </div>  
  )
}
export default Navbarmenu