import { IuserAccount } from "../../types";
import Button from "../UI/Button";

/**
 * UserAccount function
 * @param props contains user account properties
 * @returns the user account component
 */
const UserAccount = (props: IuserAccount) => {
  const { title, amount, text } = props;
  return (
    <section className="my-0 mx-auto mb-8 box-border flex w-4/5 flex-col items-center justify-between border border-black bg-white p-6 text-left user:flex-row">
      <div className="w-full flex-[1] leading-[18px]">
        <h3 className="leading-[18px]">{title}</h3>
        <p className="text-[2.5rem] font-bold leading-[46px]">{amount}</p>
        <p>{text}</p>
      </div>
      <div className="mr-4 w-full user:flex-[0]">
        <Button type="button" className="no-underline shadow user:w-[200px]">
          View Transactions
        </Button>
      </div>
    </section>
  );
};

export default UserAccount;
