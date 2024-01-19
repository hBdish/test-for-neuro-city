import {classNames, HStack, Mods, useModal} from "@/common";
import styles from './snack-bar.module.scss'
import {Portal} from "@/common/ui/portal";

interface SnackbarPops {
  message: string
  isOpen?: boolean;
  onClose?: () => void;
}

const Snackbar = (props: SnackbarPops) => {
  const {message, isOpen, onClose} = props
  const {close, isClosing} = useModal({
    animationDelay: 0,
    autoCloseDelay: 3000,
    onClose,
    isOpen,
  });


  const mods: Mods = {
    [styles.opened]: isOpen,
    [styles.isClosing]: isClosing,
  };

  return (
    <Portal element={document.getElementById('app') ?? document.body}>
      <HStack max justify={"between"} align={"center"} className={classNames(styles.snackbar, mods, [])}>
        <div className={styles.message}>{message}</div>
        <button onClick={close} className={styles.symbol}>&times;</button>
      </HStack>
    </Portal>

  );
};
export {Snackbar};