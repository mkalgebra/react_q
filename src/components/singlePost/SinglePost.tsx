import { Layout } from "../../core/hoc/layout";
import { useParams } from "react-router-dom";
import { Comment } from "../../shared/components/Comment";
import "./SinglePost.scss";
import QueryService, { URLPaths } from "../../core/services/QueryService";
import CommentInterface from "./models/Comment";

export default function SinglePost() {
  const { id } = useParams();

  const { isLoading, data } = QueryService("singlePost", URLPaths.posts, id);

  const { isLoading: isLoadingComments, data: commentsData } = QueryService(
    "singlePostComments",
    URLPaths.comments,
    undefined,
    `postId=${id}`
  );

  if (isLoading || isLoadingComments)
    return (
      <>
        <Layout>
          <span>Loading...</span>
        </Layout>
      </>
    );

  return (
    <>
      <Layout>
        <section className={"c-single-post"}>
          <p className={"c-single-post__title"}>{data.title}</p>
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
