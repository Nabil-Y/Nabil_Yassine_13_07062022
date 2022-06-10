import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../store/hooks";
import LoginForm from "../components/Login/LoginForm";

/**
 * Login function
 * @returns the login page
 */
const Login = () => {
  const isLoggedIn = useAppSelector((state) => state.login.isLoggedIn);

  let navigate = useNavigate();
  useEffect(() => {
    if (isLoggedIn) return navigate("/profile");
  }, []);

  return (
    <main className="flex-[1] bg-secondary-dark">
      <LoginForm />
    </main>
  );
};

export default Login;
