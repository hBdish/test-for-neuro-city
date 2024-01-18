import {HStack} from "@/common";
import styles from './snack-bar.module.scss'

interface SnackbarPops {
  message: string
}

const Snackbar = (props: SnackbarPops) => {
  return (
    <HStack max justify={"between"} align={"center"} className={styles.snackbar}>
      <div className={styles.message}>{props.message}</div>
      <div className={styles.symbol}>&times;</div>
    </HStack>
  );
};
export {Snackbar};