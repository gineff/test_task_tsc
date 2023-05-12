import { Button } from '@components/Button'
import './GalleryPannel.css'

const GalleryPannel = () => {
  return (
    <div className="gallery-pannel">
      <Button className="btn-secondary">Очистить</Button>
      <Button className="btn-secondary">Выбрать</Button>
    </div>
  )
}

export { GalleryPannel }
