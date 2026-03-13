import Link from "next/link"
import { ButtonHTMLAttributes } from "react"

type ButtonProps = {
  variant?: "common" | "small" | "medium" | "large"
  href?: string
  children: React.ReactNode
} & ButtonHTMLAttributes<HTMLButtonElement>

export function Button({
  variant = "common",
  href,
  children,
  ...props
}: ButtonProps) {

  const base =
    "px-4 py-2 font-medium inline-block rounded-lg flex items-center justify-center"

  const variants = {
    common: "bg-gray-400 text-white hover:bg-gray-600 transition",
    small: "text-xs bg-gray-400 text-white hover:bg-gray-600 transition",
    medium: "text-sm bg-gray-400 text-white hover:bg-gray-600 transition",
    large: "text-lg px-3 py-1 bg-gray-400 text-white hover:bg-gray-600 transition"
  }

  const className = `${base} ${variants[variant]}`

  if (href) {
    return (
      <Link href={href} className={className}>
        {children}
      </Link>
    )
  }

  return (
    <button className={className} {...props}>
      {children}
    </button>
  )
}