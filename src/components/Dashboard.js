import React from "react";
import { Navigate } from "react-router-dom";
import Getcxl from "./dashboard/Getcxl";
import UploadFile from "./dashboard/UploadFile";

function Dashboard({ user }) {
  if (!user) {
    return <Navigate to="/" replace={true} />;
  }
  return (
    <>
      <h1>Dashboard{user && ` - ${user}`}</h1>
      <Getcxl />
      <UploadFile />
    </>
  );
}

export default Dashboard;
