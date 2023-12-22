import React from 'react';
import Button from 'react-bootstrap/Button';
import { Form } from 'react-bootstrap';
import { Navigate } from 'react-router-dom';
import { useState} from 'react';
import { useParams } from 'react-router-dom';
import { collection, addDoc } from "firebase/firestore";
import {db} from '../firebase';
import { useRef } from 'react';

export default function AddPublications() {
  const form =useRef();
  const [login]=useState(localStorage.getItem('loggedKey')==='true');
  const {values}=useParams();
  const formInitialDetails = {
    year: '',
    title:''
  };

  const [formDetails , setFormDetails] = useState(formInitialDetails);
  const [buttonText , SetButtonText] = useState('Send');
  const onFormUpdate =(category , value) =>{
    setFormDetails({
        ...formDetails,
        [category]:value
    })
  };
  const addData=async(e)=>{
    e.preventDefault();
    SetButtonText('Sending...');
    try {
      if (values==='book'){
      await addDoc(collection(db, 'book'), {
        ...formDetails 
      });
      SetButtonText("Send");
      // console.log("Document written with ID: ", docRef.id);
      alert('book data added!');
    }else if(values==='bookchapter'){
      await addDoc(collection(db, 'bookchapter'), {
        ...formDetails  
      });
      SetButtonText("Send");
      alert('book chapter data added!');
      // console.log("Document written with ID: ", docRef.id);
    }else if(values==='conferencepaper'){
      await addDoc(collection(db, 'conferencepaper'), {
        ...formDetails
      });
      SetButtonText("Send");
      alert('conference paper data added!');
      // console.log("Document written with ID: ", docRef.id);
    }else if (values==='researchandreview'){
      await addDoc(collection(db,'researchandreview'),{
        ...formDetails
      });
      SetButtonText("Send");
      alert('Research / Review paper data added!');
    }

    if (buttonText==="Send"){ console.log("Message Sent Successfully!.");}
        else {alert("Server is facing some problem!")}
        
        setFormDetails(formInitialDetails);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };
  return (
    <div>
    {login?(
      <div className='addpublicationdiv'>
        <h2>Add New {values}</h2>
    <Form ref={form}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Year</Form.Label>
        <Form.Control type="number" placeholder="Enter Year" value={formDetails.year} name='publication_year' onChange={(e)=>onFormUpdate('year',e.target.value)} required/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Title</Form.Label>
        <Form.Control type="text" placeholder="Enter Title" value={formDetails.title} name='publication_title' onChange={(e)=>onFormUpdate('title',e.target.value)} required/>
      </Form.Group>
      <Button variant="primary" type="submit" onClick={addData}>
      <span>{buttonText}</span>
      </Button>
    </Form>
    </div>
    ):(
      <Navigate replace to="/login" />
    )}
    </div>
  );
}

