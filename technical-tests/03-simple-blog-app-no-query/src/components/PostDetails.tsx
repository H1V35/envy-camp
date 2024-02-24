import { useNavigate, useParams } from "react-router-dom";
import { useGetPost } from "../hooks/useGetPost";
import backIcon from "../assets/images/back-icon.svg";

export function PostDetails() {
  const { postId } = useParams();
  const { post, isLoading } = useGetPost(postId!);
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("../..", { relative: "path" });
  };

  if (isLoading) return <PostDetailsSkeleton />;

  if (!post) return null;

  return (
    <>
      <header className="flex items-start gap-4">
        <button
          onClick={handleClick}
          className="w-10 sm:w-12 mt-4 flex-shrink-0 transition duration-300 hover:scale-110"
        >
          <img src={backIcon} alt="Home button icon" />
        </button>

        <h1 className="mt-4 flex-grow text-4xl sm:text-5xl">{post.title}</h1>
      </header>

      <p className="ml-2 text-xl sm:text-2xl">{post.body}</p>
    </>
  );
}

function PostDetailsSkeleton() {
  return (
    <>
      <header className="flex items-start gap-4 animate-pulse">
        <div className="w-10 sm:w-12 h-12 mt-4 flex-shrink-0">
          <img src={backIcon} alt="Home button icon" />
        </div>
        <div className="w-9/12 mt-4 h-12 bg-gray-200 rounded-lg"></div>
      </header>
      <div className="h-40 mt-2 bg-gray-200 rounded-xl animate-pulse"></div>
    </>
  );
}
