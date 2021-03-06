import React, { useState, useEffect } from "react";
import Loader from "react-loader-spinner";

const Loading = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(true);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return loading ? (
    <div className="SinglePhotoContainer">
      <Loader type="Oval" color="black" height={80} width={80} />
    </div>
  ) : null;
};
export default Loading;
