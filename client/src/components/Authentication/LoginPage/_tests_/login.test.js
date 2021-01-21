import React from "react";
import {render, fireEvent, screen} from "../../../../utils/test-utils";
import LoginPage from "../LoginPage";

// afterEach(cleanup);


test('should render the login form', () => {
  const {container} = render(<LoginPage />);
  const form = container.querySelector("form");
  const {personname, password} = form.elements;

  personname.value = "Maestro Yoda"
  password.value = "Maestro Yoda"

  const submit = new window.Event("submit");
  form.dispatchEvent(submit)
})

