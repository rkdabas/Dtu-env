import React from 'react'
import { useState } from 'react';
import Weather from './Weather';

import { Row , Col , Container } from 'react-bootstrap'
// import { Form } from 'react-bootstrap'
export default function Contact() {
  const [contacts, setContacts] = useState([
    { name: 'John Doe', phone: '123-456-7890', email: 'john.doe@example.com' },
    { name: 'Jane Smith', phone: '987-654-3210', email: 'jane.smith@example.com' },
    { name: 'Bob Johnson', phone: '555-123-4567', email: 'bob.johnson@example.com' }
  ]);
  return (
    <div className='Contact grid grid-cols-1 md:grid-cols-2 items-center max-w-5xl and mx-28'>
      <div className='min-w-2xl'>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3497.9974430675993!2d77.11836119999998!3d28.74949330000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d0138a74f7da7%3A0xf09fad683c23bd5d!2sDelhi%20Technological%20University!5e0!3m2!1sen!2sin!4v1686134266540!5m2!1sen!2sin" width="100%" height="450px" style={{borderRadius:"10px",padding:'5%'}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
      <div>
      <Weather/>
      </div>
      {/* <div>
        <h1>weather</h1>
        / <div>
             <div>
            <Weather
             />
             </div>
         </div> 
      </div> */}
      {/* <Container>
        <Row>
          <div className="mapGoogle">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3497.9974430675993!2d77.11836119999998!3d28.74949330000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d0138a74f7da7%3A0xf09fad683c23bd5d!2sDelhi%20Technological%20University!5e0!3m2!1sen!2sin!4v1686134266540!5m2!1sen!2sin" width="100%" height="450px" style={{borderRadius:"10px",padding:'5%'}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
          
          <Col>
          <div> */}
              
      {/* <h1>Contact List</h1>
      <div className="contact-list">
        {contacts.map((contact, index) => (
          <div key={index} className="contact">
            <div>Name: {contact.name}</div>
            <div>Phone: {contact.phone}</div>
            <div>Email: {contact.email}</div>
          </div>
        ))}
      </div> */}
    </div>
    //       </Col>
    //     </Row>
    //   </Container>
    // </div>
  )
}



// <div>
//             <div>
//             <Weather
//             />
//             </div>
//         </div>
