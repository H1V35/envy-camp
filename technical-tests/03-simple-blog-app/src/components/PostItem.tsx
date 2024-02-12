export function PostItem() {
  return (
    <article className="w-auto p-4 rounded-3xl border border-black flex flex-col justify-between gap-6">
      <section className="flex flex-col gap-2">
        <h2 className="text-2xl">Post title</h2>

        <p className="text-zinc-400">Body excerpt</p>
      </section>

      <footer className="flex justify-center">
        <button className="w-9/12 p-1 rounded-xl border border-black">
          Read more
        </button>
      </footer>
    </article>
  );
}
