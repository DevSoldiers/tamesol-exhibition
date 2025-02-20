'use client';
import { ModalContext } from '@/lib/context/modal.context';
import { useCallback, useContext, useEffect, useState } from 'react';

export default function Modal({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(true);
  const {
    modalState: { setAuthType },
  } = useContext(ModalContext);

  const onClose = useCallback(() => {
    document.body.style.overflow = 'unset';
    setIsOpen(false);
    setAuthType(null);
  }, [setAuthType]);

  useEffect(() => {
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = 'unset';
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-3 md:px-14">
      <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm" onClick={onClose} />
      <div className="p-6 md:p-8 rounded-lg shadow-lg w-full max-w-xl relative z-50 md:mt-1/2">
        {children}
      </div>
    </div>
  );
}
