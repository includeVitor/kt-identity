import { ReactNode } from "react";
import { Main } from "./styles";

type PublicLayout = {
  children: ReactNode;
};

export const PublicLayout = ({ children }: PublicLayout) => {
  return <Main>{children}</Main>;
};
