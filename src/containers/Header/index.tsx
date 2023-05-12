import { ButtonAddToCart } from '@components/ButtonAddToCart'
import { HeaderMenu } from '@components/HeaderMenu'
import './Header.css'

const Header = () => {
  return (
    <div className="header">
      <div className="project">
        <div className="project__name">Мой проект</div>
        <div className="project__size">Размер: 400x280 мм (В развороте)</div>
      </div>
      <ButtonAddToCart />
      <HeaderMenu />
    </div>
  )
}

export { Header }
