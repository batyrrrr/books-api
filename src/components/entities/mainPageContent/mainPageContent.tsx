import { BookList } from '@/components/bookList/bookList'
import { Book, } from '@/entities/fetchAllBooks'
import { InvalidSearch } from '@/shared/ui/invalidSearch/invalidSearch'
import { Loader } from '@/shared/ui/loader/loader'

interface MainPageContentProps {
  error?: string
  booksData: Book[]
  isLoading?: boolean
  pageNum: number
  hasMore?: boolean
}

export const MainPageContent = (props: MainPageContentProps) => {
  const {
    booksData,
    pageNum,
    error,
    isLoading,
    hasMore
  } = props
  const result = booksData?.length

  if (isLoading) {
    return (
      <div className="container">
        <h1><Loader /></h1>
        <BookList
          pageNum={pageNum}
          books={booksData}
          isLoading={isLoading} />
      </div>
    )
  }
  if (error) {
    return (
      <h1>{error}</h1>
    )
  }

  if (booksData.length === 0) {
    return (
      <InvalidSearch />
    )
  }

  return (
    <div className="container">
      <h1>Найдено книг:{result}</h1>
      <BookList
        pageNum={pageNum}
        books={booksData}
        hasMore={hasMore}
      />

    </div>
  )
}
