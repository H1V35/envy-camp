import { useGetPosts } from "../hooks/useGetPosts";
import { PostItem } from "./PostItem";

export function PostsList() {
  const { posts, isLoading } = useGetPosts();

  if (isLoading) return <PostsListSkeleton />;

  if (!posts) return null;

  return (
    <section className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4 sm:gap-8">
      {posts.map((post) => {
        return <PostItem key={post.id} post={post} />;
      })}
    </section>
  );
}

function PostsListSkeleton() {
  return (
    <section className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4 sm:gap-8 animate-pulse">
      {Array.from({ length: 8 }).map((_, index) => (
        <article
          key={index}
          className="w-auto p-4 rounded-3xl border border-gray-500 flex flex-col justify-between gap-6"
        >
          <section className="flex flex-col gap-2">
            <div className="h-8 w-9/12 bg-gray-200 rounded-xl"></div>
            <div className="h-48 bg-gray-200 rounded-xl"></div>
          </section>
          <footer className="flex justify-center">
            <div className="w-9/12 h-9 bg-gray-200 rounded-xl"></div>
          </footer>
        </article>
      ))}
    </section>
  );
}
