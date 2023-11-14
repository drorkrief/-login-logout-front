import React, { useRef, useState } from "react";
import axios from "axios";
import { Navigate } from "react-router-dom";

function LogIn({ setUser }) {
  const [connected, setConnected] = useState(false);
  // const nameRef = useRef("");
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("https://login-logout-api.onrender.com/login", {
        // name: nameRef.current?.value,
        email: emailRef.current?.value,
        password: passwordRef.current?.value,
      })
      .then(
        (response) => {
          console.log(response.status);
          console.log(response.data.token);
          // set local store to store the token
          localStorage.setItem("myCat", response.data.token);
          setUser("admin");
          response.status && setConnected(true);
        },
        (error) => {
          console.error(error);
        }
      );

    console.log("submited");
  };
  return (
    <div>
      <header className="App-header">
        <h1>LogIn page:</h1>
        <form onSubmit={handleSubmit}>
          <fieldset>
            {/* <label>
              <span>name: </span>
              <input ref={nameRef} name="name" type={"text"} required />
            </label>
            <br /> */}
            <label>
              <span>E-mail: </span>
              <input
                ref={emailRef}
                id="email"
                name="email"
                type={"email"}
                required
              />
            </label>
            <br />
            <label>
              <span>password: </span>
              <input
                ref={passwordRef}
                name="password"
                type={"password"}
                minLength="6"
                required
              />
            </label>
          </fieldset>
          <button type={"submit"}>Submit</button>
        </form>

        {/* <button onClick={getData}>get data from node</button>
<p>{!data ? " " : data}</p> */}
        {connected ? <Navigate to="/dashboard" replace={true} /> : <>false</>}
      </header>
    </div>
  );
}

export default LogIn;
