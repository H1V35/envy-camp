import React from "react";
import { Post } from "../types";
import { fetchPosts } from "../services";

export function useGetPosts() {
  const [posts, setPosts] = React.useState<Post[]>([]);

  React.useEffect(() => {
    const getPosts = async () => {
      const newPosts = await fetchPosts();

      setPosts(newPosts);
    };

    getPosts();
  }, []);

  return { posts };
}
