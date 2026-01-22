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
  statistics: {
    tagKey: 'statisticsTag' as const,
    titleKey: 'statisticsTitle' as const,
    descriptionKey: 'statisticsDescription' as const,
    tagColor: COLORS.gray200,
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
    descriptionKey: 'startDescription' as const,
    tagColor: COLORS.gray100,
    titleColor: COLORS.white,
  },
  explore: {
    tagKey: 'exploreTag' as const,
    titleKey: 'exploreTitle' as const,
    descriptionKey: 'exploreDescription' as const,
    tagColor: COLORS.gray100,
    titleColor: COLORS.black,
  },
  findAProject: {
    titleKey: 'findAProjectTitle' as const,
    descriptionKey: 'findAProjectDescription' as const,
    titleColor: COLORS.black,
  },
  whoWeAre: {
    tagKey: 'whoWeAreTag' as const,
    titleKey: 'whoWeAreTitle' as const,
    descriptionKey: 'whoWeAreDescription' as const,
    tagColor: COLORS.gray100,
    titleColor: COLORS.black,
    describtionColor: COLORS.blackDescription,
  },
  goals: {
    tagKey: 'goalsTag' as const,
    titleKey: 'goalsTitle' as const,
    tagColor: COLORS.gray200,
    titleColor: COLORS.black,
  },
} as const;
