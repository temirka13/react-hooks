import React, { useState } from "react";
import "./App.css";
import { UploadForm } from "./UploadForm";
import { List } from "./List";
import { Status } from "./Status";

const App = () => {
  // state ={
  //   paths: [],
  //   status: ""
  // }

  const [paths, setPaths] = useState([]);

  const [status, setStatus] = useState("");

  const onUpdate = path => {
    if (path) {
      setStatus("OK");
      setPaths(paths.concat(path));
    } else {
      setStatus("FAIL");
    }
  };

  return (
    <div className="container">
      <UploadForm onUpdate={onUpdate} />
      <List data={paths} />
      <Status status={status} />
    </div>
  );
};

export { App };
