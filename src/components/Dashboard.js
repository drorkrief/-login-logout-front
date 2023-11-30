import React from "react";
import { Navigate } from "react-router-dom";
import Getcxl from "./dashboard/Getcxl";
import UploadFile from "./dashboard/UploadFile";
import "./Dashboard.css";
function Dashboard({ user }) {
  // if (!user) {
  //   return <Navigate to="/" replace={true} />;
  // }
  return (
    <>
      <div className="dashboardMain">
        <div className="dashboardMenu">hello world</div>
        {/* </div>
      <div className="dashboardMain"> */}
        <h1>Dashboard{user && ` - ${user}`}</h1>
        <div>
          <Getcxl />
          <UploadFile />
        </div>
      </div>
    </>
  );
}

export default Dashboard;
