import { HtmlHTMLAttributes, useCallback } from 'react'
import classnames from 'classnames'
import { setSlideImage } from '@store/slices/project'
import { useAppDispatch } from '@hooks/redux_typed_hooks'
import './InstrumentGalleryCard.css'

const Card = ({
  className,
  children,
  ImageId,
  ...rest
}: HtmlHTMLAttributes<HTMLDivElement> & { ImageId?: string }) => {
  const dispatch = useAppDispatch()
  const handleCardClick = useCallback(() => {
    if (ImageId) {
      dispatch(setSlideImage(ImageId))
    }
  }, [ImageId])

  const handleDragStart = (event: React.DragEvent<HTMLDivElement>) => {
    if (ImageId) {
      event.dataTransfer.setData('ImageId', ImageId)
    }
  }

  return (
    <div
      className={classnames('gallery-card', className)}
      onClick={handleCardClick}
      onDragStart={handleDragStart}
      {...rest}>
      {children}
    </div>
  )
}

export { Card }
