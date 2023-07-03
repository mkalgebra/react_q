import "./Posts.scss";
import Layout from "../../core/hoc/layout/Layout";
import PostCard from "../../shared/components/postCard/PostCard";
import { useNavigate } from "react-router-dom";
import QueryService, { URLPaths } from "../../core/services/QueryService";

interface PostInterface {
  id: number;
  title: string;
  body: string;
}

export default function Posts() {
  const { isLoading, data } = QueryService("posts", URLPaths.posts);

  const navigate = useNavigate();

  function openSinglePost(id: number) {
    return function () {
      navigate(`/posts/${id}`);
    };
  }

  if (isLoading) return "Loading...";

  return (
    <>
      <Layout>
        <section className={"c-posts-container"}>
          {data.map((i: PostInterface) => (
            <PostCard
              onClick={openSinglePost(i.id)}
              title={i.title}
              body={i.body}
              key={i.id}
            />
          ))}
        </section>
      </Layout>
    </>
  );
}
