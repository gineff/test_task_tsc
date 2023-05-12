import './Slide.css'
import { useModal } from '@hooks/useModal'
import { Modal } from '@components/Modal'
import { Image } from '@components/Image'
import type { Slide as SlideType } from '@constants/project'
import { Button } from '@components/Button'

const Slide = ({ image, template, background }: SlideType) => {
  const [isShowingModal, toggleModal] = useModal()
  const handleClick = () => {
    toggleModal()
  }

  return (
    <>
      <div className="slide">
        <div className="slide__frame"></div>
        <div
          className="slide__content"
          style={{
            backgroundColor: background ? background : '#FFF',
            backgroundImage: template ? `url(${template})` : 'none',
          }}>
          <div className="slide__image-wrapper">
            <div className="slide__image" onClick={handleClick}>
              <Image id={image} />
            </div>
          </div>
        </div>
      </div>
      <Modal show={isShowingModal} onCloseButtonClick={toggleModal}>
        {{
          body: <Image id={image} style={{ maxWidth: '300px' }} />,
          footer: <Button className="btn btn-primary">Закрыть</Button>,
        }}
      </Modal>
    </>
  )
}

export { Slide }
