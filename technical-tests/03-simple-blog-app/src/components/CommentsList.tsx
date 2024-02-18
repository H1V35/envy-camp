import { useParams } from "react-router-dom";
import { useGetComments } from "../hooks/useGetComments";
import { CommentItem } from "../components/CommentItem";
import { CommentForm } from "./CommentForm";

export function CommentsList() {
  const { postId } = useParams();
  const { comments, addComment, isLoading } = useGetComments(postId!);

  if (isLoading) return <div>Loading...</div>;

  return (
    <section className="w-full gap-4 sm:gap-8">
      <h2 className="ml-2 text-2xl sm:text-3xl">Comments</h2>

      <div className="p-2 sm:px-4 rounded-3xl border border-black flex flex-col gap-2">
        {comments?.map((comment) => {
          return <CommentItem key={comment.id} comment={comment} />;
        })}

        <CommentForm addComment={addComment} />
      </div>
    </section>
  );
}
