import React, { useEffect, useState } from "react";
import { NavLink, Route, Routes, useNavigate } from "react-router-dom";
import OutOfServiceApp from "./OTS_Module/OutOfServiceApp";
import EtopsMonitorApp from "./ETOPS_Monitor_Module/EtopsMonitorApp";
import MelUpdateApp from "./MEL_Update_Module/MelUpdateApp";
import QXTempMonitorApp from "./QX_Temp_Monitor_Module/QXTempMonitorApp";

const ApplicationPage = () => {
  const [backBtn, setBackBtn] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    if (window.location.pathname === "/") {
      setBackBtn(false);
    } else {
      setBackBtn(true);
    }
  }, [window.location.pathname]);

  // setBackBtn(false);
  return (
    <div className="applicationpage h-100">
      <div className="row h-100 m-0 p-0">
        <div className="col-md-3 h-100 text-center d-flex flex-column px--3 pt-5 column1">
          <div className="d-flex align-items-center justify-content-between px-5 mb-5">
            <NavLink to="/" className="home-pic">
              <img src="/images/alaska-logo.png" alt="home" />
            </NavLink>
            {backBtn && (
              <NavLink
                to="/"
                className="back-btn"
                onClick={() => {
                  navigate(-1);
                }}
              >
                <h6>Back</h6>
              </NavLink>
            )}
          </div>
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
        <div className="col-md-9 h-100 p-0 column2">
          <div className="">
            <Routes>
              <Route
                path="/"
                element={
                  <div className="row m-0 mainpage">
                    <div className="col-md-6 py-5 px-4">
                      <div className="user-column h-100 d-flex align-items-center px-5">
                        <p>Welcome To Airline</p>
                      </div>
                    </div>
                    <div className="col-md-6 py-5 px-4">
                      <div className="logo-column h-100 ">
                        <img src="/images/alaska-logo.png" alt="pic1" />
                        <img src="/images/horizon-logo.png" alt="pic2" />
                      </div>
                    </div>
                  </div>
                }
              />
              <Route path="/etopsmonitor" element={<EtopsMonitorApp />} />
              <Route path="/ots/*" element={<OutOfServiceApp />} />
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
