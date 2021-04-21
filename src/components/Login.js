import React, { useState } from "react";
import { LOGIN, useStore } from "../store/store";
import Registration from "./Registration"
import "../App.css"

function Login(props) {

  const dispatch = useStore((state) => state.dispatch);
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const loginRequest = (username, password) => {
    return fetch("http://localhost:4000/users/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username,
        password,
      }),
    }).then((res) => res.json());
  };


  const handleLogin = (e) => {
    e.preventDefault();
    loginRequest(formData.username, formData.password).then((userData) =>
      dispatch({ type: LOGIN, payload: userData })
    );
  };

  const handleChange = (e) => {
    const inputName = e.target.name;
    const inputValue = e.target.value;


    setFormData((state) => ({ ...state, [inputName]: inputValue }));
  };



  //<div class="p-3 mb-2 bg-primary text-white">.bg-primary</div>
  return (
    <div id="login">
      <form id="login-form" onSubmit={handleLogin}>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          name="username"
          value={formData.username}
          autoFocus
          required
          onChange={handleChange}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          required
          onChange={handleChange}
        />   
        <button onClick={handleLogin}>Login</button>    
      </form>
        <div className = "registration">
            <Registration />
        </div>
    </div>
  );
}

export default Login;