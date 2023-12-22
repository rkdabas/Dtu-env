import React, { useState, useEffect } from "react";
import { db } from "../firebase";
import { getDocs, collection } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";
import auth from "../firebase";
import { Link } from "react-router-dom";
import Spinner from "react-bootstrap/Spinner";

const Researchandreview = () => {
  const [publications, setPublications] = useState([]);
  const [login, setLogin] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const fetchResearchandreview = async () => {
    await getDocs(collection(db, "researchandreview")).then((querySnapshot) => {
      const newData = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setPublications(newData);
      setIsLoading(false);
    });
  };

  useEffect(() => {
    fetchResearchandreview();
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
    <div className="publicationclass">
      {login ? (
        <div className="addlinks">
          <Link
            to={`/addpublications/${"researchandreview"}`}
            className="addnew"
          >
            Add New Research & Review Paper Data
          </Link>
        </div>
      ) : (
        <div></div>
      )}

      <h4>Research & Review Papers</h4>
      <div className="d-flex justify-content-center">
        {isLoading ? (
          <Spinner animation="border text-warning" role="status">
            <span className="sr-only">..</span>
          </Spinner>
        ) : (
          <div>
            {publications?.map((publication, i) => (
              <div className="pubdata" key={i}>
                <p>{publication.year}</p>
                <p>{publication.title}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Researchandreview;
