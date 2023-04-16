import React from "react";
import { Link, NavLink, Route, Routes } from "react-router-dom";
import OutOfServiceApp from "./OutOfServiceApp";
import EtopsMonitorApp from "./EtopsMonitorApp";
import MelUpdateApp from "./MelUpdateApp";
import QXTempMonitorApp from "./QXTempMonitorApp";

const ApplicationPage = () => {
  return (
    <div className="applicationpage">
      <div className="row m-0 p-0">
        <div className="col-md-3 text-center d-flex flex-column px--3 pt-5 column1">
          <NavLink to="ots">
            <button className="btn w-75" type="button">
              Out Of Service
            </button>
          </NavLink>
          <NavLink to="melupdate">
            <button className="btn w-75" type="button">
              Mel Update
            </button>
          </NavLink>
          <NavLink to="etopsmonitor">
            <button className="btn w-75" type="button">
              Etops Monitor
            </button>
          </NavLink>
          <NavLink to="qxtempmonitor">
            <button className="btn w-75" type="button">
              QX Temp Monitor
            </button>
          </NavLink>
        </div>
        <div className="col-md-9 p-0 column2">
          <div className="">
            <Routes>
              <Route
                path="/"
                element={
                  <div className="row m-0 mainpage">
                    <div className="col-md-6 py-5 px-4">
                      <div className="user-column h-100 shadow d-flex align-items-center px-5">
                        <p>Welcome To Airline</p>
                      </div>
                    </div>
                    <div className="col-md-6 py-5 px-4">
                      <div className="logo-column h-100 shadow">
                        <img src="./images/alaska-logo.png" />
                        <img src="./images/horizon-logo.png" />
                      </div>
                    </div>
                  </div>
                }
              />
              <Route path="/etopsmonitor" element={<EtopsMonitorApp />} />
              <Route path="/ots" element={<OutOfServiceApp />} />
              <Route path="/melupdate" element={<MelUpdateApp />} />
              <Route path="/qxtempmonitor" element={<QXTempMonitorApp />} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApplicationPage;
