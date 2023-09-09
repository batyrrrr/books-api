import { ReactNode, HtmlHTMLAttributes } from 'react'
import './button.css'

export enum ButtonTheme {
  OUTLINED = 'outlined',
}
interface ButtonProps extends HtmlHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  theme?: ButtonTheme
  className?: string
}

export const Button = ({ children, theme, className, ...otherProps }: ButtonProps) => {
  return (
    <button
      {...otherProps}
      className={`button ${theme} ${className}`}
    >
      {children}
    </button>
  )
}
