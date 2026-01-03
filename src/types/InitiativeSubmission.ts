export type InitiativeSubmission = {
  id: number;
  userId: string;
  title: string;
  description: string;
  status: "pending" | "approved" | "rejected";
  createdAt: string;
};