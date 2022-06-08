import userIcon from "../../assets/icon-user.png";
import Button from "../UI/Button";
import Checkbox from "../UI/Checkbox";
import Input from "../UI/Input";

/**
 * LoginForm function
 * @returns the login form component
 */
const LoginForm = () => {
  return (
    <section className=" my-0 mx-auto mt-12 box-border w-[300px] bg-white p-8">
      <img src={userIcon} alt="User Icon" className="mx-auto h-6 w-6" />
      <h2 className="py-4 text-xl font-bold">Sign In</h2>
      <form>
        <Input id="username" label="Username" type="text" />
        <Input id="password" label="Password" type="password" />
        <Checkbox id="remember-me" label="Remember me" />
        <Button type="button">Sign In</Button>
      </form>
    </section>
  );
};

export default LoginForm;
