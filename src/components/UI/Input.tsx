import { Iinput } from "../../types";

const Input = (props: Iinput) => {
  const { id, label, type } = props;
  return (
    <div className="mb-4 flex flex-col text-left">
      <label htmlFor={id} className="font-bold">
        {label}
      </label>
      <input
        type={type}
        id={id}
        className="border border-secondary p-1 text-lg"
      />
    </div>
  );
};

export default Input;
