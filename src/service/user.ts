import API from './api'

interface ILoginParams {
  email: string;
  passowrd: string
}

export async function login({email,passowrd}:ILoginParams) {
  return await API.get(`/users?email=${email}&passowrd=${passowrd}`)
}