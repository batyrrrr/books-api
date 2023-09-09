import { BooksActions, fetchAllBooks, getPageNum, getStartIndex } from '@/entities/fetchAllBooks'
import { useAppDispatch } from '@/providers/store-provider'
import { Button } from '@/shared/ui/button/button'
import { useSelector } from 'react-redux'
import './triggerFetchNext.css'


export const TriggerFetchNext = () => {
  const dispatch = useAppDispatch()
  const page = useSelector(getPageNum)
  const startIndex = useSelector(getStartIndex)

  const fetchNextPage = () => {
    dispatch(BooksActions.setPage(30))
    dispatch(BooksActions.setStartIndex(startIndex + page))
    dispatch(fetchAllBooks({}))
  }

  return (
    <div className='fetchWrapper'>
      <Button
        onClick={fetchNextPage}
        className='fetchNextButton'
      >
        Далее
      </Button>
    </div>

  )
}
