import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { act } from "react-dom/test-utils";

const Form = () => {
  return <form></form>;
};

const { getByTestId } = render(<Form />);
const form = getByTestId("form");

async function test() {
  const result = await act(async () => {
    // THIS IS WHERE ERROR IS TRIGGERED
    fireEvent.submit(form);
  });
}

export default test;
