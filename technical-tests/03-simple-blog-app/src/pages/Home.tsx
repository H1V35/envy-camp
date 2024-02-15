import React from "react";
import { PostItem } from "../components/PostItem";
import { fetchPosts } from "../services";
import { Post } from "../types";

export default function HomePage() {
  const [posts, setPosts] = React.useState<Post[]>([]);

  React.useEffect(() => {
    const getPosts = async () => {
      const newPosts = await fetchPosts();

      setPosts(newPosts);
    };

    getPosts();
  }, []);

  return (
    <main className="px-4 sm:px-8 py-4 flex flex-col items-center gap-6 sm:gap-8">
      <h1 className="mt-4 text-4xl sm:text-5xl">Simple Blog App</h1>

      <section className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4 sm:gap-8">
        {posts.map((post) => {
          return <PostItem key={post.id} post={post} />;
        })}
      </section>
    </main>
  );
}
