import {ButtonHTMLAttributes, ReactNode} from "react";

import styles from './button.module.scss'
import {classNames, Mods} from "@/common";

export type ButtonVariant = 'outline' | 'filled';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  variant?: ButtonVariant;
  disabled?: boolean;
  children?: ReactNode;
}

const Button = (props: ButtonProps) => {
  const {
    className,
    children,
    variant = 'filled',
    disabled,
    ...otherProps
  } = props

  const mods: Mods = {
    [styles.disabled]: disabled,
  };

  return (
    <button
      type="button"
      className={classNames(styles.button, mods, [
        className,
        styles[variant]
      ])}
      disabled={disabled}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export {Button};