import './Slide.css'
import { Image } from '@components/Image'
import type { Slide as SlideType } from '@constants/project'

const Slide = ({ image, template, background }: SlideType) => {
  return (
    <div className="slide">
      <div className="slide__frame"></div>
      <div
        className="slide__content"
        style={{
          backgroundColor: background ? background : '#FFF',
          backgroundImage: template ? `url(${template})` : 'none',
        }}>
        <div className="slide__image-wrapper">
          <div className="slide__image">
            <Image id={image} />
          </div>
        </div>
      </div>
    </div>
  )
}

export { Slide }
