import userIcon from "../assets/icon-user.png";

const Login = () => {
  return (
    <main className="flex-[1] bg-secondary-dark">
      {/* Login Form */}
      <section className=" my-0 mx-auto mt-12 box-border w-[300px] bg-white p-8">
        <img src={userIcon} alt="User Icon" className="mx-auto h-8 w-8" />
        <h2 className="py-4 text-xl font-bold">Sign In</h2>
        <form>
          {/* Input */}
          <div className="mb-4 flex flex-col text-left">
            <label htmlFor="username" className="font-bold">
              Username
            </label>
            <input
              type="text"
              id="username"
              className="border border-secondary p-1 text-lg"
            />
          </div>
          {/* Input  */}
          <div className="mb-4 flex flex-col text-left">
            <label htmlFor="password" className="font-bold">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="border border-secondary p-1 text-lg"
            />
          </div>

          <div className="flex">
            <input type="checkbox" id="remember-me" />
            <label htmlFor="remember-me" className="ml-1">
              Remember me
            </label>
          </div>
          {/* Button  */}
          <button className="mt-4 block w-full border-primary bg-primary p-2 text-lg font-bold text-white underline">
            Sign In
          </button>
        </form>
      </section>
    </main>
  );
};

export default Login;
