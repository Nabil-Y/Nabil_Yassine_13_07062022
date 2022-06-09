import { useAppSelector } from "../../store/hooks";
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
      <EditUsername />
    </div>
  );
};

export default ProfileHero;
