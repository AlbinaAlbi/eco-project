import React, { createContext, useContext, useState, ReactNode } from 'react';
import { translations } from '../locales/translations';

type Language = 'en' | 'ua';
type TranslationSchema = typeof translations.en;

type LeafKeys<T> = {
  [K in keyof T & string]: T[K] extends string | readonly string[] // строки или массивы
    ? K
    : T[K] extends { mobile?: any; tablet?: any; desktop?: any } // объект с устройствами
      ? K
      : T[K] extends object
        ? `${K}.${LeafKeys<T[K]>}`
        : never;
}[keyof T & string];

type ValueByPath<T, P extends string> = P extends `${infer K}.${infer R}`
  ? K extends keyof T
    ? ValueByPath<T[K], R>
    : never
  : P extends keyof T
    ? T[P]
    : never;

export type TranslationKey = LeafKeys<TranslationSchema>;

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: <K extends TranslationKey>(key: K) => ValueByPath<TranslationSchema, K>;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = <K extends TranslationKey>(key: K) => {
    const parts = key.split('.');

    let result: unknown = translations[language];

    for (const part of parts) {
      if (typeof result === 'object' && result !== null) {
        result = (result as Record<string, unknown>)[part];
      }
    }

    return result as ValueByPath<TranslationSchema, K>;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
};
