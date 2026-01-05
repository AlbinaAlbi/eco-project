import React, { useEffect } from 'react';
import { MessageProps } from '../../types/MessageProps';

export const Message: React.FC<MessageProps> = ({ message, onClose, duration = 3000 }) => {
  useEffect(() => {
    const timer = setTimeout(onClose, duration);
    return () => clearTimeout(timer);
  }, [onClose, duration]);

  return (
    <div
      style={{
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        background: 'rgba(0,0,0,0.8)',
        color: '#fff',
        padding: '12px 20px',
        borderRadius: '8px',
        zIndex: 9999,
      }}
    >
      {message}
    </div>
  );
};
