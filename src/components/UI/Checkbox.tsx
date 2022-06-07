import { Icheckbox } from "../../types";

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
