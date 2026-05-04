import { TranslationKey, useLanguage } from '../context/LanguageContext';
import { DeviceType, useDeviceType } from '../utils/getDeviceType';

export const useTranslatedText = (key?: TranslationKey): string => {
  const { t } = useLanguage();
  const device = useDeviceType();

  if (!key) return '';

  const value = t(key);

  if (value && typeof value === 'object' && !Array.isArray(value)) {
    const typedValue = value as Partial<Record<DeviceType, string | string[]>>;

    const deviceValue = typedValue[device] ?? typedValue.desktop ?? typedValue.mobile;

    if (Array.isArray(deviceValue)) {
      return deviceValue.join(' ');
    }

    return deviceValue ?? '';
  }

  if (Array.isArray(value)) {
    return value.join(' ');
  }

  return value ?? '';
};
