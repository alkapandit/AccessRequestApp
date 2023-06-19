import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  NavLink,
  useNavigate,
  useParams,
  useSearchParams,
} from "react-router-dom";
import { setLoading } from "../Store/reducer/commomSlice";
import swal from "sweetalert";

function UserDetails() {
  const [userData, setUserData] = useState({});
  const { isLoading } = useSelector((state) => state.common);
  const { username } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();

  useEffect(() => {
    dispatch(setLoading(true));
    axios({
      url: process.env.REACT_APP_API_URL + "/opsusers/" + username,
      method: "GET",
    })
      .then((response) => {
        console.log(response.data);
        setUserData(response.data);
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
              navigate("/qxtempmonitor/add");
            }
          });
        } else {
          console("Something went wrong! Please try again later");
        }
      })
      .finally(() => {
        dispatch(setLoading(false));
      });
  }, [username, searchParams]);
  return (
    <div>
      {Object.keys(userData).length > 0 && !isLoading && (
        <div className="ots-userDetails">
          <h2>User Details</h2>
          <form className="row  form">
            <div className="col-md-6 mb-2">
              <label htmlFor="exampleInputUserName" className="form-label">
                UserName
              </label>
              <input
                readOnly
                type="text"
                name="username"
                className="form-control"
                id="exampleInputUserName"
                defaultValue={
                  userData?.username?.trim() === null
                    ? "Null"
                    : userData?.username?.trim()
                }
              />
            </div>
            <div className="col-md-6 mb-2">
              <label htmlFor="exampleInputStation" className="form-label">
                Station
              </label>
              <input
                readOnly
                type="text"
                name="station"
                className="form-control"
                id="exampleInputStation"
                defaultValue={
                  userData?.station?.trim() === null
                    ? "Null"
                    : userData?.station?.trim()
                }
              />
            </div>
            <div className="col-md-6 mb-2">
              <label htmlFor="exampleInputFirstName" className="form-label">
                FirstName
              </label>
              <input
                readOnly
                type="text"
                name="firstname"
                className="form-control"
                id="exampleInputFirstName"
                defaultValue={
                  userData?.firstname?.trim() === null
                    ? "Null"
                    : userData?.firstname?.trim()
                }
              />
            </div>
            <div className="col-md-6 mb-2">
              <label htmlFor="exampleInputLastName" className="form-label">
                LastName
              </label>
              <input
                readOnly
                type="text"
                name="lastname"
                className="form-control"
                id="exampleInputLastName"
                defaultValue={
                  userData?.lastname?.trim() === null
                    ? "Null"
                    : userData?.lastname?.trim()
                }
              />
            </div>
            <div className="col-md-6 mb-2">
              <label htmlFor="exampleInputSuperUser" className="form-label">
                SuperUser
              </label>
              <input
                readOnly
                type="text"
                name="superuser"
                className="form-control"
                id="exampleInputSuperUser"
                defaultValue={
                  userData?.superuser === null
                    ? "Null"
                    : userData?.superuser === "y"
                    ? "Yes"
                    : "No"
                }
              />
            </div>
            <div className="col-md-6 mb-2">
              <label htmlFor="exampleInputAirline" className="form-label">
                Airline
              </label>
              <input
                readOnly
                type="text"
                name="airline"
                className="form-control"
                id="exampleInputAirline"
                defaultValue={
                  userData?.airline === null ? "Null" : userData?.airline
                }
              />
            </div>

            <div className="col-md-6 mb-2">
              <label
                htmlFor="exampleInputLastNameGsUser"
                className="form-label"
              >
                GS-User
              </label>
              <input
                disabled
                name="gs_User"
                className="form-control"
                id="exampleInputLastNameGsUser"
                defaultValue={
                  userData?.gs_User === null ? "Null" : userData?.gs_User
                }
              />
            </div>
            <div className="col-md-6 mb-2">
              <label htmlFor="exampleInputImUser" className="form-label">
                LM-User
              </label>
              <input
                readOnly
                name="lm_User"
                className="form-control"
                id="exampleInputImUser"
                defaultValue={
                  userData?.lm_User === null
                    ? "Null"
                    : userData?.lm_User === 1
                    ? "Yes"
                    : "No"
                }
              />
            </div>
            <div className="col-md-6 mb-2">
              <label htmlFor="exampleInputGlobalUser" className="form-label">
                Global-User
              </label>
              <input
                readOnly
                name="global_User"
                className="form-control"
                id="exampleInputGlobalUser"
                defaultValue={
                  userData?.global_User === null
                    ? "Null"
                    : userData?.global_User === 1
                    ? "Yes"
                    : "No"
                }
              />
            </div>
            <div className="col-md-6 mb-2">
              <label htmlFor="exampleInputFLAGS" className="form-label">
                FLAGS
              </label>
              <input
                readOnly
                name="flags"
                className="form-control"
                id="exampleInputFLAGS"
                defaultValue={
                  userData?.flags === null
                    ? "Null"
                    : userData?.flags === 1
                    ? "Yes"
                    : "No"
                }
              />
            </div>
            <div className="col-md-6 mb-2">
              <label htmlFor="exampleInputIceopsUser" className="form-label">
                ICEOPS-User
              </label>
              <input
                readOnly
                name="iceops_User"
                className="form-control"
                id="exampleInputIceopsUser"
                defaultValue={
                  userData?.iceops_User === null
                    ? "Null"
                    : userData?.iceops_User === 1
                    ? "Yes"
                    : "No"
                }
              />
            </div>
            <div className="col-md-6 mb-2">
              <label htmlFor="exampleInputOtsUser" className="form-label">
                OTS-User
              </label>
              <input
                readOnly
                name="ots_User"
                className="form-control"
                id="exampleInputOtsUser"
                defaultValue={
                  userData?.ots_User === null
                    ? "Null"
                    : userData?.ots_User === 1
                    ? "Yes"
                    : "No"
                }
              />
            </div>

            <div className="d-flex justify-content-center edit-btn">
              <NavLink to={"/ots/update/" + username} className="link">
                Edit Details
              </NavLink>
            </div>
          </form>
          <div className="col-md-6 mb-2"></div>
        </div>
      )}
    </div>
  );
}
export default UserDetails;
