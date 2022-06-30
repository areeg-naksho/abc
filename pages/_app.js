import Head from "next/head";
import "../styles/globals.css";

import HeaderLayout from "../components/web/HeaderLayout";
import UserProvider from "../components/UserProvider";

function MyApp({ router, Component, pageProps }) {
  const showHeader = router.pathname === "/admin" ? false : true;
  return (
    <>
      <Head>
        <title>Artisan Website</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0"
        />
        <meta name="author" content="Ampersand" />
        <meta name="description" content="Artisan Website" />
      </Head>

      <UserProvider>
        {showHeader && <HeaderLayout current={router.pathname} />}
        <Component {...pageProps} />
      </UserProvider>
    </>
  );
}

export default MyApp;
