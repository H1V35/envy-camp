import { useParams } from "react-router-dom";
import { useGetComments } from "../hooks/useGetComments";
import { CommentItem } from "./CommentItem";
import { CommentForm } from "./CommentForm";

export function CommentsList() {
  const { postId } = useParams();
  const { comments, isLoading } = useGetComments(postId!);

  if (isLoading) return <CommentsListSkeleton />;

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

function CommentsListSkeleton() {
  return (
    <section className="w-full gap-4 sm:gap-8 animate-pulse">
      <h2 className="ml-2 text-2xl sm:text-3xl">Comments</h2>
      <div className="p-2 sm:px-4 rounded-3xl border border-black flex flex-col gap-2">
        <div className="h-20 bg-gray-200 rounded-xl"></div>
        <div className="h-20 bg-gray-200 rounded-xl"></div>
        <div className="h-20 bg-gray-200 rounded-xl"></div>
        <div className="w-full h-8 px-1 flex justify-center gap-1">
          <div className="w-full px-3 py-1 bg-gray-200 rounded-lg"></div>
          <div className="pl-3 pr-2 w-12 bg-gray-200 rounded-lg"></div>
        </div>
      </div>
    </section>
  );
}
