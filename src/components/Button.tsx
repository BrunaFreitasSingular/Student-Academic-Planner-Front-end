import { ButtonHTMLAttributes } from "react"

type ButtonProps = {
  variant?: "primary" | "secondary" | "tertiary" | "quaternary" | "textButton" 
  href?: string
  children: React.ReactNode
} & ButtonHTMLAttributes<HTMLButtonElement>

export function Button({
  variant = "primary",
  children,
  ...props
}: ButtonProps) {

  const base =
    "px-2 py-1 font-medium inline-block rounded-lg flex items-center justify-center"

  const variants = {
    primary: "text-sm bg-gray-400 text-white hover:bg-gray-600 transition", 
    secondary: "bg-gray-300 px-3 py-0.5 rounded-lg hover:bg-gray-600 ",
    tertiary: "bg-gray-300 px-3 py-0.5 rounded-lg hover:bg-gray-500",  //editar mainContent
    quaternary: "bg-gray-300 px-0.5 py-0.5 rounded-lg hover:bg-gray-500", //editar asideContent
    textButton: "text-xs bg-gray-400 text-white hover:bg-gray-600 transition"
  }

  const className = `${base} ${variants[variant]}`

  return (
    <button className={className} {...props}>
      {children}
    </button>
  )
}
