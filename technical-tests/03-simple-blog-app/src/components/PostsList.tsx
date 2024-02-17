import { usePosts } from "../hooks/usePosts";
import { PostItem } from "../components/PostItem";

export function PostsList() {
  const { posts } = usePosts();

  return (
    <section className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4 sm:gap-8">
      {posts.map((post) => {
        return <PostItem key={post.id} post={post} />;
      })}
    </section>
  );
}
