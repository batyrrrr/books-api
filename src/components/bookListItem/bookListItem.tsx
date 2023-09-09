import { Book } from '@/entities/fetchAllBooks'
import { useNavigate } from 'react-router-dom'
import './blockListItem.css'

interface BookListItemProps {
  book: Book
}

export const BookListItem = ({ book }: BookListItemProps) => {

  const navigate = useNavigate(

  )
  const category = <p className='block-category'>{book?.volumeInfo?.categories?.[0]}</p>

  const image = book?.volumeInfo?.imageLinks?.thumbnail
    ? <img
      alt='image'
      src={book?.volumeInfo?.imageLinks?.thumbnail}
    />
    : <div className='not-image' />

  const authors = book?.volumeInfo?.authors?.slice(0, 4).map((author) => (
    <p key={author} className='block-author'>{author}</p>
  ))

  const title = <p className='block-title'>{book?.volumeInfo?.title}</p>

  return (
    <div
      onClick={() => navigate(`/${book?.id}`)}
      className='bookListItem'>
      <div className="bookListItemImage">
        {image}
      </div>
      <span>
        {category}
      </span>
      <div className='item-content'>
        <span>
          {title}
          {authors}
        </span>
      </div>

    </div>
  )
}

