import type { StoryObj, Meta } from '@storybook/react'

import { Toast, ToastProps } from '@murilo-ui/react'

export default {
  title: 'Form/Toast',
  component: Toast,

  args: {
    title: 'Agendamento realizado',
    description: 'Quarta-feira, 23 de Outubro às 16h',
  },
} as Meta<ToastProps>

export const Primary: StoryObj<ToastProps> = {}
