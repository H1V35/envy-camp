import { Link } from "react-router-dom";
import { CommentItem } from "../components/CommentItem";
import backIcon from "../assets/images/back-icon.svg";
import sendIcon from "../assets/images/send-icon.svg";

export default function PostPage() {
  return (
    <main className="px-4 sm:px-8 py-4 flex flex-col gap-6 sm:gap-8">
      <header className="flex items-center gap-4">
        <Link to="/" className="w-10 sm:w-12 mt-4">
          <img src={backIcon} alt="Home button icon" />
        </Link>

        <h1 className="w-auto mt-4 text-4xl sm:text-5xl">Post title</h1>
      </header>

      <p className="ml-2 text-xl sm:text-2xl">Post body</p>

      <section className="w-full gap-4 sm:gap-8">
        <h2 className="ml-2 text-2xl sm:text-3xl">Comments</h2>

        <div className="p-2 sm:px-4 rounded-3xl border border-black flex flex-col gap-2">
          <CommentItem />
          <CommentItem />
          <CommentItem />

          <form action="" className="w-full px-1 flex justify-center gap-1">
            <input
              type="text"
              placeholder="What are your thoughts?"
              className="w-full px-3 py-1 bg-transparent rounded-lg border border-black"
            />

            <button className="pl-3 pr-2 bg-[#8cd4ff] rounded-lg border border-[#0069d1] text-[#0069d1] flex items-center">
              <img src={sendIcon} alt="Send icon" className="w-6" />
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
