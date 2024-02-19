import { useGetPosts } from "../hooks/useGetPosts";
import { PostItem } from "./PostItem";

export function PostsList() {
  const { posts, isLoading, isError, error } = useGetPosts();

  if (isLoading) return <p>Loading...</p>;

  if (isError) return <p>Error: {error?.message}</p>;

  if (!posts) return null;

  return (
    <section className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4 sm:gap-8">
      {posts.map((post) => {
        return <PostItem key={post.id} post={post} />;
      })}
    </section>
  );
}
