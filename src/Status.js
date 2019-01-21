import React from "react";
import T from "prop-types";

const Status = ({ status }) => {
  return <p>STATUS: {status}</p>; //замена (props) > <p>{props.text}</p>
};

Status.propTypes = {
  status: T.string.isRequired
};

export { Status };
