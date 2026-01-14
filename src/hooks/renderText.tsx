import { ReactNode } from 'react';

export const useRenderText = () => {
  const renderText = (text: string | string[]): ReactNode => {
    if (Array.isArray(text)) {
      return text.map((line, i) => (
        <span key={i}>
          {line}
          <br />
        </span>
      ));
    }
    return text;
  };

  return { renderText };
};
