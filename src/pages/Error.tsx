import { Link } from "react-router-dom";

/**
 * Error function
 * @returns the error page
 */
const Error = () => {
  return (
    <main className=" flex-[1] bg-secondary-dark text-center text-2xl text-white">
      <h2 className="py-20 text-4xl font-bold">Error</h2>
      <Link to="/" className="text-primary">
        Go back Home
      </Link>
    </main>
  );
};

export default Error;
