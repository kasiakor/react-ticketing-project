import { Alert, Box } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";
import { useAccessToken } from "../services/tokenProvider";

const Login = () => {
  // React States
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [hasLoginError, setHasLoginError] = useState(false);
  const setAccessToken = useAccessToken()[1];

  // Navigate
  const navigate = useNavigate();

  //Handle user input
  const handleUsername = (e) => {
    setUsername(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://frontendtest.unixfor.gr/api/Tickets/login", {
        Username: username,
        Password: password,
      })
      .then((result) => {
        setAccessToken(result.data.Token);
        navigate("/dashboard");
      })
      .catch((error) => {
        setHasLoginError(true);
      });
  };

  // login form
  const renderForm = (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label>Username</label>
          <input
            type="text"
            name="uname"
            value={username}
            required
            onChange={handleUsername}
          />
        </div>
        <div className="input-container">
          <label>Password</label>
          <input
            type="password"
            name="pass"
            value={password}
            required
            onChange={handlePassword}
          />
        </div>
        <div className="button-container">
          <button type="submit">Submit</button>
        </div>
      </form>
      {hasLoginError && (
        <Box style={{ margin: "4%" }}>
          <Alert severity="error" variant="filled">
            Wrong username or password
          </Alert>
        </Box>
      )}
    </div>
  );

  return (
    <div className="app">
      <div className="login-form">
        <div className="title">Login</div>
        {renderForm}
      </div>
    </div>
  );
};

export default Login;
