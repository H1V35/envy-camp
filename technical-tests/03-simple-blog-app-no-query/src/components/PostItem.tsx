import { Link } from "react-router-dom";
import { Post } from "../types";

export function PostItem({ post: { id, title, body } }: { post: Post }) {
  return (
    <article className="w-auto p-4 rounded-3xl border border-black flex flex-col justify-between gap-6">
      <section className="flex flex-col gap-2">
        <h2 className="text-2xl">{title}</h2>

        <p className="text-zinc-400">{body}</p>
      </section>

      <footer className="flex justify-center">
        <Link
          to={`post/${id}`}
          className="w-9/12 p-1 rounded-xl border border-black text-center transition duration-300 hover:scale-105 hover:bg-[#8cd4ff] hover:border-[#0069d1] hover:text-[#0069d1]"
          state={{ title, body, id }}
        >
          Read more
        </Link>
      </footer>
    </article>
  );
}
