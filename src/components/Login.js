// import { Row, Col, Container } from "react-bootstrap";
// import Button from "react-bootstrap/Button";
// import Form from "react-bootstrap/Form";
import React from "react";
import { useState} from "react";
import { Navigate } from "react-router-dom";
import auth from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import loginImg from '../components/images/loginEnvi.webp';
import { FcGoogle } from 'react-icons/fc'
// import {AiFillFacebook} from 'react-icons/ai'


export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(localStorage.getItem('loggedKey')==='true');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  const handleLogin = (event) => {
    event.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userDetails) => {
        setLoggedIn(true);
      })
      .catch((error) => {
        alert(error);
      });
  };
  return (
    <div className="login">
      {loggedIn ? (
        <Navigate replace to="/" />
      ) : (
        <div className='relative w-full h-screen bg-zinc-900/90'>
            <img className='absolute w-full h-full object-cover mix-blend-overlay' src={loginImg} alt="/" />
            
            <div className='flex justify-center items-center max-h-80 pt-60'>
              <form className='max-w-[400px] w-full mx-auto bg-white p-8'>
                <h2 className='text-4xl font-bold text-center py-0'>Enter Your Details</h2>
                <div className='flex  py-2 items-center justify-center'>
                  {/* <p className='border shadow-lg hover:shadow-xl px-6 py-2 relative flex items-center'><AiFillFacebook className='mr-2' /> Facebook</p> */}
                  <p className='border shadow-lg hover:shadow-xl px-6 py-2 relative flex items-center'><FcGoogle className='mr-2' /> Google</p>
                </div>
                <div className='flex flex-col mb-4'>
                  <label>Admin Login</label>
                                              {/* <input className='border relative bg-gray-100 p-2' type="text" /> */}
                  <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={handleEmailChange}
                    className='border relative bg-gray-100 p-2'
                  />
                </div>
                <div className='flex flex-col '>
                  <label>Password</label>
                                              {/* <input className='border relative bg-gray-100 p-2' type="password" /> */}
                  <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={handlePasswordChange}
                    className='border relative bg-gray-100 p-2'
                  />
                </div>
                <button
                  className='w-full py-3 mt-8 bg-indigo-600 hover:bg-indigo-500 relative text-white'
                  type="submit"
                  onClick={handleLogin}>
                  Sign In
                </button>
                                    {/* <button className='w-full py-3 mt-8 bg-indigo-600 hover:bg-indigo-500 relative text-white'>Sign In</button> */}
                <p className='flex items-center mt-2'><input className='mr-2' type="checkbox"  />Remember Me</p>
                <p className='text-center mt-8 mb-1'>Not a member? Sign up now</p>
              </form>
            </div>
          </div>
        )
      }
    </div>
  );
}
    // <div className="login">
    //   {loggedIn ? (
    //     <Navigate replace to="/" />
    //   ) : (
    //     <Container>
    //       <Row className="align-items-center">
    //         <Col md={6}>
    //           <Form className="form1">
    //             <Form.Group className="mb-3" controlId="formBasicEmail">
    //               <Form.Label>Email address</Form.Label>
    //               <Form.Control
    //                 type="email"
    //                 placeholder="Enter email"
    //                 value={email}
    //                 onChange={handleEmailChange}
    //               />
    //               <Form.Text className="text-muted">Admin Login</Form.Text>
    //             </Form.Group>

    //             <Form.Group className="mb-3" controlId="formBasicPassword">
    //               <Form.Label>Password</Form.Label>
    //               <Form.Control
    //                 type="password"
    //                 placeholder="Password"
    //                 value={password}
    //                 onChange={handlePasswordChange}
    //               />
    //             </Form.Group>
    //             <Button variant="primary" type="submit" onClick={handleLogin}>
    //               Submit
    //             </Button>
    //           </Form>
    //         </Col>
    //         <Col md={6}>
    //           <img src={Contact1} alt="Contact-US" />
    //         </Col>
    //       </Row>
    //     </Container>
    //   )}
  // </div>
    
    
                                                                                  // tailwind of above bootstarp code
    
//     <div className="login">
//   {loggedIn ? (
//     <Navigate replace to="/" />
//   ) : (
//     <div className="container mx-auto">
//       <div className="flex items-center">
//         <div className="md:w-1/2">
//           <form className="form1">
//             <div className="mb-3">
//               <label className="block">Email address</label>
//               <input
//                 type="email"
//                 placeholder="Enter email"
//                 value={email}
//                 onChange={handleEmailChange}
//                 className="form-input"
//               />
//               <p className="text-xs text-gray-500">Admin Login</p>
//             </div>

//             <div className="mb-3">
//               <label className="block">Password</label>
//               <input
//                 type="password"
//                 placeholder="Password"
//                 value={password}
//                 onChange={handlePasswordChange}
//                 className="form-input"
//               />
//             </div>

//             <button
//               className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600"
//               type="submit"
//               onClick={handleLogin}
//             >
//               Submit
//             </button>
//           </form>
//         </div>
//         <div className="md:w-1/2">
//           <img src={Contact1} alt="Contact-US" />
//         </div>
//       </div>
//     </div>
//   )}
// </div>

//   );
// }








// export default function Login() {
//   return (
//     <div className="login">
//   {loggedIn ? (
//     <Navigate replace to="/" />
//   ) : (
//     <div className='relative w-full h-screen bg-zinc-900/90'>
//         <img className='absolute w-full h-full object-cover mix-blend-overlay' src={loginImg} alt="/" />
    

//     <div className='flex justify-center items-center h-full'>
//         <form className='max-w-[400px] w-full mx-auto bg-white p-8'>
//             <h2 className='text-4xl font-bold text-center py-4'>BRAND.</h2>
//             <div className='flex justify-between py-8'>
//                 <p className='border shadow-lg hover:shadow-xl px-6 py-2 relative flex items-center'><AiFillFacebook className='mr-2' /> Facebook</p>
//                 <p className='border shadow-lg hover:shadow-xl px-6 py-2 relative flex items-center'><FcGoogle className='mr-2' /> Google</p>
//             </div>
//             <div className='flex flex-col mb-4'>
//                 <label>Admin Login</label>
//             {/* <input className='border relative bg-gray-100 p-2' type="text" /> */}
//                 <input
//                   type="email"
//                   // placeholder="Enter email"
//                   value={email}
//                   onChange={handleEmailChange}
//                   className='border relative bg-gray-100 p-2'
//                 />
//             </div>
//             <div className='flex flex-col '>
//                 <label>Password</label>
//             {/* <input className='border relative bg-gray-100 p-2' type="password" /> */}
//                 <input
//                   type="password"
//                   // placeholder="Password"
//                   value={password}
//                   onChange={handlePasswordChange}
//                   className='border relative bg-gray-100 p-2'
//                 />
//           </div>
//           <button className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600"
//                   type="submit"
//                   onClick={handleLogin}>
//             Submit
//           </button>
//             {/* <button className='w-full py-3 mt-8 bg-indigo-600 hover:bg-indigo-500 relative text-white'>Sign In</button> */}
//             <p className='flex items-center mt-2'><input className='mr-2' type="checkbox"  />Remember Me</p>
//             <p className='text-center mt-8'>Not a member? Sign up now</p>
//         </form>
//     </div>
//           </div>
//           )}
// </div>
//   );
// }