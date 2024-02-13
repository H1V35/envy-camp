import thisIsFine from "../assets/images/this-is-fine-dog.gif";

export default function Page404() {
  return (
    <section className="px-4 sm:px-8 py-4 flex flex-col items-center gap-8 sm:gap-16">
      <h1 className="mt-4 text-4xl sm:text-5xl">Something has gone wrong...</h1>

      <img
        src={thisIsFine}
        alt="This is fine dog gif"
        className="w-full rounded-3xl"
      />
    </section>
  );
}
