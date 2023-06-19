import React, { useState } from "react";
import InsertUserDeatils from "./InsertUserDetails";
import UserDetails from "./UserDetails";
import { Route, Routes, useNavigate } from "react-router-dom";
import UpdateUserDetails from "./UpdateUserDetails";
import swal from "sweetalert";
import AllUsersList from "./AllUsersList";

const QXTempMonitorApp = (props) => {
  const [userName, setUserName] = useState("");
  const navigate = useNavigate();

  const validateUser = (username) => {
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

      return;
    }
    navigate("details/" + userName + "?" + new Date().getTime());
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

      <Routes>
        <Route
          path="/"
          element={<AllUsersList validateUser={validateUser} />}
        />
        <Route path="/details/:username" element={<UserDetails />} />
        <Route path="/update/:username" element={<UpdateUserDetails />} />
        <Route path="/add" element={<InsertUserDeatils />} />
      </Routes>
    </div>
  );
};

export default QXTempMonitorApp;
