import { baseUrl } from "@/app/utils/mainData";
import { URLSINTERFACE } from "./interface";

export const AuthUrls: URLSINTERFACE = {
  companyLogin: `${baseUrl}/auth/company/login`,
  userLogin: `${baseUrl}/auth/user/login`,
  companyRegister: `${baseUrl}/auth/company/register`,
  userRegister: `${baseUrl}/auth/user/register`,
};
