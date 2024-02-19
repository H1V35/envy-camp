import { useQuery } from "@tanstack/react-query";
import { fetchPost } from "../services";
import { useLocation } from "react-router-dom";

export function useGetPost(postId: string) {
  const { state } = useLocation();
  const {
    data: post,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["post", postId],
    queryFn: () => fetchPost(postId),
    placeholderData: state,
    enabled: !state,
  });

  return { post, isLoading, isError, error };
}
