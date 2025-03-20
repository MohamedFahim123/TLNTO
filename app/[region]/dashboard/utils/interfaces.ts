export interface PostAJobForm {
  title: string;
  location: string;
  salary: string;
  description: string;
  work_place_type_id: string;
  employment_type_id: string;
  tags: string[];
  country_id: string;
  city_id: string;
  year_exp_id: string;
  currency_id: string;
  category_id: string;
  sub_category_id: string;
}
export interface DashboardUrlsInterface {
  myJobs: string;
  postJob: string;
}

export interface UserProfileForm {
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  bio: string;
  country_id: string;
  city_id: string;
  exp: string;
  image: File;
}
export interface CompanyProfileSettingsForm {
  name: string;
  email: string;
  phone: string;
  country_id: string;
  city_id: string;
  industry_id: string;
  logo: File;
}
