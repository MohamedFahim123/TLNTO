import { baseUrl } from "@/app/utils/mainData";
import { DashboardUrlsInterface } from "./interfaces";

export const DashboardUrls: DashboardUrlsInterface = {
  myJobs: `${baseUrl}/company/my-jobs`,
  postJob: `${baseUrl}/company/add-job`,
};
