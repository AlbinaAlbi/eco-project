export type ProjectCreate = {
  title: string;
  shortDescription: string;
  goals: string;
  category: string;
  contactEmail: string;
  goalAmount: number | string;
  duration: string;
  image?: File | null;
};
