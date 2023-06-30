import "./Posts.scss";
import Layout from "../../core/hoc/layout/Layout";
import { useQuery } from "@tanstack/react-query";
import PostCard from "../../shared/components/postCard/PostCard";
import { useNavigate } from "react-router-dom";

export default function Posts() {
  const { isLoading, error, data } = useQuery({
    queryKey: ["posts"],
    queryFn: () =>
      fetch("https://jsonplaceholder.typicode.com/posts").then((res) =>
        res.json()
      ),
  });

  const navigate = useNavigate();

  function openSinglePost(id) {
    return function () {
      navigate(`/posts/${id}`);
    };
  }

  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  return (
    <>
      <Layout>
        <section className={"c-posts-container"}>
          {data.map((i) => (
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
