import React, {
  useCallback,
  createContext,
  useContext,
  ReactNode,
  useState,
} from 'react';

import { nanoid } from 'nanoid';

import { ToastContainer } from './toast-container';

type ToastMessageType = 'Info' | 'Success' | 'Warning' | 'Error';

export type ToastProviderType = {
  children: ReactNode;
};

export type Toast = {
  id: string;
  lifetime: number;
  message: string | ReactNode;
  type?: ToastMessageType;
  truncate?: boolean;
  icon?: string;
  header?: string;
};

export type ToastContextType = {
  toasts: Array<Toast>;
  pushError(
    header: string,
    message: string,
    lifetime?: number,
    truncate?: boolean
  ): void;
  pushWarning(
    header: string,
    message: string,
    lifetime?: number,
    truncate?: boolean
  ): void;
  pushSuccess(
    header: string,
    message: string,
    lifetime?: number,
    truncate?: boolean
  ): void;
  pushInfo(
    header: string,
    message: string,
    lifetime?: number,
    truncate?: boolean
  ): void;
  push(
    header: string,
    message: string,
    type: ToastMessageType,
    lifetime?: number,
    truncate?: boolean
  ): void;
  remove(id: string): void;
};

export const ToastContext = createContext<ToastContextType | undefined>(
  undefined
);

export const useToast = () => useContext(ToastContext);

export const ToastProvider = ({ children }: ToastProviderType) => {
  const [toasts, setToasts] = useState<Array<Toast>>([]);

  const push = useCallback(
    (
      header: string,
      message: string,
      type: ToastMessageType,
      lifetime?: number,
      truncate?: boolean
    ) => {
      if (message) {
        const newToast: Toast = {
          id: nanoid(),
          header,
          message,
          type,
          lifetime: lifetime ? lifetime : 4000,
          truncate,
        };

        setToasts((prevState) => [...prevState, newToast]);
      }
    },
    [setToasts, toasts]
  );

  const pushError = useCallback(
    (header: string, message: string, lifetime?: number, truncate?: boolean) =>
      push(header, message, 'error', lifetime, truncate),
    [push]
  );

  const pushWarning = useCallback(
    (header: string, message: string, lifetime?: number, truncate?: boolean) =>
      push(header, message, 'warning', lifetime, truncate),
    [push]
  );

  const pushSuccess = useCallback(
    (header: string, message: string, lifetime?: number, truncate?: boolean) =>
      push(header, message, 'success', lifetime, truncate),
    [push]
  );

  const pushInfo = useCallback(
    (header: string, message: string, lifetime?: number, truncate?: boolean) =>
      push(header, message, 'info', lifetime, truncate),
    [push]
  );

  const remove = useCallback(
    (id: string) => {
      setToasts((prevState) => prevState.filter((e) => e.id != id));
    },
    [setToasts, toasts]
  );

  const ToastContextValue = useCallback(() => {
    return {
      toasts,
      pushError,
      pushWarning,
      pushSuccess,
      pushInfo,
      push,
      remove,
    };
  }, [
    toasts,
    setToasts,
    pushError,
    pushWarning,
    pushSuccess,
    pushInfo,
    push,
    remove,
  ]);

  return (
    <ToastContext.Provider value={ToastContextValue()}>
      <ToastContainer />
      {children}
    </ToastContext.Provider>
  );
};
