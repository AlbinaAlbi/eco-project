import { TranslationKey } from '../context/LanguageContext';
import { useTranslatedText } from './useResponsiveText';

interface UseSectionHeaderParams {
  tagKey?: TranslationKey;
  titleKey: TranslationKey;
  descriptionKey?: TranslationKey;
}

export const useSectionHeader = ({ tagKey, titleKey, descriptionKey }: UseSectionHeaderParams) => {
  const tag = useTranslatedText(tagKey ?? titleKey) as string;

  const title = useTranslatedText(titleKey ?? tagKey);

  const description = useTranslatedText(descriptionKey ?? titleKey);

  return {
    tag,
    title,
    description: descriptionKey ? description : '',
  };
};
