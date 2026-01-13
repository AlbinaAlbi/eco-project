import { TranslationKey } from '../context/LanguageContext';
import { useTranslatedText } from './useResponsiveText';

interface UseSectionHeaderParams {
  tagKey: TranslationKey;
  titleKey: TranslationKey;
  descriptionKey?: TranslationKey;
}

export const useSectionHeader = ({ tagKey, titleKey, descriptionKey }: UseSectionHeaderParams) => {
  const tag = useTranslatedText(tagKey) as string;

  const title = useTranslatedText(titleKey ?? tagKey);

  const description = useTranslatedText(descriptionKey ?? tagKey);

  return {
    tag,
    title,
    description: descriptionKey ? description : '',
  };
};
