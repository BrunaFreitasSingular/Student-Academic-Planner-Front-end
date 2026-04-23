import { ButtonHTMLAttributes } from "react";

type ButtonProps = {
  variant?:
    | "primary"
    | "secondary"
    | "tertiary"
    | "quaternary"
    | "textButton"
    | "form";
  href?: string;
  children: React.ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({
  variant = "primary",
  children,
  ...props
}: ButtonProps) {
  const variants = {
    primary:
      "text-sm px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition",
    secondary:
      "text-sm px-3 py-1.5 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition",
    tertiary:
      "text-xs px-3 py-1.5 border border-gray-200 text-gray-500 rounded-lg hover:bg-gray-50 transition",
    quaternary:
      "text-xs px-2 py-1 border border-gray-200 text-gray-400 rounded-lg hover:bg-gray-50 transition",
    textButton: "text-xs text-gray-500 hover:text-gray-800 transition",
    form: "w-full py-2 text-sm font-medium rounded-lg border border-gray-200 text-gray-700 hover:bg-gray-50 transition disabled:opacity-50",
  };

  return (
    <button
      className={`font-medium inline-flex items-center justify-center ${variants[variant]}`}
      {...props}
    >
      {children}
    </button>
  );
}
