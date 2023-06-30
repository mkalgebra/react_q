import Layout from "../../core/hoc/layout/Layout";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import Comment from "../../shared/components/comment/Comment";
import "./SinglePost.scss";

interface CommentInterface {
  id: number;
  email: string;
  body: string;
  name: string;
}

export default function SinglePost() {
  const { id } = useParams();

  const { isLoading, data } = useQuery({
    queryKey: ["singlePost", id],
    queryFn: () =>
      fetch(`https://jsonplaceholder.typicode.com/posts/${id}`).then((res) =>
        res.json()
      ),
  });

  const { isLoading: isLoadingComments, data: commentsData } = useQuery({
    queryKey: ["singlePostComments", id],
    queryFn: () =>
      fetch(`https://jsonplaceholder.typicode.com/comments?postId=${id}`).then(
        (res) => res.json()
      ),
  });

  if (isLoading || isLoadingComments) return "Loading...";

  return (
    <>
      <Layout>
        <section className={"c-single-post"}>
          <p>{data.title}</p>
          <span>{data.body}</span>
          <div>
            {commentsData.map((item: CommentInterface) => {
              return (
                <Comment
                  key={item.id}
                  name={item.name}
                  email={item.email}
                  body={item.body}
                />
              );
            })}
          </div>
        </section>
      </Layout>
    </>
  );
}
