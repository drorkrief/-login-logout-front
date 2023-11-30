import React, { useState } from "react";
import * as XLSX from "xlsx/xlsx.mjs";
import SendListBtn from "./SendListBtn";

function UploadFile() {
  const [studentsDataList, setStudentsDataList] = useState([]);

  const handleFileUpload = (e) => {
    const reader = new FileReader();
    reader.readAsBinaryString(e.target.files[0]);
    reader.onload = (e) => {
      setStudentsDataList(null);
      const data = e.target.result;
      const workbook = XLSX.read(data, { type: "binary" });
      const sheetName = workbook.SheetNames[0];
      const sheet = workbook.Sheets[sheetName];
      console.log(Object.keys(sheet).length);
      if (Object.keys(sheet).length < 5) {
        return false;
      }
      const parsedData = XLSX.utils.sheet_to_json(sheet);
      parsedData.sort((a, b) => a.כיתה.localeCompare(b.כיתה));
      // console.log(parsedData);
      const newArr = parsedData.map(
        ({ כיתה: grade, שם_משפחה: lastName, שם_פרטי: firstName, ...rest }) => ({
          grade,
          lastName,
          firstName,
          ...rest,
        })
      );
      setStudentsDataList(newArr);
      console.log(newArr);
    };
  };

  // console.log(studentsDataList[0][Object.keys(studentsDataList[0])]);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <h1>UploadFile</h1>
      <input
        type="file"
        accept=".xlsx"
        name="upFile"
        id="upFile"
        onChange={handleFileUpload}
      />
      <label id="upFileLable" htmlFor="upFile">
        לחץ כדי לבחור קובץ תלמידים
      </label>

      <div>
        <table width="900px" border="0" cellSpacing="0" cellPadding="0">
          <thead>
            <tr>
              <td>שם</td>
              <td>משפחה</td>
              <td>כיתה</td>
              {/* {Object.keys(studentsDataList[0]).map((data, key) => (
                <th key={key}>{data}</th>
              ))} */}
            </tr>
          </thead>
          <tbody>
            {studentsDataList.length > 1 &&
              studentsDataList.map((it, index) => (
                <tr key={index}>
                  {Object.values(it).map((itm, index) => (
                    <td key={index}>{itm}</td>
                  ))}
                  {/* <td>d{Object.values(it)}</td> */}
                </tr>
              ))}
            <tr>
              {/* <td colSpan="3" onClick={sendStudentsList}>
                שלח רשימת תלמידים
              </td> */}
              <SendListBtn studentsDataList={studentsDataList} />
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default UploadFile;
