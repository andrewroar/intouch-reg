import React from "react";
import { shallow } from "enzyme";
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import renderer from "react-test-renderer";
import * as ReactDOM from "react-dom";

//////

import isUser18 from "./isuser18";
import maxDate from "./maxDate";
import postNewUser from "./postnewuser";
import NewRegistration from "./NewRegistration";
///

it("Identify User as not 18", () => {
  expect(isUser18("2012-12-12")).toBe(false);
});

it("Identify User as 18", () => {
  expect(isUser18("2001-12-12")).toBe(true);
});

it("Identify User as 18 (2)", () => {
  expect(isUser18("1987-01-12")).toBe(true);
});

it("Max Date return today's date in string", () => {
  const todayChecker = () => {
    const today = new Date();
    var todayMonth = today.getMonth() + 1;
    var todayDay = today.getDate();
    const todayYear = today.getFullYear();
    if (todayMonth < 10) {
      todayMonth = "0" + todayMonth.toString();
    }
    if (todayDay < 10) todayDay = "0" + todayDay.toString();
    const todayString = todayYear + "-" + todayMonth + "-" + todayDay;
    return todayString;
  };

  expect(maxDate()).toBe(todayChecker());
});

it("New Registration class return Object at the given format", () => {
  var testUser = new NewRegistration(
    "Andrew",
    "+9956565656",
    "test123@gmail.com",
    "1995-01-01"
  );

  expect(testUser).toEqual({
    name: "Andrew",
    number: "+9956565656",
    email: "test123@gmail.com",
    dateOfBirth: "1995-01-01",
  });
});

it("Post required works", () => {
  postNewUser({
    name: "Andrew",
    number: "+5521212121",
    email: "test123@gmail.com",
    dateOfBirth: "1999-01-13",
  });
});
