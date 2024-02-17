import React from "react";
import { useParams } from "react-router-dom";
import { Comment } from "../types";
import { fetchComments } from "../services";

export function useGetComments() {
  const [comments, setComments] = React.useState<Comment[]>([]);
  const { postId } = useParams();
  const COMMENTS_ENDPOINT = `https://jsonplaceholder.typicode.com/posts/${postId}/comments`;

  const addComment = (newComment: Comment) => {
    setComments([...comments, newComment]);
  };

  React.useEffect(() => {
    const getPosts = async () => {
      const newComments = await fetchComments(COMMENTS_ENDPOINT);

      setComments(newComments);
    };

    getPosts();
  }, [COMMENTS_ENDPOINT]);

  return { comments, addComment };
}