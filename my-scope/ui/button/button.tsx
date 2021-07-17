import React from "react";
import styles from "./button.module.scss";

export type ButtonProps = {
  /**
   * a text to be rendered in the component.
   */
  text: string;
  /** sets variant to primary, secondary or dangerous */
  variant?: "primary" | "secondary";
};

export function Button({ text, variant }: ButtonProps) {
  return (
    <button className={styles.button} data-variant={variant}>
      {text}
    </button>
  );
}
