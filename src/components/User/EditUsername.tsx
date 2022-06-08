import Button from "../UI/Button";
import Input from "../UI/Input";

/**
 * EditUsername function
 * @returns edit user name form
 */
const EditUsername = () => {
  return (
    <form className="mx-auto max-w-[300px]">
      <div className="flex items-center justify-evenly">
        <Input id="username" label="Change username" type="text" />
        <div className="mr-4"></div>
        <Input id="password" label="Change password" type="password" />
      </div>
      <div className="flex items-center justify-between">
        <Button type="button" className=" w-40 no-underline">
          Cancel
        </Button>
        <div className="mr-4"></div>
        <Button type="submit" className=" w-40 no-underline">
          Save
        </Button>
      </div>
    </form>
  );
};

export default EditUsername;
