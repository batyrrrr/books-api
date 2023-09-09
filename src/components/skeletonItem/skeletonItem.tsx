import './skeletonItem.css'
import { Skeleton } from '../skeleton/skeleton'

export const SkeletonItem = () => {
  return (
    <div className='item'>
      <div className="content">
        <div className="image">
          <Skeleton width={150} height={200} />
        </div>
        <div className='cateogry'>
          <Skeleton width={70} height={15} />
        </div>
        <div className='text'>
          <Skeleton width={150} height={40} />
        </div>
        <div className="author">
          <Skeleton width={50} height={15} />
        </div>
      </div>
    </div>
  )
}
