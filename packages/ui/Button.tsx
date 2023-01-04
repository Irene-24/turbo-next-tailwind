import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";

type Props = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

export const Button = ({ className = "", children, ...props }: Props) => {
  return (
    <button
      className={`rounded-sm bg-slate-500 p-3 font-medium text-white ${className}`}
      {...props}
    >
      {children ? children : "Boop"}
    </button>
  );
};
