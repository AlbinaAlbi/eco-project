import { TranslationKey, useLanguage } from '../context/LanguageContext';
import { DeviceType, useDeviceType } from './getDeviceType';

export const useTranslatedText = <K extends TranslationKey>(key: K) => {
  const { t } = useLanguage();
  const device = useDeviceType();

  const value = t(key);

  if (value && typeof value === 'object' && !Array.isArray(value)) {
    const typedValue = value as Partial<Record<DeviceType, string | string[]>>;
    return typedValue[device] ?? typedValue['desktop'] ?? '';
  }

  return value as string | string[];
};
