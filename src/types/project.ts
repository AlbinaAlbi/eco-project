export type Project = {
  id: number;
  title: string;
  shortDescription: string;
  fullDescription: string;
  imageUrl: string;
  category: string;
  city: string;
  goalAmount: number;
  currentAmount: number;
  status: string;
  goals: [
    {
      title: string;
      description: string;
    },
  ];
  volunteersNeeded: number;
  volunteersActive: number;
  progress: number;
  readyToHelpTitle: string;
  readyToHelpDescription: string;
  imageDesktop: string;
  imageTablet: string;
  imageMobile: string;
};
