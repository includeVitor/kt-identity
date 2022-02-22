import { ReactNode } from "react";
import { Main } from "./styles";

type PublicLayoutProps = {
  children: ReactNode;
};

export const PublicLayout = ({ children }: PublicLayoutProps) => {
  return <Main>{children}</Main>;
};
