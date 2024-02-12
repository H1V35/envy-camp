import { PostItem } from "../components/PostItem";

export default function HomePage() {
  return (
    <main className="px-8 py-4 flex flex-col items-center gap-12">
      <h1 className="mt-4 text-5xl">Simple Blog App</h1>

      <section className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-8">
        <PostItem />
        <PostItem />
        <PostItem />
        <PostItem />
        <PostItem />
        <PostItem />
      </section>
    </main>
  );
}
