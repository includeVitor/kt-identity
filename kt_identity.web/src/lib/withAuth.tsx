import { parseCookies } from "nookies";
import { ComponentType, ReactNode, useEffect, useState } from "react";
import { COOKIE_NAME } from "./types";
import { getDataByToken, sign_in, sign_out } from "./utils";

const Noop = ({ children }: { children: ReactNode }): JSX.Element => (
  <>{children}</>
);

export const withAuth = (
  Component: ComponentType
): ((props: any) => JSX.Element | boolean | null) => {
  const Layout = (Component as any).Layout || Noop;
  return (props: any) => {
    if (typeof window !== "undefined") {
      const [mounted, setMounted] = useState(false);
      const { [COOKIE_NAME]: token } = parseCookies();

      console.log(token);
      if (!token) {
        sign_out();
        return null;
      }

      const { exp, sub } = getDataByToken(token);

      if (exp * 1000 < Date.now()) {
        sign_out();
        return null;
      }

      sign_in(token);

      useEffect(() => {
        setMounted(true);
        return () => setMounted(false);
      }, []);

      return (
        mounted && (
          <Layout>
            <Component {...props} />
          </Layout>
        )
      );
    }

    return null;
  };
};
