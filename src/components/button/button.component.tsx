import { FC } from 'react'
import { ButtonProps } from './button.types'
import styled from './button.module.scss'

export const Button: FC<ButtonProps> = ({ children, ...buttonProps }) => {
  return (
    <button className={styled.button} {...buttonProps}>
      {children}
    </button>
  )
}
