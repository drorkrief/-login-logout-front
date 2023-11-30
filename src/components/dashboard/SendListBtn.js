import React from "react";
import axios from "axios";

function SendListBtn({ studentsDataList }) {
  const sendStudentsList = () => {
    console.log("clicked", studentsDataList.length);
    axios
      .post("https://login-logout-api.onrender.com/addstudents", {
        studentsDataList,
      })
      .then(
        (response) => {
          console.log(response.status);
          console.log(response.data);
        },
        (error) => {
          console.error(error);
        }
      );
  };
  return (
    <td colSpan="3" onClick={sendStudentsList}>
      SendListBtn{studentsDataList.length}
    </td>
  );
}

export default SendListBtn;
