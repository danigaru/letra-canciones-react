import React from "react";

const Error = ({message}) => {
  return (
    <div className="bg-danger p-3 mb-3 text-uppercase text-center text-white lighten-2">
      {message}
    </div>
  );
};

export default Error;
