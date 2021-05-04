import React from "react";

import Signup from "./signup";
import Dialog from "./dialog";
import Sucess from "./sucess";
import { shallow } from "enzyme";
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import renderer from "react-test-renderer";
import * as ReactDOM from "react-dom";

configure({ adapter: new Adapter() });

it("Sighup page renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Signup></Signup>, div);
});

it("Dialog popup renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Dialog></Dialog>, div);
});

it("Sucess page renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Sucess></Sucess>, div);
});
