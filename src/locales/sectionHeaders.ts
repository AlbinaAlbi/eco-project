import { COLORS } from '../styles/colors';

export const SECTION_HEADERS = {
  action: {
    tagKey: 'actionTag' as const,
    titleKey: 'actionTitle' as const,
    descriptionKey: 'actionDescription',
    tagColor: COLORS.gray100,
    titleColor: COLORS.black,
  },
  mission: {
    tagKey: 'missionTag' as const,
    titleKey: 'missionTitle' as const,
    tagColor: COLORS.gray100,
    titleColor: COLORS.black,
  },
  works: {
    tagKey: 'worksTag' as const,
    titleKey: 'worksTitle' as const,
    tagColor: COLORS.gray200,
    titleColor: COLORS.black,
  },
  featured: {
    tagKey: 'featuredTag' as const,
    titleKey: 'featuredTitle' as const,
    descriptionKey: 'featuredDescription' as const,
    tagColor: COLORS.gray100,
    titleColor: COLORS.black,
  },
  faq: {
    tagKey: 'faqTag' as const,
    titleKey: 'faqTitle' as const,
    tagColor: COLORS.gray200,
    titleColor: COLORS.black,
  },
  start: {
    tagKey: 'startTag' as const,
    titleKey: 'startTitle' as const,
    tagColor: COLORS.gray100,
    titleColor: COLORS.white,
  },
} as const;
