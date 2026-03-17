import Link from "next/link"
import { ButtonHTMLAttributes } from "react"

type LinkProps = {
  variant?: "primary" | "secondary"
  href: string
  children: React.ReactNode
} & ButtonHTMLAttributes<HTMLButtonElement>

export function LinkComponet({
    variant = "primary",
    href,
    children
}:LinkProps){
    const base = "px-4 py-2 font-medium inline-block rounded-lg flex items-center justify-center"

    const variants = {
        primary: "text-xs bg-gray-400 text-white hover:bg-gray-600 transition",
        secondary: "font-medium hover:underline"
    }

    const className = `${base} ${variants[variant]}`

    return (
      <Link href={href} className={className}>
        {children}
      </Link>
    )
}