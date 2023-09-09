import { bookDetailsData, bookDetailsError, bookDetailsIsLoading, fetchBookDetails } from '@/entities/bookDetails'
import { useAppDispatch } from '@/providers/store-provider'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import './article-details.css'
import { ArticleDetailsSkeleton } from './article-details-skeleton'

export const ArticleDetails = () => {

  const { id } = useParams<{ id: string }>()
  const dispatch = useAppDispatch()
  const data = useSelector(bookDetailsData)
  const isLoading = useSelector(bookDetailsIsLoading)
  const error = useSelector(bookDetailsError)

  useEffect(() => {
    if (id) {
      dispatch(fetchBookDetails(id))
    }
  }, [dispatch, id])

  if (isLoading) {
    return (
      <ArticleDetailsSkeleton />
    )
  }

  if (error) {
    <h1>{error}</h1>
  }

  return (
    <div className='book-details-wrapper'>
      <div className="container">
        <Link className='details-link' to='/'>Назад к списку</Link>
        <div className='book-details'>
          <div className="left">
            <div className='details-image'>
              <img src={data?.volumeInfo?.imageLinks?.thumbnail} alt="" />
            </div>
          </div>
          <div className='details-content'>
            <p className='category' >{data?.volumeInfo?.categories?.[0]}</p>
            <p className='title'> {data?.volumeInfo?.title}</p>
            {data?.volumeInfo?.authors?.map((author) => (
              <span>
                <p key={author} className='author'>{author}</p>
              </span>
            ))}
            <p className='desc'>
              {data?.volumeInfo?.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
