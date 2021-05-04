import React, { useState, useRef } from "react";
import "./css/signup.css";
import { useHistory } from "react-router-dom";
import logo from "./static/logo.png";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
//For Dialogy from material UI
import Dialog from "./dialog";

//Imported functions//
import isUser18 from "./source/isuser18";
import maxDate from "./source/maxdate";
import NewRegistration from "./source/NewRegistration";

////////////////////

function Signup() {
  //useHistory for redirection
  let history = useHistory();

  //State

  const [warning, setWarning] = useState();
  const [openDialog, setOpenDialog] = useState(false);
  const [nameValue, setNameValue] = useState();
  const [phoneNumber, setphoneNumber] = useState();
  const [emailValue, setEmailValue] = useState();
  const [dobValue, setDobValue] = useState();
  const [readyToRedirect, setReadyToRedirect] = useState(false);

  const changeNameValue = (element) => {
    setNameValue(element.target.value);
  };
  const changeEmailValue = (element) => {
    setEmailValue(element.target.value);
  };
  const changeDobValue = (element) => {
    setDobValue(element.target.value);
  };

  //Prevent using from selecting future date by setting Max date on the date input bar
  maxDate();

  //User Information

  var newReg = new NewRegistration(
    nameValue,
    phoneNumber,
    emailValue,
    dobValue
  );

  //Run this function when user press submit
  const handleSubmit = (event) => {
    event.preventDefault();
    setWarning("");

    //Check if user is meet the security check//
    if (isUser18(newReg.dateOfBirth) === true) {
      setOpenDialog(true);
    } else {
      setWarning("You Must Be At Least 18 Years Old to use our service");
    }

    /////
  };
  return (
    <div>
      <div className="login-form-div">
        <form onSubmit={handleSubmit} className="login-form">
          <img src={logo} alt="intouch game logo" className="logo"></img>
          <h1 className="login-form-item">Register</h1>
          <p className="warning">{warning}</p>
          <label htmlFor="name">Name*</label>
          <input
            id="name"
            type="text"
            placeholder="Please enter your full name"
            onChange={changeNameValue}
            required
          />
          <label htmlFor="name">Number*</label>

          <PhoneInput
            placeholder="Enter phone number"
            country="UK"
            value={phoneNumber}
            onChange={setphoneNumber}
            className="phone-input"
            required
          />
          <label htmlFor="email">Email*</label>
          <input
            id="email"
            type="email"
            placeholder="Please enter your email"
            onChange={changeEmailValue}
            required
          />
          <label htmlFor="dob">Date of Brith*</label>
          <input
            id="dob"
            type="date"
            min="1900-01-01"
            max={maxDate()}
            onChange={changeDobValue}
            placeholder="Please enter your date of birth"
            required
          />
          <p>
            By registering you agree to our <a href="#">privacy policy</a>
          </p>
          <button type="submit">Register</button>

          <p>
            Already have an account? <a href="#">Login</a>
          </p>
        </form>
      </div>
      {openDialog ? (
        <Dialog
          dialogOpenDialog={(element) => {
            setOpenDialog(element);
          }}
          dialogInfoConfirmed={() => {
            newReg.postRegister("https://jsonplaceholder.typicode.com/posts");

            history.replace("/sucess");
          }}
          name={nameValue}
          phoneNumber={phoneNumber}
          email={emailValue}
          dob={dobValue}
        />
      ) : null}
    </div>
  );
}

export default Signup;
