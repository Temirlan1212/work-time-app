import { ButtonHTMLAttributes, FC } from "react";

// @ts-ignore
import styles from "./Button.module.scss";
// @ts-ignore
import cn from "classname";

export interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  className: "primary" | "dark" | "transparent" | "gray";
}

export const Button: FC<IButton> = ({ children, className, ...rest }) => {
  return (
    <button {...rest} className={cn(styles[className], styles.button)}>
      {children}
    </button>
  );
};
