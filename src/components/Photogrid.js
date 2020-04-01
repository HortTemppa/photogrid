import React, { useEffect, useState } from "react";
import axios from "axios";
import Loading from "./Loading";
import { useHistory } from "react-router-dom";

const Photogrid = () => {
  const history = useHistory();

  const [photos, setPhotos] = useState(null);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/albums/1/photos")
      .then(response => {
        setPhotos(response.data);
      });
  }, []);

  const handleImageClick = id => () => {
    history.push(`/${id}`);
  };

  return photos ? (
    <div className="PhotoGrid">
      {photos.map(photo => {
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
  ) : (
    <Loading />
  );
};

export default Photogrid;
