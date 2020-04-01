import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import axios from "axios";
import Loading from "./Loading";

const SingleImage = () => {
  const { id } = useParams();

  const [photo, setPhoto] = useState();

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/photos?id=${id}`)
      .then(response => {
        setPhoto(response.data[0]);
      });
  }, [id]);

  console.log(id);

  return photo ? (
    <div className="SinglePhotoContainer">
      <h2>{photo.title}</h2>
      <img className="GridItem" alt="" src={photo.url}></img>
    </div>
  ) : (
    <Loading />
  );
};

export default SingleImage;
