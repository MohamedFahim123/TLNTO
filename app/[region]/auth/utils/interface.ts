export interface CompanyRegisterFrom {
  name: string;
  email: string;
  phone: string;
  country_id: string;
  city_id: string;
  industry_id: string;
  commercial_certification: File;
  official_registeration: File;
  password: string;
  password_confirmation: string;
}

export interface UserRegisterFormInputs {
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  password: string;
  password_confirmation: string;
}

export interface CompanyAndUserLoginForm {
  email: string;
  password: string;
}

export interface URLSINTERFACE {
  companyLogin: string;
  userLogin: string;
  companyRegister: string;
  userRegister: string;
}
