import {
  IGetInformationSuccesResponse,
  ILoginParams,
  ILoginSuccesResponse,
} from "@/@types/login";
import API from "./api";
import { AxiosResponse } from "axios";

export async function login(
  params: ILoginParams
): Promise<AxiosResponse<ILoginSuccesResponse>> {
  let response: AxiosResponse<ILoginSuccesResponse> = await API.post(
    `/users/login`,
    params
  );
  return response;
}

export async function getUserInformation(): Promise<
  AxiosResponse<IGetInformationSuccesResponse>
> {
  let response: AxiosResponse<IGetInformationSuccesResponse> = await API.get(
    `/users/`
  );
  return response;
}
