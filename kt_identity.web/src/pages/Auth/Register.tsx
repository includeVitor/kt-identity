import { Loading } from "@nextui-org/react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { PublicLayout } from "../../components/_layout/Public";
import { AppNextPage } from "../../lib/types";
import { confirmEmailRequest } from "../../service/auth";

const ConfirmEmailPage: AppNextPage = () => {
  var [message, setMessage] = useState("");
  const route = useRouter();

  const handleOnLoad = async (userId: string, token: string) => {
    setMessage(await confirmEmailRequest(userId, token));
  };

  useEffect(() => {
    if (route.isReady) {
      const { userId, token } = route.query;
      handleOnLoad(userId as string, token as string);
    }
  }, [route]);

  if (!message) return <Loading>Loading...</Loading>;

  return <>{message}</>;
};

ConfirmEmailPage.Layout = PublicLayout;

export default ConfirmEmailPage;
