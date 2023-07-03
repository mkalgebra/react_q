import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import PostCard from "../PostCard";

const mockProps = {
  title: "title",
  body: "content",
};

describe("<PostCard />", () => {
  test("displays post card", async () => {
    const { getByTestId } = render(
      <PostCard title={mockProps.title} body={mockProps.body} />
    );

    expect(getByTestId("c-post-card")).toBeInTheDocument();
  });

  test("click", async () => {
    const onClick = jest.fn();

    const { getByTestId } = render(
      <PostCard
        title={mockProps.title}
        body={mockProps.body}
        onClick={onClick}
      />
    );

    const postCard = getByTestId("c-post-card");

    fireEvent.click(postCard);

    expect(onClick).toHaveBeenCalled();
  });

  test("displays title", async () => {
    const { getByTestId } = render(
      <PostCard title={mockProps.title} body={mockProps.body} />
    );

    const postCard = getByTestId("c-post-card");

    expect(postCard).toHaveTextContent(mockProps.title);
  });

  test("displays body", async () => {
    const { getByTestId } = render(
      <PostCard title={mockProps.title} body={mockProps.body} />
    );

    const postCard = getByTestId("c-post-card");

    expect(postCard).toHaveTextContent(mockProps.body);
  });
});
