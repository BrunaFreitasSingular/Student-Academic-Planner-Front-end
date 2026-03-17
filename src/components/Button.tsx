import { ButtonHTMLAttributes } from "react"

type ButtonProps = {
  variant?: "primary" | "secondary" | "textButton"
  href?: string
  children: React.ReactNode
} & ButtonHTMLAttributes<HTMLButtonElement>

export function Button({
  variant = "primary",
  children,
  ...props
}: ButtonProps) {

  const base =
    "px-4 py-2 font-medium inline-block rounded-lg flex items-center justify-center"

  const variants = {
    primary: "text-sm bg-gray-400 text-white hover:bg-gray-600 transition", 
    secondary: "text-xs bg-gray-400 text-white hover:bg-gray-600 transition",
    textButton: "text-xs bg-gray-400 text-white hover:bg-gray-600 transition"
  }

  const className = `${base} ${variants[variant]}`

  return (
    <button className={className} {...props}>
      {children}
    </button>
  )
}
