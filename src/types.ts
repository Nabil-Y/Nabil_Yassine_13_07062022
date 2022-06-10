import React, { ReactNode } from "react";

/*
  1- component Props
  2- Redux initial states
*/

/*
  1- ComponentProps
*/

/**
 * Feature component props
 */
export interface Ifeature {
  /**
   * Imported Icon
   */
  icon: string;
  /**
   * Imported Icon alt text
   */
  altIcon: string;
  /**
   * Feature Title
   */
  title: string;
  /**
   * Feature description
   */
  text: string;
  /**
   * Optional unique key for mapping
   */
  key?: string;
}

/**
 * Button component props
 */
export interface Ibutton {
  /**
   * Button content
   */
  children: ReactNode;
  /**
   * Add classes to button for further customisation
   */
  className?: string;
  /**
   * Click event handler
   */
  onClick?: React.MouseEventHandler<HTMLElement>;
  /**
   * Button type
   */
  type: "button" | "submit" | "reset" | undefined;
}

/**
 * Checkbox component props
 */
export interface Icheckbox {
  /**
   * Checkbox id
   */
  id: string;
  /**
   * Checkbox label
   */
  label: string;
}

/**
 * Input component props
 */
export interface Iinput {
  /**
   * Input id
   */
  id: string;
  /**
   * Input label
   */
  label: string;
  /**
   * Input type
   */
  type: string;
  /**
   * Change event handler
   */
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  /**
   * Optional unique key for mapping
   */
  key?: string;
}

/**
 * Checkbox component props
 */
export interface IuserAccount {
  /**
   * Account title
   */
  title: string;
  /**
   * Account amount
   */
  amount: string;
  /**
   * Account description
   */
  text: string;
  /**
   * Optional unique key for mapping
   */
  key?: string;
}

/*
  2- Redux initial states
*/

/**
 * Login slice initial state typing
 */
export interface loginState {
  /**
   * True if the user is logged in
   */
  isLoggedIn: boolean;
  /**
   * Auth token, empty string if not logged in
   */
  token: string;
}

/**
 * User slice initial state typing
 */
export interface userState {
  /**
   * User email
   */
  email: string;
  /**
   * User firstName
   */
  firstName: string;
  /**
   * User lastName
   */
  lastName: string;
  /**
   * Date and time of user account creation
   */
  createdAt: string;
  /**
   * Date and time of last user account update
   */
  updatedAt: string;
  /**
   * User id
   */
  id: string;
}

/**
 * Response to update username
 */
export interface usernameChange {
  /**
   * New user firstName
   */
  firstName: string;
  /**
   * New user lastName
   */
  lastName: string;
}
