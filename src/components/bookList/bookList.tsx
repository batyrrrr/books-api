import { Book } from '@/entities/fetchAllBooks'
import { BookListItem } from '../bookListItem/bookListItem'
import { SkeletonItem } from '../skeletonItem/skeletonItem'
import { TriggerFetchNext } from '../triggerFetchNext/triggerFetchNext'

interface BookListProps {
  books?: Book[]
  isLoading?: boolean
  pageNum: number
  hasMore?: boolean
}

export const BookList = ({ books, isLoading, pageNum, hasMore }: BookListProps) => {
  return (
    <>
      <div className='bookList'>
        {books?.map((book) => (
          <BookListItem key={book.id} book={book} />
        ))}
        {/* skeletons */}
        {isLoading && new Array(pageNum).fill(0).map((index) => (
          <SkeletonItem key={index} />
        ))}
        {hasMore && <TriggerFetchNext />}

      </div>
    </>
  )
}
