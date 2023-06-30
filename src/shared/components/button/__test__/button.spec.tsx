import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";

import Button from "../Button";

describe("<Button />", () => {
  test("displays button", async () => {
    const { getByTestId } = render(<Button text={"test"} />);

    expect(getByTestId("c-button")).toBeInTheDocument();
  });

  test("click", async () => {
    const onClick = jest.fn();

    const { getByText } = render(<Button text={"test"} onClick={onClick} />);

    const button = getByText("test");

    fireEvent.click(button);

    expect(onClick).toHaveBeenCalled();
  });

  test("displays text", async () => {
    const { getByText } = render(<Button text={"test"} />);

    const button = getByText("test");

    expect(button).toHaveTextContent("test");
  });
});
