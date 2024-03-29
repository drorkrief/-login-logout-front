import React, { useState } from "react";
import "./App.css";
import Register from "./components/Register";
import { Routes, Route, Link, useSearchParams } from "react-router-dom";
import LogIn from "./components/Login";
import Home from "./components/Home";
import ErrorPath from "./components/ErrorPath";
import About from "./components/About";
import MailVerification from "./components/MailVerification";
import { QueryClientProvider, QueryClient } from "react-query";
import Dashboard from "./components/Dashboard";

const queryClient = new QueryClient();
function App() {
  const [searchParams, setSearchParams] = useSearchParams();
  // const [login, setLogin] = useState();
  let urlparams = searchParams.entries();
  // console.log("searchParams.get(code)", urlparams);
  const [user, setUser] = useState(null);
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        {" "}
        <nav className="nav">
          <ul className="topnav">
            <li>
              <Link to="/">בית</Link>
            </li>
            <li>
              <Link to="/about">אודותינו</Link>
            </li>
            <li>
              <Link to="/logIn">חיבור</Link>
            </li>
            <li>
              <Link to="/register">הרשמה</Link>
            </li>
          </ul>
        </nav>
        {/* <div>
        <button onClick={() => setLogin("Login")}>Login</button>
        <button onClick={() => setLogin("signup")}>signup</button>
        <button onClick={() => setLogin("")}>logout</button>
      </div> */}
        {/* {!login ? null : login === "Login" ? <Login /> : <SignUp />} */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="logIn" element={<LogIn setUser={setUser} />} />
          <Route path="register" element={<Register />} />
          <Route path="about" element={<About />} />
          <Route path="dashboard" element={<Dashboard user={user} />} />
          <Route
            path="verification"
            element={
              <MailVerification
                test="123123123"
                code={searchParams.get("code")}
              />
            }
          />
          <Route path="*" element={<ErrorPath />} />
        </Routes>
      </div>
    </QueryClientProvider>
  );
}

export default App;
