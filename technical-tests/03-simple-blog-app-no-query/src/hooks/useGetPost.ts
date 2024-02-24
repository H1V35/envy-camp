import React from "react";
import { Post } from "../types";
import { fetchPost } from "../services";

export function useGetPost(postId: string) {
  const [post, setPost] = React.useState<Post>();
  const [isLoading, setIsLoading] = React.useState(false);

  React.useEffect(() => {
    (async () => {
      setIsLoading(true);
      await fetchPost(postId).then(setPost);
      setIsLoading(false);
    })();
  }, [postId]);

  return { post, isLoading };
}
