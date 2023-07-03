import "./PostCard.scss";

interface PostCardProps {
  title: string;
  body: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export default function PostCard(props: PostCardProps) {
  return (
    <>
      <article
        data-testid={"c-post-card"}
        className={"c-post-card"}
        onClick={props.onClick}
      >
        <span
          className={"c-post-card__title"}
          data-testid={"c-post-card__title"}
        >
          {props.title}
        </span>
        <span data-testid={"c-post-card__body"}>{props.body}</span>
      </article>
    </>
  );
}
