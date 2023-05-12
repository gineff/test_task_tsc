import ReactDOM from 'react-dom'
import './Modal.css'
import { useEffect, useRef } from 'react'

interface ModalProps {
  show: boolean
  onCloseButtonClick: () => void
  children?: {
    header?: React.ReactNode
    body?: React.ReactNode
    footer?: React.ReactNode
  }
}

const Modal: React.FC<ModalProps> = ({
  show,
  onCloseButtonClick,
  children = {},
}) => {
  const wrapperRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClick = () => onCloseButtonClick()

    const wrapper = wrapperRef.current

    if (wrapper) {
      wrapper.addEventListener('click', handleClick)
    }

    return () => {
      if (wrapper) {
        wrapper.removeEventListener('click', handleClick)
      }
    }
  }, [wrapperRef, onCloseButtonClick])

  if (!show || !document) {
    return null
  }

  return ReactDOM.createPortal(
    <div className="modal__wrapper" ref={wrapperRef}>
      <div className="modal">
        <div className="modal__header">
          <button className="header__btn-close" onClick={onCloseButtonClick}>
            <span className="close-icon">🞨</span>
          </button>
          {children.header}
        </div>
        <div className="modal__body">{children.body}</div>
        <div className="modal__footer">{children.footer}</div>
      </div>
    </div>,
    document.getElementById('root') as HTMLElement
  )
}

export { Modal }
