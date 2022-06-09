import { Iinput } from "../../types";

/**
 * Input function
 * @param props contains input properties
 * @returns the input component
 */
const Input = (props: Iinput) => {
  const { id, label, type, onChange } = props;
  return (
    <div className="mb-4 flex flex-col text-left">
      <label htmlFor={id} className="font-bold">
        {label}
      </label>
      <input
        type={type}
        id={id}
        className="border border-secondary p-1 text-lg text-black"
        onChange={onChange}
      />
    </div>
  );
};

export default Input;
