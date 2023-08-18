export type User = {
  userId: string;
  name: string;
  email: string;
  emailVerified: boolean;
  role: "user" | "admin";
  createdAt: Date;
  updatedAt: Date;
  isEnabled: boolean;
};
