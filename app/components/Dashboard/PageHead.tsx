import Head from "next/head";
import Link from "next/link";

function PageHead({ headTitle }: { headTitle: string }) {
  return (
    <>
      <Head>
        <title>{headTitle ? headTitle : "Tlnto"}</title>
        <Link rel="shortcut icon" href="/assets/imgs/template/favicon.svg" />
        <Link rel="preconnect" href="https://fonts.bunny.net" />
        <Link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </Head>
    </>
  );
}

export default PageHead;
