import { baseUrl } from "@/app/utils/mainData";
import { DashboardUrlsInterface } from "./interfaces";

export const DashboardUrls: DashboardUrlsInterface = {
  myJobs: `${baseUrl}/dashboard/my-jobs`,
  postJob: `${baseUrl}/dashboard/post-job`,
};
