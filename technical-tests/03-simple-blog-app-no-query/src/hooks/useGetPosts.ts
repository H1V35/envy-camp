import React from "react";
import { Post } from "../types";
import { fetchPosts } from "../services";

export function useGetPosts() {
  const [posts, setPosts] = React.useState<Post[]>([]);
  const [isLoading, setIsLoading] = React.useState(false);

  React.useEffect(() => {
    (async () => {
      setIsLoading(true);
      await fetchPosts().then(setPosts);
      setIsLoading(false);
    })();
  }, []);

  return { posts, isLoading };
}
