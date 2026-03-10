import Link from "next/link";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
};

export function Button({ href, children }: ButtonProps) {
  return (
    <Link href={href} className="inline-block rounded-lg bg-blue-600 px-4 py-2 text-white font-medium hover:bg-blue-700 transition">
      {children}
    </Link>
  );
}