import { SkeletonItem } from '../skeletonItem/skeletonItem'
import './skeletonList.css'


export const GetSkeletonList = () => {
  return (
    <div className='skeleton-list' >
      {new Array(8).fill(0).map((index) => (
        <SkeletonItem key={index} />
      ))}

    </div>
  )


}
