import Link from "next/link";

type ButtonProps = {
  variant?: "common" | "login";
  href: string;
  children: React.ReactNode;
};

export function Button({ variant = "common", href, children, ...props }: ButtonProps) {

  const base = "px-4 py-2 font-medium inline-block rounded-lg flex items-center justify-center";

  const variants = {
    common: "bg-blue-600 text-white hover:bg-blue-700 transition",
    login: "bg-gray-400 text-white hover:bg-gray-500 transition"
  };

  return (
    <Link href={href} className={`${base} ${variants[variant]}`} {...props}>
      {children}
    </Link>
  );
}