import { MainPageContent } from '@/components/entities/mainPageContent/mainPageContent'
import { FilterComponent } from '@/components/filterComponent/filterComponent'
import { BooksActions, getBooksAdapter, getBooksError, getBooksIsLoading, getCategory, getHasMore, getPageNum, getSort } from '@/entities/fetchAllBooks'
import { initFetchingBooks } from '@/entities/fetchAllBooks/model/services/initFetchingBooks'
import { useAppDispatch } from '@/providers/store-provider'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'

export const Home = () => {

  const isLoading = useSelector(getBooksIsLoading)
  const error = useSelector(getBooksError)
  const booksData = useSelector(getBooksAdapter.selectAll)
  const categoryType = useSelector(getCategory)
  const sortBy = useSelector(getSort)
  const pageNum = useSelector(getPageNum)
  const hasMore = useSelector(getHasMore)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(initFetchingBooks())
    dispatch(BooksActions.setInited(true))
  }, [dispatch])

  return (
    <div className="wrapper">
      <div className='parent'>
        <div className="header">
          <div className="header-wrapper"></div>
          <div className="container">
            <FilterComponent
              categorySelectValue={categoryType}
              sortSelectValue={sortBy}
            />
          </div>
        </div>
        <MainPageContent
          booksData={booksData}
          error={error}
          isLoading={isLoading}
          pageNum={pageNum}
          hasMore={hasMore}
        />

      </div>
    </div>
  )
}
