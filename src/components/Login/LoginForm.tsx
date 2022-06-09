import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { userLogin, getUserState } from "../../utils/API_functions";
import { useAppDispatch } from "../../store/hooks";
import { login } from "../../store/slices/loginSlice";
import { getUserData } from "../../store/slices/userSlice";
import userIcon from "../../assets/icon-user.png";
import Button from "../UI/Button";
import Checkbox from "../UI/Checkbox";
import Input from "../UI/Input";

/**
 * LoginForm function
 * @returns the login form component
 */
const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useAppDispatch();
  let navigate = useNavigate();

  const submitHandler = async (event: React.SyntheticEvent) => {
    event.preventDefault();

    const token = await userLogin(username, password);
    if (token) {
      dispatch(login(token));
      const userData = await getUserState(token);
      userData && dispatch(getUserData(userData));
      navigate("/user");
    }
  };

  return (
    <section className=" my-0 mx-auto mt-12 box-border w-[300px] bg-white p-8">
      <img src={userIcon} alt="User Icon" className="mx-auto h-6 w-6" />
      <h2 className="py-4 text-xl font-bold">Sign In</h2>
      <form onSubmit={submitHandler}>
        <Input
          id="username"
          label="Username"
          type="text"
          onChange={(event) =>
            setUsername((event.target as HTMLInputElement).value)
          }
        />
        <Input
          id="password"
          label="Password"
          type="password"
          onChange={(event) =>
            setPassword((event.target as HTMLInputElement).value)
          }
        />
        <Checkbox id="remember-me" label="Remember me" />
        <Button type="submit">Sign In</Button>
      </form>
    </section>
  );
};

export default LoginForm;
