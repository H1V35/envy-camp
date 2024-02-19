import React from "react";
import { useParams } from "react-router-dom";
import sendIcon from "../assets/images/send-icon.svg";

const timestamp = Date.now();

export function CommentForm() {
  const [comment, setComment] = React.useState({ body: "" });
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

    console.log(newComment);
    setComment({ body: "" });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget;
    setComment({ ...comment, body: value });
  };

  return (
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
  );
}
