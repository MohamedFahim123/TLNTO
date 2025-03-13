export interface PostAJobForm {
  title: string;
  location: string;
  work_place_type_id: string;
  employment_type_id: string;
  salary: string;
  description: string;
  tags: string[];
  currency_id: string;
  exp_level_id: string;
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
