import React from "react";
import * as XLSX from "xlsx/xlsx.mjs";
const xlsxData = [{ שם_פרטי: "דוד", שם_משפחה: "כהן", כיתה: "א" }];
function Getcxl() {
  const createXlsx = () => {
    let wb = XLSX.utils.book_new(),
      ws = XLSX.utils.json_to_sheet(xlsxData);
    XLSX.utils.book_append_sheet(wb, ws, "רשימת תלמידים");
    XLSX.writeFile(wb, "dtudentsList.xlsx");
  };
  return (
    <>
      <button onClick={createXlsx}>הורד קובץ תלמידים למילוי</button>
    </>
  );
}

export default Getcxl;
