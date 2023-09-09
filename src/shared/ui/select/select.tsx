
import { useMemo, ChangeEvent } from 'react';
import './select.css'

export interface SelectOption {
  value: string
  content: string
}

interface SelectProps {
  label?: string
  options?: SelectOption[]
  value?: string
  readonly?: boolean
  onChange?: (value: string) => void
}


export const Select = ({ label, value, onChange, options }: SelectProps) => {

  const optionsList = useMemo(() => {
    return options?.map((opt) => (
      <option key={opt.value} value={opt.value}>{opt.content}</option>
    ))
  }, [options])

  const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    if (onChange) {
      onChange(e.target.value)
    }
  }

  return (
    <div className='select-wrapper'>
      {label && (
        <p className='select-label'>
          {label}
        </p>
      )}
      <select

        className='select-root'
        value={value}
        onChange={onChangeHandler}
      >
        {optionsList}
      </select>
    </div>

  )
}
