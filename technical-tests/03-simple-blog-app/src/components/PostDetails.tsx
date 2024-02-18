import { useNavigate, useLocation } from "react-router-dom";
import { useGetPost } from "../hooks/useGetPost";
import backIcon from "../assets/images/back-icon.svg";

export function PostDetails() {
  const { post } = useGetPost();
  const {
    state,
  }: {
    state: {
      title?: string;
      body?: string;
      id?: string;
    };
  } = useLocation();
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("../..", { relative: "path" });
  };

  return (
    <>
      <header className="flex items-start gap-4">
        <button
          onClick={handleClick}
          className="w-10 sm:w-12 mt-4 flex-shrink-0"
        >
          <img src={backIcon} alt="Home button icon" />
        </button>

        <h1 className="mt-4 flex-grow text-4xl sm:text-5xl">
          {state?.title || post?.title}
        </h1>
      </header>

      <p className="ml-2 text-xl sm:text-2xl">{state?.body || post?.body}</p>
    </>
  );
}
