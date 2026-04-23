import Link from "next/link";
import { ButtonHTMLAttributes } from "react";

type LinkProps = {
  variant?: "primary" | "secondary";
  href: string;
  children: React.ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export function LinkComponet({
  variant = "primary",
  href,
  children,
}: LinkProps) {
  const variants = {
    primary:
      "text-xs px-3 py-1.5 bg-gray-100 text-gray-700 hover:bg-gray-200 transition rounded-lg inline-flex items-center",
    secondary:
      "text-sm text-gray-500 hover:text-gray-900 transition px-3 py-1.5 rounded-lg hover:bg-gray-50 inline-flex items-center",
  };

  return (
    <Link href={href} className={variants[variant]}>
      {children}
    </Link>
  );
}
