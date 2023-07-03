import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Button from "../Button";

const mockProps = {
  text: "text",
};

describe("<Button />", () => {
  test("displays button", async () => {
    const { getByTestId } = render(<Button text={mockProps.text} />);

    expect(getByTestId("c-button")).toBeInTheDocument();
  });

  test("click", async () => {
    const onClick = jest.fn();

    const { getByText } = render(
      <Button text={mockProps.text} onClick={onClick} />
    );

    const button = getByText(mockProps.text);

    fireEvent.click(button);

    expect(onClick).toHaveBeenCalled();
  });

  test("displays text", async () => {
    const { getByText } = render(<Button text={mockProps.text} />);

    const button = getByText(mockProps.text);

    expect(button).toHaveTextContent(mockProps.text);
  });
});
