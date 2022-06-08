import { Ibutton } from "../../types";

/**
 * Button function
 * @param props contains button properties
 * @returns the button wrapper component
 */
const Button = (props: Ibutton) => {
  const { onClick, children, className, type } = props;
  const baseClasses =
    "mt-4 block w-full bg-primary p-2 text-lg font-bold text-white underline";
  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseClasses} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
