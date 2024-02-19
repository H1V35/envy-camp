import { useQuery } from "@tanstack/react-query";
import { fetchComments } from "../services";

export function useGetComments(postId: string) {
  const {
    data: comments,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["comments", postId],
    queryFn: () => fetchComments(postId),
    enabled: !!postId,
  });

  return { comments, isLoading, isError, error };
}
