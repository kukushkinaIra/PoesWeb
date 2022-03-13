import { FC } from 'react'
import { InputProps } from './input.types'
import styled from './input.module.scss'

export const Input: FC<InputProps> = ({ label, required, ...inputProps }) => {
  return (
    <div className={styled.container}>
      {label && (
        <span className={styled.label}>
          {label} {required && <span className={styled.required}>*</span>}
        </span>
      )}
      <input className={styled.input} {...inputProps} />
    </div>
  )
}
