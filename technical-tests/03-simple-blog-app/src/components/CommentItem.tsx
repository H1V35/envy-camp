import userIcon from "../assets/images/user-icon.svg";

export function CommentItem() {
  return (
    <article className="px-2 sm:px-4 py-2 rounded-xl border border-black flex items-start gap-4">
      <picture className="rounded-full border border-black">
        <img src={userIcon} alt="User icon" className="w-6" />
      </picture>

      <div className="flex flex-col gap-2">
        <header className="flex gap-4">
          <h3>name</h3>

          <h4 className="text-zinc-400">(email)</h4>
        </header>

        <p>body</p>
      </div>
    </article>
  );
}
