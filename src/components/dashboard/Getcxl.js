import React from "react";
const fileLink = "http://login-logout-front.onrender.com/students_list.xlsx";
function Getcxl() {
  const downloadXlsxFile = (url) => {
    const fileName = url.split("/").pop();
    const aTag = document.createElement("a");
    aTag.href = url;
    aTag.setAttribute("download", fileName);
    document.body.appendChild(aTag);
    aTag.click();
    aTag.remove();
  };
  return (
    <>
      <button
        onClick={() => {
          downloadXlsxFile(fileLink);
        }}
      >
        download file
      </button>
    </>
  );
}

export default Getcxl;
