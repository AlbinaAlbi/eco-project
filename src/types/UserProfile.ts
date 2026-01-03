import { User } from "./user";

export type UserProfile = User & {
  donations: Donation[];
  initiatives: InitiativeSubmission[];
};
