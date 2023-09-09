import { CSSProperties } from 'react'
import './skeleton.css'

interface SkeletonProps {
  width?: string | number
  height?: string | number
  border?: string
  className?: string
}

export const Skeleton = (props: SkeletonProps) => {
  const { width, height, border } = props

  const styles: CSSProperties = {
    width,
    height,
    borderRadius: border
  }

  return (
    <div className='skeleton' style={styles} />
  )
}
