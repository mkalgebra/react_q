import "./PostCard.scss";

interface PostCardProps {
  title: string;
  body: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export default function PostCard(props: PostCardProps) {
  return (
    <>
      <article className={"c-post-card"} onClick={props.onClick}>
        <span className={"c-post-card__title"}>{props.title}</span>
        <span>{props.body}</span>
      </article>
    </>
  );
}
