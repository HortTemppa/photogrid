import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";

import axios from "axios";
import Loading from "./Loading";

const SingleImage = () => {
  const { id } = useParams();
  const history = useHistory();

  const [photo, setPhoto] = useState();
  const [error, setError] = useState();

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/photos?id=${id}`)
      .then((response) => {
        setPhoto(response.data[0]);
      })
      .catch((error) => {
        console.error(error);
        setError(true);
        setTimeout(() => {
          history.push("/");
        }, 3000);
      });
  }, [id, history]);

  const handleXClick = () => {
    setError(false);
    history.push("/");
  };

  return photo ? (
    <>
      <button className="BackButton" onClick={handleXClick}>
        X
      </button>
      <div className="SinglePhotoContainer">
        <h2>{photo.title}</h2>
        <img
          className="GridItem"
          onClick={handleXClick}
          alt=""
          src={photo.url}
        ></img>
      </div>
    </>
  ) : error ? (
    <>
      <div className="ErrorBox">
        <p>Hmm... Something went wrong...</p>
      </div>
    </>
  ) : (
    <Loading />
  );
};

export default SingleImage;
