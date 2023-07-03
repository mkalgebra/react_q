import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import Comment from "../Comment";

const mockProps = {
  name: "what",
  email: "admin@mail.com",
  body: "content",
};

describe("<Comment />", () => {
  test("displays comment", async () => {
    const { getByTestId } = render(
      <Comment
        name={mockProps.name}
        email={mockProps.email}
        body={mockProps.body}
      />
    );

    expect(getByTestId("c-comment")).toBeInTheDocument();
  });

  test("displays name", async () => {
    const { getByTestId } = render(
      <Comment
        name={mockProps.name}
        email={mockProps.email}
        body={mockProps.body}
      />
    );

    const comment = getByTestId("c-comment");

    expect(comment).toHaveTextContent(mockProps.name);
  });

  test("displays email", async () => {
    const { getByTestId } = render(
      <Comment
        name={mockProps.name}
        email={mockProps.email}
        body={mockProps.body}
      />
    );

    const comment = getByTestId("c-comment");

    expect(comment).toHaveTextContent(mockProps.email);
  });

  test("displays body", async () => {
    const { getByTestId } = render(
      <Comment
        name={mockProps.name}
        email={mockProps.email}
        body={mockProps.body}
      />
    );

    const comment = getByTestId("c-comment");

    expect(comment).toHaveTextContent(mockProps.body);
  });
});
