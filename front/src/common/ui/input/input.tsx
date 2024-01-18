import {ChangeEvent, InputHTMLAttributes, useEffect, useRef, useState} from "react";

import styles from './input.module.scss'
import {classNames, Mods} from "@/common";

type HTMLInputProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'value' | 'onChange'
>;

interface InputProps extends HTMLInputProps {
  className?: string;
  value?: string | number;
  onChange?: (value: string) => void;
  autofocus?: boolean;
}

const Input = (props: InputProps) => {
  const {
    className,
    value,
    onChange,
    type = 'text',
    placeholder,
    autofocus,
    ...otherProps
  } = props

  const ref = useRef<HTMLInputElement>(null);
  const [isFocused, setIsFocused] = useState(false);

  useEffect(() => {
    if (autofocus) {
      setIsFocused(true);
      ref.current?.focus();
    }
  }, [autofocus]);

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value);
  };

  const onBlur = () => {
    setIsFocused(false);
  };

  const onFocus = () => {
    setIsFocused(true);
  };

  const mods: Mods = {
    [styles.focused]: isFocused,
  };

  return (
    <input
      ref={ref}
      type={type}
      value={value}
      onChange={onChangeHandler}
      className={classNames(styles.input, mods, [className])}
      onFocus={onFocus}
      onBlur={onBlur}
      placeholder={placeholder}
      {...otherProps}
    />
  );
};

export {Input};