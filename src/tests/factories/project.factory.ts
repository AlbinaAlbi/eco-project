import { Project } from '../../types/Project';

export const createProject = (overrides?: Partial<Project>): Project => ({
  id: 1,
  title: 'Test Project',
  shortDescription: 'Short description',
  fullDescription: 'Full description',
  imageUrl: 'https://example.com/image.jpg',
  category: 'Frontend',
  city: 'Kyiv',
  goalAmount: 1000,
  currentAmount: 100,
  status: 'Active',
  goals: [{ title: 'Goal 1', description: 'Goal description' }],
  volunteersNeeded: 5,
  volunteersActive: 2,
  progress: 10,
  readyToHelpTitle: 'Help title',
  readyToHelpDescription: 'Help description',
  imageDesktop: 'https://example.com/desktop.jpg',
  imageTablet: 'https://example.com/tablet.jpg',
  imageMobile: 'https://example.com/mobile.jpg',
  ...overrides,
});
