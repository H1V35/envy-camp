import { useNavigate, useLocation, useParams } from "react-router-dom";
import { useGetPost } from "../hooks/useGetPost";
import backIcon from "../assets/images/back-icon.svg";

export function PostDetails() {
  const {
    state,
  }: {
    state: {
      title?: string;
      body?: string;
      id?: string;
    };
  } = useLocation();
  const { postId } = useParams();
  const { post, isLoading, isError, error } = useGetPost(postId!);
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("../..", { relative: "path" });
  };

  if (isLoading) return <div>Loading...</div>;

  if (isError) return <div>Error: {error?.message}</div>;

  if (!post) return null;

  return (
    <>
      <header className="flex items-start gap-4">
        <button
          onClick={handleClick}
          className="w-10 sm:w-12 mt-4 flex-shrink-0 transition duration-300 hover:scale-105"
        >
          <img src={backIcon} alt="Home button icon" />
        </button>

        <h1 className="mt-4 flex-grow text-4xl sm:text-5xl">
          {state?.title || post.title}
        </h1>
      </header>

      <p className="ml-2 text-xl sm:text-2xl">{state?.body || post.body}</p>
    </>
  );
}
