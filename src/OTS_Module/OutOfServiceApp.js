import axios from "axios";
import React, { useState } from "react";
import InsertUserDeatils from "./InsertUserDetails";
import UserDetails from "./UserDetails";
import { Route, Routes, useNavigate } from "react-router-dom";
import UpdateUserDetails from "./UpdateUserDetails";
import swal from "sweetalert";
import AllUsersList from "./AllUsersList";

const OutOfServiceApp = (props) => {
  const [existingUser, setExistingUser] = useState();
  const [userData, setUserData] = useState({});
  const [userName, setUserName] = useState("");
  const navigate = useNavigate();

  console.log(existingUser);

  const validateUser = (username, update = false) => {
    if (username === "") {
      swal({
        title: "OOPS!",
        text: "Please Enter username for validation",
        icon: "warning",
        button: {
          text: "OK",
          value: true,
          visible: true,
          className: "ok-btn",
          closeModal: true,
        },
        target: "#pagecontainer",
        className: "position-absolute",
        position: "bottom-end",
      });

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
          swal({
            title: "User doesn't exist!",
            text: "Do you want to add new record for this user?",
            icon: "info",
            dangerMode: true,
            buttons: {
              confirm: {
                text: "Confirm",
                value: true,
                visible: true,
                className: "confirm-btn",
                closeModal: true,
              },
              cancel: {
                text: "Cancel",
                value: null,
                visible: true,
                className: "cancel-btn",
                closeModal: true,
              },
            },
            target: "#pagecontainer",
            className: "position-absolute",
            position: "bottom-end",
          }).then((choice) => {
            console.log(choice);
            if (choice) {
              setExistingUser(false);
            }
          });
        } else {
          console("Something went wrong! Please try again later");
        }
      })
      .finally(() => {
        if (!update) {
          navigate("/ots");
        }
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
          <br />
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
        <p className="m-0 notes">
          Note: Fullname - Emma Stone, Username - Estone
        </p>
      </form>
      {typeof existingUser === "undefined" && (
        <AllUsersList validateUser={validateUser} />
      )}
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
