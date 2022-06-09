import { useAppSelector } from "../../store/hooks";
import Button from "../UI/Button";
import EditUsername from "./EditUsername";

/**
 * ProfileHero function
 * @returns the profile hero component
 */
const ProfileHero = () => {
  const firstName = useAppSelector((state) => state.user.firstName);
  const lastName = useAppSelector((state) => state.user.lastName);
  return (
    <div className="mb-8 text-white">
      <h2 className="my-6 text-3xl font-bold">
        Welcome back
        <br />
        {`${firstName} ${lastName}`}!
      </h2>
      <div className="">
        <EditUsername />
      </div>
      <Button
        type="button"
        className="mx-auto w-auto p-[10px] text-sm no-underline"
      >
        Edit Name
      </Button>
    </div>
  );
};

export default ProfileHero;
