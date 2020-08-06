export type LoginPayload = {
  email: string;
  password: string;
}

export type UserData = {
  id: number;
  name: string;
  lastname: string;
  username: string;
  email: string;
  password: string;
  confirmPassword?: string;
}

export type UserDataList = [UserData];