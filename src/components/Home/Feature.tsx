import { Ifeature } from "../../types";

/**
 * Feature function
 * @param props contains feature properties
 * @returns the feature component
 */
const Feature = (props: Ifeature) => {
  const { icon, altIcon, title, text } = props;
  return (
    <div className="flex-[1] p-10">
      <img
        src={icon}
        alt={altIcon}
        className="mx-auto w-[100px] rounded-full border-[10px] border-solid border-primary p-4"
      />
      <h3 className=" mb-2 mt-6 text-[1.25rem] font-bold text-secondary">
        {title}
      </h3>
      <p>{text}</p>
    </div>
  );
};

export default Feature;
