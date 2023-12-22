import './App.css';
// import React, { useEffect, useState } from 'react';
import NavigationBar from './components/Navbar';
import About from './components/About';
import Home from './components/Home';
import Footer from './components/Footer';
import Lab from './components/Lab';
import HOD from './components/HOD';
import Faculty from './components/Faculty';
import Staff from './components/Staff';
import Error404 from './components/Error404';
import Contact from './components/Contact';
import Login from './components/Login';
import mission from './components/mission';
// import BookChapter from './components/BookChapter';
import Researchandreview from './components/researchandreview';
import Publications from './components/Publications';
import AddPublications from './components/AddPublications';
import Researchareas from './components/researchareas';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router , Route , Routes } from 'react-router-dom';
// import { onAuthStateChanged } from 'firebase/auth';
// import auth from './firebase';
// import { Navigate } from 'react-router-dom';




function App() {
  return (
    <div className='body'>
      <Router>
      <NavigationBar/>
      <Routes>
      <Route path='/' Component={Home}></Route>
      <Route path='/about' Component={About}></Route>
      <Route path='/mission' Component={mission}></Route>
      {/* <Route path='/hod' Component={HOD}></Route> */}
      <Route path='/lab' Component={Lab}></Route>
      <Route path='/faculty' Component={Faculty}></Route>
      <Route path='/Staff' Component={Staff}></Route>
      <Route path='/publication' Component={Publications}></Route>
      <Route path='/addpublications/:values' Component={AddPublications}></Route>
      <Route path='/researchandreview' Component={Researchandreview}></Route>
      <Route path='/researchareas' Component={Researchareas}></Route>
      {/* <Route path='/book' Component={Book}></Route> */}
      {/* <Route path='/dashboard' Component={ContentDisplay}></Route> */}
      <Route path='/contact' Component={Contact}></Route>
      <Route path='/login' Component={Login}></Route>
      {/* <Route path='/login2' Component={Login2}></Route> */}
      <Route path='*' Component={Error404}></Route>
      </Routes>

      <Footer />
      </Router>
      {/* <Banner /> */}
      {/* <Lab/> */}
      {/* <About /> */}
      
    </div>
  );
}

export default App;
