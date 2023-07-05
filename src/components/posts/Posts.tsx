import "./Posts.scss";
import Layout from "../../core/hoc/layout/Layout";
import PostCard from "../../shared/components/postCard/PostCard";
import { useNavigate } from "react-router-dom";
import QueryService, { URLPaths } from "../../core/services/QueryService";
import Input from "../../shared/components/input/Input";
import { useState } from "react";
import { debounce } from "lodash";

interface PostInterface {
  id: number;
  title: string;
  body: string;
}

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

  if (isLoading) return "Loading...";

  return (
    <>
      <Layout>
        <section className={"c-posts"}>
          <Input
            placeholder={"Search"}
            value={search}
            onChange={(e: any) => handleChange(e)}
          />
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
        </section>
      </Layout>
    </>
  );
}
