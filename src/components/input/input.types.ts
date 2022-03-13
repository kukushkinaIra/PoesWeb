import { ChangeEvent, HTMLInputTypeAttribute } from 'react'

export interface InputProps {
  name?: string
  type?: HTMLInputTypeAttribute
  step?: string
  value?: string
  label?: string
  required?: boolean
  className?: string
  placeholder?: string
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void
}
