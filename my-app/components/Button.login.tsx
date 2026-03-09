import Link from "next/link";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
};

export function ButtonLogin({ href, children }: ButtonProps) {
  return (
    <Link href={href} className="flex items-center justify-center px-4 bg-gray-400 text-white py-2 rounded hover:bg-gray-500 transition">
      {children}
    </Link>
  );
}