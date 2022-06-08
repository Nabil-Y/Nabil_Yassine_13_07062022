import LoginForm from "../components/Login/LoginForm";

/**
 * Login function
 * @returns the login page
 */
const Login = () => {
  return (
    <main className="flex-[1] bg-secondary-dark">
      <LoginForm />
    </main>
  );
};

export default Login;
