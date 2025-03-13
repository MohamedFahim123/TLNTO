import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { MainRegion } from "./utils/mainData";

export default async function Home() {
  const cookieStore = await cookies();
  const region: string = cookieStore.get("region")?.value || MainRegion;

  redirect(`/${region}/jobs/home`);
}
