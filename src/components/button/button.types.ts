import { MouseEvent } from 'react'

export interface ButtonProps {
  type?: 'submit' | 'button'
  disabled?: boolean
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void
}
