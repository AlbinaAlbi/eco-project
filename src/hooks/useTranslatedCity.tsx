import { useLanguage } from '../context/LanguageContext';
import { cityTranslations } from '../locales/translations';

export const useTranslatedCity = (city: string) => {
  const { language } = useLanguage();

  const key = Object.keys(cityTranslations).find((k) => cityTranslations[k].ua === city);

  if (!key) return city;

  return cityTranslations[key][language];
};
