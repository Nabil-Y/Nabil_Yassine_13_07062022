import React, { ReactNode } from "react";

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
  onChange?: React.ChangeEventHandler<HTMLElement>;
  /**
   * Optional unique key for mapping
   */
  key?: string;
}

/**
 * Checkbox component props
 */
export interface Iuser {
  /**
   * User firstName
   */
  firstName: string;
  /**
   * User lastName
   */
  lastName: string;
}
