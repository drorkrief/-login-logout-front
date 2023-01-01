import axios from "axios";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useQuery } from "react-query";

function MailVerification(props) {
  // const [isValid, setIsValid] = useState(false);
  const navigate = useNavigate();
  // useEffect(() => {
  //   props?.code &&
  //     axios
  //       .post("/emailverificationcode", { code: props.code })
  //       .then(function (response) {
  //         console.log(response);
  //         if (response.status === 200) {
  //           // console.log("cccccccccccccccccccccc",response.data);
  //           localStorage.setItem("user", JSON.stringify( response.data) )
  //           localStorage.setItem("auth", JSON.stringify( {auth:props.code}) )
  //           navigate("/");
  //         }
  //       })
  //       .catch(function (error) {
  //         console.log(error);
  //       });
  // }, []);

  const sendCode = () => {
    axios
      .post("/emailverificationcode", { code: props.code })
      .then(function (response) {
        // console.log(response);
        if (response.status === 200) {
          localStorage.setItem("user", JSON.stringify(response.data));
          localStorage.setItem("auth", JSON.stringify({ auth: props.code }));
          navigate("/");
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  const { isLoading, data } = useQuery("isValid", sendCode);
  if (isLoading) return <p>loading...</p>;
  return (
    <>
      <div>MailVerification, {props.code}</div>
      <button onClick={sendCode}>click to send the code</button>
    </>
  );
}

export default MailVerification;
