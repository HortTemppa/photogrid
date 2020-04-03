import React from "react";
import Loader from "react-loader-spinner";

const Loading = () => {
  return (
    <div className="SinglePhotoContainer">
      <Loader type="Oval" color="black" height={80} width={80} />
    </div>
  );
};
export default Loading;
