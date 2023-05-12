import { FC, HTMLAttributes } from 'react'
import './Button.css'

type ButtonProps = HTMLAttributes<HTMLButtonElement>

const Button: FC<ButtonProps> = ({ children: content, ...rest }) => {
  return <button {...rest}>{content}</button>
}

export { Button }
