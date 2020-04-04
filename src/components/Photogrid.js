import React, { useEffect, useState } from "react";
import axios from "axios";
import Loading from "./Loading";
import { useHistory } from "react-router-dom";

const Photogrid = () => {
  const history = useHistory();

  const [photos, setPhotos] = useState(null);
  const [error, setError] = useState();

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/albums/1/photos")
      .then((response) => {
        setPhotos(response.data);
      })
      .catch((error) => {
        console.error(error);
        setError(true);
      });
  }, []);

  const handleImageClick = (id) => () => {
    history.push(`/${id}`);
  };

  return photos ? (
    <div className="PhotoGrid">
      {photos.map((photo) => {
        return (
          <div className="PhotoContainer">
            <img
              className="GridItem"
              alt=" "
              key={photo.id}
              src={photo.thumbnailUrl}
              onClick={handleImageClick(photo.id)}
            ></img>
          </div>
        );
      })}
    </div>
  ) : error ? (
    <div className="ErrorBox">
      }>
      <p>Hmm... Something went wrong... try reloading the page.</p>
    </div>
  ) : (
    <Loading />
  );
};

export default Photogrid;
