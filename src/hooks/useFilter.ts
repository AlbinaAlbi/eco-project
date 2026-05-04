import { useLanguage } from '../context/LanguageContext';
import { useAppSelector } from './hooks';

export const CITY_MAP: Record<string, string> = {
  київ: 'kyiv',
  львів: 'lviv',
  одеса: 'odesa',
  харків: 'kharkiv',
};

export const CATEGORY_MAP: Record<string, string> = {
  екологія: 'environment',
  тварини: 'animals',
  освіта: 'education',
  соціум: 'community',
  'гуманітарна допомога': 'humanitarian',
};

export const STATUS_MAP: Record<string, string> = {
  active: 'active',
  completed: 'completed',
};

export interface FilterOption {
  label: string;
  value: string;
  count: number;
}

export interface FilterItem {
  id: number;
  titleKey: string;
  descriptionKey: string;
  options?: FilterOption[];
  category: 'category' | 'location' | 'status' | 'search';
}

export const useFilter = (): FilterItem[] => {
  const { t } = useLanguage();
  const { projects } = useAppSelector((state) => state.projects);
  const categoryCount: Record<string, number> = {};
  const cityCount: Record<string, number> = {};
  const statusCount: Record<string, number> = {};

  projects.forEach((p) => {
    const rawCategory = p.category.trim().toLowerCase();
    const category = CATEGORY_MAP[rawCategory];

    const rawCity = p.city.trim().toLowerCase();
    const city = CITY_MAP[rawCity];

    const rawStatus = p.status.trim().toLowerCase();
    const status = STATUS_MAP[rawStatus];

    if (category) {
      categoryCount[category] = (categoryCount[category] || 0) + 1;
    }

    if (city) {
      cityCount[city] = (cityCount[city] || 0) + 1;
    }

    if (status) {
      statusCount[status] = (statusCount[status] || 0) + 1;
    }
  });

  return [
    {
      id: 1,
      category: 'category',
      titleKey: t('categoryFilter.title'),
      descriptionKey: t('categoryFilter.text'),
      options: [
        {
          label: t('categoryFilter.environment'),
          value: 'environment',
          count: categoryCount['environment'] ?? 0,
        },
        {
          label: t('categoryFilter.animals'),
          value: 'animals',
          count: categoryCount['animals'] ?? 0,
        },
        {
          label: t('categoryFilter.education'),
          value: 'education',
          count: categoryCount['education'] ?? 0,
        },
        {
          label: t('categoryFilter.community'),
          value: 'community',
          count: categoryCount['community'] ?? 0,
        },
        {
          label: t('categoryFilter.humanitarian'),
          value: 'humanitarian',
          count: categoryCount['humanitarian'] ?? 0,
        },
      ],
    },
    {
      id: 2,
      category: 'location',
      titleKey: t('locationFilter.title'),
      descriptionKey: t('locationFilter.text'),
      options: [
        {
          label: t('locationFilter.kyiv'),
          value: 'kyiv',
          count: cityCount['kyiv'] ?? 0,
        },
        {
          label: t('locationFilter.lviv'),
          value: 'lviv',
          count: cityCount['lviv'] ?? 0,
        },
        {
          label: t('locationFilter.odesa'),
          value: 'odesa',
          count: cityCount['odesa'] ?? 0,
        },
        {
          label: t('locationFilter.kharkiv'),
          value: 'kharkiv',
          count: cityCount['kharkiv'] ?? 0,
        },
      ],
    },
    {
      id: 3,
      category: 'status',
      titleKey: t('statusFilter.title'),
      descriptionKey: t('statusFilter.text'),
      options: [
        {
          label: t('statusFilter.active'),
          value: 'active',
          count: statusCount['active'] ?? 0,
        },
        {
          label: t('statusFilter.completed'),
          value: 'completed',
          count: statusCount['completed'] ?? 0,
        },
      ],
    },
    {
      id: 4,
      category: 'search',
      titleKey: t('searchFilter.title'),
      descriptionKey: t('searchFilter.text'),
    },
  ];
};
