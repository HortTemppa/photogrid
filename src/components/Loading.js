import React, { useState } from "react";
import Loader from "react-loader-spinner";

const Loading = () => {
  const [loading, setLoading] = useState(false);

  setTimeout(() => {
    setLoading(true);
  }, 300);

  return loading ? (
    <div className="SinglePhotoContainer">
      <Loader type="Oval" color="black" height={80} width={80} />
    </div>
  ) : null;
};
export default Loading;
