import { InputHTMLAttributes } from 'react'
import './input.css'

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>

interface InputProps extends HTMLInputProps {
  value?: string | number
  onChange?: (value: string) => void
}


export const Input = ({ value, onChange, ...otherProps }: InputProps) => {

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value)
  }

  return (
    <input
      {...otherProps}
      className='search'
      value={value}
      onChange={onChangeHandler}
    />
  )
}
