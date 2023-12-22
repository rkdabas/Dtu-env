import React, { useState, useEffect } from "react";
import { db } from "../firebase";
import { getDocs, collection } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";
import auth from "../firebase";
import { Link } from "react-router-dom";
import Spinner from 'react-bootstrap/Spinner';

const Publications = () => {
  const [book, setBook] = useState([]);
  const [bookchapter, setbookchapter] = useState([]);
  // const [researchandreview, setresearchandreview] = useState([]);
  const [conferences, setconferences] = useState([]);
  const [login, setLogin] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const fetchBook = async () => {
    await getDocs(collection(db, "book")).then((querySnapshot) => {
      const newData = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setBook(newData);
    });
  };
  const fetchBookChapter = async () => {
    await getDocs(collection(db, "bookchapter")).then((querySnapshot) => {
      const newData = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setbookchapter(newData);
    });
  };

  const fetchConference = async () => {
    await getDocs(collection(db, "conferencepaper")).then((querySnapshot) => {
      const newData = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setconferences(newData);
      setIsLoading(false);
    });
  };

  useEffect(() => {
    fetchBook();
    fetchBookChapter();
    fetchConference();
    
  }, []);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setLogin(true);
      } else {
        setLogin(false);
      }
    });
  }, []);

  return (
    <div>
      <div className="d-flex justify-content-center">
      {isLoading ? (
        <Spinner animation="border text-warning" role="status">
          <span className="sr-only">..</span>
        </Spinner>
      ) : (
        <div>
      {login ? (
        <div>
          <div className="publicationclass">
            
            <div className="addlinks">
              
              <Link to={`/addpublications/${'book'}`} className='addnew'>Add New Book Data</Link>
              <Link to={`/addpublications/${'bookchapter'}`}className='addnew'>Add New Book Chapter Data</Link>
              <Link to={`/addpublications/${'conferencepaper'}`}className='addnew'> Add New Conference Data</Link>

            </div>

            <div className="bookdiv">
              <h4>Books</h4>
              {/* <a href='/addpublications'>Add New Book Data</a> */}
              <div className="books">
                {book?.map((publication, i) => (
                  <div className="pubdata" key={i}>
                    <p>{publication.year}</p>
                    <p>{publication.title}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bookchapterdiv">
              <h4>Book Chapter</h4>
              {/* <a href='/addpublications'>Add New Book Data</a> */}
              <div className="books">
                {bookchapter?.map((publication, i) => (
                  <div className="pubdata" key={i}>
                    <p>{publication.year}</p>
                    <p>{publication.title}</p>
                  </div>
                ))}
              </div>
            </div>


            <div className="conferencediv">
              <h4>Conference paper</h4>
              {/* <a href='/addpublications'>Add New Book Data</a> */}
              <div className="books">
                {conferences?.map((publication, i) => (
                  <div className="pubdata" key={i}>
                    <p>{publication.year}</p>
                    <p>{publication.title}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <div className="publicationclass">
            <div className="bookdiv">
              <h4>Books</h4>
              <div className="books">
                {book?.map((publication, i) => (
                  <div className="pubdata" key={i}>
                    <p>{publication.year}</p>
                    <p>{publication.title}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bookchapterdiv">
              <h4>Book Chapter</h4>
              <div className="books">
                {bookchapter?.map((publication, i) => (
                  <div className="pubdata" key={i}>
                    <p>{publication.year}</p>
                    <p>{publication.title}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="conferencediv">
              <h4>Conference paper</h4>
              <div className="books">
                {conferences?.map((publication, i) => (
                  <div className="pubdata" key={i}>
                    <p>{publication.year}</p>
                    <p>{publication.title}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
      
      </div>
      )}
    </div>      
    </div>
  );
};
export default Publications;
