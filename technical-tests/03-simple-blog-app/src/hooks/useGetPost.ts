import React from "react";
import { useParams } from "react-router-dom";
import { Post } from "../types";
import { fetchPost } from "../services";

export function useGetPost() {
  const [post, setPost] = React.useState<Post>();
  const { postId } = useParams();
  const POST_ENDPOINT = `https://jsonplaceholder.typicode.com/posts/${postId}`;

  React.useEffect(() => {
    const getPosts = async () => {
      const newPost = await fetchPost(POST_ENDPOINT);

      setPost(newPost);
    };

    getPosts();
  }, [POST_ENDPOINT]);

  return { post };
}
