import ProfileHero from "../components/User/ProfileHero";
import UserAccount from "../components/User/UserAccount";
import { IuserAccount } from "../types";

/**
 * User function
 * @returns the user page
 */
const User = () => {
  const accounts: IuserAccount[] = [
    {
      title: "Argent Bank Checking (x8349)",
      amount: "$2,082.79",
      text: "Available Balance",
    },
    {
      title: "Argent Bank Savings (x6712)",
      amount: "$10,928.42",
      text: "Available Balance",
    },
    {
      title: "Argent Bank Credit Card (x8349)",
      amount: "$184.30",
      text: "Current Balance",
    },
  ];
  return (
    <main className=" flex-[1] bg-secondary-dark">
      <ProfileHero />
      <h2 className="sr-only">Accounts</h2>
      {accounts.map((account) => {
        const { title, amount, text } = account;
        return (
          <UserAccount
            key={Date.now() + title}
            title={title}
            amount={amount}
            text={text}
          />
        );
      })}
    </main>
  );
};

export default User;
