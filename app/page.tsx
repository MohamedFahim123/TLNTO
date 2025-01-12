import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function Home() {
  const cookieStore = await cookies();
  const region: string | undefined = cookieStore.get('region')?.value;

  if (region) {
    return redirect(`/${region}`);
  } else {
    const headers = new Headers();
    headers.append('Set-Cookie', `region=riyadh; Path=/; Max-Age=${60 * 60}; Secure; HttpOnly`);
    return redirect(`/riyadh`);
  };
};