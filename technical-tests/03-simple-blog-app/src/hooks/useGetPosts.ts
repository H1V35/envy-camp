import { useQuery } from "@tanstack/react-query";
import { fetchPosts } from "../services";

export function useGetPosts() {
  const {
    data: posts,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts,
  });

  return { posts, isLoading, isError, error };
}
