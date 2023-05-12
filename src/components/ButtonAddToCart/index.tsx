import { useModal } from '@hooks/useModal'
import { Modal } from '@components/Modal'
import { Button } from '@components/Button'
import './ButtonAddToCart.css'

const ButtonAddToCart = () => {
  const [isShowingModal, toggleModal] = useModal()

  const addToCart = () => {
    /** dispatch('addToCart) */
    toggleModal()
  }

  return (
    <>
      <Button className="btn btn-primary add-to-cart" onClick={addToCart}>
        В корзину
      </Button>
      <Modal show={isShowingModal} onCloseButtonClick={toggleModal}>
        {{
          header: <h3 className="modal-title">Добавление в корзину</h3>,
          body: <h4>Продукт успешно добавлен в корзину</h4>,
          footer: (
            <Button className="btn btn-primary">Перейти в корзину</Button>
          ),
        }}
      </Modal>
    </>
  )
}

export { ButtonAddToCart }
