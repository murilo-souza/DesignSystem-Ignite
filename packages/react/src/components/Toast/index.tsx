import * as ToastRadix from '@radix-ui/react-toast'
import {
  ToastAction,
  ToastContainer,
  ToastDescription,
  ToastTitle,
} from './styles'
import { X } from 'phosphor-react'

import { useState } from 'react'

export interface ToastProps {
  title: string
  description: string
}

export function Toast({ title, description }: ToastProps) {
  const [open, setOpen] = useState(false)

  return (
    <ToastRadix.Provider swipeDirection="right">
      <button
        onClick={() => {
          setOpen(true)
        }}
      >
        Abrir Toast
      </button>
      <ToastContainer onOpenChange={setOpen} open={open}>
        <div>
          <ToastTitle>{title}</ToastTitle>
          <ToastDescription>{description}</ToastDescription>
        </div>
        <ToastAction asChild altText="close">
          <X size={20} color="#FFF" />
        </ToastAction>
      </ToastContainer>
      <ToastRadix.Viewport />
    </ToastRadix.Provider>
  )
}
