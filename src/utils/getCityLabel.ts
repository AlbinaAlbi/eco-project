import { cityTranslations } from '../locales/translations';
import { CityKey } from '../types/CityKey';

export const getCityLabel = (city: CityKey, count: number, lang: 'en' | 'ua') => {
  const name = cityTranslations[city][lang];
  return `${name} (${count})`;
};
