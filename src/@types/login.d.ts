export type ILoginParams = {
  email: string;
  passowrd: string;
};

export type ILoginSuccesResponse = {
  message: string;
  token: string;
};
export type IGetInformationSuccesResponse = {
  id: number;
  email: string;
  name: string;
};
