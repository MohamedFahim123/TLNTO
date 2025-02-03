import { MainRegion } from "@/app/utils/mainData";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const HomeDefault = async () => {
  const cookiesdata = await cookies();
  const region: string = cookiesdata.get("region")?.value || MainRegion;
  redirect(`/${region}/jobs/home`);
};

export default HomeDefault;
