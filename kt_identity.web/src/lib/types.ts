import type { NextPage } from "next";
import { ReactNode } from "react";

type AppNextPage = {
  Layout?: ({ children }: { children: ReactNode }) => JSX.Element;
} & NextPage;

type JWTDefault = {
  exp: number;
  sub: string;
};

enum AppRoutes {
  HomePage = "/",
  register = "/register",
  AppHomePage = "home",
  AppAnimalsPage = "animals",
  AppGamersPage = "gamers",
  AppCountriesPage = "countries",
  AppForbiddenPage = "forbidden",
}

const COOKIE_NAME = "userToken";

export { AppRoutes, COOKIE_NAME };
export type { AppNextPage, JWTDefault };
