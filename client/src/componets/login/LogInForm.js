import React, { useState } from "react";
import { login } from "../../util/auth";
import { withRouter, useHistory } from "react-router-dom";
import "./Login.css";

const LogInForm = (props) => {
  const [enteredPassword, setEnteredPassword] = useState("");
  const [enteredemail, setEnteredEmail] = useState("");
  const [error, setError] = useState(false);
  const history = useHistory();
  const emailChangeHanlder = (event) => {
    setEnteredEmail(event.target.value);
  };
  const passwordChangeHandler = (event) => {
    setEnteredPassword(event.target.value);
  };
  const submitHandler = (event) => {
    console.log(event);
    event.preventDefault();
    const email = enteredemail;
    const password = enteredPassword;
    console.log(email, password);
    login(email, password)
      .then((ok) => {
        if (ok) {
          history.push("/images");
          history.go(0);
        } else {
          console.log("There is someting wrong");
          setError(true);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <form className="form-container" onSubmit={submitHandler}>
      <div className="form-box">
        <label>Email</label>
        <input
          type="email"
          id="email"
          value={enteredemail}
          onChange={emailChangeHanlder}
          requried="true"
          className="login-input"
        />
      </div>
      <div className="form-box">
        <label>Password</label>
        <input
          className="login-input"
          type="password"
          id="password"
          value={enteredPassword}
          requried="true"
          onChange={passwordChangeHandler}
        />
      </div>
      {error && (
        <div>
          <p>email or password is incorrect</p>
        </div>
      )}
      <button className="btn" type="submit">
        Login
      </button>
    </form>
  );
};

export default LogInForm;
