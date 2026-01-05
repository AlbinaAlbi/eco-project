export type Project = {
  id: number;
  title: string;
  shortDescription: string;
  imageUrl: string;
  city: string;
  lat: number;
  lng: number;
  currentAmount: number;
  goalAmount: number;
  status: 'ACTIVE' | 'COMPLETED' | 'PAUSED';
};
