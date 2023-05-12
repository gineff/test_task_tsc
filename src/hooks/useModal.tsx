import { useState } from 'react'

const useModal = (): [isShowing: boolean, toggleModal: () => void] => {
  const [isShowing, setIsShowing] = useState(false)
  const toggleModal = (): void => {
    setIsShowing(!isShowing)
  }
  return [isShowing, toggleModal]
}
export { useModal }
