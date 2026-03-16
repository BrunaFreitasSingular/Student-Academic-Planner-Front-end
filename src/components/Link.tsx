import Link from "next/link"
import { ButtonHTMLAttributes } from "react"

type LinkProps = {
  variant?: "button"
  href: string
  children: React.ReactNode
} & ButtonHTMLAttributes<HTMLButtonElement>

export function LinkComponet({
    variant = "button",
    href,
    children
}:LinkProps){
    const base = "px-4 py-2 font-medium inline-block rounded-lg flex items-center justify-center"

    const variants = {
        button: "text-xs bg-gray-400 text-white hover:bg-gray-600 transition"
    }

    const className = `${base} ${variants[variant]}`

    return (
      <Link href={href} className={className}>
        {children}
      </Link>
    )
}