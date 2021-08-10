import { useContext } from 'react';
import { ToastContext } from './toast-provider';
import { ToastMessage } from './toast-message';

export const ToastContainer = () => {
  const context = useContext(ToastContext);

  const handleRemove = (id: string) => context?.remove(id);

  console.log(context);

  return (
    <div className="fixed z-50 w-full md:max-w-sm p-4 md:p-4 max-h-screen overflow-hidden pointer-events-none">
      <div className="flex-1 flex-col fade w-full mr-8 justify-end pointer-events-none">
        {context?.toasts.map((toast) => {
          return (
            <div
              key={toast.id}
              className="flex py-1 w-full transform transition-all duration-300 pointer-events-auto"
            >
              <ToastMessage
                id={toast.id}
                message={toast.message}
                type={toast.type}
                header={toast.header}
                icon={toast.icon}
                truncate={toast.truncate}
                onRemove={handleRemove}
                lifetime={toast.lifetime}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};
