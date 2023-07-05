import { useQuery } from "@tanstack/react-query";

export enum URLPaths {
  posts = "/posts",
  comments = "/comments",
}

const baseURL = "https://jsonplaceholder.typicode.com";

export default function QueryService(
  key: string,
  path?: URLPaths,
  id?: string | number,
  params?: string
) {
  let url = baseURL;

  if (url) {
    url += path;
  }

  if (id) {
    url += `/${id}`;
  }

  if (params) {
    url += `?${params}`;
  }

  const { isLoading, data, error, refetch } = useQuery({
    queryKey: id ? [key, id] : [key],
    queryFn: () => fetch(url).then((res) => res.json()),
  });

  return { isLoading, data, error, refetch };
}
