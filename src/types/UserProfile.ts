import { Donation } from "./Donation";
import { Initiative } from "./Initiative";
import { User } from "./User";

export type UserProfile = User & {
  donations: Donation[];
  initiatives: Initiative[];
};
