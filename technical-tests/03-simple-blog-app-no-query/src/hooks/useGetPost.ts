import React from "react";
import { useParams } from "react-router-dom";
import { Post } from "../types";
import { fetchPost } from "../services";

export function useGetPost() {
  const [post, setPost] = React.useState<Post>();
  const [isLoading, setIsLoading] = React.useState(false);
  const { postId } = useParams();
  const POST_ENDPOINT = `https://jsonplaceholder.typicode.com/posts/${postId}`;

  React.useEffect(() => {
    (async () => {
      setIsLoading(true);
      await fetchPost(POST_ENDPOINT).then(setPost);
      setIsLoading(false);
    })();
  }, [POST_ENDPOINT]);

  return { post, isLoading };
}
