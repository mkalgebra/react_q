import "./Posts.scss";
import { Layout } from "../../core/hoc/layout";
import { PostCard } from "../../shared/components/postCard";
import { useNavigate } from "react-router-dom";
import QueryService, { URLPaths } from "../../core/services/QueryService";
import { Input } from "../../shared/components/input";
import { useState } from "react";
import { debounce } from "lodash";
import PostInterface from "./models/Post";

export default function Posts() {
  const [search, setSearch] = useState("");

  const { isLoading, data, refetch } = QueryService(
    "posts",
    URLPaths.posts,
    undefined,
    `title_like=${search}`
  );

  const navigate = useNavigate();

  function openSinglePost(id: number) {
    return function () {
      navigate(`/posts/${id}`);
    };
  }

  const debouncedGetPosts = debounce(refetch, 500);

  function handleChange(e: any) {
    setSearch(e.target.value);
    debouncedGetPosts();
  }

  if (isLoading)
    return (
      <>
        <span>Loading...</span>
      </>
    );

  return (
    <>
      <Layout>
        <section className={"c-posts"}>
          <Input
            placeholder={"Search"}
            value={search}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              handleChange(e)
            }
          />
          {data.length ? (
            <div className={"c-posts__container"}>
              {data.map((i: PostInterface) => (
                <PostCard
                  onClick={openSinglePost(i.id)}
                  title={i.title}
                  body={i.body}
                  key={i.id}
                />
              ))}
            </div>
          ) : (
            <p>No data.</p>
          )}
        </section>
      </Layout>
    </>
  );
}
