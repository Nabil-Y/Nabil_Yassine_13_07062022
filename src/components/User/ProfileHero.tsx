import { Iuser } from "../../types";
import Button from "../UI/Button";

const ProfileHero = (props: Iuser) => {
  const { firstName, lastName } = props;
  return (
    <div className="mb-8 text-white">
      <h2 className="my-6 text-3xl font-bold">
        Welcome back
        <br />
        {`${firstName} ${lastName}`}!
      </h2>
      <Button className="mx-auto w-auto p-[10px] text-sm no-underline">
        Edit Name
      </Button>
    </div>
  );
};

export default ProfileHero;
