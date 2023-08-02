import type { StoryObj, Meta } from '@storybook/react'

import { Tooltip, TooltipProps } from '@murilo-ui/react'

export default {
  title: 'Surfaces/Tooltip',
  component: Tooltip,
  args: {
    day: 5,
    date: '22 de outubro',
    isAvailable: true,
    disabled: false,
  },
  argTypes: {
    disabled: {
      control: {
        type: 'boolean',
      },
    },
  },
} as Meta<TooltipProps>

export const Available: StoryObj<TooltipProps> = {}

export const NotAvailable: StoryObj<TooltipProps> = {
  args: {
    isAvailable: false,
    disabled: true,
  },
}
