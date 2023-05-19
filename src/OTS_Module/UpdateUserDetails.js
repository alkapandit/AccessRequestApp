import axios from "axios";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { useNavigate } from "react-router-dom";

function UpdateUserDetails(props) {
  const navigate = useNavigate();

  return (
    <div>
      <div className="ots-updateUserDetails">
        <h2>Update User Details</h2>
        <Formik
          initialValues={{
            username: props?.userData?.username?.trim(),
            station: props?.userData?.station?.trim(),
            firstname: props?.userData?.firstname?.trim(),
            lastname: props?.userData?.lastname?.trim(),
            airline:
              props?.userData?.airline === null
                ? "null"
                : props?.userData?.airline?.trim(),
            superuser:
              props?.userData?.superuser === null
                ? "null"
                : props?.userData?.superuser?.trim(),
            iceops_User:
              props?.userData?.iceops_User === null
                ? "null"
                : props?.userData?.iceops_User,
            gs_User:
              props?.userData?.gs_User === null
                ? "null"
                : props?.userData?.gs_User,
            global_User:
              props?.userData?.global_User === null
                ? "null"
                : props?.userData?.global_User,
            lm_User:
              props?.userData?.lm_User === null
                ? "null"
                : props?.userData?.lm_User,
            ots_User:
              props?.userData?.ots_User === null
                ? "null"
                : props?.userData?.ots_User,
            flags:
              props?.userData?.flags === null ? "null" : props?.userData?.flags,
          }}
          validate={(values) => {
            console.log(values);
            const errors = {};
            if (!values.username) {
              errors.username = "This field is required";
            }
            if (!values.station.trim()) {
              errors.station = "This field is required";
            } else if (values.station.trim().length !== 3) {
              errors.station =
                "Station code should be three characters long only";
            }
            if (!values.firstname) {
              errors.firstname = "This field is required";
            }
            if (!values.lastname) {
              errors.lastname = "This field is required";
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
            if (values.flags === "") {
              errors.flags = "This field is required";
            }
            console.log(errors);
            return errors;
          }}
          onSubmit={(values, { setSubmitting }) => {
            let username = props?.userData?.username.trim();
            let station = values?.station?.trim();
            let airline = values?.airline?.trim();
            let superuser = values?.superuser?.trim();
            let iceops_User = values?.iceops_User;
            let gs_User = values?.gs_User;
            let global_User = values?.global_User;
            let lm_User = values?.lm_User;
            let ots_User = values?.ots_User;
            let firstname = values?.firstname?.trim();
            let lastname = values?.lastname?.trim();
            let flags = values?.flags;
            let payload = {
              username: username,
              station: station,
              firstname: firstname,
              lastname: lastname,
              airline: airline === "null" ? null : airline,
              superuser: superuser === "null" ? null : superuser,
              iceops_User: iceops_User === "null" ? null : iceops_User,
              gs_User: gs_User === "null" ? null : gs_User,
              global_User: global_User === "null" ? null : global_User,
              lm_User: lm_User === "null" ? null : lm_User,
              ots_User: ots_User === "null" ? null : ots_User,
              flags: flags === "null" ? null : flags,
            };
            console.log(payload);
            axios({
              url: process.env.REACT_APP_API_URL + "/opsusers/" + username,
              method: "PUT",
              data: payload,
            })
              .then((response) => {
                console.log(response);
                console.log(response.status);
                if (response.status === 200) {
                  alert("User Details updated successfully.");

                  props.setExistingUser(null);
                  props.setUserName("");
                  props.validateUser(username);
                  navigate("/ots");
                } else {
                  alert("Details not updated! try again");
                }
              })
              .catch((error) => {
                console.log(error);
                alert("Error in updating details");
              })
              .finally(() => {
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
                readOnly
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
                defaultValue={props?.userData?.firstname}
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
                defaultValue={props?.userData?.lastname}
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
                defaultValue={props?.userData?.superuser}
              >
                <option value="">Select...</option>
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
                defaultValue={props?.userData?.airline}
              >
                <option value="">select...</option>
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
              <label
                htmlFor="exampleInputLastNameGsUser"
                className="form-label"
              >
                GS-User
              </label>
              <Field
                as="select"
                name="gs_User"
                className="form-select"
                id="exampleInputLastNameGsUser"
                defaultValue={props?.userData?.gs_User}
              >
                <option value="">select...</option>
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
                defaultValue={props?.userData?.lm_User}
              >
                <option value="">select...</option>
                <option value="0">No</option>
                <option value="1">Yes</option>
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
                defaultValue={props?.userData?.global_User}
              >
                <option value="">select...</option>
                <option value="0">No</option>
                <option value="1">Yes</option>
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
                defaultValue={props?.userData?.flags}
              >
                <option value="">select...</option>
                <option value="0">No</option>
                <option value="1">Yes</option>
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
                defaultValue={props?.userData?.iceops_User}
              >
                <option value="">select...</option>
                <option value="0">No</option>
                <option value="1">Yes</option>
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
                defaultValue={props?.userData?.ots_User}
              >
                <option value="">select...</option>
                <option value="0">No</option>
                <option value="1">Yes</option>
                <option value="null">Null</option>
              </Field>
              <ErrorMessage
                component="span"
                className="form-error-message"
                name="ots_User"
              />
            </div>
            <button type="submit" className="col-md-8 mx-auto btn">
              Submit
            </button>
          </Form>
        </Formik>
      </div>
    </div>
  );
}

export default UpdateUserDetails;
