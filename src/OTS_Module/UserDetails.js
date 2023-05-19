import { NavLink } from "react-router-dom";

function UserDetails(props) {
  return (
    <div>
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
                props?.userData?.username?.trim() === null
                  ? "Null"
                  : props?.userData?.username?.trim()
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
                props?.userData?.station?.trim() === null
                  ? "Null"
                  : props?.userData?.station?.trim()
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
                props?.userData?.firstname?.trim() === null
                  ? "Null"
                  : props?.userData?.firstname?.trim()
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
                props?.userData?.lastname?.trim() === null
                  ? "Null"
                  : props?.userData?.lastname?.trim()
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
                props?.userData?.superuser === null
                  ? "Null"
                  : props?.userData?.superuser === "y"
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
                props?.userData?.airline === null
                  ? "Null"
                  : props?.userData?.airline
              }
            />
          </div>

          <div className="col-md-6 mb-2">
            <label htmlFor="exampleInputLastNameGsUser" className="form-label">
              GS-User
            </label>
            <input
              disabled
              name="gs_User"
              className="form-control"
              id="exampleInputLastNameGsUser"
              defaultValue={
                props?.userData?.gs_User === null
                  ? "Null"
                  : props?.userData?.gs_User
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
                props?.userData?.lm_User === null
                  ? "Null"
                  : props?.userData?.lm_User === 1
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
                props?.userData?.global_User === null
                  ? "Null"
                  : props?.userData?.global_User === 1
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
                props?.userData?.flags === null
                  ? "Null"
                  : props?.userData?.flags === 1
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
                props?.userData?.iceops_User === null
                  ? "Null"
                  : props?.userData?.iceops_User === 1
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
                props?.userData?.ots_User === null
                  ? "Null"
                  : props?.userData?.ots_User === 1
                  ? "Yes"
                  : "No"
              }
            />
          </div>

          <div className="d-flex justify-content-center edit-btn">
            <NavLink to="updateuserdetails" className="link">
              Edit Details
            </NavLink>
          </div>
        </form>
        <div className="col-md-6 mb-2"></div>
      </div>
    </div>
  );
}
export default UserDetails;
