import { CategoryKinds } from '@/entities/fetchAllBooks'
import { Select } from '../select/select'

interface CategorySelectProps {
  value?: string
  onChange: (value: string) => void
  label: string
}

const options = [
  { value: CategoryKinds.ALL, content: CategoryKinds.ALL },
  { value: CategoryKinds.ART, content: CategoryKinds.ART },
  { value: CategoryKinds.BIOGRAPHY, content: CategoryKinds.BIOGRAPHY },
  { value: CategoryKinds.COMPUTERS, content: CategoryKinds.COMPUTERS },
  { value: CategoryKinds.HISTORY, content: CategoryKinds.HISTORY },
  { value: CategoryKinds.POETRY, content: CategoryKinds.POETRY },
]

export const CategorySelect = ({ value, onChange, label }: CategorySelectProps) => {
  return (
    <Select
      label={label}
      options={options}
      value={value}
      onChange={onChange}
    />
  )
}
