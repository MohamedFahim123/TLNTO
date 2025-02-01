export interface PostAJobForm {
  title: string;
  location: string;
  work_place_type_id: string;
  employment_type_id: string;
  salary: string;
  description: string;
  tags: string[];
}
export interface DashboardUrlsInterface {
  myJobs: string;
  postJob: string;
}
