import { Link } from "react-router-dom";
import { Post } from "../types";

type PostItemProps = {
  post: Post;
};

export function PostItem({ post: { id, title, body } }: PostItemProps) {
  return (
    <article className="w-auto p-4 rounded-3xl border border-black flex flex-col justify-between gap-6">
      <section className="flex flex-col gap-2">
        <h2 className="text-2xl">{title}</h2>

        <p className="text-zinc-400">{body}</p>
      </section>

      <footer className="flex justify-center">
        <Link
          to={`post/${id}`}
          className="w-9/12 p-1 rounded-xl border border-black text-center"
        >
          Read more
        </Link>
      </footer>
    </article>
  );
}
