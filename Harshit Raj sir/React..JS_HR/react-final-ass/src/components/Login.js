import React, { useEffect, useState, useRef } from "react";
import "../styles/Login.css";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Login() {
  const userRef = useRef();
  const errRef = useRef();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [show, setShow] = useState(false);
  // const [data, setData] = useState({});
  const navigate = useNavigate();
  /*
  useEffect(() => {
    userRef.current.focus();
  }, []);
  */
  useEffect(() => {
    setErrMsg("");
  }, [username, password]);

  const nameHandler = (e) => {
    // console.log(e.target.value);
    setUsername(e.target.value);
    setShow(false);
  };
  const passwordHandler = (e) => {
    // console.log(e.target.value);
    setPassword(e.target.value);
    setShow(false);
  };

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(
          "https://reactmusicplayer-ab9e4.firebaseio.com/project-data.json"
        );
        console.log(response.data);

        //! LocalStorage
        localStorage.setItem(
          "accountsPage",
          JSON.stringify(response.data.accountsPage)
        );
        localStorage.setItem(
          "dashboardPage",
          JSON.stringify(response.data.dasbhoardPage)
        );
        localStorage.setItem(
          "productsPage",
          JSON.stringify(response.data.productsPage)
        );
      } catch (err) {
        console.log(err);
        if (!err?.response) {
          setErrMsg("No Server Response");
        } else if (err.response?.status === 400) {
          setErrMsg("Enter valid missing username or password");
        } else if (err.response?.status === 401) {
          setErrMsg("Unauthorized");
        } else setErrMsg("Login Failed");
        // errRef.current.focus();
      }
    };
    getData();
  }, []);

  const loginHandler = async (e) => {
    e.preventDefault();
    let validateUsername = username;
    console.log(validateUsername);
    let validatePassword = password;
    let accountsPage = JSON.parse(localStorage.getItem("accountsPage"));
    Object.keys(accountsPage).map((key) => {
      //console.log(key);
      console.log(accountsPage[key].name);
      if (
        validateUsername == accountsPage[key].name &&
        validatePassword == accountsPage[key].password
      ) {
        // let value = [username, password];
        console.log("Validate");
        setShow(true);
        localStorage.setItem("loginStatus", true);
        localStorage.setItem("userInfo", username);
        navigate("/dashboard");
      } else {
        setShow(false);
        console.log("Username and Password are wrong");
        console.log(username, password);
        //alert("Username and Password are wrong");
        setUsername("");
        setPassword("");
      }
    });
    // if (username === password && username !== "" && password !== "") {

    // } else {

    // }
  };

  return (
    <>
      {show ? (
        <section>
          {
            alert("You're logged in successfully!")
            // console.log(username,password);
          }
          <p>
            <Link
              to={
                JSON.parse(localStorage.getItem("loginStatus")) === true
                  ? "/dashboard"
                  : "/"
              }
            >
              Dashboard
            </Link>
          </p>
        </section>
      ) : (
        <section className="login-container">
          <p
            ref={errRef}
            className={errMsg ? "errMsg" : "offscreen"}
            aria-live="assertive"
          >
            {errMsg}
          </p>
          <div>
            <form onSubmit={loginHandler}>
              <h2 className="title-center">Welcome to Dashboard, Login</h2>
              <div className="form-group">
                <label htmlFor="usrnme">Username</label>
                <input
                  type="text"
                  className="form-control validate"
                  onChange={nameHandler}
                  id="usrnme"
                  value={username}
                  autoComplete="off"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="pwd">Password</label>
                <input
                  type="password"
                  className="form-control validate"
                  onChange={passwordHandler}
                  id="pwd"
                  value={password}
                  autoComplete="off"
                  required
                />
              </div>

              <div className="form-group">
                <button type="submit" className="btn">
                  Login
                </button>
              </div>
              <br />
              <br />
              <button type="submit" className="btn btn-2">
                Forgot Your Password
              </button>
            </form>
          </div>
        </section>
      )}
    </>
  );
}

export default Login;
