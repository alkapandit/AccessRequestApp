import axios from "axios";
import React, { useState } from "react";
import InsertUserDeatils from "./InsertUserDetails";
import UserDetails from "./UserDetails";
import { Route, Routes, useNavigate } from "react-router-dom";
import UpdateUserDetails from "./UpdateUserDetails";

const OutOfServiceApp = (props) => {
  const [existingUser, setExistingUser] = useState();
  const [userData, setUserData] = useState({});
  const [userName, setUserName] = useState("");
  const navigate = useNavigate();

  const validateUser = (username) => {
    if (username === "") {
      alert("Please Enter username for validation");
      setUserData(null);
      setExistingUser(null);
      return;
    }
    axios({
      url: process.env.REACT_APP_API_URL + "/opsusers/" + username,
      method: "GET",
    })
      .then((response) => {
        console.log(response.data);
        setUserData(response.data);
        setExistingUser(true);
      })
      .catch((error) => {
        console.log(error.response.status);
        if (error.response.status === 404) {
          alert("User does not exists");
          setExistingUser(false);
        } else {
          console("Something went wrong! Please try again later");
        }
      })
      .finally(() => {
        navigate("/ots");
      });
  };
  return (
    <div className="ots">
      <form
        className="uservalidate"
        onSubmit={(e) => {
          e.preventDefault();
          validateUser(userName);
        }}
      >
        <label htmlFor="username">
          Please enter username to validate user :
        </label>
        <input
          type="text"
          name="username"
          id="username"
          maxLength="50"
          size="50"
          value={userName}
          onChange={(e) => setUserName(e.currentTarget.value)}
          placeholder="Enter Username"
        />
        <button type="submit" className="btn">
          Validate User
        </button>
      </form>
      {existingUser && (
        <Routes>
          <Route path="/" element={<UserDetails userData={userData} />} />
          <Route
            path="/updateuserdetails"
            element={
              <UpdateUserDetails
                userData={userData}
                setExistingUser={setExistingUser}
                setUserName={setUserName}
                validateUser={validateUser}
              />
            }
          />
        </Routes>
      )}
      {existingUser === false && (
        <InsertUserDeatils validateUser={validateUser} />
      )}
    </div>
  );
};

export default OutOfServiceApp;
