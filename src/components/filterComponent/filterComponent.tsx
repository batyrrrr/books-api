import { useCallback, KeyboardEvent, } from 'react'
import { BiSearch } from 'react-icons/bi'
import './filters.css'
import { BooksActions, CategoryKinds, SortKinds, fetchAllBooks, getSearch } from '@/entities/fetchAllBooks'
import { useSelector } from 'react-redux'
import { useAppDispatch } from '@/providers/store-provider'
import { useDebounce } from '@/hooks/useDebounce'
import { CategorySelect } from '@/shared/ui/categorySelect/categorySelect'
import { Input } from '@/shared/ui/input/input'
import { SortSelect } from '@/shared/ui/sortSelect/sortSelect'

interface FilterComponentProps {
  categorySelectValue: CategoryKinds
  sortSelectValue: SortKinds
}

export const FilterComponent = ({ categorySelectValue, sortSelectValue }: FilterComponentProps) => {



  const search = useSelector(getSearch)
  const dispatch = useAppDispatch()

  const ReFetchBooks = useCallback(() => {
    dispatch(fetchAllBooks({ replace: true }))
  }, [dispatch])

  const debouncedFetchData = useDebounce(ReFetchBooks, 500);

  const onChangeCategory = useCallback((value: string) => {
    dispatch(BooksActions.setCategory(value as CategoryKinds))
    debouncedFetchData()
  }, [dispatch, debouncedFetchData])

  const onChangeSort = useCallback((value: string) => {
    dispatch(BooksActions.setSort(value as SortKinds))
    debouncedFetchData()
  }, [dispatch, debouncedFetchData])

  const onChangeSearch = useCallback((value: string) => {
    dispatch(BooksActions.setSearch(value))
  }, [dispatch])

  const handleSearch = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      dispatch(BooksActions.setStartIndex(0))
      ReFetchBooks()
    }
  }
  const handleButtonSearch = () => {
    if (search.length) {
      ReFetchBooks()
    }
  }

  return (
    <div className='filters'>
      <h1 className='searchTitle'>Search for books</h1>
      <div className="search-wrapper">
        {/* input */}
        <Input
          value={search}
          onChange={onChangeSearch}
          onKeyDown={handleSearch}
        />
        <div
          onClick={handleButtonSearch}
          className='search-icon'>
          <BiSearch />
        </div>
      </div>
      <div className="sort">

        <CategorySelect
          label='Categories'
          value={categorySelectValue}
          onChange={onChangeCategory} />
        <SortSelect
          label='Sorting by'
          value={sortSelectValue} onChange={onChangeSort} />
      </div>

    </div>
  )
}
