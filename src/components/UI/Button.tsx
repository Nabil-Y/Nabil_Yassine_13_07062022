import { Ibutton } from "../../types";

const Button = (props: Ibutton) => {
  const { onClick, children, className } = props;
  const baseClasses =
    "mt-4 block w-full bg-primary p-2 text-lg font-bold text-white underline";
  return (
    <button onClick={onClick} className={`${baseClasses} ${className}`}>
      {children}
    </button>
  );
};

export default Button;
