import "../styles/globals.css";

import "ui/ui-base-styles.css";

import type { AppProps } from "next/app";

const MyApp = ({ Component, ...rest }: AppProps) => {
  return <Component {...rest} />;
};

export default MyApp;
