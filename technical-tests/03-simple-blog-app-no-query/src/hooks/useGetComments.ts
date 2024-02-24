import React from "react";
import { Comment } from "../types";
import { fetchComments } from "../services";

export function useGetComments(postId: string) {
  const [comments, setComments] = React.useState<Comment[]>([]);
  const [isLoading, setIsLoading] = React.useState(false);

  React.useEffect(() => {
    (async () => {
      setIsLoading(true);
      await fetchComments(postId).then(setComments);
      setIsLoading(false);
    })();
  }, [postId]);

  return { comments, isLoading };
}
