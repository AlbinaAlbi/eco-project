import { useLanguage } from '../context/LanguageContext';
import { useAppSelector } from './hooks';
export interface FilterItem {
  id: number;
  titleKey: string;
  descriptionKey: string;
  options?: { label: string; count: number }[];
  category: string;
}

export const useFilter = (): FilterItem[] => {
  const { t } = useLanguage();
  const { projects } = useAppSelector((state) => state.projects);

  const categoryCount: Record<string, number> = {};
  projects.forEach((project) => {
    const key = project.category.toLowerCase();
    categoryCount[key] = (categoryCount[key] || 0) + 1;
  });

  const cityCount: Record<string, number> = {};
  projects.forEach((project) => {
    const key = project.city.trim().toLowerCase();
    cityCount[key] = (cityCount[key] || 0) + 1;
  });

  const categoryTitle = t('categoryFilter.title');
  const categoryText = t('categoryFilter.text');
  const categoryOptions1 = t('categoryFilter.treePlanting');
  const categoryOptions2 = t('categoryFilter.recycling');
  const categoryOptions3 = t('categoryFilter.animalCare');
  const categoryOptions4 = t('categoryFilter.cleanUps');

  const locationTitle = t('locationFilter.title');
  const locationText = t('locationFilter.text');
  const locationOptions1 = t('locationFilter.kyiv');
  const locationOptions2 = t('locationFilter.lviv');
  const locationOptions3 = t('locationFilter.odesa');
  const locationOptions4 = t('locationFilter.kharkiv');

  const statusTitle = t('statusFilter.title');
  const statusText = t('statusFilter.text');
  const statusOptions1 = t('statusFilter.active');
  const statusOptions2 = t('statusFilter.progress');

  const searchTitle = t('searchFilter.title');
  const searchText = t('searchFilter.text');

  return [
    {
      id: 1,
      titleKey: categoryTitle,
      descriptionKey: categoryText,
      options: [
        {
          label: categoryOptions1,
          count: categoryCount['treeplanting'] ?? '0',
        },
        { label: categoryOptions2, count: categoryCount['recycling'] ?? '0' },
        { label: categoryOptions3, count: categoryCount['animalcare'] ?? '0' },
        { label: categoryOptions4, count: categoryCount['cleanups'] ?? '0' },
      ],
      category: 'category',
    },
    {
      id: 2,
      titleKey: locationTitle,
      descriptionKey: locationText,
      options: [
        { label: locationOptions1, count: cityCount['київ'] },
        { label: locationOptions2, count: cityCount['львів'] ?? '0' },
        { label: locationOptions3, count: cityCount['одеса'] ?? '0' },
        { label: locationOptions4, count: cityCount['харків'] ?? '0' },
      ],
      category: 'location',
    },
    {
      id: 3,
      titleKey: statusTitle,
      descriptionKey: statusText,
      options: [
        {
          label: statusOptions1,
          count: projects.filter((p) => p.status === 'ACTIVE').length,
        },
        {
          label: statusOptions2,
          count: projects.filter((p) => p.status === 'PROGRESS').length,
        },
      ],
      category: 'status',
    },
    {
      id: 4,
      titleKey: searchTitle,
      descriptionKey: searchText,
      category: 'search',
    },
  ];
};
