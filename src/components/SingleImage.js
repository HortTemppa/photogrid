import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";

import axios from "axios";
import Loading from "./Loading";

const SingleImage = () => {
  const { id } = useParams();
  const history = useHistory();

  const [photo, setPhoto] = useState();

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/photos?id=${id}`)
      .then((response) => {
        setPhoto(response.data[0]);
      });
  }, [id]);

  const handleXClick = () => {
    history.push("/");
  };

  console.log(id);

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
  ) : (
    <Loading />
  );
};

export default SingleImage;
