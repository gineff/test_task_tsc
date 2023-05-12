import { useState, useEffect } from 'react'
import './Carousel.css'
import { useAppDispatch, useAppSelector } from '@hooks/redux_typed_hooks'
import { setSlideIndex } from '@store/slices/project'
import { selectSlideIndex } from '@store/selectors'

const Carousel = ({ children }: { children: React.ReactNode[] }) => {
  const [length, setLength] = useState<number>(children?.length)
  const dispatch = useAppDispatch()
  const slideIndex = useAppSelector(selectSlideIndex)

  useEffect(() => {
    setLength(children.length)
  }, [children])

  const next = () => {
    if (slideIndex < length - 1) {
      dispatch(setSlideIndex(slideIndex + 1))
    }
  }

  const prev = () => {
    if (slideIndex > 0) {
      dispatch(setSlideIndex(slideIndex - 1))
    }
  }

  return (
    <div className="carousel-container">
      <div className="carousel-wrapper">
        <div className="carousel-content-wrapper">
          <div
            className="carousel-content"
            style={{ transform: `translateX(-${slideIndex * 100}%)` }}>
            {children}
          </div>
        </div>
        <div className="carousel-control">
          {slideIndex > 0 && (
            <button onClick={prev} className="left-arrow">
              &lt;
            </button>
          )}
          <span className="carousel-page">Страница {slideIndex + 1}</span>
          {slideIndex < length - 1 && (
            <button onClick={next} className="right-arrow">
              &gt;
            </button>
          )}
        </div>
      </div>
    </div>
  )
}

export { Carousel }
