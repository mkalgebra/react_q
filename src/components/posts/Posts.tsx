import "./Posts.scss";
import { Layout } from "../../core/hoc/layout";
import { PostCard } from "../../shared/components/postCard";
import { useNavigate } from "react-router-dom";
import QueryService, { URLPaths } from "../../core/services/QueryService";
import { Input } from "../../shared/components/input";
import { useState } from "react";
import { debounce } from "lodash";
import PostInterface from "./models/Post";
import { useTranslation } from "react-i18next";

export default function Posts() {
  const [search, setSearch] = useState("");
  const { t } = useTranslation();

  const { isLoading, data, refetch } = QueryService(
    "posts",
    URLPaths.posts,
    undefined,
    `title_like=${search}`
  );

  const navigate = useNavigate();

  const openSinglePost = (id: number) => {
    return function () {
      navigate(`/posts/${id}`);
    };
  };

  const debouncedGetPosts = debounce(refetch, 500);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    debouncedGetPosts();
  };

  return (
    <>
      <Layout>
        <section className={"c-posts"}>
          <Input
            placeholder={t("PLACEHOLDER.SEARCH")}
            value={search}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              handleChange(e)
            }
          />
          {isLoading ? (
            <p>{t("PLACEHOLDER.LOADING")}...</p>
          ) : data.length ? (
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
            <p>{t("PLACEHOLDER.NO_DATA")}.</p>
          )}
        </section>
      </Layout>
    </>
  );
}
