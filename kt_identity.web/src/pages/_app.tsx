import { NextUIProvider } from "@nextui-org/react";
import type { AppProps } from "next/app";
import { ReactNode } from "react";

const EmptyLayout = ({ children }: { children: ReactNode }) => <>{children}</>;

const App = ({ Component, pageProps }: AppProps) => {
  const Layout = (Component as any).Layout || EmptyLayout;
  return (
    <NextUIProvider>
      <Layout pageProps={pageProps}>
        <Component {...pageProps} />
      </Layout>
    </NextUIProvider>
  );
};

export default App;
