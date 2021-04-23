import React, { useState } from "react";
import { REGISTRATION, useStore } from "../store/store"
function Registration(props) {
const dispatch = useStore((state) => state.dispatch);
const [userData, setUserData] = useState({
  username: '',
  password: '',
})
const regReq = (username, password) => {
  return (fetch("https://changeable-pumped-coin.glitch.me/users", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      username,
      password,
    }),
  }).then((res) => res.json())
  )
};
  const handleRegistration = (e) => {
    e.preventDefault();
      regReq(userData.username, userData.password).then((data) => 
      dispatch({ type: REGISTRATION, payload: data })
      )
     setUserData('');
  }
  const handleChange = (e) => {
    setUserData((state) => ({ ...state, [e.target.name]: e.target.value }))
  }
  return (
    <>
      <form id="registration-form" onSubmit={handleRegistration} >
        <label htmlFor="reg-username">Username</label>
        <input
          type="text"
          name="username"
          value={userData.username}
          autoFocus
          required
          onChange={handleChange}
        />
        <label htmlFor="reg-password">Password</label>
        <input
          type="password"
          name="password"
          value={userData.password}
          required
          onChange={handleChange}
        />
        <button type="reg-submit" >Register</button>
      </form>
    </>
  )
}
export default Registration