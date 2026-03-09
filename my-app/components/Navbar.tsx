import Link from "next/link";

export function Navbar() {
  return (
    <nav className="flex gap-6 bg-gray-200 p-4">
      <Link href="/" className="font-medium hover:text-blue-600">Home</Link>
      <Link href="/subjects" className="font-medium hover:text-blue-600">Subjects</Link>
      <Link href="/login" className="font-medium hover:text-blue-600">Login</Link>
    </nav>
  );
}