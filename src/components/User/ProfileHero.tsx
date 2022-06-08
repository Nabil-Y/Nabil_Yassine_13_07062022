import Button from "../UI/Button";
import EditUsername from "./EditUsername";

/**
 * ProfileHero function
 * @returns the profile hero component
 */
const ProfileHero = () => {
  return (
    <div className="mb-8 text-white">
      <h2 className="my-6 text-3xl font-bold">
        Welcome back
        <br />
        Tony Jarvis!
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
