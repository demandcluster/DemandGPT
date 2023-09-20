import { Analytics } from "@vercel/analytics/react";

import { Home } from "./components/home";

import { getServerSideConfig } from "./config/server";

const serverConfig = getServerSideConfig();

export default async function App() {
  return (
    <>
      {/* <Home /> */}
      大佬们过两天再来吧，账号没钱了，新买的出了点问题，需要处理。上班没时间弄。。
      {serverConfig?.isVercel && <Analytics />}
    </>
  );
}
