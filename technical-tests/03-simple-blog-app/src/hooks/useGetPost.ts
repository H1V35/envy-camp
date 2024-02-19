import { useQuery } from "@tanstack/react-query";
import { fetchPost } from "../services";

export function useGetPost(postId: string) {
  const {
    data: post,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["post", postId],
    queryFn: () => fetchPost(postId),
  });

  return { post, isLoading, isError, error };
}
