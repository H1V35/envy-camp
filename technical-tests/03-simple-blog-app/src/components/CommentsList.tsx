import React from "react";
import { useParams } from "react-router-dom";
import { useGetComments } from "../hooks/useGetComments";
import { CommentItem } from "../components/CommentItem";
import sendIcon from "../assets/images/send-icon.svg";

const timestamp = Date.now();

export function CommentsList() {
  const [comment, setComment] = React.useState({ body: "" });
  const { comments, addComment } = useGetComments();
  const { postId } = useParams();

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!comment.body?.trim()) return;

    const newComment = {
      postId: Number(postId),
      id: Math.floor(Math.random() * timestamp),
      name: "Hive",
      email: "hive@dev.es",
      ...comment,
    };

    addComment(newComment);
    setComment({ body: "" });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget;
    setComment({ ...comment, body: value });
  };

  return (
    <section className="w-full gap-4 sm:gap-8">
      <h2 className="ml-2 text-2xl sm:text-3xl">Comments</h2>

      <div className="p-2 sm:px-4 rounded-3xl border border-black flex flex-col gap-2">
        {comments?.map((comment) => {
          return <CommentItem key={comment.id} comment={comment} />;
        })}

        <form
          onSubmit={handleFormSubmit}
          className="w-full px-1 flex justify-center gap-1"
        >
          <input
            type="text"
            value={comment.body}
            onChange={handleInputChange}
            placeholder="What are your thoughts?"
            className="w-full px-3 py-1 bg-transparent rounded-lg border border-black"
          />

          <button className="pl-3 pr-2 bg-[#8cd4ff] rounded-lg border border-[#0069d1] text-[#0069d1] flex items-center">
            <img src={sendIcon} alt="Send icon" className="w-6" />
          </button>
        </form>
      </div>
    </section>
  );
}