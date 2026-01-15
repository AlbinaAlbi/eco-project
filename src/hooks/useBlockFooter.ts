import { useLanguage } from '../context/LanguageContext';

export interface NavItem {
  label: string;
  path: string;
  isAnchor?: boolean;
}

export interface BlockFooterProps {
  id: number;
  title: string;
  navItems: NavItem[];
}

export const useBlockFooter = (): BlockFooterProps[] => {
  const { t } = useLanguage();

  return [
    {
      id: 1,
      title: t('exploreBlock.title'),
      navItems: [
        { label: t('exploreBlock.projects'), path: '/projects' },
        { label: t('exploreBlock.about'), path: '/about' },
        { label: t('exploreBlock.works'), path: '/#works', isAnchor: true },
        { label: t('exploreBlock.donate'), path: '/donate' },
      ],
    },
    {
      id: 2,
      title: t('supportBlock.title'),
      navItems: [
        { label: t('supportBlock.contact'), path: '/contacts' },
        { label: t('supportBlock.faqs'), path: '/#faq', isAnchor: true },
      ],
    },
    {
      id: 3,
      title: t('socialBlock.title'),
      navItems: [
        { label: t('socialBlock.instagram'), path: 'https://instagram.com' },
        { label: t('socialBlock.youtube'), path: 'https://youtube.com' },
        { label: t('socialBlock.linkedin'), path: 'https://linkedin.com' },
      ],
    },
  ];
};
