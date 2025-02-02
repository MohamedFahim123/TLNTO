import { baseUrl } from "@/app/utils/mainData";
import { URLSINTERFACE } from "./interface";

export const AuthUrls: URLSINTERFACE = {
  companyLogin: `${baseUrl}/company/login`,
  userLogin: `${baseUrl}/user/login`,
  companyRegister: `${baseUrl}/company/register`,
  userRegister: `${baseUrl}/user/register`,
};
