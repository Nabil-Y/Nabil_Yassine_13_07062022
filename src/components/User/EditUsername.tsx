import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import Button from "../UI/Button";
import Input from "../UI/Input";
import { updateUserState } from "../../utils/API_functions";
import { updateUserData } from "../../store/slices/userSlice";

/**
 * EditUsername function
 * @returns edit user name form
 */
const EditUsername = () => {
  const [isEditingName, setIsEditingName] = useState(false);
  const [newFirstName, setNewFirstName] = useState("");
  const [newLastName, setNewLastName] = useState("");
  const token = useAppSelector((state) => state.login.token);
  const userState = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();

  const resetForm = () => {
    setNewFirstName("");
    setNewLastName("");
    setIsEditingName(false);
  };

  const submitHandler = async (event: React.SyntheticEvent) => {
    event.preventDefault();

    const updatedFirstName =
      newFirstName === "" ? userState.firstName : newFirstName;
    const updatedLastName =
      newLastName === "" ? userState.lastName : newLastName;

    const status = await updateUserState(
      token,
      updatedFirstName,
      updatedLastName
    );
    if (status) {
      dispatch(
        updateUserData({
          firstName: updatedFirstName,
          lastName: updatedLastName,
        })
      );
    }
    resetForm();
  };

  return (
    <>
      {isEditingName ? (
        <form className="mx-auto max-w-[300px]" onSubmit={submitHandler}>
          <div className="flex items-center justify-evenly">
            <Input
              id="firstname"
              label="Change firstname"
              type="text"
              onChange={(event) =>
                setNewFirstName((event.target as HTMLInputElement).value)
              }
            />
            <div className="mr-4"></div>
            <Input
              id="lastname"
              label="Change lastname"
              type="text"
              onChange={(event) =>
                setNewLastName((event.target as HTMLInputElement).value)
              }
            />
          </div>
          <div className="flex items-center justify-between">
            <Button
              type="button"
              className=" w-40 no-underline"
              onClick={() => {
                resetForm();
                setIsEditingName(false);
              }}
            >
              Cancel
            </Button>
            <div className="mr-4"></div>
            <Button type="submit" className=" w-40 no-underline">
              Save
            </Button>
          </div>
        </form>
      ) : (
        <Button
          type="button"
          className="mx-auto w-auto p-[10px] text-sm no-underline"
          onClick={() => setIsEditingName(true)}
        >
          Edit Name
        </Button>
      )}
    </>
  );
};

export default EditUsername;
