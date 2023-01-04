export interface Config {
  number: number | string;
  decimalAmount?: number;
  decimalMark?: string;
  delimiter?: string;
}

export const formatNumber = ({
  number = 0,
  decimalAmount = 2,
  decimalMark = ".",
  delimiter = ",",
}: Config): string => {
  if (decimalAmount >= Number.MAX_SAFE_INTEGER) {
    decimalAmount = 0;
    const numberParts = number.toString().split(".");
    if (numberParts[1]) {
      decimalAmount = numberParts[1].length;
    }
  }

  const numToFormat = Number(number);

  if (
    isNaN(numToFormat) ||
    Math.abs(Number(number)) >= Number.MAX_SAFE_INTEGER
  ) {
    throw new Error("Number is not valid.");
  }

  let minusSign = "";
  if (numToFormat < 0) {
    minusSign = "-";
  }

  const absoluteAmountString = Math.abs(numToFormat).toFixed(decimalAmount);

  const integerString = parseInt(absoluteAmountString, 10).toString();

  //Get part before decimal poiny, seperated by delimiter
  const integerPart = integerString.replace(
    /(.)(?=(\d{3})+$)/g,
    `$1${delimiter}`
  );

  let fractionalPart = "";
  if (decimalAmount) {
    const decimalNumbers =
      Number(absoluteAmountString) - parseInt(absoluteAmountString, 10);

    fractionalPart = `${decimalMark}${decimalNumbers
      .toFixed(decimalAmount)
      .slice(2)}`;
  }

  return `${minusSign}${integerPart}${fractionalPart}`;
};

export const formatOrdinal = (num: number, digits: number) => {
  const lookup = [
    { value: 1, symbol: "" },
    { value: 1e3, symbol: "K" },
    { value: 1e6, symbol: "M" },
    { value: 1e9, symbol: "G" },
    { value: 1e12, symbol: "T" },
    { value: 1e15, symbol: "P" },
    { value: 1e18, symbol: "E" },
  ];

  const rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
  const item = lookup
    .slice()
    .reverse()
    .find((item) => {
      return num >= item.value;
    });
  return item
    ? (num / item.value).toFixed(digits).replace(rx, "$1") + item.symbol
    : "0";
};
