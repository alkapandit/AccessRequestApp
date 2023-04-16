import React from "react";

const InsertUserDeatils = () => {
  return (
    <div className="maindiv">
      <div className="formdiv">
        <h2>Insert User Details</h2>
        <form className="row  form">
          <div class="col-md-6 mb-2">
            <label for="exampleInputUserName" class="form-label">
              UserName
            </label>
            <input type="text" class="form-control" id="exampleInputUserName" />
          </div>
          <div class="col-md-6 mb-2">
            <label for="exampleInputStation" class="form-label">
              Station
            </label>
            <input type="text" class="form-control" id="exampleInputStation" />
          </div>
          <div class="col-md-6 mb-2">
            <label for="exampleInputSuperUser" class="form-label">
              SuperUser
            </label>
            <input
              type="text"
              class="form-control"
              id="exampleInputSuperUser"
            />
          </div>
          <div class="col-md-6 mb-2">
            <label for="exampleInputAirline" class="form-label">
              Airline
            </label>
            <input type="text" class="form-control" id="exampleInputAirline" />
          </div>
          <div class="col-md-6 mb-2">
            <label for="exampleInputFirstName" class="form-label">
              FirstName
            </label>
            <input
              type="text"
              class="form-control"
              id="exampleInputFirstName"
            />
          </div>
          <div class="col-md-6 mb-2">
            <label for="exampleInputLastName" class="form-label">
              LastName
            </label>
            <input type="text" class="form-control" id="exampleInputLastName" />
          </div>

          <div class="col-md-6 mb-2">
            <label for="exampleInputLastNameGsUser" class="form-label">
              GS-User
            </label>
            <input
              type="number"
              class="form-control"
              id="exampleInputLastNameGsUser"
            />
          </div>
          <div class="col-md-6 mb-2">
            <label for="exampleInputImUser" class="form-label">
              IM-User
            </label>
            <input type="number" class="form-control" id="exampleInputImUser" />
          </div>
          <div class="col-md-6 mb-2">
            <label for="exampleInputGlobalUser" class="form-label">
              Global-User
            </label>
            <input
              type="number"
              class="form-control"
              id="exampleInputGlobalUser"
            />
          </div>
          <div class="col-md-6 mb-2">
            <label for="exampleInputFLAGS" class="form-label">
              FLAGS
            </label>
            <input type="number" class="form-control" id="exampleInputFLAGS" />
          </div>
          <div class="col-md-6 mb-2">
            <label for="exampleInputIceopsUser" class="form-label">
              ICEOPS-User
            </label>
            <input
              type="number"
              class="form-control"
              id="exampleInputIceopsUser"
            />
          </div>
          <div class="col-md-6 mb-2">
            <label for="exampleInputOtsUser" class="form-label">
              OTS-User
            </label>
            <input
              type="number"
              class="form-control"
              id="exampleInputOtsUser"
            />
          </div>
          <button type="submit" class="col-md-8 mx-auto btn">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default InsertUserDeatils;
