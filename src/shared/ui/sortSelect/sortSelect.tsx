import { SortKinds } from '@/entities/fetchAllBooks'
import { Select } from '../select/select'

interface CategorySelectProps {
  value?: string
  onChange: (value: string) => void
  label: string
}

const options = [
  { value: SortKinds.NEWEST, content: SortKinds.NEWEST },
  { value: SortKinds.RELEVANCE, content: SortKinds.RELEVANCE },
]

export const SortSelect = ({ value, onChange, label }: CategorySelectProps) => {
  return (
    <Select
      label={label}
      options={options}
      value={value}
      onChange={onChange}
    />
  )
}
