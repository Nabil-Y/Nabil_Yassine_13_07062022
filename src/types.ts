import { ReactNode } from "react";

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
   * Add function to the button
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
}
