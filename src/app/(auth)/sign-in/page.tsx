import { redirect } from "next/navigation";

import { getCurrent } from "@/features/auth/actions";
import { SignInCard } from "@/features/auth/components/sign-in-cards";

const SignInPage = async () => {
  const user = await getCurrent();

  if (user) redirect("/");

  return <SignInCard />;
};

export default SignInPage;
