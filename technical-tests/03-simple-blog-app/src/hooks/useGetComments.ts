import React from "react";
import { Comment } from "../types";
import { fetchComments } from "../services";

export function useGetComments(postId: string) {
  const [comments, setComments] = React.useState<Comment[]>([]);
  const [isLoading, setIsLoading] = React.useState(false);

  const addComment = (newComment: Comment) => {
    setComments([...comments, newComment]);
  };

  React.useEffect(() => {
    (async () => {
      setIsLoading(true);
      await fetchComments(postId).then(setComments);
      setIsLoading(false);
    })();
  }, [postId]);

  return { comments, addComment, isLoading };
}
