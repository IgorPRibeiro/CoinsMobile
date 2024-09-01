import { IDataLogin } from "@/components/LoginComponent/LoginComponent";
import { login } from "@/service/user";
import { router } from "expo-router";
import { MMKV } from "react-native-mmkv";
const storage = new MMKV();

export function useAuth() {
  const loginUser = async (data: IDataLogin) => {
    try {
      let response = await login({
        email: data.email,
        passowrd: data.password,
      });

      if (response.data) {
        let token = response.data.token;

        storage.set("token", token);
        // setUser({
        //   balance: response.data[0].balance,
        //   email: response.data[0].email,
        //   name: response.data[0].name,
        //   password: response.data[0].password,
        // });
        router.push("(tabs)");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return {
    loginUser,
  };
}
