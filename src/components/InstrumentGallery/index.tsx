import React, { useState } from 'react'
import { useEffect, useRef } from 'react'
import { useAppDispatch, useAppSelector } from '@hooks/redux_typed_hooks'
import classnames from 'classnames'
import { Button } from '@components/Button'
import { Card } from '@components/InstrumentGalleryCard'
import { fetchImages, removeImages, saveImage } from '@store/slices/project'
import { selectGallery } from '@store/selectors'
import './InstrumentGallery.css'
import minIcon from '@images/minimize.png'
import expandIcon from '@images/expand.png'

const InstrumentGallery = () => {
  const inputRef = useRef<HTMLInputElement>(null)
  const [isFullDisplayMode, setDisplayMode] = useState(false)
  const dispatch = useAppDispatch()
  const { images } = useAppSelector(selectGallery)

  useEffect(() => {
    dispatch(fetchImages())
  }, [])

  const uploadImage = () => {
    if (inputRef.current != null) {
      inputRef.current.click()
    }
  }

  const handleImagaUpload = () => {
    const reader = new FileReader()
    const input = inputRef.current
    const file = input?.files?.[0]
    if (file) {
      reader.onloadend = () => {
        // convert file to base64 String
        const result = reader.result as string
        if (reader.result) {
          const base64String = result.replace('data:', '').replace(/^.+,/, '')
          dispatch(saveImage(base64String))
        }
      }
      reader.readAsDataURL(file)
    }
  }

  const CardList = React.memo(function CardList() {
    return (
      <div className="gallery__content">
        <Card className="gallery__add-image" onClick={uploadImage}>
          Добавить фотографию
          <input
            type="file"
            accept="image/*"
            onChange={handleImagaUpload}
            ref={inputRef}
          />
        </Card>
        {Object.entries(images).map(([id, str]) => (
          <Card
            key={id}
            ImageId={id}
            draggable={true}
            style={{ backgroundImage: `url(data:image/png;base64,${str})` }}
          />
        ))}
      </div>
    )
  })

  const handleImageRemove = () => dispatch(removeImages())
  const handleDisplayMode = () => setDisplayMode(!isFullDisplayMode)

  return (
    <div
      className={classnames('instrument-gallery', {
        'full-mode': isFullDisplayMode,
      })}>
      <div className="gallery">
        <Button className="btn full-size-button" onClick={handleDisplayMode}>
          <span className="icon icon-full-mode">
            <img
              src={isFullDisplayMode ? minIcon : expandIcon}
              alt="mode icon"
            />
          </span>
          {isFullDisplayMode ? 'Свернуть' : 'Развернуть'}
        </Button>
        <div className="gallery__panel">
          <Button className="btn btn-secondary" onClick={handleImageRemove}>
            <span className="icon icon-clear">&#215;</span>Очистить
          </Button>
          <Button className="btn btn-secondary">
            <span className="icon icon-select"></span>Выбрать
          </Button>
        </div>
        <CardList />
      </div>
    </div>
  )
}

export default InstrumentGallery
