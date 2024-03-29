import {MutableRefObject, useCallback, useEffect, useRef, useState,} from 'react';

interface UseModalProps {
  onClose?: () => void;
  isOpen?: boolean;
  animationDelay: number;
  autoCloseDelay: number
}

export function useModal(props: UseModalProps) {
  const {animationDelay, isOpen, onClose, autoCloseDelay} = props
  const [isClosing, setIsClosing] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const timerRef = useRef() as MutableRefObject<ReturnType<typeof setTimeout>>;
  const timerCloseRef = useRef() as MutableRefObject<ReturnType<typeof setTimeout>>;

  useEffect(() => {
    if (isOpen) {
      setIsMounted(true);
    }
  }, [isOpen]);

  const close = useCallback(() => {
    if (onClose) {
      setIsClosing(true);
      timerRef.current = setTimeout(() => {
        onClose();
        setIsClosing(false);
      }, animationDelay);
    }
  }, [animationDelay, onClose]);

  const onKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        close();
      }
    },
    [close],
  );

  useEffect(() => {
    if (isOpen) {
      window.addEventListener('keydown', onKeyDown);
      timerCloseRef.current = setTimeout(() => {
        close()

      }, autoCloseDelay)
    }


    return () => {
      clearTimeout(timerRef.current);
      clearTimeout(timerCloseRef.current);
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [isOpen, onKeyDown, autoCloseDelay]);

  return {
    isClosing,
    isMounted,
    close,
  };
}
