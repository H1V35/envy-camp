import React from "react";
import { useParams } from "react-router-dom";
import { Post, Comment } from "../types";
import { fetchPost, fetchComments } from "../services";

export function usePost() {
  const [post, setPost] = React.useState<Post>();
  const [comments, setComments] = React.useState<Comment[]>();

  const { postId } = useParams();
  const POST_ENDPOINT = `https://jsonplaceholder.typicode.com/posts/${postId}`;
  const COMMENTS_ENDPOINT = `https://jsonplaceholder.typicode.com/posts/${postId}/comments`;

  React.useEffect(() => {
    const getPosts = async () => {
      const newPost = await fetchPost(POST_ENDPOINT);
      const newComments = await fetchComments(COMMENTS_ENDPOINT);

      setPost(newPost);
      setComments(newComments);
    };

    getPosts();
  }, [POST_ENDPOINT, COMMENTS_ENDPOINT]);

  return { post, comments };
}
