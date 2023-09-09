import { Skeleton } from '@/components/skeleton/skeleton'
import './article-details.css'
export const ArticleDetailsSkeleton = () => {

  return (
    <div className=''>
      <div className="container">
        <div className='book-details'>
          <div className="details-image">
            <Skeleton width={300} height={300} />
          </div>
          <div className='details-content'>
            <Skeleton width='' height={100} />
            <Skeleton width='30%' height={15} />
            <Skeleton width='50%' height={150} />
            <Skeleton width='20%' height={15} />
            <Skeleton width='20%' height={15} />
          </div>
        </div>
      </div>
    </div>
  )
}
