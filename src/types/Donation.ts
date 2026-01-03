export type Donation = {
  id: number;
  userId: string;
  projectId: number;
  amount: number;
  date: string; // дата доната в ISO формате
};