import "./Comment.scss";

interface CommentProps {
  name: string;
  email: string;
  body: string;
}

export default function Comment(props: CommentProps) {
  return (
    <>
      <article data-testid={"c-comment"} className={"c-comment"}>
        <p className={"c-comment__title"}>{props.name}</p>
        <p className={"c-comment__email"}>{props.email}</p>
        <p className={"c-comment__body"}>{props.body}</p>
      </article>
    </>
  );
}
