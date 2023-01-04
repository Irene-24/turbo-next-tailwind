import React, { useCallback } from "react";

import { formatNumber, Config as Props } from "./formatNumber";

interface Config extends Props {
  asCurrency?: boolean;
  prefix?: string;
}

const defaultConfig = {
  asCurrency: true,
  number: 0,
  decimalAmount: 2,
  decimalMark: ".",
  delimiter: ",",
  prefix: "", //custom currency or other one-off symbol
};

let defaultSymbol = "₦";

const useNumFormatter = () => {
  const format = useCallback((config: Config) => {
    const formatConfig = { ...defaultConfig, ...config };

    const currency = defaultSymbol; //get via state e.g redux for dynamic currency;

    return `${
      formatConfig.asCurrency ? currency : formatConfig.prefix
    }${formatNumber(formatConfig)}`;
  }, []);

  return { format, currency: defaultSymbol };
};

export { formatNumber, useNumFormatter };
