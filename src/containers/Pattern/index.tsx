import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '@hooks/redux_typed_hooks'
import { fetchSlides, setSlideImage } from '@store/slices/project'
import { selectSlides } from '@store/selectors'
import { Button } from '@components/Button'
import { Carousel } from '@components/Carousel'
import { Slide } from '@components/Slide'
import book from '@images/book-double-arrow.svg'
import './Pattern.css'

const Pattern = () => {
  const dispatch = useAppDispatch()
  const slides = useAppSelector(selectSlides)

  useEffect(() => {
    dispatch(fetchSlides())
  }, [])

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.stopPropagation()
    event.preventDefault()
    const ImageId = event.dataTransfer.getData('ImageId')
    dispatch(setSlideImage(ImageId))
    event.dataTransfer.clearData()
  }

  const onDragEnter = (event: React.DragEvent<HTMLDivElement>) => {
    event.stopPropagation()
    event.preventDefault()
  }
  const onDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.stopPropagation()
    event.preventDefault()
  }
  return (
    <div className="pattern">
      <div className="pattern__header">
        <Button className="btn-icon">
          <span className="icon-book">
            <img src={book} alt="book icon" />
          </span>
        </Button>
      </div>
      <div
        className="parent__body"
        onDrop={handleDrop}
        onDragEnter={onDragEnter}
        onDragOver={onDragOver}>
        <Carousel>
          {slides.map((slide, i) => (
            <Slide key={i} {...slide}></Slide>
          ))}
        </Carousel>
      </div>
    </div>
  )
}

export { Pattern }
