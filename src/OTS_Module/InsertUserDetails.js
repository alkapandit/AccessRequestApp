import axios from "axios";
import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";
import { setLoading } from "../Store/reducer/commomSlice";

const InsertUserDeatils = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  return (
    <div className="ots-insertUserDetails">
      <h2>Insert User Details</h2>
      <Formik
        initialValues={{
          username: "",
          station: "",
          airline: "",
          superuser: "",
          iceops_User: "",
          gs_User: "",
          global_User: "",
          lm_User: "",
          ots_User: "",
          firstname: "",
          lastname: "",
          flags: "",
        }}
        validate={(values) => {
          const errors = {};
          if (!values.username.trim()) {
            errors.username = "This field is required";
          }
          if (values.station.trim() === "") {
            errors.station = "This field is required";
          } else if (values.station.trim().length !== 3) {
            errors.station =
              "Station code should be three characters long only";
          }
          if (values.airline === "") {
            errors.airline = "This field is required";
          }
          if (values.superuser === "") {
            errors.superuser = "This field is required";
          }
          if (values.iceops_User === "") {
            errors.iceops_User = "This field is required";
          }
          if (values.gs_User === "") {
            errors.gs_User = "This field is required";
          }
          if (values.global_User === "") {
            errors.global_User = "This field is required";
          }
          if (values.lm_User === "") {
            errors.lm_User = "This field is required";
          }
          if (values.ots_User === "") {
            errors.ots_User = "This field is required";
          }
          if (values.firstname === "") {
            errors.firstname = "This field is required";
          }
          if (values.lastname === "") {
            errors.lastname = "This field is required";
          }
          if (values.flags === "") {
            errors.flags = "This field is required";
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          let username = values.username.trim();
          let station = values?.station?.trim();
          let airline = values?.airline?.trim();
          let superuser = values?.superuser?.trim();
          let iceops_User = values?.iceops_User?.trim();
          let gs_User = values?.gs_User?.trim();
          let global_User = values?.global_User?.trim();
          let lm_User = values?.lm_User?.trim();
          let ots_User = values?.ots_User?.trim();
          let firstname = values?.firstname?.trim();
          let lastname = values?.lastname?.trim();
          let flags = values?.flags?.trim();

          let payload = {
            userName: username,
            station: station,
            firstname: firstname,
            lastname: lastname,
            superuser: superuser === "null" ? null : superuser,
            gs_User: gs_User === "null" ? null : gs_User,
            airline: airline === "null" ? null : airline,
            lm_User: lm_User === "null" ? null : lm_User,
            global_User: global_User === "null" ? null : global_User,
            flags: flags === "null" ? null : flags,
            iceops_User: iceops_User === "null" ? null : iceops_User,
            ots_User: ots_User === "null" ? null : ots_User,
          };
          dispatch(setLoading(true));
          axios({
            url: process.env.REACT_APP_API_URL + "/opsusers",
            method: "POST",
            data: payload,
          })
            .then((response) => {
              if (response.status === 200) {
                swal({
                  title: "Success!",
                  text: "User details added successfully!",
                  icon: "success",
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
                // resetForm(); // it will clear all the fields and fill initial values
                props.validateUser(username);
                navigate("/ots");
              }
              console.log(response);
            })
            .catch((error) => {
              swal({
                title: "Error!",
                text: "Error in updating details. Something went wrong, please contact site administrator",
                icon: "error",
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
              console.log(error);
            })
            .finally(() => {
              dispatch(setLoading(false));
              setSubmitting(false);
            });
        }}
      >
        <Form className="row form">
          <div className="col-md-6 mb-2">
            <label htmlFor="exampleInputUserName" className="form-label">
              UserName
            </label>
            <Field
              type="text"
              name="username"
              className="form-control"
              id="exampleInputUserName"
            />
            <ErrorMessage
              component="span"
              className="form-error-message"
              name="username"
            />
          </div>
          <div className="col-md-6 mb-2">
            <label htmlFor="exampleInputStation" className="form-label">
              Station
            </label>
            <Field
              type="text"
              name="station"
              className="form-control"
              id="exampleInputStation"
            />
            <ErrorMessage
              component="span"
              className="form-error-message"
              name="station"
            />
          </div>

          <div className="col-md-6 mb-2">
            <label htmlFor="exampleInputFirstName" className="form-label">
              FirstName
            </label>
            <Field
              type="text"
              name="firstname"
              className="form-control"
              id="exampleInputFirstName"
            />
            <ErrorMessage
              component="span"
              className="form-error-message"
              name="firstname"
            />
          </div>
          <div className="col-md-6 mb-2">
            <label htmlFor="exampleInputLastName" className="form-label">
              LastName
            </label>
            <Field
              type="text"
              name="lastname"
              className="form-control"
              id="exampleInputLastName"
            />
            <ErrorMessage
              component="span"
              className="form-error-message"
              name="lastname"
            />
          </div>
          <div className="col-md-6 mb-2">
            <label htmlFor="exampleInputSuperUser" className="form-label">
              SuperUser
            </label>
            <Field
              as="select"
              name="superuser"
              className="form-select"
              id="exampleInputSuperUser"
            >
              <option value="" selected>
                Select...
              </option>
              <option value="y">Yes</option>
              <option value="n">No</option>
              <option value="null">Null</option>
            </Field>
            <ErrorMessage
              component="span"
              className="form-error-message"
              name="superuser"
            />
          </div>
          <div className="col-md-6 mb-2">
            <label htmlFor="exampleInputAirline" className="form-label">
              Airline
            </label>
            <Field
              as="select"
              name="airline"
              className="form-select"
              id="exampleInputAirline"
            >
              <option value="" selected>
                select...
              </option>
              <option value="AS">AS</option>
              <option value="OO">OO</option>
              <option value="QX">QX</option>
              <option value="VX">VX</option>
              <option value="null">Null</option>
            </Field>
            <ErrorMessage
              component="span"
              className="form-error-message"
              name="airline"
            />
          </div>
          <div className="col-md-6 mb-2">
            <label htmlFor="exampleInputLastNameGsUser" className="form-label">
              GS-User
            </label>
            <Field
              as="select"
              name="gs_User"
              className="form-select"
              id="exampleInputLastNameGsUser"
            >
              <option value="" selected>
                select...
              </option>
              <option value="0">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="null">Null</option>
            </Field>
            <ErrorMessage
              component="span"
              className="form-error-message"
              name="gs_User"
            />
          </div>
          <div className="col-md-6 mb-2">
            <label htmlFor="exampleInputImUser" className="form-label">
              IM-User
            </label>
            <Field
              as="select"
              name="lm_User"
              className="form-select"
              id="exampleInputImUser"
            >
              <option value="" selected>
                select...
              </option>
              <option value="1">Yes</option>
              <option value="0">No</option>
              <option value="null">Null</option>
            </Field>
            <ErrorMessage
              component="span"
              className="form-error-message"
              name="lm_User"
            />
          </div>
          <div className="col-md-6 mb-2">
            <label htmlFor="exampleInputGlobalUser" className="form-label">
              Global-User
            </label>
            <Field
              as="select"
              name="global_User"
              className="form-select"
              id="exampleInputGlobalUser"
            >
              <option value="" selected>
                select...
              </option>
              <option value="1">Yes</option>
              <option value="0">No</option>
              <option value="null">Null</option>
            </Field>
            <ErrorMessage
              component="span"
              className="form-error-message"
              name="global_User"
            />
          </div>
          <div className="col-md-6 mb-2">
            <label htmlFor="exampleInputFLAGS" className="form-label">
              FLAGS
            </label>
            <Field
              as="select"
              name="flags"
              className="form-select"
              id="exampleInputFLAGS"
            >
              <option value="" selected>
                select...
              </option>
              <option value="1">Yes</option>
              <option value="0">No</option>
              <option value="null">Null</option>
            </Field>
            <ErrorMessage
              component="span"
              className="form-error-message"
              name="flags"
            />
          </div>
          <div className="col-md-6 mb-2">
            <label htmlFor="exampleInputIceopsUser" className="form-label">
              ICEOPS-User
            </label>
            <Field
              as="select"
              name="iceops_User"
              className="form-select"
              id="exampleInputIceopsUser"
            >
              <option value="" selected>
                select...
              </option>
              <option value="1">Yes</option>
              <option value="0">No</option>
              <option value="null">Null</option>
            </Field>
            <ErrorMessage
              component="span"
              className="form-error-message"
              name="iceops_User"
            />
          </div>
          <div className="col-md-6 mb-2">
            <label htmlFor="exampleInputOtsUser" className="form-label">
              OTS-User
            </label>
            <Field
              as="select"
              name="ots_User"
              className="form-select"
              id="exampleInputOtsUser"
            >
              <option value="" selected>
                select...
              </option>
              <option value="1">Yes</option>
              <option value="0">No</option>
              <option value="null">Null</option>
            </Field>
            <ErrorMessage
              component="span"
              className="form-error-message"
              name="ots_User"
            />
          </div>
          <button type="submit" className="col-md-8 mx-auto btn ">
            Submit
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default InsertUserDeatils;
// onSubmit={insertUser}
