import { PostDetails } from "../components/PostDetails";
import { CommentsList } from "../components/CommentsList";

export default function PostPage() {
  return (
    <main className="px-4 sm:px-8 py-4 flex flex-col gap-6 sm:gap-8">
      <PostDetails />

      <CommentsList />
    </main>
  );
}
