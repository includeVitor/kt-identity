import { FormElement } from "@nextui-org/react";
import jwtDecode from "jwt-decode";
import Router from "next/router";
import { destroyCookie, setCookie } from "nookies";
import { ChangeEvent } from "react";
import api from "../service";
import { AppRoutes, COOKIE_NAME, JWTDefault } from "./types";

const handleChange = (e: ChangeEvent<FormElement>, setState: Function) => {
  const input = e.target;
  setState((prev: any) => ({ ...prev, [input.name]: input.value }));
};

const sign_in = (access_token: string) => {
  setCookie(null, COOKIE_NAME, access_token, {
    maxAge: 30 * 24 * 60 * 60,
    path: "/",
  });

  api.defaults.headers.common.Authorization! = `Bearer ${access_token}`;
};

const sign_out = () => {
  destroyCookie(null, COOKIE_NAME, {
    path: "/",
  });

  api.defaults.headers.common.Authorization = "";

  Router.push(AppRoutes.HomePage);
};

const getDataByToken = (token: string) => {
  const decodedToken = jwtDecode<JWTDefault>(token);
  const exp = decodedToken.exp;
  const sub = decodedToken.sub;

  return { exp, sub };
};
export { handleChange, sign_in, sign_out, getDataByToken };
