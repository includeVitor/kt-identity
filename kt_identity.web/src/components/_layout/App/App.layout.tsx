import { Button, Link } from "@nextui-org/react";
import { ReactNode } from "react";
import { AppRoutes } from "../../../lib/types";
import { sign_out } from "../../../lib/utils";
import { logoutRequest } from "../../../service/auth";
import { Main } from "./styles";

type AppLayoutProps = {
  children?: ReactNode;
};

export const AppLayout = ({ children }: AppLayoutProps) => {
  const handleOnClick = async () => {
    await logoutRequest();
    sign_out();
  };

  return (
    <Main>
      <h3>kt_identity app</h3>
      <ul>
        <li>
          <Link href={AppRoutes.AppHomePage}>Home</Link>
        </li>
        <li>
          <Link href={AppRoutes.AppAnimalsPage}>Animals</Link>
        </li>
        <li>
          <Link href={AppRoutes.AppGamersPage}>Gamers</Link>
        </li>
        <li>
          <Link href={AppRoutes.AppCountriesPage}>Countries</Link>
        </li>
        <li>
          <Button size={"xs"} onClick={handleOnClick}>
            Logout
          </Button>
        </li>
      </ul>
      {children}
    </Main>
  );
};
