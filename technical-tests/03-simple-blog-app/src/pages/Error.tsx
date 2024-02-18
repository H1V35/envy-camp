import { Link } from "react-router-dom";
import homeIcon from "../assets/images/home-icon.svg";
import thisIsFine from "../assets/images/this-is-fine-dog.gif";

export default function Page404() {
  return (
    <main className="px-4 sm:px-8 py-4 flex flex-col gap-6 sm:gap-8">
      <header className="flex items-start gap-4">
        <Link to="/" className="flex-shrink-0 w-10 sm:w-12 mt-4">
          <img src={homeIcon} alt="Home button icon" />
        </Link>

        <h1 className="flex-grow mt-4 text-4xl sm:text-5xl">
          Something has gone wrong...
        </h1>
      </header>

      <img
        src={thisIsFine}
        alt="This is fine dog gif"
        className="w-full rounded-3xl"
      />
    </main>
  );
}
