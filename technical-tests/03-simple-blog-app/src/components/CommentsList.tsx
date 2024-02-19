import { useParams } from "react-router-dom";
import { useGetComments } from "../hooks/useGetComments";
import { CommentItem } from "./CommentItem";
import { CommentForm } from "./CommentForm";

export function CommentsList() {
  const { postId } = useParams();
  const { comments, isLoading, isError, error } = useGetComments(postId!);

  if (isLoading) return <div>Loading...</div>;

  if (isError) return <div>Error: {error?.message}</div>;

  if (!comments) return null;

  return (
    <section className="w-full gap-4 sm:gap-8">
      <h2 className="ml-2 text-2xl sm:text-3xl">Comments</h2>

      <div className="p-2 sm:px-4 rounded-3xl border border-black flex flex-col gap-2">
        {comments.map((comment) => {
          return <CommentItem key={comment.id} comment={comment} />;
        })}

        <CommentForm />
      </div>
    </section>
  );
}
