import "../styles/globals.css";

import "ui/ui-base-styles.css";

import type { AppProps } from "next/app";
import { store, Provider } from "redux-utils";

const MyApp = ({ Component, ...rest }: AppProps) => {
  return (
    <Provider store={store}>
      <Component {...rest} />
    </Provider>
  );
};

export default MyApp;
