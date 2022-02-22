import type { NextPage } from "next";
import { ReactNode } from "react";

type AppNextPage = {
  Layout?: ({ children }: { children: ReactNode }) => JSX.Element;
} & NextPage;

enum AppRoutes {
  login = "/",
  register = "/register",
}

export { AppRoutes };
export type { AppNextPage };
