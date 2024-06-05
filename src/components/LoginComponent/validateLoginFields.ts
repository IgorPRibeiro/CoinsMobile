import * as yup from "yup";

export const schema = yup
  .object({
    email: yup
      .string()
      .email("Insira um e-mail valido!")
      .required("Insira o seu e-mail!"),
    password: yup.string().required("Informe a senha"),
  })
  .required();
