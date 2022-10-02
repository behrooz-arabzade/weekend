import type { NextPage } from "next";
import { useRouter } from "next/router";

const Home: NextPage = () => {
  const authorized = Boolean(localStorage.getItem("token"))
  const router = useRouter();

  if (!authorized) {
    router.push("/login")
    return null
  }

  router.push("/feed")
  return null;
};

export default Home;
