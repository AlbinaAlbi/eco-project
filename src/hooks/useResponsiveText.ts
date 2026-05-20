import { TranslationKey, useLanguage } from '../context/LanguageContext';
import { DeviceType, useDeviceType } from '../utils/getDeviceType';

export const useTranslatedText = (key?: TranslationKey): string | string[] => {
  const { t } = useLanguage();
  const device = useDeviceType();

  if (!key) return '';

  const value = t(key);

  if (value && typeof value === 'object' && !Array.isArray(value)) {
    const typedValue = value as Partial<Record<DeviceType, string | string[]>>;

    return typedValue[device] ?? typedValue.desktop ?? typedValue.mobile ?? '';
  }

  return value ?? '';
};
