import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Input from "../Input";

const mockProps = {
  inputValue: "test",
};

describe("<Input />", () => {
  test("displays input", async () => {
    const { getByTestId } = render(<Input />);

    expect(getByTestId("c-input")).toBeInTheDocument();
  });

  test("sets value", async () => {
    const { getByTestId } = render(<Input />);

    const input = getByTestId("c-input");

    fireEvent.input(input, { target: { value: mockProps.inputValue } });

    expect(input).toHaveValue(mockProps.inputValue);
  });

  test("fires onChange", async () => {
    const onChange = jest.fn();

    const { getByTestId } = render(<Input onChange={onChange} />);

    const input = getByTestId("c-input");

    fireEvent.change(input, { target: { value: mockProps.inputValue } });

    expect(onChange).toHaveBeenCalled();
  });
});
