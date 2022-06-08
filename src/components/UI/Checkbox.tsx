import { Icheckbox } from "../../types";

/**
 * Checkbox function
 * @param props contains checkbox properties
 * @returns the checkbox component
 */
const Checkbox = (props: Icheckbox) => {
  const { id, label } = props;
  return (
    <div className="flex">
      <input type="checkbox" id={id} />
      <label htmlFor={id} className="ml-1">
        {label}
      </label>
    </div>
  );
};

export default Checkbox;
