export type User = {
  id: string;
  email: string;
  password_hash: string;
  provider: string;
  is_active: boolean;
  created_at: Date;
};
