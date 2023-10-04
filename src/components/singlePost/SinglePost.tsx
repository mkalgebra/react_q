import { Layout } from "../../core/hoc/layout";
import { useParams } from "react-router-dom";
import { Comment } from "../../shared/components/comment";
import "./SinglePost.scss";
import QueryService, { URLPaths } from "../../core/services/QueryService";
import CommentInterface from "./models/Comment";
import { useTranslation } from "react-i18next";

export default function SinglePost() {
  const { id } = useParams();
  const { t } = useTranslation();

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
          <span>{t("PLACEHOLDER.LOADING")}...</span>
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
