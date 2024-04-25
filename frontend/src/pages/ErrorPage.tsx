import { Link } from "react-router-dom";

function ErrorPage() {
  return (
    <div
      className="bg-gradient-to-r from-dark1 to-dark2 min-h-screen p-6 flex flex-col items-center justify-center gap-2 font-display 
    text-white1"
    >
      <h1>Hi, it seems something went wrong.</h1>
      <p>
        {" "}
        We did not find what you were looking for. Clik{" "}
        <Link
          to="/"
          className="text-white3 focus:outline-none focus:text-white2 hover:text-white2"
        >
          here
        </Link>{" "}
        to get back to home page.
      </p>
    </div>
  );
}

export default ErrorPage;
