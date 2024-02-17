import { PostsList } from "../components/PostsList";

export default function HomePage() {
  return (
    <main className="px-4 sm:px-8 py-4 flex flex-col items-center gap-6 sm:gap-8">
      <h1 className="mt-4 text-4xl sm:text-5xl">Simple Blog App</h1>

      <PostsList />
    </main>
  );
}
