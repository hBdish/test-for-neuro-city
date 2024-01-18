import {ReactNode} from "react";

import styles from './form.module.scss'
import {classNames, HStack} from "@/common";

interface FormProps {
  children?: ReactNode
  title?: string
}

const Form = (props: FormProps) => {
  const {children, title} = props
  return (
    <article className={classNames(styles.form, {[styles.withTitle]: Boolean(title)}, [])}>
      {title &&
        <HStack max align={"center"} justify={"center"}>
          <h2 className={styles.title}>{title}</h2>
        </HStack>
      }
      {children}
    </article>
  );
};

export {Form};