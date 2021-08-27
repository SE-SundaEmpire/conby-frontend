import Head from "next/head";
import { useEffect } from "react";

export default function Logout() {
  useEffect(() => {
    window.localStorage.removeItem("accessToken");
    window.location = "/login-user";
  });

  return (
    <Head>
      <title>Logging out...</title>
    </Head>
  );
}
