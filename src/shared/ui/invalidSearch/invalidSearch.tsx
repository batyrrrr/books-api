import InvalSearch from '@/assets/not-found.jpg'
import './invalidSearch.css'

export const InvalidSearch = () => {
  return (
    <div className='invalid-search'>
      <img src={InvalSearch} alt="image" />
    </div>
  )
}
