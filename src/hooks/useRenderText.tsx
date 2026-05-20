import { ReactNode } from 'react';

export const useRenderText = () => {
  const renderText = (text: string | string[]): ReactNode => {
    if (Array.isArray(text)) {
      return text.map((line, i) => (
        <div key={i} style={{ display: 'block' }}>
          {line}
        </div>
      ));
    }
    return text;
  };

  return { renderText };
};
